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
      };var element = document.getElementById("c032c468-73f0-4cc4-99b2-e0e7a6c2a9e7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c032c468-73f0-4cc4-99b2-e0e7a6c2a9e7' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ee2a5f74-306c-4c24-a319-5e0db3f505d0":{"roots":{"references":[{"attributes":{"formatter":{"id":"8bc32078-8cb1-4ece-b393-37db19e76457","type":"MercatorTickFormatter"},"plot":{"id":"28a39406-650c-4492-8da6-1e396b34d97c","subtype":"Figure","type":"Plot"},"ticker":{"id":"6a3def30-576e-4778-8cbe-7b68881520c7","type":"MercatorTicker"}},"id":"1d58b4a0-1f5c-4927-a8f9-5731995f2259","type":"MercatorAxis"},{"attributes":{"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors,&amp;copy; &lt;a href=\\"https://cartodb.com/attributions\\"&gt;CartoDB&lt;/a&gt;","url":"https://tiles.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"},"id":"bad9603e-e9df-4e34-8f3d-b45caf8d9a38","type":"WMTSTileSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"e7a60d33-b6e9-437e-8cd1-ad3af14cb929","type":"PanTool"},{"id":"6cb2c447-b339-458b-94e0-8ca8707fa474","type":"WheelZoomTool"},{"id":"2f1c01c3-2eb4-472b-b16a-d539c0e736d2","type":"BoxZoomTool"},{"id":"e751c8e5-b9bc-477b-b0ae-831bd5376a1b","type":"SaveTool"},{"id":"da07f699-6bd4-4a78-9d00-9d1bedf8e37d","type":"ResetTool"},{"id":"129d5bb3-3957-4fe3-8d5b-b133f95212e9","type":"HelpTool"},{"id":"9d2f4524-b188-45c5-8780-19f15aec0ba5","type":"HoverTool"}]},"id":"75b1487a-1cb6-47c6-98e0-6aeb48ca6af7","type":"Toolbar"},{"attributes":{},"id":"55d8787d-d334-4750-806b-5ffba9145fd9","type":"UnionRenderers"},{"attributes":{},"id":"e751c8e5-b9bc-477b-b0ae-831bd5376a1b","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d44535ea-dab3-4a33-ac36-5cc9cadb2f2f","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x_coordinate"},"y":{"field":"y_coordinate"}},"id":"c102e3ea-4943-4dcd-8835-8ba4c482cc12","type":"Circle"},{"attributes":{"overlay":{"id":"d44535ea-dab3-4a33-ac36-5cc9cadb2f2f","type":"BoxAnnotation"}},"id":"2f1c01c3-2eb4-472b-b16a-d539c0e736d2","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#FB8072"},"line_color":{"value":"#FB8072"},"size":{"units":"screen","value":20},"x":{"field":"x_coordinate"},"y":{"field":"y_coordinate"}},"id":"cb0a0c5e-ef74-4df3-a369-b530e3072098","type":"Circle"},{"attributes":{"callback":null,"data":{"country":["Mali","Haiti","Lesotho"],"market":["Niono","Gonaives","Butha Buthe"],"mean":{"__ndarray__":"i9RvvboTy7+r1S0cJZywP5YSCEvwcYa/","dtype":"float64","shape":[3]},"x_coordinate":{"__ndarray__":"I6D92FBaJMHm7Y3a/d1ewUYdvAhgQkhB","dtype":"float64","shape":[3]},"y_coordinate":{"__ndarray__":"SjrhL+t2OEHzF9OhkddAQR2siSofkEnB","dtype":"float64","shape":[3]}},"selected":{"id":"79111e7b-08c2-49a0-8dfe-462f5e2d310f","type":"Selection"},"selection_policy":{"id":"55d8787d-d334-4750-806b-5ffba9145fd9","type":"UnionRenderers"}},"id":"96479285-5430-4ece-82d4-aeea42a11c03","type":"ColumnDataSource"},{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Country","@country"],["mean","@mean"],["market","@market"]]},"id":"9d2f4524-b188-45c5-8780-19f15aec0ba5","type":"HoverTool"},{"attributes":{},"id":"129d5bb3-3957-4fe3-8d5b-b133f95212e9","type":"HelpTool"},{"attributes":{"source":{"id":"96479285-5430-4ece-82d4-aeea42a11c03","type":"ColumnDataSource"}},"id":"61582e79-f645-4f2e-bd1f-56a696206f77","type":"CDSView"},{"attributes":{"plot":{"id":"28a39406-650c-4492-8da6-1e396b34d97c","subtype":"Figure","type":"Plot"},"ticker":{"id":"6a3def30-576e-4778-8cbe-7b68881520c7","type":"MercatorTicker"}},"id":"0f478766-4afe-4e45-b804-5c5ac6f201cd","type":"Grid"},{"attributes":{},"id":"220fcc98-3c02-4c74-a94e-d6d7d23b70f6","type":"LinearScale"},{"attributes":{},"id":"da07f699-6bd4-4a78-9d00-9d1bedf8e37d","type":"ResetTool"},{"attributes":{},"id":"6cb2c447-b339-458b-94e0-8ca8707fa474","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"710d40f9-a987-4fc6-8df9-c92aa27f9523","type":"MercatorTickFormatter"},"plot":{"id":"28a39406-650c-4492-8da6-1e396b34d97c","subtype":"Figure","type":"Plot"},"ticker":{"id":"3b5cedd8-0cfd-4dfc-8d0f-fa7f85db6a0b","type":"MercatorTicker"}},"id":"37d7c0bc-a051-40f0-9c5c-7db894f30b4d","type":"MercatorAxis"},{"attributes":{"dimension":"lon"},"id":"6a3def30-576e-4778-8cbe-7b68881520c7","type":"MercatorTicker"},{"attributes":{"dimension":1,"plot":{"id":"28a39406-650c-4492-8da6-1e396b34d97c","subtype":"Figure","type":"Plot"},"ticker":{"id":"3b5cedd8-0cfd-4dfc-8d0f-fa7f85db6a0b","type":"MercatorTicker"}},"id":"cc6bb788-a752-4d70-afbb-5297ec86933e","type":"Grid"},{"attributes":{"dimension":"lat"},"id":"710d40f9-a987-4fc6-8df9-c92aa27f9523","type":"MercatorTickFormatter"},{"attributes":{},"id":"7b7180d3-0b9a-432b-bb69-b5a526ca7da1","type":"LinearScale"},{"attributes":{"dimension":"lon"},"id":"8bc32078-8cb1-4ece-b393-37db19e76457","type":"MercatorTickFormatter"},{"attributes":{"tile_source":{"id":"bad9603e-e9df-4e34-8f3d-b45caf8d9a38","type":"WMTSTileSource"}},"id":"ffbc2992-8d9f-42eb-b805-16db436f771d","type":"TileRenderer"},{"attributes":{"dimension":"lat"},"id":"3b5cedd8-0cfd-4dfc-8d0f-fa7f85db6a0b","type":"MercatorTicker"},{"attributes":{"data_source":{"id":"96479285-5430-4ece-82d4-aeea42a11c03","type":"ColumnDataSource"},"glyph":{"id":"cb0a0c5e-ef74-4df3-a369-b530e3072098","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c102e3ea-4943-4dcd-8835-8ba4c482cc12","type":"Circle"},"selection_glyph":null,"view":{"id":"61582e79-f645-4f2e-bd1f-56a696206f77","type":"CDSView"}},"id":"3a1332fc-7567-4e4d-89be-d0f3a38512fc","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":7000000,"start":-1000000},"id":"68b7cc9d-88a8-47aa-b1ae-23b2dfa9822a","type":"Range1d"},{"attributes":{"callback":null,"end":6000000,"start":-6000000},"id":"8a27ab54-db3d-44af-9cd6-4ba13d58f356","type":"Range1d"},{"attributes":{},"id":"e7a60d33-b6e9-437e-8cd1-ad3af14cb929","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"4db0e32a-fca2-4da8-bebd-a57c5907bfd4","type":"Title"},{"attributes":{"below":[{"id":"1d58b4a0-1f5c-4927-a8f9-5731995f2259","type":"MercatorAxis"}],"left":[{"id":"37d7c0bc-a051-40f0-9c5c-7db894f30b4d","type":"MercatorAxis"}],"renderers":[{"id":"1d58b4a0-1f5c-4927-a8f9-5731995f2259","type":"MercatorAxis"},{"id":"0f478766-4afe-4e45-b804-5c5ac6f201cd","type":"Grid"},{"id":"37d7c0bc-a051-40f0-9c5c-7db894f30b4d","type":"MercatorAxis"},{"id":"cc6bb788-a752-4d70-afbb-5297ec86933e","type":"Grid"},{"id":"d44535ea-dab3-4a33-ac36-5cc9cadb2f2f","type":"BoxAnnotation"},{"id":"ffbc2992-8d9f-42eb-b805-16db436f771d","type":"TileRenderer"},{"id":"3a1332fc-7567-4e4d-89be-d0f3a38512fc","type":"GlyphRenderer"}],"title":{"id":"4db0e32a-fca2-4da8-bebd-a57c5907bfd4","type":"Title"},"toolbar":{"id":"75b1487a-1cb6-47c6-98e0-6aeb48ca6af7","type":"Toolbar"},"x_range":{"id":"8a27ab54-db3d-44af-9cd6-4ba13d58f356","type":"Range1d"},"x_scale":{"id":"220fcc98-3c02-4c74-a94e-d6d7d23b70f6","type":"LinearScale"},"y_range":{"id":"68b7cc9d-88a8-47aa-b1ae-23b2dfa9822a","type":"Range1d"},"y_scale":{"id":"7b7180d3-0b9a-432b-bb69-b5a526ca7da1","type":"LinearScale"}},"id":"28a39406-650c-4492-8da6-1e396b34d97c","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"79111e7b-08c2-49a0-8dfe-462f5e2d310f","type":"Selection"}],"root_ids":["28a39406-650c-4492-8da6-1e396b34d97c"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"ee2a5f74-306c-4c24-a319-5e0db3f505d0","roots":{"28a39406-650c-4492-8da6-1e396b34d97c":"c032c468-73f0-4cc4-99b2-e0e7a6c2a9e7"}}];
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