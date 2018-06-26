from bokeh.plotting import figure, show, output_file, ColumnDataSource
from bokeh.tile_providers import CARTODBPOSITRON
from bokeh.resources import CDN
from bokeh.embed import autoload_static
from geopy.geocoders import Nominatim
import pandas as pd
import math
import numpy as np
from bokeh.palettes import Viridis256
from bokeh.models.mappers import LinearColorMapper
from bokeh.transform import transform

def calcMean(dataFrame, query=None):
	if(query):
		dataFrame = dataFrame.query(query)
	return dataFrame.price_change.mean()

priceDf = pd.read_csv('data/only_complete_years_data_percentages.csv', encoding='latin-1')
priceDf.rename(columns={'adm0_id': 'country_ID', 'adm0_name': 'country', 'adm1_id' : 'district_ID', \
	                   'adm1_name' : 'district', 'mkt_id' : 'market_ID', 'mkt_name' : 'market' , \
	                   'cm_id' : 'product_ID','cm_name' : '_product', 'cur_id' : 'currency_ID', \
	                   'cur_name' : 'currency', 'pt_id' : 'sale_ID', 'pt_name' : 'sale', 'um_id' : 'unit_ID', \
	                   'um_name' : 'unit', 'mp_month' : 'month', 'mp_year' : 'year', 'mp_price' : 'price_change', \
	                   'mp_commoditysource' : 'source'}, inplace=True)

# priceDf = priceDf.head(100)

locationDf = pd.read_csv('marketlocations.csv', encoding='latin-1')

x_coordinates = np.array([])
y_coordinates = np.array([])
corresponding_countries = np.array([])
means = np.array([])
markets = np.array([])
price_changes = np.array([])

# year = "2010"
# month = "01"
product = "Wheat"

priceDf = priceDf.query('_product == "{}"'.format(product))
# & month == "{}" & year == "year"'.format(product, month, year))
print(priceDf)


# Creation of arrays from dataframe
country_list = list(set(priceDf['country'].tolist()))
for country in country_list:
	countryDf = priceDf.query('country == "{}"'.format(country))
	market_list = list(set(priceDf['market'].tolist()))
	for market in market_list:
		mean = calcMean(countryDf, 'market == "{}"'.format(market))
		if not np.isnan(mean):
			try:
				# Storing Location Information
				tempLocDf = locationDf.query('country == "{}" & market == "{}"'.format(country, market))
				x_coordinates = np.append(x_coordinates, tempLocDf.x_location)
				y_coordinates = np.append(y_coordinates, tempLocDf.y_location)
				corresponding_countries = np.append(corresponding_countries, country)
				markets = np.append(markets, market)

				# Storing datapoint information
				means = np.append(means, mean)
				price_change = mean
				price_changes = np.append(price_changes, price_change)

			except:
				print("location determination failed")


# Declaration of the source of the data
source = ColumnDataSource(data=dict(
	x_coordinate = x_coordinates,
	y_coordinate = y_coordinates,
	country = corresponding_countries,
	mean = means,
	market = markets,
	price_change = price_changes
	))


# Declaration of what is shown in the tooltips
TOOLTIPS=[
    ("Country", "@country"),
    ("mean", "@mean"),
    ("market", "@market"),
	("price change", "@price_change"),
]


mapper = LinearColorMapper(palette=Viridis256, low=-0.2, high=0.2)
#colors= {'field': price_changes, 'transform': color_mapper}

# range bounds supplied in web mercator coordinates
p = figure(x_range=(-6000000, 6000000), y_range=(-1000000, 7000000),
           x_axis_type="mercator", y_axis_type="mercator", tooltips=TOOLTIPS)
p.add_tile(CARTODBPOSITRON)


p.circle('x_coordinate', 'y_coordinate', size = 20, source=source, color=transform('price_change', mapper), fill_alpha=0.2)


#
# Code for transferring it for a webpage
#
js, tag = autoload_static(p, CDN, "components/mapplot.js")

with open("components/mapplot.js", "w+") as f:
	f.write(js)

print(tag)
show(p)
