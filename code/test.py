from bokeh.plotting import figure
from bokeh.embed import autoload_static
from bokeh.resources import CDN

plot = figure()
plot.circle([1,2], [3,4])

js, tag = autoload_static(plot, CDN, "components/testplot.js")

#the javascript code is written to a file, in this case components/testplot.js
with open("components/testplot.js", "w+") as f:
    f.write(js)

#place this tag where the plot should be on a page
# for now, just copy paste it from the terminal
# IMPORTANT: if this code is ran again, the tag needs to be replaced
print(tag)
