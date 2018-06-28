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
      };var element = document.getElementById("d6e2d3e5-b5a6-4f57-bf00-8f35bc56ee20");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd6e2d3e5-b5a6-4f57-bf00-8f35bc56ee20' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3924a5a1-83c9-4704-b386-b3834fbf47ec":{"roots":{"references":[{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production","@production"],["Price","@price"]]},"id":"cce94128-d50a-4263-819a-2f02be432975","type":"HoverTool"},{"attributes":{"callback":null},"id":"cbd287b8-0c9c-437e-9819-863ca881369a","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"qkjJYf6kA0GnIW2ArowEQZh+B/KClARB27UwiAuY/ECCCvMtBj4AQU/O1LgJaPxAzFhIjRIwAkGyvZMtQgX6QNZKp0nobQNBMMYekEW6AEHSAXTf5V4DQQ==","dtype":"float64","shape":[11]},"y":{"__ndarray__":"s/zm65+cRUC1HU3uq2BHQBvcOc7yb0dAM/fydz5bNkCm4W9TjPI9QJXG88qT/TVAp5K4bATFQkBADj1W4lUxQLtBOEslMUVAsGpxPWPXP0DQU4FZ3BNFQA==","dtype":"float64","shape":[11]}},"selected":{"id":"79253069-cd53-47c5-b88b-969b269ab0b4","type":"Selection"},"selection_policy":{"id":"51efb0dd-5793-42bd-b4b7-47fbd47d146d","type":"UnionRenderers"}},"id":"de5ecc03-6db3-464e-8adf-bba1b4bce148","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"88debdb9-7eb7-448f-88a5-f24f6b8a304a","type":"Line"},{"attributes":{"plot":null,"text":"Kenya_Sorghum"},"id":"0af7590f-3c1f-4479-9f69-807818f40ef8","type":"Title"},{"attributes":{},"id":"bd5c8fd9-9d4c-412a-99a3-aea7b7e0125e","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"341b7a3d-32b3-4631-a041-9be87e75ff2b","type":"Line"},{"attributes":{"data_source":{"id":"de5ecc03-6db3-464e-8adf-bba1b4bce148","type":"ColumnDataSource"},"glyph":{"id":"88debdb9-7eb7-448f-88a5-f24f6b8a304a","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"341b7a3d-32b3-4631-a041-9be87e75ff2b","type":"Line"},"selection_glyph":null,"view":{"id":"81a6fd94-6ebd-4331-a966-a8f763f49804","type":"CDSView"}},"id":"e3f49ffa-15b1-40a5-9433-0239f3406751","type":"GlyphRenderer"},{"attributes":{"source":{"id":"de5ecc03-6db3-464e-8adf-bba1b4bce148","type":"ColumnDataSource"}},"id":"81a6fd94-6ebd-4331-a966-a8f763f49804","type":"CDSView"},{"attributes":{"below":[{"id":"e35b92f5-710d-4287-af2e-cfa703cef97e","type":"LinearAxis"}],"left":[{"id":"99d04361-aa9f-450f-9e84-097f4f388eb0","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"e35b92f5-710d-4287-af2e-cfa703cef97e","type":"LinearAxis"},{"id":"cb83c9e9-3d0c-44b7-bc66-8523bd81511f","type":"Grid"},{"id":"99d04361-aa9f-450f-9e84-097f4f388eb0","type":"LinearAxis"},{"id":"6ec98191-6ae5-4172-b636-fb2951851220","type":"Grid"},{"id":"56ad1983-280a-41ee-b052-d18756f5e005","type":"BoxAnnotation"},{"id":"2ad4b6f3-7ff2-4792-b459-0e106a126f4d","type":"GlyphRenderer"},{"id":"e3f49ffa-15b1-40a5-9433-0239f3406751","type":"GlyphRenderer"}],"title":{"id":"0af7590f-3c1f-4479-9f69-807818f40ef8","type":"Title"},"toolbar":{"id":"55835e10-d57e-4c0b-b978-d632db109010","type":"Toolbar"},"x_range":{"id":"cbd287b8-0c9c-437e-9819-863ca881369a","type":"DataRange1d"},"x_scale":{"id":"7284ebe4-ead8-4b34-b09f-26be322c8202","type":"LinearScale"},"y_range":{"id":"b8cdd3c0-65b8-4ce4-9f3d-ca98d8235843","type":"DataRange1d"},"y_scale":{"id":"90480e78-c1fe-4c1b-8c33-2f3e06363a3a","type":"LinearScale"}},"id":"96dae2df-bced-420d-b7ed-1d18d80a6575","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"af6b770b-a00f-4793-ab8f-027e78f52a90","type":"UnionRenderers"},{"attributes":{},"id":"c84af5e5-a903-415d-bd34-73cce6ad19d0","type":"BasicTickFormatter"},{"attributes":{},"id":"34593bd1-4f75-4e91-bd86-85a7ace1935c","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"e2b43b4e-2ded-4404-9899-494bf5546bbf","type":"PanTool"},{"id":"7a5a70ec-e28d-4f3f-80d6-e2dbea877afa","type":"WheelZoomTool"},{"id":"dd598451-0483-4a7e-9ae5-2aa189584a84","type":"BoxZoomTool"},{"id":"9946d230-133a-4dbc-9e9b-15c1c182fce5","type":"SaveTool"},{"id":"8725ba6c-e150-40c6-99eb-2adcbe69b612","type":"ResetTool"},{"id":"1a5a1a19-7e95-41d0-baac-a2d5c98abaf1","type":"HelpTool"},{"id":"cce94128-d50a-4263-819a-2f02be432975","type":"HoverTool"}]},"id":"55835e10-d57e-4c0b-b978-d632db109010","type":"Toolbar"},{"attributes":{},"id":"51efb0dd-5793-42bd-b4b7-47fbd47d146d","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"ac1f16d0-82e7-4d0f-86e0-3e38d0f4ee74","type":"ColumnDataSource"},"glyph":{"id":"3d01815d-cb54-420c-94b4-9589b145c2b8","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"60cc2dee-ae6a-4059-87b0-d703618832be","type":"Circle"},"selection_glyph":null,"view":{"id":"3fde77e1-5b91-47dd-afdd-096fc1eed356","type":"CDSView"}},"id":"2ad4b6f3-7ff2-4792-b459-0e106a126f4d","type":"GlyphRenderer"},{"attributes":{},"id":"79253069-cd53-47c5-b88b-969b269ab0b4","type":"Selection"},{"attributes":{},"id":"7284ebe4-ead8-4b34-b09f-26be322c8202","type":"LinearScale"},{"attributes":{"callback":null},"id":"b8cdd3c0-65b8-4ce4-9f3d-ca98d8235843","type":"DataRange1d"},{"attributes":{},"id":"90480e78-c1fe-4c1b-8c33-2f3e06363a3a","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"60cc2dee-ae6a-4059-87b0-d703618832be","type":"Circle"},{"attributes":{"axis_label":"Production","axis_line_width":{"value":2},"formatter":{"id":"c84af5e5-a903-415d-bd34-73cce6ad19d0","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"96dae2df-bced-420d-b7ed-1d18d80a6575","subtype":"Figure","type":"Plot"},"ticker":{"id":"ab00b91b-f472-4d15-9d3e-7414e2818ef4","type":"BasicTicker"}},"id":"e35b92f5-710d-4287-af2e-cfa703cef97e","type":"LinearAxis"},{"attributes":{},"id":"ab00b91b-f472-4d15-9d3e-7414e2818ef4","type":"BasicTicker"},{"attributes":{"plot":{"id":"96dae2df-bced-420d-b7ed-1d18d80a6575","subtype":"Figure","type":"Plot"},"ticker":{"id":"ab00b91b-f472-4d15-9d3e-7414e2818ef4","type":"BasicTicker"}},"id":"cb83c9e9-3d0c-44b7-bc66-8523bd81511f","type":"Grid"},{"attributes":{"axis_label":"Price","axis_line_width":{"value":2},"formatter":{"id":"bd5c8fd9-9d4c-412a-99a3-aea7b7e0125e","type":"BasicTickFormatter"},"plot":{"id":"96dae2df-bced-420d-b7ed-1d18d80a6575","subtype":"Figure","type":"Plot"},"ticker":{"id":"3172e2d7-517c-40c7-9181-00243f8748b5","type":"BasicTicker"}},"id":"99d04361-aa9f-450f-9e84-097f4f388eb0","type":"LinearAxis"},{"attributes":{},"id":"3172e2d7-517c-40c7-9181-00243f8748b5","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"96dae2df-bced-420d-b7ed-1d18d80a6575","subtype":"Figure","type":"Plot"},"ticker":{"id":"3172e2d7-517c-40c7-9181-00243f8748b5","type":"BasicTicker"}},"id":"6ec98191-6ae5-4172-b636-fb2951851220","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56ad1983-280a-41ee-b052-d18756f5e005","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"3d01815d-cb54-420c-94b4-9589b145c2b8","type":"Circle"},{"attributes":{"source":{"id":"ac1f16d0-82e7-4d0f-86e0-3e38d0f4ee74","type":"ColumnDataSource"}},"id":"3fde77e1-5b91-47dd-afdd-096fc1eed356","type":"CDSView"},{"attributes":{},"id":"e2b43b4e-2ded-4404-9899-494bf5546bbf","type":"PanTool"},{"attributes":{"callback":null,"data":{"price":{"__ndarray__":"0FOBWdwTRUAz9/J3Pls2QEAOPVbiVTFAlcbzypP9NUCuanE9Y9c/QKfhb1OM8j1Ap5K4bATFQkC7QThLJTFFQLUdTe6rYEdAG9w5zvJvR0Cz/Obrn5xFQA==","dtype":"float64","shape":[11]},"production":{"__ndarray__":"AAAAAICQ/EAAAAAAoAMAQQAAAAAo/QFBAAAAAICF6kAAAAAAgCv4QAAAAAAQBwRBAAAAACiEA0EAAAAAGFcEQQAAAADInARBAAAAAIisBUEAAAAAQBIHQQ==","dtype":"float64","shape":[11]}},"selected":{"id":"34593bd1-4f75-4e91-bd86-85a7ace1935c","type":"Selection"},"selection_policy":{"id":"af6b770b-a00f-4793-ab8f-027e78f52a90","type":"UnionRenderers"}},"id":"ac1f16d0-82e7-4d0f-86e0-3e38d0f4ee74","type":"ColumnDataSource"},{"attributes":{},"id":"7a5a70ec-e28d-4f3f-80d6-e2dbea877afa","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"56ad1983-280a-41ee-b052-d18756f5e005","type":"BoxAnnotation"}},"id":"dd598451-0483-4a7e-9ae5-2aa189584a84","type":"BoxZoomTool"},{"attributes":{},"id":"9946d230-133a-4dbc-9e9b-15c1c182fce5","type":"SaveTool"},{"attributes":{},"id":"8725ba6c-e150-40c6-99eb-2adcbe69b612","type":"ResetTool"},{"attributes":{},"id":"1a5a1a19-7e95-41d0-baac-a2d5c98abaf1","type":"HelpTool"}],"root_ids":["96dae2df-bced-420d-b7ed-1d18d80a6575"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"3924a5a1-83c9-4704-b386-b3834fbf47ec","roots":{"96dae2df-bced-420d-b7ed-1d18d80a6575":"d6e2d3e5-b5a6-4f57-bf00-8f35bc56ee20"}}];
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