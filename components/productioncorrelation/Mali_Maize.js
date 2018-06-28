(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("6a89debe-def4-4d35-af64-dc09c548a5eb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6a89debe-def4-4d35-af64-dc09c548a5eb' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"e3800d16-e68d-4cff-8aa5-4fea205bb6bd":{"roots":{"references":[{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production","@production"],["Price","@price"]]},"id":"70343915-3d02-4886-8200-bd83c521a251","type":"HoverTool"},{"attributes":{"callback":null},"id":"3f33059d-02ab-49b4-8d69-f377dbf5d858","type":"DataRange1d"},{"attributes":{},"id":"e991c01b-e301-475a-8c43-923f55944ee0","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Mali_Maize"},"id":"13b9dad2-5928-4336-a2a0-626adbd7249a","type":"Title"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"Xob1om/qJEEGfFQKqhMqQcVGr8cxtjVB1CHL1Ur1NEH7np4tZaA2QTcxGn1psjVBHpcbyja1OkEhFo+5S+syQQmTbMWaxSxBT0mKXP4ECUHQ2o0qtAI4QbIUiAIeTTtBmZYfAkzXNkE=","dtype":"float64","shape":[13]},"y":{"__ndarray__":"UeQiDCB5XkCrqqqqKmRgQL9Y8ou1RWRApUNWOmTvY0BQG+i0ga5kQEREREQERGRAH3zwwQeCZkBMXW5/0AVjQOF6FK6H/mBAzn12AbHpV0CmP9lyDE1lQMOzopEAxmZAaudgzRLHZEA=","dtype":"float64","shape":[13]}},"selected":{"id":"d973e7c2-81ea-4254-8f6b-50ba7185df5b","type":"Selection"},"selection_policy":{"id":"956f8214-6373-418f-9a74-4d504e6acbbf","type":"UnionRenderers"}},"id":"55467071-b9cf-48e6-87ae-f72900a111a9","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"53004221-5ca4-4170-9711-a5319de2eca6","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"ee49c400-f22c-4238-89e5-085901b5a1bb","type":"Line"},{"attributes":{"data_source":{"id":"55467071-b9cf-48e6-87ae-f72900a111a9","type":"ColumnDataSource"},"glyph":{"id":"53004221-5ca4-4170-9711-a5319de2eca6","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ee49c400-f22c-4238-89e5-085901b5a1bb","type":"Line"},"selection_glyph":null,"view":{"id":"46d83a1f-2838-420d-b225-61fb6dfaeb63","type":"CDSView"}},"id":"df0047eb-cd7a-49ec-943e-a211c711896d","type":"GlyphRenderer"},{"attributes":{"source":{"id":"55467071-b9cf-48e6-87ae-f72900a111a9","type":"ColumnDataSource"}},"id":"46d83a1f-2838-420d-b225-61fb6dfaeb63","type":"CDSView"},{"attributes":{"below":[{"id":"536d9e57-2a66-4867-b327-101a669e4817","type":"LinearAxis"}],"left":[{"id":"b1df6419-df0e-42d9-a525-0c3598838b73","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"536d9e57-2a66-4867-b327-101a669e4817","type":"LinearAxis"},{"id":"61641a68-39b5-4154-bde5-f7d530d2611f","type":"Grid"},{"id":"b1df6419-df0e-42d9-a525-0c3598838b73","type":"LinearAxis"},{"id":"dca89a5c-eec0-450d-9d26-338ce4a3aab8","type":"Grid"},{"id":"a7e91a92-e32b-45fc-b030-34df79da424d","type":"BoxAnnotation"},{"id":"dd2e5642-c0ba-4a7e-86b8-dc5246bc3e9c","type":"GlyphRenderer"},{"id":"df0047eb-cd7a-49ec-943e-a211c711896d","type":"GlyphRenderer"}],"title":{"id":"13b9dad2-5928-4336-a2a0-626adbd7249a","type":"Title"},"toolbar":{"id":"1eaf4b94-5167-4b4c-af3a-8822f3678404","type":"Toolbar"},"x_range":{"id":"3f33059d-02ab-49b4-8d69-f377dbf5d858","type":"DataRange1d"},"x_scale":{"id":"3da490d8-3e7c-4204-88ec-75372e91b959","type":"LinearScale"},"y_range":{"id":"917bc085-e9a3-44d8-8857-e6b24d13914f","type":"DataRange1d"},"y_scale":{"id":"014df209-e2d4-4f89-87ba-241ca71fc5b5","type":"LinearScale"}},"id":"c7b5399f-1239-4c43-9303-116a83fb8a5f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"f8a4915f-9f07-4450-93a2-ded2b1290870","type":"Selection"},{"attributes":{},"id":"bc5e1719-af2a-4f28-a81e-9eed5f7f0bf0","type":"BasicTickFormatter"},{"attributes":{},"id":"44ca1612-4e45-400f-b4c7-a4dfec77984b","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"e4b1ef63-2a29-4f0b-951a-28c5b8ad31ae","type":"PanTool"},{"id":"ec2ef132-b799-48ec-8c4c-540d4c57bb73","type":"WheelZoomTool"},{"id":"fe5ccb35-7741-4029-8b4c-67fabdb267da","type":"BoxZoomTool"},{"id":"03f8f6a4-cd26-4d5c-9b4e-608de5016cce","type":"SaveTool"},{"id":"eb16c9b2-df71-4714-8173-69e678fd13fa","type":"ResetTool"},{"id":"6fbda5f8-ca32-4794-91ec-e3fdcdf663e2","type":"HelpTool"},{"id":"70343915-3d02-4886-8200-bd83c521a251","type":"HoverTool"}]},"id":"1eaf4b94-5167-4b4c-af3a-8822f3678404","type":"Toolbar"},{"attributes":{},"id":"d973e7c2-81ea-4254-8f6b-50ba7185df5b","type":"Selection"},{"attributes":{},"id":"3da490d8-3e7c-4204-88ec-75372e91b959","type":"LinearScale"},{"attributes":{},"id":"956f8214-6373-418f-9a74-4d504e6acbbf","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"917bc085-e9a3-44d8-8857-e6b24d13914f","type":"DataRange1d"},{"attributes":{},"id":"014df209-e2d4-4f89-87ba-241ca71fc5b5","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"20873110-2bae-4cd5-82ae-2224bc99d759","type":"Circle"},{"attributes":{"axis_label":"Production","axis_line_width":{"value":2},"formatter":{"id":"e991c01b-e301-475a-8c43-923f55944ee0","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"c7b5399f-1239-4c43-9303-116a83fb8a5f","subtype":"Figure","type":"Plot"},"ticker":{"id":"e0a03ee3-36cb-4f1d-85a8-231b700c62ba","type":"BasicTicker"}},"id":"536d9e57-2a66-4867-b327-101a669e4817","type":"LinearAxis"},{"attributes":{},"id":"e0a03ee3-36cb-4f1d-85a8-231b700c62ba","type":"BasicTicker"},{"attributes":{"plot":{"id":"c7b5399f-1239-4c43-9303-116a83fb8a5f","subtype":"Figure","type":"Plot"},"ticker":{"id":"e0a03ee3-36cb-4f1d-85a8-231b700c62ba","type":"BasicTicker"}},"id":"61641a68-39b5-4154-bde5-f7d530d2611f","type":"Grid"},{"attributes":{"axis_label":"Price","axis_line_width":{"value":2},"formatter":{"id":"bc5e1719-af2a-4f28-a81e-9eed5f7f0bf0","type":"BasicTickFormatter"},"plot":{"id":"c7b5399f-1239-4c43-9303-116a83fb8a5f","subtype":"Figure","type":"Plot"},"ticker":{"id":"dabcf0b5-5999-46ef-8ee5-e10e30cdf4c4","type":"BasicTicker"}},"id":"b1df6419-df0e-42d9-a525-0c3598838b73","type":"LinearAxis"},{"attributes":{},"id":"dabcf0b5-5999-46ef-8ee5-e10e30cdf4c4","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"c7b5399f-1239-4c43-9303-116a83fb8a5f","subtype":"Figure","type":"Plot"},"ticker":{"id":"dabcf0b5-5999-46ef-8ee5-e10e30cdf4c4","type":"BasicTicker"}},"id":"dca89a5c-eec0-450d-9d26-338ce4a3aab8","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a7e91a92-e32b-45fc-b030-34df79da424d","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"a161df49-fe6b-4757-8023-cd86cbfbd197","type":"Circle"},{"attributes":{"data_source":{"id":"99e83d09-265a-4c1f-a531-213c29361362","type":"ColumnDataSource"},"glyph":{"id":"a161df49-fe6b-4757-8023-cd86cbfbd197","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20873110-2bae-4cd5-82ae-2224bc99d759","type":"Circle"},"selection_glyph":null,"view":{"id":"6f43af71-a473-4d4c-97fb-51658a89ec80","type":"CDSView"}},"id":"dd2e5642-c0ba-4a7e-86b8-dc5246bc3e9c","type":"GlyphRenderer"},{"attributes":{},"id":"e4b1ef63-2a29-4f0b-951a-28c5b8ad31ae","type":"PanTool"},{"attributes":{"source":{"id":"99e83d09-265a-4c1f-a531-213c29361362","type":"ColumnDataSource"}},"id":"6f43af71-a473-4d4c-97fb-51658a89ec80","type":"CDSView"},{"attributes":{"callback":null,"data":{"price":{"__ndarray__":"audgzRLHZEDhehSuh/5gQM59dgGx6VdARERERAREZECrqqqqKmRgQFHkIgwgeV5ATF1uf9AFY0CmP9lyDE1lQL9Y8ou1RWRAxLOikQDGZkAffPDBB4JmQKVDVjpk72NAUBvotIGuZEA=","dtype":"float64","shape":[13]},"production":{"__ndarray__":"AAAAgPxyRUEAAAAAmMEbQQAAAAAcCxxBAAAAAMBcI0EAAAAAYpElQQAAAAD8DSVBAAAAAEI2JUEAAAAAgYk2QQAAAAALsTRBAAAAADrPM0EAAAAA7PQ4QQAAAACanDpBAAAAAGJdQUE=","dtype":"float64","shape":[13]}},"selected":{"id":"f8a4915f-9f07-4450-93a2-ded2b1290870","type":"Selection"},"selection_policy":{"id":"44ca1612-4e45-400f-b4c7-a4dfec77984b","type":"UnionRenderers"}},"id":"99e83d09-265a-4c1f-a531-213c29361362","type":"ColumnDataSource"},{"attributes":{},"id":"ec2ef132-b799-48ec-8c4c-540d4c57bb73","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"a7e91a92-e32b-45fc-b030-34df79da424d","type":"BoxAnnotation"}},"id":"fe5ccb35-7741-4029-8b4c-67fabdb267da","type":"BoxZoomTool"},{"attributes":{},"id":"03f8f6a4-cd26-4d5c-9b4e-608de5016cce","type":"SaveTool"},{"attributes":{},"id":"eb16c9b2-df71-4714-8173-69e678fd13fa","type":"ResetTool"},{"attributes":{},"id":"6fbda5f8-ca32-4794-91ec-e3fdcdf663e2","type":"HelpTool"}],"root_ids":["c7b5399f-1239-4c43-9303-116a83fb8a5f"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"e3800d16-e68d-4cff-8aa5-4fea205bb6bd","roots":{"c7b5399f-1239-4c43-9303-116a83fb8a5f":"6a89debe-def4-4d35-af64-dc09c548a5eb"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-tables-0.13.0.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();