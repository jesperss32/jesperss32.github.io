from bokeh.plotting import figure, show, output_file, ColumnDataSource
from bokeh.tile_providers import CARTODBPOSITRON
from bokeh.resources import CDN
from bokeh.embed import autoload_static
from geopy.geocoders import Nominatim
import pandas as pd
import math
import numpy as np
from bokeh.palettes import RdYlGn
from bokeh.models import LinearColorMapper, ColorBar, LogTicker
from bokeh.transform import transform
from bokeh.models.widgets import Panel, Tabs

def calcMean(dataFrame, query=None):
	if(query):
		dataFrame = dataFrame.query(query)
	return dataFrame.price_change.mean()

orinpriceDf = pd.read_csv('data/only_complete_years_data_percentages.csv', encoding='latin-1')
orinpriceDf.rename(columns={'adm0_id': 'country_ID', 'adm0_name': 'country', 'adm1_id' : 'district_ID', \
	                   'adm1_name' : 'district', 'mkt_id' : 'market_ID', 'mkt_name' : 'market' , \
	                   'cm_id' : 'product_ID','cm_name' : '_product', 'cur_id' : 'currency_ID', \
	                   'cur_name' : 'currency', 'pt_id' : 'sale_ID', 'pt_name' : 'sale', 'um_id' : 'unit_ID', \
	                   'um_name' : 'unit', 'mp_month' : 'month', 'mp_year' : 'year', 'mp_price' : 'price_change', \
	                   'mp_commoditysource' : 'source'}, inplace=True)

# priceDf = priceDf.head(100)

orinlocationDf = pd.read_csv('marketlocations.csv', encoding='latin-1')

def generatePlot(priceDf, locationDf, year, product):
	x_coordinates = np.array([])
	y_coordinates = np.array([])
	corresponding_countries = np.array([])
	means = np.array([])
	markets = np.array([])
	price_changes = np.array([])

	priceDf = priceDf.query('_product == "{}" & year == "{}"'.format(product, year))
	# & month == "{}" & year == "year"'.format(product, month, year))
	print(priceDf)

	d = {'x_location': [12.123123], 'y_location': [12.32234], 'country': ["testcountry"], 'market': ["testmarket"], 'means': [12.34], 'price_changes': [12.34]}
	informationdf = pd.DataFrame(data=d)
	print(informationdf)
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

					print("x_location")
					x_loc = tempLocDf.iloc[0]['x_location']
					y_loc = tempLocDf.iloc[0]['y_location']

					print(tempLocDf)
					print(x_loc)

					newdata= {'x_location': [x_loc],
						'y_location': [y_loc],
						'country': [country],
						'market': [market],
						'means': [mean],
						"price_changes": [mean]}
					print("this is the new data")
					print(newdata)
					tempdf = pd.DataFrame(data=newdata)
					print("this is the new data in a frame")
					print(tempdf)
					informationdf = informationdf.append(tempdf)




					# x_coordinates = np.append(x_coordinates, tempLocDf.x_location)
					# y_coordinates = np.append(y_coordinates, tempLocDf.y_location)
					# corresponding_countries = np.append(corresponding_countries, country)
					# markets = np.append(markets, market)
					#
					# # Storing datapoint information
					# means = np.append(means, mean)
					# price_change = mean
					# price_changes = np.append(price_changes, price_change)

				except:
					print("location determination failed")
	print(informationdf.head(5))
	informationdf.drop([0])

	# Declaration of the source of the data
	source = ColumnDataSource(data=dict(
		x_coordinate = informationdf.x_location,
		y_coordinate = informationdf.y_location,
		country = informationdf.country,
		mean = informationdf.means,
		market = informationdf.market,
		price_change = informationdf.price_changes
		))

	# Declaration of what is shown in the tooltips
	TOOLTIPS=[
	    ("Country", "@country"),
	    ("market", "@market"),
		("price change", "@price_change"),
	]

	# Initialisation of colors of points
	mapper = LinearColorMapper(palette=RdYlGn[9], low=-0.3, high=0.3)

	# Actual plot Creation
	p = figure(width = 1000, height = 600, x_range=(-12000000, 18000000), y_range=(-4000000, 9000000),
	           x_axis_type="mercator", y_axis_type="mercator", tooltips=TOOLTIPS)
	p.add_tile(CARTODBPOSITRON)
	p.circle('x_coordinate', 'y_coordinate', size = 20, source=source, color=transform('price_change', mapper), fill_alpha=0.4)
	color_bar = ColorBar(color_mapper=mapper,label_standoff=1, border_line_color=None, location=(0,0))
	p.add_layout(color_bar, 'right')
	return p

product = input("Please enter productname: ")

tabbies = []

for year in range(2000, 2017):
	plot = generatePlot(orinpriceDf, orinlocationDf, year, product)
	tab = Panel(child=plot, title=str(year))
	print(tab)
	tabbies.append(tab)
print(tabbies)
tabs = Tabs(tabs=tabbies)

filepath = "components/mapplot{}.js".format(product)

#
# Code for transferring it for a webpage
#
js, tag = autoload_static(tabs, CDN, filepath)

with open(filepath, "w+") as f:
	f.write(js)

print(tag)
show(tabs)
