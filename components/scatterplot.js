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
      };var element = document.getElementById("6cf23b1f-a334-418f-b95d-1c2c6c1b8a0b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6cf23b1f-a334-418f-b95d-1c2c6c1b8a0b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e41c151c-9303-46e3-8505-994b611d8b31":{"roots":{"references":[{"attributes":{"below":[{"id":"04955fed-7fdc-4de4-9fba-c07104d91581","type":"LinearAxis"}],"left":[{"id":"16cc7760-2e92-424f-bd6d-10d984e973da","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"04955fed-7fdc-4de4-9fba-c07104d91581","type":"LinearAxis"},{"id":"ecbf68e7-0428-4d4a-b0ab-bdaf5d205412","type":"Grid"},{"id":"16cc7760-2e92-424f-bd6d-10d984e973da","type":"LinearAxis"},{"id":"e9852047-46b0-4c4f-96b2-dfa7c8489272","type":"Grid"},{"id":"678dc869-9061-49bd-879a-f4134dd31203","type":"BoxAnnotation"},{"id":"618f5958-d5ec-46da-b84d-818ba880e79a","type":"GlyphRenderer"}],"title":{"id":"7392abc3-ef97-4eb6-abbe-988d6a915f7f","type":"Title"},"toolbar":{"id":"c3c8cf1b-b6cd-4670-9089-aaae224c2c6d","type":"Toolbar"},"x_range":{"id":"69ece939-ff32-4cbd-b69a-27a31c179369","type":"DataRange1d"},"x_scale":{"id":"8024ab3f-e0af-4098-9129-63b5bc60353b","type":"LinearScale"},"y_range":{"id":"92393a11-b7ff-4d14-b615-41c5c264555f","type":"DataRange1d"},"y_scale":{"id":"1923eeb0-899c-4233-b957-376245acf6db","type":"LinearScale"}},"id":"590cffb2-66cc-476d-ae99-b9ac222ca117","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e4af6a8b-db97-4c1c-821a-c767620cb11d","type":"PanTool"},{"attributes":{},"id":"61e3b8e9-4005-4334-9484-902624d36b65","type":"SaveTool"},{"attributes":{},"id":"8cac6fc2-dbb3-4f08-a5c4-41821da8b926","type":"WheelZoomTool"},{"attributes":{"source":{"id":"618dabe7-d056-45c9-bb44-c6fab35c36fe","type":"ColumnDataSource"}},"id":"29ba0ca3-bae3-432c-8c3b-d13f7ee98f1c","type":"CDSView"},{"attributes":{},"id":"66a8b210-ab73-470b-bb38-90c842f94554","type":"ResetTool"},{"attributes":{},"id":"ed86ac10-728b-457d-b4ea-39d6485e370e","type":"HelpTool"},{"attributes":{},"id":"e5dabd41-9ac8-4a2c-8cb4-b969dcfd4a8a","type":"BasicTicker"},{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production","@production"],["Price","@price"]]},"id":"355a5be5-31a7-4d22-8631-53893a1f8838","type":"HoverTool"},{"attributes":{"plot":null,"text":"Ethiopia_Wheat.csv"},"id":"7392abc3-ef97-4eb6-abbe-988d6a915f7f","type":"Title"},{"attributes":{"plot":{"id":"590cffb2-66cc-476d-ae99-b9ac222ca117","subtype":"Figure","type":"Plot"},"ticker":{"id":"e5dabd41-9ac8-4a2c-8cb4-b969dcfd4a8a","type":"BasicTicker"}},"id":"ecbf68e7-0428-4d4a-b0ab-bdaf5d205412","type":"Grid"},{"attributes":{"axis_label":"Price","axis_line_width":{"value":2},"formatter":{"id":"d2e0f701-9aab-4348-aa6d-54748ecfbca6","type":"BasicTickFormatter"},"plot":{"id":"590cffb2-66cc-476d-ae99-b9ac222ca117","subtype":"Figure","type":"Plot"},"ticker":{"id":"3555e871-c853-4a9d-bfd9-c57d3a8a94e6","type":"BasicTicker"}},"id":"16cc7760-2e92-424f-bd6d-10d984e973da","type":"LinearAxis"},{"attributes":{},"id":"8024ab3f-e0af-4098-9129-63b5bc60353b","type":"LinearScale"},{"attributes":{"callback":null,"data":{"price":{"__ndarray__":"xks3iUEQIUBbbTZvAM0DQKeLP21V8AdABlE2+rIyFkBcsAVbsN0UQNhxC6U+WBJA9uEz7AqQHkDp3whl9HYeQPOLJb9YCSJAVFVVVVWVJ0A=","dtype":"float64","shape":[10]},"production":{"__ndarray__":"AAAAAH9PUUEAAACAIe5AQQAAAACsykJBAAAAgHyoQUEAAAAAHndHQQAAAACByUVBAAAAAGk0SkEAAAAAW/JNQQAAAEBpJFBBAAAAgO29UUE=","dtype":"float64","shape":[10]}},"selected":{"id":"158d4292-2b61-4467-975a-1e503f95040c","type":"Selection"},"selection_policy":{"id":"94b1314d-045d-4194-8682-3f7e3a5818fb","type":"UnionRenderers"}},"id":"618dabe7-d056-45c9-bb44-c6fab35c36fe","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"618dabe7-d056-45c9-bb44-c6fab35c36fe","type":"ColumnDataSource"},"glyph":{"id":"5b0431b3-978b-4810-bd38-40210f4a5621","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8c6108f9-2a55-41dc-a01d-67eb35d2a32d","type":"Circle"},"selection_glyph":null,"view":{"id":"29ba0ca3-bae3-432c-8c3b-d13f7ee98f1c","type":"CDSView"}},"id":"618f5958-d5ec-46da-b84d-818ba880e79a","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"69ece939-ff32-4cbd-b69a-27a31c179369","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"e4af6a8b-db97-4c1c-821a-c767620cb11d","type":"PanTool"},{"id":"8cac6fc2-dbb3-4f08-a5c4-41821da8b926","type":"WheelZoomTool"},{"id":"632edbc6-a66b-4996-93e2-ab3f0b64dd80","type":"BoxZoomTool"},{"id":"61e3b8e9-4005-4334-9484-902624d36b65","type":"SaveTool"},{"id":"66a8b210-ab73-470b-bb38-90c842f94554","type":"ResetTool"},{"id":"ed86ac10-728b-457d-b4ea-39d6485e370e","type":"HelpTool"},{"id":"355a5be5-31a7-4d22-8631-53893a1f8838","type":"HoverTool"}]},"id":"c3c8cf1b-b6cd-4670-9089-aaae224c2c6d","type":"Toolbar"},{"attributes":{"axis_label":"Production","axis_line_width":{"value":2},"formatter":{"id":"96f79d65-5c3e-4dc6-996c-3f5422279919","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"590cffb2-66cc-476d-ae99-b9ac222ca117","subtype":"Figure","type":"Plot"},"ticker":{"id":"e5dabd41-9ac8-4a2c-8cb4-b969dcfd4a8a","type":"BasicTicker"}},"id":"04955fed-7fdc-4de4-9fba-c07104d91581","type":"LinearAxis"},{"attributes":{},"id":"d2e0f701-9aab-4348-aa6d-54748ecfbca6","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"8c6108f9-2a55-41dc-a01d-67eb35d2a32d","type":"Circle"},{"attributes":{"callback":null},"id":"92393a11-b7ff-4d14-b615-41c5c264555f","type":"DataRange1d"},{"attributes":{},"id":"96f79d65-5c3e-4dc6-996c-3f5422279919","type":"BasicTickFormatter"},{"attributes":{},"id":"3555e871-c853-4a9d-bfd9-c57d3a8a94e6","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"590cffb2-66cc-476d-ae99-b9ac222ca117","subtype":"Figure","type":"Plot"},"ticker":{"id":"3555e871-c853-4a9d-bfd9-c57d3a8a94e6","type":"BasicTicker"}},"id":"e9852047-46b0-4c4f-96b2-dfa7c8489272","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"678dc869-9061-49bd-879a-f4134dd31203","type":"BoxAnnotation"},{"attributes":{},"id":"94b1314d-045d-4194-8682-3f7e3a5818fb","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"5b0431b3-978b-4810-bd38-40210f4a5621","type":"Circle"},{"attributes":{"overlay":{"id":"678dc869-9061-49bd-879a-f4134dd31203","type":"BoxAnnotation"}},"id":"632edbc6-a66b-4996-93e2-ab3f0b64dd80","type":"BoxZoomTool"},{"attributes":{},"id":"158d4292-2b61-4467-975a-1e503f95040c","type":"Selection"},{"attributes":{},"id":"1923eeb0-899c-4233-b957-376245acf6db","type":"LinearScale"}],"root_ids":["590cffb2-66cc-476d-ae99-b9ac222ca117"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"e41c151c-9303-46e3-8505-994b611d8b31","roots":{"590cffb2-66cc-476d-ae99-b9ac222ca117":"6cf23b1f-a334-418f-b95d-1c2c6c1b8a0b"}}];
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