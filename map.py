from bokeh.plotting import figure, show, output_file, ColumnDataSource
from bokeh.tile_providers import CARTODBPOSITRON
from bokeh.resources import CDN
from bokeh.embed import autoload_static
from geopy.geocoders import Nominatim
import pandas as pd
import math
import numpy as np


def coordinatesToMercator(country):
	location = geolocator.geocode(country) 
	x = r_major * math.radians(location.longitude)
	scale = x/location.longitude
	y = 180.0/math.pi * math.log(math.tan(math.pi/4.0 + location.latitude * (math.pi/180.0)/2.0)) * scale
	return x, y

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

x_coordinates = np.array([])
y_coordinates = np.array([])
corresponding_countries = np.array([])
means = np.array([])
markets = np.array([])


#
# TODO: Calculation of mean price and display this
#
# Creation of arrays from dataframe
country_list = list(set(priceDf['country'].tolist()))
geolocator = Nominatim()
r_major = 6378137.000
for country in country_list:
	print("Check1")
	countryDf = priceDf.query('country == "{}"'.format(country))
	print("check2")
	market_list = list(set(priceDf['market'].tolist()))
	for market in market_list:
		mean = calcMean(countryDf, 'market == "{}"'.format(market))
		if not np.isnan(mean):
			print("Building")
			rawlocation = ("{} {}".format(country, market))
			print(rawlocation) 
			rawlocation = str(rawlocation)
			#try:
			x, y = coordinatesToMercator(rawlocation)
			x_coordinates = np.append(x_coordinates, x)
			y_coordinates = np.append(y_coordinates, y)
			corresponding_countries = np.append(corresponding_countries, country)
			means = np.append(means, mean)
			markets = np.append(markets, market)
		#except:
			print("location determination failed")


# Declaration of the source of the data
source = ColumnDataSource(data=dict(
	x_coordinate = x_coordinates,
	y_coordinate = y_coordinates,
	country = corresponding_countries,
	mean = means,
	market = markets,
	))


# Declaration of what is shown in the tooltips
TOOLTIPS=[
    ("Country", "@country"),
    ("mean", "@mean"),
    ("market", "@market"),
]

# range bounds supplied in web mercator coordinates
p = figure(x_range=(-6000000, 6000000), y_range=(-1000000, 7000000),
           x_axis_type="mercator", y_axis_type="mercator", tooltips=TOOLTIPS)
p.add_tile(CARTODBPOSITRON)

p.circle('x_coordinate', 'y_coordinate', size = 20, source=source, color="#FB8072", fill_alpha=0.2)


#
# Code for transferring it for a webpage
#
js, tag = autoload_static(p, CDN, "components/mapplot.js")

with open("components/mapplot.js", "w+") as f:
	f.write(js)

print(tag)
show(p)