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
      };var element = document.getElementById("6651621b-d195-44c6-bc73-a9a384f489c0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6651621b-d195-44c6-bc73-a9a384f489c0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e4791a37-bf25-4a96-b9f7-36864f7b515c":{"roots":{"references":[{"attributes":{"dimension":"lon"},"id":"0dff02e0-234e-4fa1-afa3-bbb60d234e30","type":"MercatorTicker"},{"attributes":{"formatter":{"id":"c8620311-ace0-4e75-baa3-9aaf88a2473e","type":"MercatorTickFormatter"},"plot":{"id":"6321b7b2-fdd1-47af-8767-3c7027f4c79b","subtype":"Figure","type":"Plot"},"ticker":{"id":"c47bfbe3-e85c-4304-ae96-3f12d7d4f9a5","type":"MercatorTicker"}},"id":"4e75e305-5b5b-4b88-b969-b558ac86bb5a","type":"MercatorAxis"},{"attributes":{"formatter":{"id":"78c81854-1301-41dc-a017-1a26337d5a4f","type":"MercatorTickFormatter"},"plot":{"id":"6321b7b2-fdd1-47af-8767-3c7027f4c79b","subtype":"Figure","type":"Plot"},"ticker":{"id":"0dff02e0-234e-4fa1-afa3-bbb60d234e30","type":"MercatorTicker"}},"id":"7db522e8-509d-4590-860c-659aab5ab31d","type":"MercatorAxis"},{"attributes":{"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors,&amp;copy; &lt;a href=\\"https://cartodb.com/attributions\\"&gt;CartoDB&lt;/a&gt;","url":"https://tiles.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"},"id":"eb80717f-52e6-4f59-b9b5-e73ebf266156","type":"WMTSTileSource"},{"attributes":{"callback":null,"end":7000000,"start":-1000000},"id":"0c502fce-ceee-4d18-bf86-91cfb71b1e04","type":"Range1d"},{"attributes":{"below":[{"id":"7db522e8-509d-4590-860c-659aab5ab31d","type":"MercatorAxis"}],"left":[{"id":"4e75e305-5b5b-4b88-b969-b558ac86bb5a","type":"MercatorAxis"}],"renderers":[{"id":"7db522e8-509d-4590-860c-659aab5ab31d","type":"MercatorAxis"},{"id":"98631cdb-caec-4db9-9694-2dde20593f44","type":"Grid"},{"id":"4e75e305-5b5b-4b88-b969-b558ac86bb5a","type":"MercatorAxis"},{"id":"4ac0746e-89cf-47cf-951c-93a0158bafa7","type":"Grid"},{"id":"521cc90b-4c28-4718-a373-2ba20b372992","type":"BoxAnnotation"},{"id":"9dcb0b99-d1bb-48cc-ba38-590e69d8f67f","type":"TileRenderer"}],"title":{"id":"0be428e5-b58a-4715-a87c-4b154111f13f","type":"Title"},"toolbar":{"id":"20c06a61-3c8f-41b8-8916-f6428161eb3c","type":"Toolbar"},"x_range":{"id":"14be7092-1f4d-4ef0-9ea4-45c0d9e7b7e9","type":"Range1d"},"x_scale":{"id":"7bee6a9d-2acc-4531-9ef7-1c80a87f4830","type":"LinearScale"},"y_range":{"id":"0c502fce-ceee-4d18-bf86-91cfb71b1e04","type":"Range1d"},"y_scale":{"id":"cbbf731c-55fb-4382-b082-294d504a18c7","type":"LinearScale"}},"id":"6321b7b2-fdd1-47af-8767-3c7027f4c79b","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"7bee6a9d-2acc-4531-9ef7-1c80a87f4830","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"521cc90b-4c28-4718-a373-2ba20b372992","type":"BoxAnnotation"},{"attributes":{"dimension":"lat"},"id":"c47bfbe3-e85c-4304-ae96-3f12d7d4f9a5","type":"MercatorTicker"},{"attributes":{},"id":"6b8fb9ed-445c-4dad-b2a2-09e56ea27b42","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"6321b7b2-fdd1-47af-8767-3c7027f4c79b","subtype":"Figure","type":"Plot"},"ticker":{"id":"c47bfbe3-e85c-4304-ae96-3f12d7d4f9a5","type":"MercatorTicker"}},"id":"4ac0746e-89cf-47cf-951c-93a0158bafa7","type":"Grid"},{"attributes":{},"id":"9e24a8df-2d05-4528-bb49-a136daf08612","type":"PanTool"},{"attributes":{},"id":"5ff7fbee-00d1-4f3d-87d8-81497de9512c","type":"HelpTool"},{"attributes":{"dimension":"lon"},"id":"78c81854-1301-41dc-a017-1a26337d5a4f","type":"MercatorTickFormatter"},{"attributes":{},"id":"c4e1504b-1828-4ed1-86ed-ca576d43a003","type":"SaveTool"},{"attributes":{"plot":null,"text":""},"id":"0be428e5-b58a-4715-a87c-4b154111f13f","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"9e24a8df-2d05-4528-bb49-a136daf08612","type":"PanTool"},{"id":"ee0e5b7d-2dbe-4c0d-b5e9-2b1cf23c5120","type":"WheelZoomTool"},{"id":"5eb0e471-3cc5-4283-8b56-ba369bc22908","type":"BoxZoomTool"},{"id":"c4e1504b-1828-4ed1-86ed-ca576d43a003","type":"SaveTool"},{"id":"6b8fb9ed-445c-4dad-b2a2-09e56ea27b42","type":"ResetTool"},{"id":"5ff7fbee-00d1-4f3d-87d8-81497de9512c","type":"HelpTool"}]},"id":"20c06a61-3c8f-41b8-8916-f6428161eb3c","type":"Toolbar"},{"attributes":{"tile_source":{"id":"eb80717f-52e6-4f59-b9b5-e73ebf266156","type":"WMTSTileSource"}},"id":"9dcb0b99-d1bb-48cc-ba38-590e69d8f67f","type":"TileRenderer"},{"attributes":{"plot":{"id":"6321b7b2-fdd1-47af-8767-3c7027f4c79b","subtype":"Figure","type":"Plot"},"ticker":{"id":"0dff02e0-234e-4fa1-afa3-bbb60d234e30","type":"MercatorTicker"}},"id":"98631cdb-caec-4db9-9694-2dde20593f44","type":"Grid"},{"attributes":{"overlay":{"id":"521cc90b-4c28-4718-a373-2ba20b372992","type":"BoxAnnotation"}},"id":"5eb0e471-3cc5-4283-8b56-ba369bc22908","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":6000000,"start":-2000000},"id":"14be7092-1f4d-4ef0-9ea4-45c0d9e7b7e9","type":"Range1d"},{"attributes":{"dimension":"lat"},"id":"c8620311-ace0-4e75-baa3-9aaf88a2473e","type":"MercatorTickFormatter"},{"attributes":{},"id":"ee0e5b7d-2dbe-4c0d-b5e9-2b1cf23c5120","type":"WheelZoomTool"},{"attributes":{},"id":"cbbf731c-55fb-4382-b082-294d504a18c7","type":"LinearScale"}],"root_ids":["6321b7b2-fdd1-47af-8767-3c7027f4c79b"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"e4791a37-bf25-4a96-b9f7-36864f7b515c","roots":{"6321b7b2-fdd1-47af-8767-3c7027f4c79b":"6651621b-d195-44c6-bc73-a9a384f489c0"}}];
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