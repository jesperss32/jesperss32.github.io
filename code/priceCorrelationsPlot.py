from bokeh.plotting import figure, show
from bokeh.embed import autoload_static
from bokeh.resources import CDN
from bokeh.models import Select, Title
import pandas as pd
import datetime as dt
from bokeh.models.widgets import Panel, Tabs
from bokeh.models.glyphs import MultiLine
from bokeh.palettes import Category10

def plotCorrelation(df):
    plot = figure(title="St", x_axis_type="datetime", plot_width=1000)
    plot.grid.grid_line_color = 'Grey'
    plot.background_fill_color = '#eeeeee'
    combinations = [('Wheat flour (first grade)', 'Wheat flour (high quality)', ['Kyrgyzstan', 'Tajikistan'])]
    tabList = []
    for combination in combinations:
        #allLists = plotCombination(df, combination)
        #datesLists = allLists[0]
        #pricesLists = allLists[1]
        #print(len(datesLists))
        #print(len(pricesLists))
        #plot = figure(title="Correlation")
        #palette = Category20[4]
        #plot.multi_line(datesLists, pricesLists, line_color = palette)
        #show(plot)
        plot = plotCombination(df, combination)
        tab = Panel(child=plot, title=str(combination[0]) + ' and ' + str(combination[1]))
        tabList.append(tab)
    tabs = Tabs(tabs=tabList)
    return tabs

def plotCombination(df, combination):

    palette = Category10[10]
    product1 = combination[0]
    product2 = combination[1]
    countries = combination[2]

    # make the title of the plot
    titleCountries = countries[0]
    for country in countries[1:-1]:
        titleCountries = titleCountries + ", " + str(country)
    titleCountries = titleCountries + " and " + str(countries[-1])
    plotTitle = "Price changes of " + str(product1) + " and " + str(product2) + " in " + titleCountries


    plot = figure(title=plotTitle, x_axis_type="datetime", plot_width=1000)
    plot.grid.grid_line_color = 'Grey'
    plot.background_fill_color = '#ffffff'
    plot.xaxis.axis_label = "Years"
    plot.yaxis.axis_label = "Price change"
    plot.axis.major_label_text_color = "darkblue"
    datesLists = []
    pricesLists = []
    for i, country in enumerate(countries):
        # add extra titles with add_layout(...)
        plot.add_layout(Title(text="Spearhead correlation in " + str(country) + ": correlation_value", align="center"), "below")

        priceDateLists1 = findProductPriceLists(df, product1, country)
        pricesProduct1 = priceDateLists1[0]
        datesProduct1 = priceDateLists1[1]
        product1Name = str(product1) + ', ' + str(country)
        plot.line(datesProduct1, pricesProduct1, line_color = palette[i], line_dash = 'solid', line_width = 2, legend = product1Name)
        #datesLists.append(datesProduct1)
        #pricesLists.append(pricesProduct1)
        priceDateLists2 = findProductPriceLists(df, product2, country)
        pricesProduct2 = priceDateLists2[0]
        datesProduct2 = priceDateLists2[1]
        product2Name = str(product2) + ', ' + str(country)
        plot.line(datesProduct2, pricesProduct2, line_color = palette[i], line_dash = 'dashed', line_width = 2, legend = product2Name)
        #datesLists.append(datesProduct2)
        #pricesLists.append(pricesProduct2)
        plot.legend.location = "top_left"
        plot.legend.click_policy="hide"
    return plot

def findProductPriceLists(df, product, country):
    this_product = df.query("country==\"" + country + "\"")
    this_product = this_product.query("_product==\"" + product + "\"")
    this_product = this_product.sort_values(by=['year', 'month'])
    month_means = []
    year_months = []
    for year in this_product.year.unique():
        this_year = this_product.query("year==" + str(year))
        for month in this_year.month.unique():
            this_month = this_year.query("month==" + str(month))
            month_means.append(this_month.price_change.mean())
            year_months.append(dt.datetime(year=year, month=int(month), day=1))
    return [month_means, year_months]


priceDf = pd.read_csv("data/only_complete_years_data_percentages.csv")
tabs = plotCorrelation(priceDf)
js, tag = autoload_static(tabs, CDN, "components/priceCorrelationsPlot.js")
#plot = figure()
#plot.line([0, 1, 2], [0, 1, 2])
#plot.line([0, 1, 2], [0, 2, 4])
#show(plot)
# the javascript code is written to a file, in this case components/testplot.js
with open("components/priceCorrelationsPlot.js", "w+") as f:
    f.write(js)

#place this tag where the plot should be on a page
# for now, just copy paste it from the terminal
# IMPORTANT: if this code is ran again, the tag needs to be replaced
print(tag)
