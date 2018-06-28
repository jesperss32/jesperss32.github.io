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
      };var element = document.getElementById("795274cc-688e-4c09-b47c-e720236af34a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '795274cc-688e-4c09-b47c-e720236af34a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e081b440-e6af-48bc-92ae-f3c9341ca17c":{"roots":{"references":[{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production","@production"],["Price","@price"]]},"id":"07b64ec8-a5c3-45c3-9df5-185bd9b3acee","type":"HoverTool"},{"attributes":{"callback":null},"id":"9d2ed2f0-8cf0-4f33-a1e8-2a487fa65e50","type":"DataRange1d"},{"attributes":{},"id":"a9eae97e-0f48-461a-9d12-894ac4089b40","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Peru_Potatoes"},"id":"a7195c3f-6e47-4299-8e17-3aa216f6ef5b","type":"Title"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"8TxpJvfBS0Gq/CTnlMNOQbuSXPTTE05BsOCbSOF1TkEq4xXsrCtRQb5+sadT3E1BvnOH7g5PUEEC+Rgr78tSQeZwjLpEUkxB3OS0yV6nTEGm3hl+u+ZOQQ==","dtype":"float64","shape":[11]},"y":{"__ndarray__":"Yskvlvxi8D/w7u7u7u71P6uqqqqqqvQ/YCz5xZJf9T+MiIiIiIj8P0RERERERPQ/3ECnDXRa+T9EREREREQBQG2g0wY6bfE/CtejcD0K8j8wlvxiyS/2Pw==","dtype":"float64","shape":[11]}},"selected":{"id":"c53a8b2c-e440-4250-abb7-a3215f9f6704","type":"Selection"},"selection_policy":{"id":"f181a703-3625-4976-8fe1-62eda8042dcd","type":"UnionRenderers"}},"id":"a72639d3-cffc-4328-bf9f-3200cfd92a1a","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"c2ba2509-ac4c-48fd-bd86-5b36698faea0","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"652c4506-9199-46cc-a394-7576539b23fc","type":"Line"},{"attributes":{"data_source":{"id":"a72639d3-cffc-4328-bf9f-3200cfd92a1a","type":"ColumnDataSource"},"glyph":{"id":"c2ba2509-ac4c-48fd-bd86-5b36698faea0","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"652c4506-9199-46cc-a394-7576539b23fc","type":"Line"},"selection_glyph":null,"view":{"id":"0048c2b8-d2da-43b4-b629-72217b433ca4","type":"CDSView"}},"id":"775dfb7d-7655-4c35-b5b2-003ffe65a502","type":"GlyphRenderer"},{"attributes":{"source":{"id":"a72639d3-cffc-4328-bf9f-3200cfd92a1a","type":"ColumnDataSource"}},"id":"0048c2b8-d2da-43b4-b629-72217b433ca4","type":"CDSView"},{"attributes":{"below":[{"id":"f8f6a496-a823-4c17-90ba-47434b8c1836","type":"LinearAxis"}],"left":[{"id":"bfd2bd5a-ef9d-494c-865e-986cfa2effe9","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f8f6a496-a823-4c17-90ba-47434b8c1836","type":"LinearAxis"},{"id":"94f2864c-12c4-4529-8a6a-fbf349449928","type":"Grid"},{"id":"bfd2bd5a-ef9d-494c-865e-986cfa2effe9","type":"LinearAxis"},{"id":"4d1b021c-8b59-42b6-bc1a-02a78d1b49af","type":"Grid"},{"id":"44338604-e493-4b8f-a98a-78ce5a1a8ef8","type":"BoxAnnotation"},{"id":"63b11a96-3708-4094-b8ce-95bdeb0820df","type":"GlyphRenderer"},{"id":"775dfb7d-7655-4c35-b5b2-003ffe65a502","type":"GlyphRenderer"}],"title":{"id":"a7195c3f-6e47-4299-8e17-3aa216f6ef5b","type":"Title"},"toolbar":{"id":"0dea2aa4-fb81-48bb-b09d-c07dd84762b6","type":"Toolbar"},"x_range":{"id":"9d2ed2f0-8cf0-4f33-a1e8-2a487fa65e50","type":"DataRange1d"},"x_scale":{"id":"3fe91af4-211a-45e7-9ba8-32a2cd7dbd58","type":"LinearScale"},"y_range":{"id":"8d2f9748-7a00-4a98-a1f9-71d55f3ac648","type":"DataRange1d"},"y_scale":{"id":"cad9c96a-0ae8-42cf-b4e2-8c6195b7beea","type":"LinearScale"}},"id":"119c0496-6050-489c-9fd4-53ab4e4a9677","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"11e5f857-7b65-4bcb-b225-ac4d677a9655","type":"UnionRenderers"},{"attributes":{},"id":"b609f0aa-762f-4dda-979c-a6f5f24311fc","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"e1411c6f-466d-4c9f-af6e-2307c1df2064","type":"PanTool"},{"id":"911c9781-fe54-462c-bc3f-ee8c4e4fe2cb","type":"WheelZoomTool"},{"id":"5371c1dc-2f53-4b59-905d-164af791d7a7","type":"BoxZoomTool"},{"id":"9ad6f69d-09ab-4ee6-ba49-06b8178ec1c6","type":"SaveTool"},{"id":"2b70f290-0820-49a8-b9e3-1afc9be5670d","type":"ResetTool"},{"id":"838778de-c458-4a7a-9b31-d2e44175a9cb","type":"HelpTool"},{"id":"07b64ec8-a5c3-45c3-9df5-185bd9b3acee","type":"HoverTool"}]},"id":"0dea2aa4-fb81-48bb-b09d-c07dd84762b6","type":"Toolbar"},{"attributes":{},"id":"f6f5bab1-44b4-41b7-a9ff-5d53e9026ef8","type":"Selection"},{"attributes":{},"id":"f181a703-3625-4976-8fe1-62eda8042dcd","type":"UnionRenderers"},{"attributes":{},"id":"3fe91af4-211a-45e7-9ba8-32a2cd7dbd58","type":"LinearScale"},{"attributes":{},"id":"c53a8b2c-e440-4250-abb7-a3215f9f6704","type":"Selection"},{"attributes":{"callback":null},"id":"8d2f9748-7a00-4a98-a1f9-71d55f3ac648","type":"DataRange1d"},{"attributes":{},"id":"cad9c96a-0ae8-42cf-b4e2-8c6195b7beea","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"a6bea6d8-c2a9-4d52-91d1-d0613bc00a65","type":"Circle"},{"attributes":{"axis_label":"Production","axis_line_width":{"value":2},"formatter":{"id":"a9eae97e-0f48-461a-9d12-894ac4089b40","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"119c0496-6050-489c-9fd4-53ab4e4a9677","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd5468c6-3006-47c0-840e-55345b8651e0","type":"BasicTicker"}},"id":"f8f6a496-a823-4c17-90ba-47434b8c1836","type":"LinearAxis"},{"attributes":{},"id":"fd5468c6-3006-47c0-840e-55345b8651e0","type":"BasicTicker"},{"attributes":{"plot":{"id":"119c0496-6050-489c-9fd4-53ab4e4a9677","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd5468c6-3006-47c0-840e-55345b8651e0","type":"BasicTicker"}},"id":"94f2864c-12c4-4529-8a6a-fbf349449928","type":"Grid"},{"attributes":{"axis_label":"Price","axis_line_width":{"value":2},"formatter":{"id":"b609f0aa-762f-4dda-979c-a6f5f24311fc","type":"BasicTickFormatter"},"plot":{"id":"119c0496-6050-489c-9fd4-53ab4e4a9677","subtype":"Figure","type":"Plot"},"ticker":{"id":"36a0a383-75d7-4c56-90c3-86bee57b5158","type":"BasicTicker"}},"id":"bfd2bd5a-ef9d-494c-865e-986cfa2effe9","type":"LinearAxis"},{"attributes":{},"id":"36a0a383-75d7-4c56-90c3-86bee57b5158","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"119c0496-6050-489c-9fd4-53ab4e4a9677","subtype":"Figure","type":"Plot"},"ticker":{"id":"36a0a383-75d7-4c56-90c3-86bee57b5158","type":"BasicTicker"}},"id":"4d1b021c-8b59-42b6-bc1a-02a78d1b49af","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"44338604-e493-4b8f-a98a-78ce5a1a8ef8","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"c602be8c-2f1e-4776-9806-e28821770631","type":"Circle"},{"attributes":{"data_source":{"id":"0608ecc0-1309-4550-bb69-8b9cb5516f1f","type":"ColumnDataSource"},"glyph":{"id":"c602be8c-2f1e-4776-9806-e28821770631","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a6bea6d8-c2a9-4d52-91d1-d0613bc00a65","type":"Circle"},"selection_glyph":null,"view":{"id":"c3e04920-4dfa-48d1-994e-73c0d814f768","type":"CDSView"}},"id":"63b11a96-3708-4094-b8ce-95bdeb0820df","type":"GlyphRenderer"},{"attributes":{},"id":"e1411c6f-466d-4c9f-af6e-2307c1df2064","type":"PanTool"},{"attributes":{"callback":null,"data":{"price":{"__ndarray__":"REREREREAUBtoNMGOm3xP2LJL5b8YvA/CtejcD0K8j9gLPnFkl/1P6uqqqqqqvQ/RERERERE9D/w7u7u7u71P9xApw10Wvk/MJb8Yskv9j+MiIiIiIj8Pw==","dtype":"float64","shape":[11]},"production":{"__ndarray__":"AAAAwCnJUEEAAAAAkMhIQQAAAAAw2UlBAAAAgJFxS0EAAACAFLpMQQAAAIDyGU1BAAAAgAMST0EAAABA1hFRQQAAAECMb1FBAAAAwLbyUUEAAAAAtPJRQQ==","dtype":"float64","shape":[11]}},"selected":{"id":"f6f5bab1-44b4-41b7-a9ff-5d53e9026ef8","type":"Selection"},"selection_policy":{"id":"11e5f857-7b65-4bcb-b225-ac4d677a9655","type":"UnionRenderers"}},"id":"0608ecc0-1309-4550-bb69-8b9cb5516f1f","type":"ColumnDataSource"},{"attributes":{"source":{"id":"0608ecc0-1309-4550-bb69-8b9cb5516f1f","type":"ColumnDataSource"}},"id":"c3e04920-4dfa-48d1-994e-73c0d814f768","type":"CDSView"},{"attributes":{},"id":"911c9781-fe54-462c-bc3f-ee8c4e4fe2cb","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"44338604-e493-4b8f-a98a-78ce5a1a8ef8","type":"BoxAnnotation"}},"id":"5371c1dc-2f53-4b59-905d-164af791d7a7","type":"BoxZoomTool"},{"attributes":{},"id":"9ad6f69d-09ab-4ee6-ba49-06b8178ec1c6","type":"SaveTool"},{"attributes":{},"id":"2b70f290-0820-49a8-b9e3-1afc9be5670d","type":"ResetTool"},{"attributes":{},"id":"838778de-c458-4a7a-9b31-d2e44175a9cb","type":"HelpTool"}],"root_ids":["119c0496-6050-489c-9fd4-53ab4e4a9677"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"e081b440-e6af-48bc-92ae-f3c9341ca17c","roots":{"119c0496-6050-489c-9fd4-53ab4e4a9677":"795274cc-688e-4c09-b47c-e720236af34a"}}];
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