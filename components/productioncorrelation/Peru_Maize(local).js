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
      };var element = document.getElementById("458f511b-a23e-4bfa-a4e1-5162b84f3424");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '458f511b-a23e-4bfa-a4e1-5162b84f3424' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b3a20ddb-b699-4e5e-a049-43bec46c9532":{"roots":{"references":[{"attributes":{"callback":null},"id":"693c7661-1b04-4189-9f41-e0e3bb3f5a19","type":"DataRange1d"},{"attributes":{},"id":"17c5ccb1-3993-43a3-803a-24798049b665","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"MhBmnU5fN0HsvLB7k205QVEz0fAVEjdBFmDGY4vsNEEqMpLiGm45QT3Qnm7M3jNBBFMg25MtOUG8VJvpJgo3QTC/jdbhYDlBKDbXpepONkE=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"BJ020GkDD0CTXyz5xdISQArXo3A9Cg5AnTbQaQMdB0DUBjptoNMSQDfQaQOdtgNA7FG4HoVrEkBxPQrXo/ANQH+x5BdLvhJAFK5H4XqUC0A=","dtype":"float64","shape":[10]}},"selected":{"id":"ab360ef5-5c58-4d4d-a43c-3ab29143384c","type":"Selection"},"selection_policy":{"id":"a63a1b80-06c1-40d2-8e71-6e9445d140a9","type":"UnionRenderers"}},"id":"b7088c1c-91f3-42b9-bfbb-22e0efaf627d","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Peru_Maize(local)"},"id":"9581a55f-be84-4820-afb6-1c668b41b34a","type":"Title"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"b863bdfb-8e4d-43d3-8669-964330935a51","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3bc55692-d10d-4da8-a6a5-7f4fe63c2ce4","type":"Line"},{"attributes":{"data_source":{"id":"b7088c1c-91f3-42b9-bfbb-22e0efaf627d","type":"ColumnDataSource"},"glyph":{"id":"b863bdfb-8e4d-43d3-8669-964330935a51","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3bc55692-d10d-4da8-a6a5-7f4fe63c2ce4","type":"Line"},"selection_glyph":null,"view":{"id":"1a902809-e903-4907-8a7f-6bff97174f3c","type":"CDSView"}},"id":"54093d0e-f721-443e-b81d-ef3f3dd22c71","type":"GlyphRenderer"},{"attributes":{"source":{"id":"b7088c1c-91f3-42b9-bfbb-22e0efaf627d","type":"ColumnDataSource"}},"id":"1a902809-e903-4907-8a7f-6bff97174f3c","type":"CDSView"},{"attributes":{"below":[{"id":"73eb482b-5f15-4cb7-a2fe-ab6bf4bd8d5f","type":"LinearAxis"}],"left":[{"id":"a34928b0-ad08-4b04-a4af-96f2ee9eedfc","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"73eb482b-5f15-4cb7-a2fe-ab6bf4bd8d5f","type":"LinearAxis"},{"id":"c0d789ba-c562-4ce0-aa67-420827fc5cad","type":"Grid"},{"id":"a34928b0-ad08-4b04-a4af-96f2ee9eedfc","type":"LinearAxis"},{"id":"c17f29b5-3c40-457f-bdd2-bd9556d97361","type":"Grid"},{"id":"10524e80-13df-42cc-9cd9-e966c9bc3c07","type":"BoxAnnotation"},{"id":"377190c2-bc91-4c9f-8245-675e8ea6f352","type":"GlyphRenderer"},{"id":"54093d0e-f721-443e-b81d-ef3f3dd22c71","type":"GlyphRenderer"}],"title":{"id":"9581a55f-be84-4820-afb6-1c668b41b34a","type":"Title"},"toolbar":{"id":"11e47644-1a79-44c8-a80b-05d034d11374","type":"Toolbar"},"x_range":{"id":"693c7661-1b04-4189-9f41-e0e3bb3f5a19","type":"DataRange1d"},"x_scale":{"id":"83a9419f-274c-44ff-a855-7066226a6e71","type":"LinearScale"},"y_range":{"id":"6b3c96fc-2e58-41c0-a227-55dd6aede19b","type":"DataRange1d"},"y_scale":{"id":"a1c37e0b-b5e0-4786-923b-8763dbacddba","type":"LinearScale"}},"id":"01c0c2e6-1605-44be-8078-0e7b8f313d27","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e846ddee-c938-4dc3-a7e9-30642e1ae65d","type":"Selection"},{"attributes":{},"id":"db30716f-618d-4bb7-b6d6-e8d3fb5bc607","type":"BasicTickFormatter"},{"attributes":{},"id":"81eab03f-c64b-431e-9e66-cc3f56719115","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"88efab35-4e2f-488c-a3e7-f733eb49538a","type":"PanTool"},{"id":"10437b58-a13a-4807-aca6-363631840b07","type":"WheelZoomTool"},{"id":"904ee980-1ec0-44f8-9cde-9bb0125642f4","type":"BoxZoomTool"},{"id":"4896ecf2-5678-4fcf-8ee7-9cc927884afa","type":"SaveTool"},{"id":"2a5a3cd5-9938-4a91-9ab9-ed152a7663b8","type":"ResetTool"},{"id":"51e160eb-fdf9-439b-9cbb-1d5c7a16508a","type":"HelpTool"},{"id":"68969a2f-0dbb-4df5-94b4-46affa611683","type":"HoverTool"}]},"id":"11e47644-1a79-44c8-a80b-05d034d11374","type":"Toolbar"},{"attributes":{},"id":"ab360ef5-5c58-4d4d-a43c-3ab29143384c","type":"Selection"},{"attributes":{"source":{"id":"99b5c361-9c20-4e29-9841-2aae9e8961eb","type":"ColumnDataSource"}},"id":"935564a0-6de2-4a84-a6eb-82c306cc6ca6","type":"CDSView"},{"attributes":{},"id":"83a9419f-274c-44ff-a855-7066226a6e71","type":"LinearScale"},{"attributes":{"callback":null},"id":"6b3c96fc-2e58-41c0-a227-55dd6aede19b","type":"DataRange1d"},{"attributes":{},"id":"a1c37e0b-b5e0-4786-923b-8763dbacddba","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"a9216cd3-1c80-42c0-92ab-a145fb2c6102","type":"Circle"},{"attributes":{"axis_label":"Production","axis_line_width":{"value":2},"formatter":{"id":"17c5ccb1-3993-43a3-803a-24798049b665","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"01c0c2e6-1605-44be-8078-0e7b8f313d27","subtype":"Figure","type":"Plot"},"ticker":{"id":"95accfb4-4bee-4001-9c5d-e9ec91786dab","type":"BasicTicker"}},"id":"73eb482b-5f15-4cb7-a2fe-ab6bf4bd8d5f","type":"LinearAxis"},{"attributes":{},"id":"95accfb4-4bee-4001-9c5d-e9ec91786dab","type":"BasicTicker"},{"attributes":{"plot":{"id":"01c0c2e6-1605-44be-8078-0e7b8f313d27","subtype":"Figure","type":"Plot"},"ticker":{"id":"95accfb4-4bee-4001-9c5d-e9ec91786dab","type":"BasicTicker"}},"id":"c0d789ba-c562-4ce0-aa67-420827fc5cad","type":"Grid"},{"attributes":{},"id":"a63a1b80-06c1-40d2-8e71-6e9445d140a9","type":"UnionRenderers"},{"attributes":{"axis_label":"Price","axis_line_width":{"value":2},"formatter":{"id":"db30716f-618d-4bb7-b6d6-e8d3fb5bc607","type":"BasicTickFormatter"},"plot":{"id":"01c0c2e6-1605-44be-8078-0e7b8f313d27","subtype":"Figure","type":"Plot"},"ticker":{"id":"92676b47-f1e1-4c3a-acbc-a7099d7ca2aa","type":"BasicTicker"}},"id":"a34928b0-ad08-4b04-a4af-96f2ee9eedfc","type":"LinearAxis"},{"attributes":{},"id":"92676b47-f1e1-4c3a-acbc-a7099d7ca2aa","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"01c0c2e6-1605-44be-8078-0e7b8f313d27","subtype":"Figure","type":"Plot"},"ticker":{"id":"92676b47-f1e1-4c3a-acbc-a7099d7ca2aa","type":"BasicTicker"}},"id":"c17f29b5-3c40-457f-bdd2-bd9556d97361","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"10524e80-13df-42cc-9cd9-e966c9bc3c07","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"72e7ce64-f324-4336-b673-0aadf14e5f13","type":"Circle"},{"attributes":{"data_source":{"id":"99b5c361-9c20-4e29-9841-2aae9e8961eb","type":"ColumnDataSource"},"glyph":{"id":"72e7ce64-f324-4336-b673-0aadf14e5f13","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a9216cd3-1c80-42c0-92ab-a145fb2c6102","type":"Circle"},"selection_glyph":null,"view":{"id":"935564a0-6de2-4a84-a6eb-82c306cc6ca6","type":"CDSView"}},"id":"377190c2-bc91-4c9f-8245-675e8ea6f352","type":"GlyphRenderer"},{"attributes":{},"id":"88efab35-4e2f-488c-a3e7-f733eb49538a","type":"PanTool"},{"attributes":{"callback":null,"data":{"price":{"__ndarray__":"f7HkF0u+EkA30GkDnbYDQJ020GkDHQdAFK5H4XqUC0AEnTbQaQMPQHE9Ctej8A1ACtejcD0KDkDsUbgehWsSQJNfLPnF0hJA1AY6baDTEkA=","dtype":"float64","shape":[10]},"production":{"__ndarray__":"AAAAALEJN0EAAAAA71wzQQAAAAC04DRBAAAAAMCYNkEAAAAAwcw3QQAAAABLhDdBAAAAAP4gN0EAAAAAkoo5QQAAAABGfTlBAAAAAPylOkE=","dtype":"float64","shape":[10]}},"selected":{"id":"e846ddee-c938-4dc3-a7e9-30642e1ae65d","type":"Selection"},"selection_policy":{"id":"81eab03f-c64b-431e-9e66-cc3f56719115","type":"UnionRenderers"}},"id":"99b5c361-9c20-4e29-9841-2aae9e8961eb","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"10524e80-13df-42cc-9cd9-e966c9bc3c07","type":"BoxAnnotation"}},"id":"904ee980-1ec0-44f8-9cde-9bb0125642f4","type":"BoxZoomTool"},{"attributes":{},"id":"10437b58-a13a-4807-aca6-363631840b07","type":"WheelZoomTool"},{"attributes":{},"id":"4896ecf2-5678-4fcf-8ee7-9cc927884afa","type":"SaveTool"},{"attributes":{},"id":"2a5a3cd5-9938-4a91-9ab9-ed152a7663b8","type":"ResetTool"},{"attributes":{},"id":"51e160eb-fdf9-439b-9cbb-1d5c7a16508a","type":"HelpTool"},{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production","@production"],["Price","@price"]]},"id":"68969a2f-0dbb-4df5-94b4-46affa611683","type":"HoverTool"}],"root_ids":["01c0c2e6-1605-44be-8078-0e7b8f313d27"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"b3a20ddb-b699-4e5e-a049-43bec46c9532","roots":{"01c0c2e6-1605-44be-8078-0e7b8f313d27":"458f511b-a23e-4bfa-a4e1-5162b84f3424"}}];
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