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
      };var element = document.getElementById("da915329-059c-4f37-987e-7b99285c8395");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'da915329-059c-4f37-987e-7b99285c8395' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2138d999-b2f2-46e1-99eb-1257addeff1e":{"roots":{"references":[{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production","@production"],["Price","@price"]]},"id":"74e54a82-d5a7-4813-997d-10e99b77cc59","type":"HoverTool"},{"attributes":{"callback":null},"id":"4530feab-0cf1-4bd1-b329-d7986c43225b","type":"DataRange1d"},{"attributes":{},"id":"219b2d2c-6b3b-49d5-a2cf-3437e6b76b59","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Zambia_Maize(white)"},"id":"8c7f57bf-f5fe-43c5-a843-6f7528b2e5db","type":"Title"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"wZV72ROAM0GF5NTUCqhBQXbA1xfiFUBBL0SwwaJNOUF+MjzEvs0uQV+hQv2aSjJB0hNulqwSNEFDyBMLkpdDQdrSJ8/hsENBMGMKDlMoSUEDESDFX+YxQQ==","dtype":"float64","shape":[11]},"y":{"__ndarray__":"HITZQsRC6j9Gf8Z+gkX4P4DMA43ODvY/PE8+ORI48T+XRatOR3zkPwRlP3qsjug/SfSY6lcR6z8zY8uhyP/6P25lnJlzI/s/T/KpD71rAUB7f/PDbgHoPw==","dtype":"float64","shape":[11]}},"selected":{"id":"17542caa-1fcf-4aa0-82b8-21c9957a3927","type":"Selection"},"selection_policy":{"id":"bb702be2-f481-41d6-95fb-fa0edf14c9d2","type":"UnionRenderers"}},"id":"b369f960-a676-43ba-8dc4-c25b44336618","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"29c7b9ee-5eb4-4891-a1b2-38a051ae30b3","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"84dd9caf-cc99-4390-975b-7ea54683e927","type":"Line"},{"attributes":{"data_source":{"id":"b369f960-a676-43ba-8dc4-c25b44336618","type":"ColumnDataSource"},"glyph":{"id":"29c7b9ee-5eb4-4891-a1b2-38a051ae30b3","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"84dd9caf-cc99-4390-975b-7ea54683e927","type":"Line"},"selection_glyph":null,"view":{"id":"517c0e96-7c4f-4bcf-a633-f07671280ac2","type":"CDSView"}},"id":"762ac25d-e6a0-4daa-97d5-0d79b589ed16","type":"GlyphRenderer"},{"attributes":{"source":{"id":"b369f960-a676-43ba-8dc4-c25b44336618","type":"ColumnDataSource"}},"id":"517c0e96-7c4f-4bcf-a633-f07671280ac2","type":"CDSView"},{"attributes":{"below":[{"id":"ef8df5c5-a614-425b-a443-45a713129a70","type":"LinearAxis"}],"left":[{"id":"375c52ed-161c-4729-84da-888b29b42677","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"ef8df5c5-a614-425b-a443-45a713129a70","type":"LinearAxis"},{"id":"12a92a35-883d-4fcc-9c04-c543f1307704","type":"Grid"},{"id":"375c52ed-161c-4729-84da-888b29b42677","type":"LinearAxis"},{"id":"2f71c141-da50-4f31-9d04-a2862a42559d","type":"Grid"},{"id":"49f52e75-ee7b-45aa-aa01-f0117874b7d9","type":"BoxAnnotation"},{"id":"05380bff-9db1-4f03-bb67-a1892e292610","type":"GlyphRenderer"},{"id":"762ac25d-e6a0-4daa-97d5-0d79b589ed16","type":"GlyphRenderer"}],"title":{"id":"8c7f57bf-f5fe-43c5-a843-6f7528b2e5db","type":"Title"},"toolbar":{"id":"1ff3a1dc-babe-40aa-9886-d2cad71215bf","type":"Toolbar"},"x_range":{"id":"4530feab-0cf1-4bd1-b329-d7986c43225b","type":"DataRange1d"},"x_scale":{"id":"5d6adae3-4392-4c6f-9cc7-df0c2b4d60bc","type":"LinearScale"},"y_range":{"id":"6cd5d2b6-5a2f-4121-9545-88726d502e8b","type":"DataRange1d"},"y_scale":{"id":"a651e4d8-8cf6-4be4-9d52-8fa011b9741b","type":"LinearScale"}},"id":"887623e6-aaed-423a-881e-eebaefa717ed","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"ad8df842-a805-454a-9aa0-73ff22958ee9","type":"BasicTickFormatter"},{"attributes":{},"id":"06de8e0c-bde2-4942-b5c1-683bdc880428","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"137e46ca-42d9-4929-b085-233bc92b4635","type":"PanTool"},{"id":"b4a85a60-6717-4c9a-8943-cab312d0f0ab","type":"WheelZoomTool"},{"id":"d6836bd5-fbff-47fa-9a6e-88704f2da5fb","type":"BoxZoomTool"},{"id":"322634ff-3dc9-4145-83f6-0eff7e66dc94","type":"SaveTool"},{"id":"8d2cec26-2291-4a37-9140-0d295c10b399","type":"ResetTool"},{"id":"141d9c35-8a78-44bf-9e8c-7215533740f1","type":"HelpTool"},{"id":"74e54a82-d5a7-4813-997d-10e99b77cc59","type":"HoverTool"}]},"id":"1ff3a1dc-babe-40aa-9886-d2cad71215bf","type":"Toolbar"},{"attributes":{},"id":"571297ad-fb44-4736-8338-4f98457b1237","type":"UnionRenderers"},{"attributes":{},"id":"17542caa-1fcf-4aa0-82b8-21c9957a3927","type":"Selection"},{"attributes":{},"id":"5d6adae3-4392-4c6f-9cc7-df0c2b4d60bc","type":"LinearScale"},{"attributes":{},"id":"bb702be2-f481-41d6-95fb-fa0edf14c9d2","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"6cd5d2b6-5a2f-4121-9545-88726d502e8b","type":"DataRange1d"},{"attributes":{},"id":"a651e4d8-8cf6-4be4-9d52-8fa011b9741b","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"9062981d-f036-41fe-a5be-508f11bd6f15","type":"Circle"},{"attributes":{"axis_label":"Production","axis_line_width":{"value":2},"formatter":{"id":"219b2d2c-6b3b-49d5-a2cf-3437e6b76b59","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"887623e6-aaed-423a-881e-eebaefa717ed","subtype":"Figure","type":"Plot"},"ticker":{"id":"7c67213b-6ce2-4748-a456-982010733c80","type":"BasicTicker"}},"id":"ef8df5c5-a614-425b-a443-45a713129a70","type":"LinearAxis"},{"attributes":{},"id":"7c67213b-6ce2-4748-a456-982010733c80","type":"BasicTicker"},{"attributes":{"plot":{"id":"887623e6-aaed-423a-881e-eebaefa717ed","subtype":"Figure","type":"Plot"},"ticker":{"id":"7c67213b-6ce2-4748-a456-982010733c80","type":"BasicTicker"}},"id":"12a92a35-883d-4fcc-9c04-c543f1307704","type":"Grid"},{"attributes":{"axis_label":"Price","axis_line_width":{"value":2},"formatter":{"id":"ad8df842-a805-454a-9aa0-73ff22958ee9","type":"BasicTickFormatter"},"plot":{"id":"887623e6-aaed-423a-881e-eebaefa717ed","subtype":"Figure","type":"Plot"},"ticker":{"id":"f10f7716-c9bd-430e-b618-a9baacceb854","type":"BasicTicker"}},"id":"375c52ed-161c-4729-84da-888b29b42677","type":"LinearAxis"},{"attributes":{},"id":"f10f7716-c9bd-430e-b618-a9baacceb854","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"887623e6-aaed-423a-881e-eebaefa717ed","subtype":"Figure","type":"Plot"},"ticker":{"id":"f10f7716-c9bd-430e-b618-a9baacceb854","type":"BasicTicker"}},"id":"2f71c141-da50-4f31-9d04-a2862a42559d","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"49f52e75-ee7b-45aa-aa01-f0117874b7d9","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"3a57ce94-ca57-460f-9638-224cca2aaa55","type":"Circle"},{"attributes":{"data_source":{"id":"4eb1a62d-d187-414f-971c-415264aeef1a","type":"ColumnDataSource"},"glyph":{"id":"3a57ce94-ca57-460f-9638-224cca2aaa55","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9062981d-f036-41fe-a5be-508f11bd6f15","type":"Circle"},"selection_glyph":null,"view":{"id":"9d0f8a66-7ac8-4808-ab57-a5c7b75a94e8","type":"CDSView"}},"id":"05380bff-9db1-4f03-bb67-a1892e292610","type":"GlyphRenderer"},{"attributes":{},"id":"137e46ca-42d9-4929-b085-233bc92b4635","type":"PanTool"},{"attributes":{"callback":null,"data":{"price":{"__ndarray__":"T/KpD71rAUB7f/PDbgHoP5dFq05HfOQ/SfSY6lcR6z8chNlCxELqPwRlP3qsjug/PE8+ORI48T+AzAONzg72P0Z/xn6CRfg/bmWcmXMj+z8zY8uhyP/6Pw==","dtype":"float64","shape":[11]},"production":{"__ndarray__":"AAAAAG7rRUEAAAAA5KoxQQAAAAAwhjJBAAAAABZvKkEAAAAAELw1QQAAAACO2DRBAAAAAK58MkEAAAAAIss8QQAAAADgUkNBAAAAgEeQSUEAAACAtvlDQQ==","dtype":"float64","shape":[11]}},"selected":{"id":"06de8e0c-bde2-4942-b5c1-683bdc880428","type":"Selection"},"selection_policy":{"id":"571297ad-fb44-4736-8338-4f98457b1237","type":"UnionRenderers"}},"id":"4eb1a62d-d187-414f-971c-415264aeef1a","type":"ColumnDataSource"},{"attributes":{"source":{"id":"4eb1a62d-d187-414f-971c-415264aeef1a","type":"ColumnDataSource"}},"id":"9d0f8a66-7ac8-4808-ab57-a5c7b75a94e8","type":"CDSView"},{"attributes":{},"id":"b4a85a60-6717-4c9a-8943-cab312d0f0ab","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"49f52e75-ee7b-45aa-aa01-f0117874b7d9","type":"BoxAnnotation"}},"id":"d6836bd5-fbff-47fa-9a6e-88704f2da5fb","type":"BoxZoomTool"},{"attributes":{},"id":"322634ff-3dc9-4145-83f6-0eff7e66dc94","type":"SaveTool"},{"attributes":{},"id":"8d2cec26-2291-4a37-9140-0d295c10b399","type":"ResetTool"},{"attributes":{},"id":"141d9c35-8a78-44bf-9e8c-7215533740f1","type":"HelpTool"}],"root_ids":["887623e6-aaed-423a-881e-eebaefa717ed"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"2138d999-b2f2-46e1-99eb-1257addeff1e","roots":{"887623e6-aaed-423a-881e-eebaefa717ed":"da915329-059c-4f37-987e-7b99285c8395"}}];
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