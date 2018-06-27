from bokeh.embed import autoload_static
import pandas as pd
from bokeh.io import output_file, show, curdoc
from bokeh.resources import CDN
from bokeh.layouts import widgetbox, column
from bokeh.models.widgets import Select
from bokeh.plotting import figure
import numpy as np
#import eda
from bokeh.client import push_session
from operator import itemgetter
from bokeh.models.widgets import Panel, Tabs

from numpy.random import random

def mscatter(p, x, y, marker):
    p.scatter(x, y, marker=marker, size=15,
              line_color="navy", fill_color="orange", alpha=0.5)

def mtext(p, x, y, text):
    p.text(x, y, text=[text],
           text_color="firebrick", text_align="center", text_font_size="10pt")

def getYearMean(df, year):
	df = df.query("year ==" + str(year))
	return df.price.mean()

def getLinkedProduct(product):
	linked_products = pd.read_csv('data/Linked_products.csv', encoding='UTF-8', delimiter=";")
	prod = linked_products.query('price_df_product == \"' + product + '\"')
	return prod.production_df_product.unique()

def findScatterLists(productionDf, priceDf, country, priceProduct):
    # make the figure
    p = figure(title="Relation between price and production", toolbar_location=None)
    p.grid.grid_line_color = 'Black'
    p.background_fill_color = "#eeeeee"

    priceDf = priceDf.query("_product==\"" + str(priceProduct) + "\" &country==\"" +str(country) + "\"")
    productionProducts = getLinkedProduct(priceProduct)

    priceYears = priceDf.year.unique()
    for productionProduct in productionProducts:
        prodPerProdDf = productionDf.query('Item=="' + str(productionProduct) + '"&Area=="'+str(country) + '"')
        productionYears = prodPerProdDf.Year.unique()
        commonYears = list(set(priceYears).intersection(productionYears))
        productions = []
        prices = []
        for year in commonYears:
            yearlyProduction = prodPerProdDf.query('Year=="' + str(year) + '"')
            productions.append(yearlyProduction.iloc[0]['Value'])
            prices.append(getYearMean(priceDf, year))
    return [productions, prices]

def findBestCombinations(minimum):
    availableDataDf = pd.read_csv('data/scatterplotCandidates.csv')
    combinations = list(availableDataDf.itertuples(index=False))
    bestCombinations = []
    for combination in combinations:
    	if combination[1] >= minimum:
    		bestCombinations.append((combination[2], combination[3]))
    return bestCombinations

if __name__ == "__main__":
    linkedProductsDf = pd.read_csv('data/Linked_products.csv', encoding='UTF-8', delimiter=";")
    productionDf = pd.read_csv('data/cleaned_reduced_production.csv')
    priceDf = pd.read_csv('data/firstclean_foodprices_data.csv', encoding='latin-1')
    priceDf.rename(columns={'adm0_id': 'country_ID', 'adm0_name': 'country', 'adm1_id' : 'district_ID', \
	                   'adm1_name' : 'district', 'mkt_id' : 'market_ID', 'mkt_name' : 'market' , \
	                   'cm_id' : 'product_ID','cm_name' : '_product', 'cur_id' : 'currency_ID', \
	                   'cur_name' : 'currency', 'pt_id' : 'sale_ID', 'pt_name' : 'sale', 'um_id' : 'unit_ID', \
	                   'um_name' : 'unit', 'mp_month' : 'month', 'mp_year' : 'year', 'mp_price' : 'price', \
	                   'mp_commoditysource' : 'source'}, inplace=True)
    # minimum number of entries to be selected
    minimum = 20
    combinationSelection = findBestCombinations(minimum)
    tabList = []
    for combination in combinationSelection:
        country = combination[0]
        product = combination[1]
        productionProduct = getLinkedProduct(product)[0]
        p = figure(title='Relation between ' + str(product) + ' price and ' + str(productionProduct) + ' production')
        p.grid.grid_line_color = 'Black'
        p.background_fill_color = "#eeeeee"
        scatterLists = findScatterLists(productionDf, priceDf, country, product)
        productions = scatterLists[0]
        prices = scatterLists[1]
        mscatter(p, productions, prices, "circle")
        tab = Panel(child=p, title=str(country) + '/' + str(product))
        tabList.append(tab)
    tabs = Tabs(tabs=tabList)


    js, tag = autoload_static(tabs, CDN, "components/scatterplot.js")

    #the javascript code is written to a file, in this case components/testplot.js
    with open("components/scatterplot.js", "w+") as f:
        f.write(js)

    #place this tag where the plot should be on a page
    # for now, just copy paste it from the terminal
    # IMPORTANT: if this code is ran again, the tag needs to be replaced
    print(tag)
