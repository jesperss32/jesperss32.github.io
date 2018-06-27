from bokeh.plotting import figure
from bokeh.embed import autoload_static
from bokeh.resources import CDN
from bokeh.models import Select
import pandas as pd
import datetime as dt

def plotProductPrice(df, product, country):
    plot = figure(title=str(product) + ' price in ' + str(country), x_axis_type="datetime")
    plot.grid.grid_line_color = 'Grey'
    plot.background_fill_color = '#eeeeee'
    lists = findProductPriceLists(df, product, country)
    prices = lists[0]
    dates = lists[1]
    plot.line(dates, prices)
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
            month_means.append(this_month.price.mean())
            year_months.append(dt.datetime(year=year, month=int(month), day=1))
    return [month_means, year_months]


priceDf = pd.read_csv("data/only_complete_years_data.csv")

plot = plotProductPrice(priceDf, 'Wheat', 'India')
js, tag = autoload_static(plot, CDN, "components/priceOverTime.js")

#the javascript code is written to a file, in this case components/testplot.js
with open("components/priceOverTime.js", "w+") as f:
    f.write(js)

#place this tag where the plot should be on a page
# for now, just copy paste it from the terminal
# IMPORTANT: if this code is ran again, the tag needs to be replaced
print(tag)
