from bokeh.plotting import figure
from bokeh.embed import autoload_static
from bokeh.resources import CDN
from bokeh.models import Select
import pandas as pd
import datetime as dt
from bokeh.layouts import column
from bokeh.models import CustomJS, ColumnDataSource, Slider
from bokeh.plotting import Figure, output_file, show

# pandas and numpy for data manipulation
import pandas as pd
import numpy as np

from bokeh.plotting import figure
from bokeh.models import (CategoricalColorMapper, HoverTool,
						  ColumnDataSource, Panel,
						  FuncTickFormatter, SingleIntervalTicker, LinearAxis)
from bokeh.models.widgets import (CheckboxGroup, Slider, RangeSlider,
								  Tabs, CheckboxButtonGroup,
								  TableColumn, DataTable, Select)
from bokeh.layouts import column, row, WidgetBox
from bokeh.palettes import Category20_16

# Make plot with histogram and return tab
def priceOverTimeTab(priceDf):

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


    # Function to make a dataset for histogram based on a list of carriers
    # a minimum delay, maximum delay, and histogram bin width
    def make_dataset(products_list, country, df):

        # Dataframe to hold information
        by_product = pd.DataFrame(columns=['proportion',
                                           'f_proportion',
                                           'product', 'date',  'color'])

        # Iterate through all the carriers
        for i, product in enumerate(products_list):

            # Subset to the carrier
            lists = findProductPriceLists(df, product, country)
            prices = lists[0]
            dates = lists[1]

            # Divide the counts by the total to get a proportion
            arr_df = pd.DataFrame({'proportion': prices / np.mean(prices)})
            arr_df['date'] = dates
            # Format the proportion
            arr_df['f_proportion'] = ['%0.5f' % proportion for proportion in arr_df['proportion']]

            # Assign the carrier for labels
            arr_df['product'] = product

            # Color each carrier differently
            arr_df['color'] = Category20_16[i]

            # Add to the overall dataframe
            by_product = by_product.append(arr_df)

        # Overall dataframe
        by_product = by_product.sort_values(['product', 'date'])

        return ColumnDataSource(by_product)

    def style(p):
    	# Title
    	p.title.align = 'center'
    	p.title.text_font_size = '20pt'
    	p.title.text_font = 'serif'

    	# Axis titles
    	p.xaxis.axis_label_text_font_size = '14pt'
    	p.xaxis.axis_label_text_font_style = 'bold'
    	p.yaxis.axis_label_text_font_size = '14pt'
    	p.yaxis.axis_label_text_font_style = 'bold'

    	# Tick labels
    	p.xaxis.major_label_text_font_size = '12pt'
    	p.yaxis.major_label_text_font_size = '12pt'

    	return p

    def make_plot(src):
    	# Blank plot with correct labels
    	p = figure(plot_width = 700, plot_height = 700,
    			  title = 'Price of products in a country over time',
    			  x_axis_label = 'Time', y_axis_label = 'Price proportional to the mean',
                  x_axis_type="datetime")

    	# Quad glyphs to create a histogram
    	p.line(source = src, x = 'date', y = 'proportion',
    		   color = 'color', legend = 'product', line_color = 'black')

    	# Hover tool with vline mode
    	hover = HoverTool(tooltips=[('Product', '@product'),
    								('Proportion', '@f_proportion')],
    					  mode='vline')

    	p.add_tools(hover)

    	# Styling
    	p = style(p)

    	return p



    def update(attr, old, new):
    	products_to_plot = [products_selection.labels[i] for i in products_selection.active]

    	new_src = make_dataset(products_to_plot, 'India', df)



    	src.data.update(new_src.data)


    # load dataframe
    priceDf = pd.read_csv("data/only_complete_years_data.csv")
    # available products and colors
    priceCountryDf = priceDf[priceDf['country'] == 'India']
    available_products = list(priceCountryDf._product.unique())
    available_products.sort()


    product_colors = Category20_16
    product_colors.sort()

    products_selection = CheckboxGroup(labels=available_products,
    								  active = [0, 1])
    products_selection.on_change('active', update)

    # Initial carriers and data source
    initial_products = [products_selection.labels[i] for i in products_selection.active]

    src = make_dataset(initial_products, 'India', priceDf)

    p = make_plot(src)

    # Put controls in a single element
    controls = WidgetBox(products_selection)

    # Create a row layout
    layout = row(controls, p)

    # Make a tab with the layout
    tab = Panel(child=layout, title = 'Product price over time')

    return tab



priceDf = pd.read_csv("data/only_complete_years_data.csv")
#
#output_file('js_on_change_test.html')

#plot = plotProductPrice(priceDf, 'Wheat', 'India')
#show(plot)

tab1 = priceOverTimeTab(priceDf)

# Put all the tabs into one application
tabs = Tabs(tabs = [tab1])

show(tabs)
