from bokeh.plotting import figure, show, output_file
from bokeh.tile_providers import CARTODBPOSITRON
from bokeh.resources import CDN
from bokeh.embed import autoload_static

output_file("tile.html")

# range bounds supplied in web mercator coordinates
p = figure(x_range=(-2000000, 6000000), y_range=(-1000000, 7000000),
           x_axis_type="mercator", y_axis_type="mercator")
p.add_tile(CARTODBPOSITRON)


js, tag = autoload_static(p, CDN, "mapplot.js")

with open("mapplot.js", "w+") as f:
	f.write(js)

print(tag)