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
      };var element = document.getElementById("98aa84c7-5185-4a54-8796-55d8b8c2e4e8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '98aa84c7-5185-4a54-8796-55d8b8c2e4e8' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-0.12.16.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.16.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.16.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-0.12.16.min.js"];
    
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
                    
                  var docs_json = '{"892ca037-a7c2-4ce8-9494-1101f310d795":{"roots":{"references":[{"attributes":{},"id":"930fd836-a29c-4e50-b215-f7acf69a215c","type":"LinearScale"},{"attributes":{},"id":"6ff1efb0-efaa-4c43-8fbc-994dbc4c479c","type":"SaveTool"},{"attributes":{"callback":null},"id":"a5f4dad8-575e-479a-b850-267e29b8004c","type":"DataRange1d"},{"attributes":{},"id":"5888a0ab-12a0-4406-b5fa-4ea51737df80","type":"ResetTool"},{"attributes":{"formatter":{"id":"870aa8a3-e963-448f-af6f-9eef48135134","type":"BasicTickFormatter"},"plot":{"id":"e43da996-9f7f-4af2-b6d0-8df2e09edafc","subtype":"Figure","type":"Plot"},"ticker":{"id":"f1f64dd2-bca3-40ac-95b4-f5d90a9da3d9","type":"BasicTicker"}},"id":"b20b37ab-2b54-454a-ba7b-3cc6be63f25c","type":"LinearAxis"},{"attributes":{},"id":"0e64a604-40e9-43d1-8505-9d807d36f837","type":"HelpTool"},{"attributes":{"plot":{"id":"e43da996-9f7f-4af2-b6d0-8df2e09edafc","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd409b5e-297c-4199-9ba3-b7d1580c08be","type":"BasicTicker"}},"id":"8278f771-c558-4194-9226-793a91a99460","type":"Grid"},{"attributes":{"formatter":{"id":"a5d64490-da99-484a-b9a3-61ee0c9cd305","type":"BasicTickFormatter"},"plot":{"id":"e43da996-9f7f-4af2-b6d0-8df2e09edafc","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd409b5e-297c-4199-9ba3-b7d1580c08be","type":"BasicTicker"}},"id":"4c3215d7-440a-49f4-8db7-90d7581d171e","type":"LinearAxis"},{"attributes":{"callback":null},"id":"96720fd0-f830-4c02-b0cb-8b5e8ae561f9","type":"DataRange1d"},{"attributes":{},"id":"9dcba040-d55a-4aa6-aae8-58180514ea50","type":"Selection"},{"attributes":{},"id":"fd409b5e-297c-4199-9ba3-b7d1580c08be","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"21cc9507-51bc-4ab6-b93b-218c12d51a6b","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5000fcd3-2548-4b10-bb83-e22d0c446514","type":"Circle"},{"attributes":{},"id":"f1f64dd2-bca3-40ac-95b4-f5d90a9da3d9","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"e52f8bf3-7d69-4fa8-bac9-9a201f0a44af","type":"Title"},{"attributes":{"source":{"id":"52d9f1b0-2a8f-4a6c-aedd-5eb2c56d6c03","type":"ColumnDataSource"}},"id":"65860d5e-402c-4d0d-a867-5b2d60946b72","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"9dcba040-d55a-4aa6-aae8-58180514ea50","type":"Selection"},"selection_policy":{"id":"5ddce73b-4ebb-4ef8-a58a-72a30a9fd0d4","type":"UnionRenderers"}},"id":"52d9f1b0-2a8f-4a6c-aedd-5eb2c56d6c03","type":"ColumnDataSource"},{"attributes":{},"id":"a5d64490-da99-484a-b9a3-61ee0c9cd305","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"e43da996-9f7f-4af2-b6d0-8df2e09edafc","subtype":"Figure","type":"Plot"},"ticker":{"id":"f1f64dd2-bca3-40ac-95b4-f5d90a9da3d9","type":"BasicTicker"}},"id":"a2938a6c-0e8e-4040-a6a8-15b0fdcf05f8","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8e54dd12-53bd-40b8-9866-ed51b088a253","type":"BoxAnnotation"},{"attributes":{},"id":"870aa8a3-e963-448f-af6f-9eef48135134","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"52d9f1b0-2a8f-4a6c-aedd-5eb2c56d6c03","type":"ColumnDataSource"},"glyph":{"id":"5000fcd3-2548-4b10-bb83-e22d0c446514","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21cc9507-51bc-4ab6-b93b-218c12d51a6b","type":"Circle"},"selection_glyph":null,"view":{"id":"65860d5e-402c-4d0d-a867-5b2d60946b72","type":"CDSView"}},"id":"76f7eff5-d202-4474-a740-af8cfd0ab564","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5ee9f872-9be9-4f09-b485-a4c6acfd9a46","type":"PanTool"},{"id":"56c803e7-5025-42db-ae71-a8362d4ccbd2","type":"WheelZoomTool"},{"id":"50f823cb-c38c-4abb-9aa8-ff535a26d022","type":"BoxZoomTool"},{"id":"6ff1efb0-efaa-4c43-8fbc-994dbc4c479c","type":"SaveTool"},{"id":"5888a0ab-12a0-4406-b5fa-4ea51737df80","type":"ResetTool"},{"id":"0e64a604-40e9-43d1-8505-9d807d36f837","type":"HelpTool"}]},"id":"f75a14bd-405e-4090-b10a-8fb9b85dc1cb","type":"Toolbar"},{"attributes":{},"id":"24adb943-c409-490d-b225-9384ff80d34c","type":"LinearScale"},{"attributes":{},"id":"5ee9f872-9be9-4f09-b485-a4c6acfd9a46","type":"PanTool"},{"attributes":{},"id":"5ddce73b-4ebb-4ef8-a58a-72a30a9fd0d4","type":"UnionRenderers"},{"attributes":{"below":[{"id":"4c3215d7-440a-49f4-8db7-90d7581d171e","type":"LinearAxis"}],"left":[{"id":"b20b37ab-2b54-454a-ba7b-3cc6be63f25c","type":"LinearAxis"}],"renderers":[{"id":"4c3215d7-440a-49f4-8db7-90d7581d171e","type":"LinearAxis"},{"id":"8278f771-c558-4194-9226-793a91a99460","type":"Grid"},{"id":"b20b37ab-2b54-454a-ba7b-3cc6be63f25c","type":"LinearAxis"},{"id":"a2938a6c-0e8e-4040-a6a8-15b0fdcf05f8","type":"Grid"},{"id":"8e54dd12-53bd-40b8-9866-ed51b088a253","type":"BoxAnnotation"},{"id":"76f7eff5-d202-4474-a740-af8cfd0ab564","type":"GlyphRenderer"}],"title":{"id":"e52f8bf3-7d69-4fa8-bac9-9a201f0a44af","type":"Title"},"toolbar":{"id":"f75a14bd-405e-4090-b10a-8fb9b85dc1cb","type":"Toolbar"},"x_range":{"id":"96720fd0-f830-4c02-b0cb-8b5e8ae561f9","type":"DataRange1d"},"x_scale":{"id":"24adb943-c409-490d-b225-9384ff80d34c","type":"LinearScale"},"y_range":{"id":"a5f4dad8-575e-479a-b850-267e29b8004c","type":"DataRange1d"},"y_scale":{"id":"930fd836-a29c-4e50-b215-f7acf69a215c","type":"LinearScale"}},"id":"e43da996-9f7f-4af2-b6d0-8df2e09edafc","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"56c803e7-5025-42db-ae71-a8362d4ccbd2","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"8e54dd12-53bd-40b8-9866-ed51b088a253","type":"BoxAnnotation"}},"id":"50f823cb-c38c-4abb-9aa8-ff535a26d022","type":"BoxZoomTool"}],"root_ids":["e43da996-9f7f-4af2-b6d0-8df2e09edafc"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"892ca037-a7c2-4ce8-9494-1101f310d795","elementid":"98aa84c7-5185-4a54-8796-55d8b8c2e4e8","modelid":"e43da996-9f7f-4af2-b6d0-8df2e09edafc"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.16.min.css");
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