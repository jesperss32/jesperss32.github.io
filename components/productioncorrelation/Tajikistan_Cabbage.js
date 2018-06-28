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
      };var element = document.getElementById("493dc278-7598-48be-adf1-1cc9b6d58d37");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '493dc278-7598-48be-adf1-1cc9b6d58d37' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ac40e757-bb09-473f-994c-a2c1478cf9f8":{"roots":{"references":[{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production","@production"],["Price","@price"]]},"id":"3d75001f-56b3-4c9c-8802-ffb011e8b6f9","type":"HoverTool"},{"attributes":{"callback":null},"id":"1d9f110a-33eb-4124-bf15-c55d5f5cfad6","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"5vCseKE68kCXrLZDT8zsQPY0qOpOQOJAltP8Ejqa8kCCLMI/EpLjQJ0d3XZKGOFA3dzPFtKR50C936XclobvQBAtO0V5rOVATKElUsMd8kAr+S96jKDpQFmDnvDYqu9AliKjZE0c70D8P6AruYzwQA==","dtype":"float64","shape":[14]},"y":{"__ndarray__":"tMh2vp/qBEBeukkMAiv8P0NJW2+utOI/e82FpCmVBUAdKws5yWnnPwzlRLsKKd0/sCtA7jXX8j8yCKwcWoQAQJhuEoPA6u4/xGfYFSC3BEAXt9EA3oL2P+UXS36xpABAJb9Y8oslAEDG2YfPsOsBQA==","dtype":"float64","shape":[14]}},"selected":{"id":"ef2a1f26-b0ed-4a27-b804-f4aef48ba5e6","type":"Selection"},"selection_policy":{"id":"b5a5cd69-e1d0-4a04-9e24-c286eb41dbb3","type":"UnionRenderers"}},"id":"79f8abc3-5ce3-4450-8fd3-38838fe15c39","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Tajikistan_Cabbage"},"id":"49a844c5-2711-48af-ae2f-3735ac792d86","type":"Title"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4fbfe79d-4a7b-45a4-af9d-7f93d706e5da","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"d161bf45-8f11-4f43-b859-338d675e6b19","type":"Line"},{"attributes":{"data_source":{"id":"79f8abc3-5ce3-4450-8fd3-38838fe15c39","type":"ColumnDataSource"},"glyph":{"id":"4fbfe79d-4a7b-45a4-af9d-7f93d706e5da","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d161bf45-8f11-4f43-b859-338d675e6b19","type":"Line"},"selection_glyph":null,"view":{"id":"d8cfe1fa-7d4f-4fd3-b2db-7ace5e807418","type":"CDSView"}},"id":"e642c007-0f83-4d97-a06b-2c1e43f7ab87","type":"GlyphRenderer"},{"attributes":{"source":{"id":"79f8abc3-5ce3-4450-8fd3-38838fe15c39","type":"ColumnDataSource"}},"id":"d8cfe1fa-7d4f-4fd3-b2db-7ace5e807418","type":"CDSView"},{"attributes":{},"id":"2fe22bda-2acc-495d-95c5-167e97704053","type":"UnionRenderers"},{"attributes":{"below":[{"id":"1f8a9b58-3ce2-498d-a5fe-52195fce3633","type":"LinearAxis"}],"left":[{"id":"77298341-89ab-418e-95e3-d7ea4b1847f6","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1f8a9b58-3ce2-498d-a5fe-52195fce3633","type":"LinearAxis"},{"id":"e59f7161-5324-4e4e-b55d-47ca970fb6b5","type":"Grid"},{"id":"77298341-89ab-418e-95e3-d7ea4b1847f6","type":"LinearAxis"},{"id":"793d2acd-1343-44c5-bb4a-b4a7968e9fc4","type":"Grid"},{"id":"962f5960-1445-4974-807a-9551b5115e72","type":"BoxAnnotation"},{"id":"ecea3bc2-2951-49d6-91ee-1b954001b043","type":"GlyphRenderer"},{"id":"e642c007-0f83-4d97-a06b-2c1e43f7ab87","type":"GlyphRenderer"}],"title":{"id":"49a844c5-2711-48af-ae2f-3735ac792d86","type":"Title"},"toolbar":{"id":"734d4e36-5486-446c-a743-3e346551008d","type":"Toolbar"},"x_range":{"id":"1d9f110a-33eb-4124-bf15-c55d5f5cfad6","type":"DataRange1d"},"x_scale":{"id":"6c9f63f2-f8a2-474c-8f02-c72954b4b797","type":"LinearScale"},"y_range":{"id":"e83da146-cf12-4e24-9556-b2b4ab268aab","type":"DataRange1d"},"y_scale":{"id":"5542899b-8978-488c-b6f4-41e3a117e387","type":"LinearScale"}},"id":"ef1c07e8-b3d0-47c3-a7c7-57fe5d2fd5d2","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"715e3745-0c02-4c19-9369-afefd77f232f","type":"BasicTickFormatter"},{"attributes":{},"id":"b1d616f0-772f-4128-ae53-647765d19851","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6830c8ba-327f-491d-b933-2b064be37141","type":"PanTool"},{"id":"ad7a7025-7c72-4637-9278-d77efebe546a","type":"WheelZoomTool"},{"id":"59fe4fd3-7a35-47a0-8c28-a5bf2842b499","type":"BoxZoomTool"},{"id":"361f8559-e3e9-400f-b86c-0b6f7117bafc","type":"SaveTool"},{"id":"2cc67f38-e9da-4476-9664-a1cfa69996eb","type":"ResetTool"},{"id":"946b95d0-b242-4a05-a86d-fa8bb2eda78f","type":"HelpTool"},{"id":"3d75001f-56b3-4c9c-8802-ffb011e8b6f9","type":"HoverTool"}]},"id":"734d4e36-5486-446c-a743-3e346551008d","type":"Toolbar"},{"attributes":{},"id":"b5a5cd69-e1d0-4a04-9e24-c286eb41dbb3","type":"UnionRenderers"},{"attributes":{},"id":"408fe101-7278-4ea3-975a-0b8f0c65fe61","type":"BasicTickFormatter"},{"attributes":{},"id":"ef2a1f26-b0ed-4a27-b804-f4aef48ba5e6","type":"Selection"},{"attributes":{},"id":"6c9f63f2-f8a2-474c-8f02-c72954b4b797","type":"LinearScale"},{"attributes":{"callback":null},"id":"e83da146-cf12-4e24-9556-b2b4ab268aab","type":"DataRange1d"},{"attributes":{},"id":"5542899b-8978-488c-b6f4-41e3a117e387","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"c6114365-0e4b-41ba-bec6-28701709598b","type":"Circle"},{"attributes":{"axis_label":"Production","axis_line_width":{"value":2},"formatter":{"id":"408fe101-7278-4ea3-975a-0b8f0c65fe61","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"ef1c07e8-b3d0-47c3-a7c7-57fe5d2fd5d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"72111294-36e1-42cb-9950-2eb648f890e1","type":"BasicTicker"}},"id":"1f8a9b58-3ce2-498d-a5fe-52195fce3633","type":"LinearAxis"},{"attributes":{},"id":"72111294-36e1-42cb-9950-2eb648f890e1","type":"BasicTicker"},{"attributes":{"plot":{"id":"ef1c07e8-b3d0-47c3-a7c7-57fe5d2fd5d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"72111294-36e1-42cb-9950-2eb648f890e1","type":"BasicTicker"}},"id":"e59f7161-5324-4e4e-b55d-47ca970fb6b5","type":"Grid"},{"attributes":{"axis_label":"Price","axis_line_width":{"value":2},"formatter":{"id":"715e3745-0c02-4c19-9369-afefd77f232f","type":"BasicTickFormatter"},"plot":{"id":"ef1c07e8-b3d0-47c3-a7c7-57fe5d2fd5d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"28e4cea2-c5c6-4458-b02a-1b884df7f784","type":"BasicTicker"}},"id":"77298341-89ab-418e-95e3-d7ea4b1847f6","type":"LinearAxis"},{"attributes":{},"id":"28e4cea2-c5c6-4458-b02a-1b884df7f784","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"ef1c07e8-b3d0-47c3-a7c7-57fe5d2fd5d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"28e4cea2-c5c6-4458-b02a-1b884df7f784","type":"BasicTicker"}},"id":"793d2acd-1343-44c5-bb4a-b4a7968e9fc4","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"962f5960-1445-4974-807a-9551b5115e72","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"9997320b-9a40-4336-99bb-452b402b4384","type":"Circle"},{"attributes":{"data_source":{"id":"3118398f-0aec-4e86-9df1-2ce4143cbb1c","type":"ColumnDataSource"},"glyph":{"id":"9997320b-9a40-4336-99bb-452b402b4384","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c6114365-0e4b-41ba-bec6-28701709598b","type":"Circle"},"selection_glyph":null,"view":{"id":"b90f7a29-5a5a-4b62-a782-82975fd7ec9a","type":"CDSView"}},"id":"ecea3bc2-2951-49d6-91ee-1b954001b043","type":"GlyphRenderer"},{"attributes":{},"id":"6830c8ba-327f-491d-b933-2b064be37141","type":"PanTool"},{"attributes":{"source":{"id":"3118398f-0aec-4e86-9df1-2ce4143cbb1c","type":"ColumnDataSource"}},"id":"b90f7a29-5a5a-4b62-a782-82975fd7ec9a","type":"CDSView"},{"attributes":{"callback":null,"data":{"price":{"__ndarray__":"xtmHz7DrAUAN5US7CindP0NJW2+utOI/HSsLOclp5z+YbhKDwOruP7ArQO411/I/F7fRAN6C9j/lF0t+saQAQCW/WPKLJQBAXrpJDAIr/D97zYWkKZUFQMRn2BUgtwRAMgisHFqEAEC0yHa+n+oEQA==","dtype":"float64","shape":[14]},"production":{"__ndarray__":"AAAAAIDq9kAAAAAAAGLcQAAAAACgeuJAAAAAAACC5EAAAAAAgBjnQAAAAAAAUehAAAAAAICD6kAAAAAAAM/sQAAAAAAA2+pAAAAAAMAx6EAAAAAAwHrsQAAAAADQW/BAAAAAACC28UAAAAAAIDz1QA==","dtype":"float64","shape":[14]}},"selected":{"id":"b1d616f0-772f-4128-ae53-647765d19851","type":"Selection"},"selection_policy":{"id":"2fe22bda-2acc-495d-95c5-167e97704053","type":"UnionRenderers"}},"id":"3118398f-0aec-4e86-9df1-2ce4143cbb1c","type":"ColumnDataSource"},{"attributes":{},"id":"ad7a7025-7c72-4637-9278-d77efebe546a","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"962f5960-1445-4974-807a-9551b5115e72","type":"BoxAnnotation"}},"id":"59fe4fd3-7a35-47a0-8c28-a5bf2842b499","type":"BoxZoomTool"},{"attributes":{},"id":"361f8559-e3e9-400f-b86c-0b6f7117bafc","type":"SaveTool"},{"attributes":{},"id":"2cc67f38-e9da-4476-9664-a1cfa69996eb","type":"ResetTool"},{"attributes":{},"id":"946b95d0-b242-4a05-a86d-fa8bb2eda78f","type":"HelpTool"}],"root_ids":["ef1c07e8-b3d0-47c3-a7c7-57fe5d2fd5d2"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"ac40e757-bb09-473f-994c-a2c1478cf9f8","roots":{"ef1c07e8-b3d0-47c3-a7c7-57fe5d2fd5d2":"493dc278-7598-48be-adf1-1cc9b6d58d37"}}];
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