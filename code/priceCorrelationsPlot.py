from bokeh.plotting import figure, show
from bokeh.embed import autoload_static
from bokeh.resources import CDN
from bokeh.models import Select, Title
import pandas as pd
import datetime as dt
from bokeh.models.widgets import Panel, Tabs
from bokeh.models.glyphs import MultiLine
from bokeh.palettes import Category10
import ast

def plotCorrelation(df, combinationSelection, minimumCountries, minimumSmv):
    plot = figure(title="St", x_axis_type="datetime", plot_width=1000, plot_height=1000)
    plot.grid.grid_line_color = 'Grey'
    plot.background_fill_color = '#eeeeee'
    combinations = loadCombinations(minimumCountries, minimumSmv, combinationSelection)
    tabList = []
    for combination in combinations:
        plot = plotCombination(df, combination)
        # add extra titles with add_layout(...)
        plot.add_layout(Title(text="The average spearhead correlation is " + "{0:.2f}".format(combination[3]) + ", taking the mean over " + str(combination[4]) + " countries", align="center"), "below")
        tab = Panel(child=plot, title=str(combination[0]) + ' and ' + str(combination[1]) + ', smv: ' + "{0:.2f}".format(combination[3]) + ", countries: " + str(combination[4]))
        tabList.append(tab)
    tabs = Tabs(tabs=tabList)
    return tabs

def loadCombinations(minimumCountries, minimumSpearHeadValue, combinationSelection):
    comboDf = pd.read_csv("data/product_correlations_monthly_minimal_3yrs.csv")
    combinations = []
    for row in comboDf.itertuples():
        nCountries = row[4]
        spearMan = row[2]
        if nCountries >= minimumCountries and abs(spearMan) >= minimumSpearHeadValue:
            products = row[1]
            products = ast.literal_eval(products)
            if (products[0], products[1]) in combinationSelection:

                countries = row[3]
                countries = ast.literal_eval(countries)

                combination = (products[0], products[1], countries, spearMan, nCountries)
                combinations.append(combination)
    return combinations

def plotCombination(df, combination):
    # this palette only works if there are no more than 10 countries in a plot
    # it works with a minimumSpearHeadValue of 0.6
    palette = Category10[10] * 2
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
        priceDateLists1 = findProductPriceLists(df, product1, country)
        pricesProduct1 = priceDateLists1[0]
        datesProduct1 = priceDateLists1[1]
        product1Name = str(product1) + ', ' + str(country)
        plot.line(datesProduct1, pricesProduct1, line_color = palette[i], line_dash = 'solid', line_width = 1.2, legend = product1Name)
        priceDateLists2 = findProductPriceLists(df, product2, country)
        pricesProduct2 = priceDateLists2[0]
        datesProduct2 = priceDateLists2[1]
        product2Name = str(product2) + ', ' + str(country)
        plot.line(datesProduct2, pricesProduct2, line_color = palette[i], line_dash = 'dashed', line_width = 1.8, legend = product2Name)
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

# Third selection
#combinationSelection3 = [('Eggs', 'Sweet potatoes'), ('Oil (vegetable)', 'Meat (pork)'), ('Fish (fresh)', 'Garlic'),
#        ('Cassava flour', 'Rice (imported, Tanzanian)'), ('Beans (red)',  'Cassava (dry)'), ('Garlic', 'Onions (white)')]
#tabs3 = plotCorrelation(priceDf, combinationSelection3, 2, 0.6)
#js3, tag3 = autoload_static(tabs3, CDN, "components/priceCorrelationsPlot3.js")

# the javascript code is written to a file, in this case components/testplot.js
#with open("components/priceCorrelationsPlot3.js", "w+") as f:
#    f.write(js3)

#place this tag where the plot should be on a page
# for now, just copy paste it from the terminal
# IMPORTANT: if this code is ran again, the tag needs to be replaced
#print("Tag 3: ")
#print(tag3)


# First selection
#combinationSelection1 = [('Maize (white)', 'Maize (yellow)'), ('Wheat flour (first grade)', 'Wheat flour (high quality)'),
#                ('Meat (chicken)', 'Meat (mutton)'), ('Onions (red)', 'Onions (white)'),
#                ('Livestock (Goat)', 'Livestock (Sheep)')]
#tabs1 = plotCorrelation(priceDf, combinationSelection1, 2, 0.6)
#js, tag = autoload_static(tabs1, CDN, "components/priceCorrelationsPlot1.js")

# the javascript code is written to a file, in this case components/testplot.js
#with open("components/priceCorrelationsPlot1.js", "w+") as f:
#    f.write(js)

#place this tag where the plot should be on a page
# for now, just copy paste it from the terminal
# IMPORTANT: if this code is ran again, the tag needs to be replaced
#print("Tag 1: ")
#print(tag)

# Second selection
#combinationSelection2 = [('Fish (snake head)', 'Fish (catfish)'), ('Sugar (brown)', 'Fish (catfish)'),
                #('Sugar (brown)', 'Fish(snake head)'), ('Rice (coarse)', 'Rice (basmati, broken)'),
                #('Meat (beef, first quality)', 'Meat (buffalo, first quality)')]
#tabs2 = plotCorrelation(priceDf, combinationSelection2, 1, 0.6)
#js2, tag2 = autoload_static(tabs2, CDN, "components/priceCorrelationsPlot2.js")

# the javascript code is written to a file, in this case components/testplot.js
#with open("components/priceCorrelationsPlot2.js", "w+") as f:
#    f.write(js2)

#place this tag where the plot should be on a page
# for now, just copy paste it from the terminal
# IMPORTANT: if this code is ran again, the tag needs to be replaced
#print("Tag 2: ")
#print(tag2)



# top3 selection
combinationSelection = [('Fish (snake head)', 'Fish (catfish)'), ('Sugar (brown)', 'Fish (catfish)')]
tabs = plotCorrelation(priceDf, combinationSelection, 1, 0.6)
js, tag = autoload_static(tabs, CDN, "components/top3Catfish.js")

# the javascript code is written to a file, in this case components/testplot.js
with open("components/top3Catfish.js", "w+") as f:
    f.write(js)

print(tag)
