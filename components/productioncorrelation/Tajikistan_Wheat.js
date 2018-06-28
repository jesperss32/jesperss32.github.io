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
      };var element = document.getElementById("337956cb-9e5b-42f9-969a-ba0db7eb7bf7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '337956cb-9e5b-42f9-969a-ba0db7eb7bf7' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"888f54da-62d4-47f3-9a1c-ff286580fadd":{"roots":{"references":[{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production","@production"],["Price","@price"]]},"id":"182a75f8-29e0-4177-b998-0eed663e89ec","type":"HoverTool"},{"attributes":{"callback":null},"id":"2bdc8452-4dd0-4fb0-822f-43e08351fd1e","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"BNy7MDykJkFyvbd3PnsrQX3WQ4DZqyRBndbc3+2sJEEyfQ8uf74qQQ+YOiXynCdByBmpUDZRI0ENBqYq6xgpQdGQFmZoCSRBJFu4dDS7K0Eoj2uQCVUjQWczBITtgCdB094TitefKkEC93+vgeQqQQ==","dtype":"float64","shape":[14]},"y":{"__ndarray__":"jiW/WPLr8z+jSOSoyUEDQKzSAwy4tOg/nTbQaQO96D+nDXTaQNcBQFuMlEBdp/c/JXUCmgib3D+uBVuwBVv9P02EDU+v1OM/cT0K16O8A0CEns2qz9XcP7y7u7u7O/c/LPnFkl+cAUCTFdagQiACQA==","dtype":"float64","shape":[14]}},"selected":{"id":"a0248d82-27ff-45f2-9abf-e78791e184c0","type":"Selection"},"selection_policy":{"id":"73a0fa6a-43ac-4f88-b177-e9b33c0fee2a","type":"UnionRenderers"}},"id":"cde65ee2-ce4b-470d-bd14-0f0782e6b066","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"9a5eeedb-6906-4334-884f-37b0bc4bc3e0","type":"Line"},{"attributes":{"plot":null,"text":"Tajikistan_Wheat"},"id":"1d4e83a1-9f7f-4b10-9105-ec8340e9afbf","type":"Title"},{"attributes":{},"id":"e8715dd9-a822-4ac3-88b2-d2ddd03c637b","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"c531851f-ead4-4cfd-9225-dbed0763d62b","type":"Line"},{"attributes":{"data_source":{"id":"cde65ee2-ce4b-470d-bd14-0f0782e6b066","type":"ColumnDataSource"},"glyph":{"id":"9a5eeedb-6906-4334-884f-37b0bc4bc3e0","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c531851f-ead4-4cfd-9225-dbed0763d62b","type":"Line"},"selection_glyph":null,"view":{"id":"954fe1c5-37cf-45a9-b52e-7de62764cbb2","type":"CDSView"}},"id":"c2a0424d-dd13-47b2-9b40-b5d4ac390fa8","type":"GlyphRenderer"},{"attributes":{"source":{"id":"cde65ee2-ce4b-470d-bd14-0f0782e6b066","type":"ColumnDataSource"}},"id":"954fe1c5-37cf-45a9-b52e-7de62764cbb2","type":"CDSView"},{"attributes":{"below":[{"id":"0d418f65-4816-47e9-9578-a4199f834da4","type":"LinearAxis"}],"left":[{"id":"b800c80e-7417-4880-8982-e7fd7f9f8ca6","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"0d418f65-4816-47e9-9578-a4199f834da4","type":"LinearAxis"},{"id":"45be0c26-deae-4161-b596-f8cadfd23089","type":"Grid"},{"id":"b800c80e-7417-4880-8982-e7fd7f9f8ca6","type":"LinearAxis"},{"id":"286c668d-9f81-4f1e-b60e-a690c87e83e5","type":"Grid"},{"id":"3b51e0cd-0c8c-4da4-91ee-ee79a1882e41","type":"BoxAnnotation"},{"id":"99899135-16ea-420a-870d-3c44d6658f69","type":"GlyphRenderer"},{"id":"c2a0424d-dd13-47b2-9b40-b5d4ac390fa8","type":"GlyphRenderer"}],"title":{"id":"1d4e83a1-9f7f-4b10-9105-ec8340e9afbf","type":"Title"},"toolbar":{"id":"276496bc-7e15-4b22-9465-c667f69c0347","type":"Toolbar"},"x_range":{"id":"2bdc8452-4dd0-4fb0-822f-43e08351fd1e","type":"DataRange1d"},"x_scale":{"id":"a16ad4d8-1798-4a17-87db-c72d5b105f37","type":"LinearScale"},"y_range":{"id":"23237072-150c-4711-a2b2-fa75be2b6296","type":"DataRange1d"},"y_scale":{"id":"97b526e0-61fc-4aac-b072-7858a2a18bec","type":"LinearScale"}},"id":"772f31ba-8f9f-4086-bc24-b1ba3a362bd6","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"91af5414-699c-4b82-91fb-b6e82cbf8bc7","type":"Selection"},{"attributes":{},"id":"4dd82bf5-7149-4d34-b15d-1a9d94109b91","type":"BasicTickFormatter"},{"attributes":{},"id":"6a94dad7-5dee-4d04-b376-2d96fe72aabb","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"aaf5616f-577a-4cfc-b8ea-4b83e3bffcd6","type":"PanTool"},{"id":"51ab29b8-25db-496e-ad20-26a7dcefa966","type":"WheelZoomTool"},{"id":"1a8411a5-b23c-465f-b0ed-e7c770570538","type":"BoxZoomTool"},{"id":"d52978c4-d0b0-4d42-abb6-7fd89e3c225a","type":"SaveTool"},{"id":"20f648c7-a0e1-45d7-b973-e6be58c6f5d7","type":"ResetTool"},{"id":"00a48512-4d52-4718-92a6-beb70ee88905","type":"HelpTool"},{"id":"182a75f8-29e0-4177-b998-0eed663e89ec","type":"HoverTool"}]},"id":"276496bc-7e15-4b22-9465-c667f69c0347","type":"Toolbar"},{"attributes":{},"id":"a0248d82-27ff-45f2-9abf-e78791e184c0","type":"Selection"},{"attributes":{},"id":"73a0fa6a-43ac-4f88-b177-e9b33c0fee2a","type":"UnionRenderers"},{"attributes":{},"id":"a16ad4d8-1798-4a17-87db-c72d5b105f37","type":"LinearScale"},{"attributes":{"callback":null},"id":"23237072-150c-4711-a2b2-fa75be2b6296","type":"DataRange1d"},{"attributes":{},"id":"97b526e0-61fc-4aac-b072-7858a2a18bec","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"cf7bc3b2-10ed-4e23-8fc9-8e650a3e36ec","type":"Circle"},{"attributes":{"axis_label":"Production","axis_line_width":{"value":2},"formatter":{"id":"e8715dd9-a822-4ac3-88b2-d2ddd03c637b","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"772f31ba-8f9f-4086-bc24-b1ba3a362bd6","subtype":"Figure","type":"Plot"},"ticker":{"id":"00881469-b0cd-4c3d-9a9f-225424249b49","type":"BasicTicker"}},"id":"0d418f65-4816-47e9-9578-a4199f834da4","type":"LinearAxis"},{"attributes":{},"id":"00881469-b0cd-4c3d-9a9f-225424249b49","type":"BasicTicker"},{"attributes":{"plot":{"id":"772f31ba-8f9f-4086-bc24-b1ba3a362bd6","subtype":"Figure","type":"Plot"},"ticker":{"id":"00881469-b0cd-4c3d-9a9f-225424249b49","type":"BasicTicker"}},"id":"45be0c26-deae-4161-b596-f8cadfd23089","type":"Grid"},{"attributes":{"axis_label":"Price","axis_line_width":{"value":2},"formatter":{"id":"4dd82bf5-7149-4d34-b15d-1a9d94109b91","type":"BasicTickFormatter"},"plot":{"id":"772f31ba-8f9f-4086-bc24-b1ba3a362bd6","subtype":"Figure","type":"Plot"},"ticker":{"id":"674fb730-1772-4174-9fcc-4e3144681860","type":"BasicTicker"}},"id":"b800c80e-7417-4880-8982-e7fd7f9f8ca6","type":"LinearAxis"},{"attributes":{},"id":"674fb730-1772-4174-9fcc-4e3144681860","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"772f31ba-8f9f-4086-bc24-b1ba3a362bd6","subtype":"Figure","type":"Plot"},"ticker":{"id":"674fb730-1772-4174-9fcc-4e3144681860","type":"BasicTicker"}},"id":"286c668d-9f81-4f1e-b60e-a690c87e83e5","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3b51e0cd-0c8c-4da4-91ee-ee79a1882e41","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"72c7363b-0088-4e1e-88fc-107b56867001","type":"Circle"},{"attributes":{"data_source":{"id":"943b6ab5-1abd-4eb3-ace4-96e0a1e64c3d","type":"ColumnDataSource"},"glyph":{"id":"72c7363b-0088-4e1e-88fc-107b56867001","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cf7bc3b2-10ed-4e23-8fc9-8e650a3e36ec","type":"Circle"},"selection_glyph":null,"view":{"id":"1165b6ab-f73b-4730-b6d2-048fa1aa42d7","type":"CDSView"}},"id":"99899135-16ea-420a-870d-3c44d6658f69","type":"GlyphRenderer"},{"attributes":{},"id":"aaf5616f-577a-4cfc-b8ea-4b83e3bffcd6","type":"PanTool"},{"attributes":{"callback":null,"data":{"price":{"__ndarray__":"o0jkqMlBA0AldQKaCJvcP4SezarP1dw/TYQNT6/U4z+s0gMMuLToP5020GkDveg/jSW/WPLr8z+vBVuwBVv9P7y7u7u7O/c/W4yUQF2n9z+TFdagQiACQCz5xZJfnAFApw102kDXAUBxPQrXo7wDQA==","dtype":"float64","shape":[14]},"production":{"__ndarray__":"AAAAALL8K0EAAAAAap4gQQAAAAD8JSRBAAAAAEBEI0EAAAAAxt8iQQAAAACmiiNBAAAAAKjQI0EAAAAAMB0kQQAAAABPnDBBAAAAAHCHL0EAAAAAwC4mQQAAAABYzChBAAAAACzpLEEAAAAA1ForQQ==","dtype":"float64","shape":[14]}},"selected":{"id":"91af5414-699c-4b82-91fb-b6e82cbf8bc7","type":"Selection"},"selection_policy":{"id":"6a94dad7-5dee-4d04-b376-2d96fe72aabb","type":"UnionRenderers"}},"id":"943b6ab5-1abd-4eb3-ace4-96e0a1e64c3d","type":"ColumnDataSource"},{"attributes":{"source":{"id":"943b6ab5-1abd-4eb3-ace4-96e0a1e64c3d","type":"ColumnDataSource"}},"id":"1165b6ab-f73b-4730-b6d2-048fa1aa42d7","type":"CDSView"},{"attributes":{},"id":"51ab29b8-25db-496e-ad20-26a7dcefa966","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"3b51e0cd-0c8c-4da4-91ee-ee79a1882e41","type":"BoxAnnotation"}},"id":"1a8411a5-b23c-465f-b0ed-e7c770570538","type":"BoxZoomTool"},{"attributes":{},"id":"d52978c4-d0b0-4d42-abb6-7fd89e3c225a","type":"SaveTool"},{"attributes":{},"id":"20f648c7-a0e1-45d7-b973-e6be58c6f5d7","type":"ResetTool"},{"attributes":{},"id":"00a48512-4d52-4718-92a6-beb70ee88905","type":"HelpTool"}],"root_ids":["772f31ba-8f9f-4086-bc24-b1ba3a362bd6"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"888f54da-62d4-47f3-9a1c-ff286580fadd","roots":{"772f31ba-8f9f-4086-bc24-b1ba3a362bd6":"337956cb-9e5b-42f9-969a-ba0db7eb7bf7"}}];
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