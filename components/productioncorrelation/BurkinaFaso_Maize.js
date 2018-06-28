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
      };var element = document.getElementById("45686fe4-fb9e-41b1-8ce3-18713495e98f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '45686fe4-fb9e-41b1-8ce3-18713495e98f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7cc49945-6a56-4db0-a619-f299e8a45cdd":{"roots":{"references":[{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production","@production"],["Price","@price"]]},"id":"72c619ef-77f9-4c24-93b6-89954ac01c80","type":"HoverTool"},{"attributes":{"callback":null},"id":"a27cdd88-9df6-4530-ae93-eb092ed4afa4","type":"DataRange1d"},{"attributes":{},"id":"9822c6d3-c2ae-46d2-ad2b-41c3866a79c3","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"BurkinaFaso_Maize"},"id":"2b8b4508-5c14-4b8e-844d-508cef4f86cf","type":"Title"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"23B/s9GtM0H04BKT2cQhQSjqv7SCgDJBZm7QRV5aKEG0JaPSDSUzQabaH3nR4zhBu/s/v8gWM0GroJ7ZYbkzQQrPTcjLuCVBKSNQMfagL0FFtJAHtR4xQcnIpQucXjBBFd/RQiGvMkGWFqznTlQjQQ==","dtype":"float64","shape":[14]},"y":{"__ndarray__":"DWEiy69vZECe3x0GoJBYQG1JIaMWjGNAjM4M9c6JXUB6KmYCYQhkQAVvviVYX2hAmpmZmZn9Y0CH8hrKa3hkQJzgUMwDjVtAA78zx1+EYUCDMnpb1oBiQLy7u7u772FApQ9GmE2vY0AnS8DCXL5ZQA==","dtype":"float64","shape":[14]}},"selected":{"id":"55aa2a00-6eb7-4bcd-badd-d1bfdedef310","type":"Selection"},"selection_policy":{"id":"efedbd1a-0beb-484b-b084-9ac7de2c381f","type":"UnionRenderers"}},"id":"fb70ee0c-c237-43d0-890d-cbcc4932384d","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"f71a91c1-5132-417c-987b-38d24a722cf0","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2683ceef-0f1b-4014-a923-cbfd5123404e","type":"Line"},{"attributes":{"data_source":{"id":"fb70ee0c-c237-43d0-890d-cbcc4932384d","type":"ColumnDataSource"},"glyph":{"id":"f71a91c1-5132-417c-987b-38d24a722cf0","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2683ceef-0f1b-4014-a923-cbfd5123404e","type":"Line"},"selection_glyph":null,"view":{"id":"838bfaad-621d-4cd9-9829-df58c8b7d3f6","type":"CDSView"}},"id":"18e6124f-a6f1-43d0-bfce-dcf27db0b286","type":"GlyphRenderer"},{"attributes":{"source":{"id":"fb70ee0c-c237-43d0-890d-cbcc4932384d","type":"ColumnDataSource"}},"id":"838bfaad-621d-4cd9-9829-df58c8b7d3f6","type":"CDSView"},{"attributes":{"below":[{"id":"8e6c995c-06c9-45a6-a17d-d92de2383a6f","type":"LinearAxis"}],"left":[{"id":"84a7069f-a8b8-4c9a-bcd5-e61e470fdd47","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"8e6c995c-06c9-45a6-a17d-d92de2383a6f","type":"LinearAxis"},{"id":"062818ac-4d9f-4718-8169-01dc2229fdba","type":"Grid"},{"id":"84a7069f-a8b8-4c9a-bcd5-e61e470fdd47","type":"LinearAxis"},{"id":"dc6b9640-430f-4e43-8dae-979387a64413","type":"Grid"},{"id":"0b6356e1-be63-43a1-aab1-8e0eab410558","type":"BoxAnnotation"},{"id":"70b87ee0-023f-421c-bfc2-7d2fc3cb63cc","type":"GlyphRenderer"},{"id":"18e6124f-a6f1-43d0-bfce-dcf27db0b286","type":"GlyphRenderer"}],"title":{"id":"2b8b4508-5c14-4b8e-844d-508cef4f86cf","type":"Title"},"toolbar":{"id":"614eabd3-3f4e-4d6f-827d-4d9be439b512","type":"Toolbar"},"x_range":{"id":"a27cdd88-9df6-4530-ae93-eb092ed4afa4","type":"DataRange1d"},"x_scale":{"id":"32396d38-5dbe-4ca3-a5e9-995a8926bc9a","type":"LinearScale"},"y_range":{"id":"4b1fea5e-d38c-49c9-9cc8-356189c5bfb1","type":"DataRange1d"},"y_scale":{"id":"1b4e5ff5-c2a2-4aa8-8173-49fe9d95691a","type":"LinearScale"}},"id":"4970701e-5030-462e-9c45-bd08eec86205","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"24cef747-0f1d-4154-8f37-13caf9982407","type":"Selection"},{"attributes":{},"id":"45a225db-5107-4af0-8603-565c707c5cc5","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"d0c34c43-72b8-45cc-a2a0-1816b0102cad","type":"PanTool"},{"id":"8e8bd9b8-6c35-4107-8cb0-b3fd2f919ec8","type":"WheelZoomTool"},{"id":"26c95d2b-2976-4445-8042-63149a7fe0dd","type":"BoxZoomTool"},{"id":"03dace82-9af8-4f4b-9a5b-5d53b38e652c","type":"SaveTool"},{"id":"7a6ac105-ffb6-4ec7-a91e-ea090e4a6154","type":"ResetTool"},{"id":"08d07728-d5e6-431a-bbd6-7f9b1cdf4725","type":"HelpTool"},{"id":"72c619ef-77f9-4c24-93b6-89954ac01c80","type":"HoverTool"}]},"id":"614eabd3-3f4e-4d6f-827d-4d9be439b512","type":"Toolbar"},{"attributes":{},"id":"fe71b1a3-b771-49a7-a680-8b544f9ea350","type":"UnionRenderers"},{"attributes":{},"id":"55aa2a00-6eb7-4bcd-badd-d1bfdedef310","type":"Selection"},{"attributes":{},"id":"32396d38-5dbe-4ca3-a5e9-995a8926bc9a","type":"LinearScale"},{"attributes":{},"id":"efedbd1a-0beb-484b-b084-9ac7de2c381f","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"4b1fea5e-d38c-49c9-9cc8-356189c5bfb1","type":"DataRange1d"},{"attributes":{},"id":"1b4e5ff5-c2a2-4aa8-8173-49fe9d95691a","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"0d9d6688-2514-483a-9ae2-dbbd72e40337","type":"Circle"},{"attributes":{"axis_label":"Production","axis_line_width":{"value":2},"formatter":{"id":"9822c6d3-c2ae-46d2-ad2b-41c3866a79c3","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"4970701e-5030-462e-9c45-bd08eec86205","subtype":"Figure","type":"Plot"},"ticker":{"id":"ca519023-ea00-4b23-ac2e-cb2c2a96c22b","type":"BasicTicker"}},"id":"8e6c995c-06c9-45a6-a17d-d92de2383a6f","type":"LinearAxis"},{"attributes":{},"id":"ca519023-ea00-4b23-ac2e-cb2c2a96c22b","type":"BasicTicker"},{"attributes":{"plot":{"id":"4970701e-5030-462e-9c45-bd08eec86205","subtype":"Figure","type":"Plot"},"ticker":{"id":"ca519023-ea00-4b23-ac2e-cb2c2a96c22b","type":"BasicTicker"}},"id":"062818ac-4d9f-4718-8169-01dc2229fdba","type":"Grid"},{"attributes":{"axis_label":"Price","axis_line_width":{"value":2},"formatter":{"id":"45a225db-5107-4af0-8603-565c707c5cc5","type":"BasicTickFormatter"},"plot":{"id":"4970701e-5030-462e-9c45-bd08eec86205","subtype":"Figure","type":"Plot"},"ticker":{"id":"40ea8647-f937-4713-866f-c5d33c750371","type":"BasicTicker"}},"id":"84a7069f-a8b8-4c9a-bcd5-e61e470fdd47","type":"LinearAxis"},{"attributes":{},"id":"40ea8647-f937-4713-866f-c5d33c750371","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"4970701e-5030-462e-9c45-bd08eec86205","subtype":"Figure","type":"Plot"},"ticker":{"id":"40ea8647-f937-4713-866f-c5d33c750371","type":"BasicTicker"}},"id":"dc6b9640-430f-4e43-8dae-979387a64413","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0b6356e1-be63-43a1-aab1-8e0eab410558","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"213f3c19-4c3d-4e11-abc0-5261c20be90a","type":"Circle"},{"attributes":{"data_source":{"id":"707e5ea1-b525-4716-ada6-9f998417f10a","type":"ColumnDataSource"},"glyph":{"id":"213f3c19-4c3d-4e11-abc0-5261c20be90a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0d9d6688-2514-483a-9ae2-dbbd72e40337","type":"Circle"},"selection_glyph":null,"view":{"id":"e2722951-9aca-4914-ad5b-7c0e899930a7","type":"CDSView"}},"id":"70b87ee0-023f-421c-bfc2-7d2fc3cb63cc","type":"GlyphRenderer"},{"attributes":{},"id":"d0c34c43-72b8-45cc-a2a0-1816b0102cad","type":"PanTool"},{"attributes":{"callback":null,"data":{"price":{"__ndarray__":"h/Iaymt4ZECc4FDMA41bQJ7fHQagkFhADWEiy69vZECMzgz1zoldQCdLwMJcvllAgzJ6W9aAYkBtSSGjFoxjQLy7u7u772FAmpmZmZn9Y0AFb74lWF9oQHoqZgJhCGRAA78zx1+EYUClD0aYTa9jQA==","dtype":"float64","shape":[14]},"production":{"__ndarray__":"AAAAAD0pOEEAAAAASE8kQQAAAAAIYx1BAAAAAJhiKEEAAAAA0HIqQQAAAAAk5yBBAAAAAATvLkEAAAAAvEwrQQAAAACMSzFBAAAAABFuMEEAAAAAXL83QQAAAAAKMThBAAAAAP3dNUEAAAAArGw2QQ==","dtype":"float64","shape":[14]}},"selected":{"id":"24cef747-0f1d-4154-8f37-13caf9982407","type":"Selection"},"selection_policy":{"id":"fe71b1a3-b771-49a7-a680-8b544f9ea350","type":"UnionRenderers"}},"id":"707e5ea1-b525-4716-ada6-9f998417f10a","type":"ColumnDataSource"},{"attributes":{"source":{"id":"707e5ea1-b525-4716-ada6-9f998417f10a","type":"ColumnDataSource"}},"id":"e2722951-9aca-4914-ad5b-7c0e899930a7","type":"CDSView"},{"attributes":{},"id":"8e8bd9b8-6c35-4107-8cb0-b3fd2f919ec8","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"0b6356e1-be63-43a1-aab1-8e0eab410558","type":"BoxAnnotation"}},"id":"26c95d2b-2976-4445-8042-63149a7fe0dd","type":"BoxZoomTool"},{"attributes":{},"id":"03dace82-9af8-4f4b-9a5b-5d53b38e652c","type":"SaveTool"},{"attributes":{},"id":"7a6ac105-ffb6-4ec7-a91e-ea090e4a6154","type":"ResetTool"},{"attributes":{},"id":"08d07728-d5e6-431a-bbd6-7f9b1cdf4725","type":"HelpTool"}],"root_ids":["4970701e-5030-462e-9c45-bd08eec86205"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"7cc49945-6a56-4db0-a619-f299e8a45cdd","roots":{"4970701e-5030-462e-9c45-bd08eec86205":"45686fe4-fb9e-41b1-8ce3-18713495e98f"}}];
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