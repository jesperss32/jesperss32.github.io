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
      };var element = document.getElementById("3812e1e1-50b1-4918-aa5f-804a074e7b2a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3812e1e1-50b1-4918-aa5f-804a074e7b2a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b97876df-a048-4a1d-ab81-e54c531c6b5a":{"roots":{"references":[{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production","@production"],["Price","@price"]]},"id":"480b5b1a-4db6-4753-9a89-596f6e937e9a","type":"HoverTool"},{"attributes":{"callback":null},"id":"53d1c235-77ee-4e9a-a4d1-2b3398363b0e","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"A2iaMmzNOEE8+NkoDLM1QVEV1050HjlB4odOLbfLOUGY7HizuX01QWjhahhFbTpB9zL4mgOkOUG2V3CPFrkzQf6mhBactTRB2OS7jjZgOEFJGx2l4bA5QcAq1rCNpT1BBNjlNvujNUE=","dtype":"float64","shape":[13]},"y":{"__ndarray__":"NfxtilHDBUDCZ9gVIPf/Pz3/FYJDWgZAnTbQaQOdB0CUtTomeDD/P6D0SZ/0yQhA/UGGyg5TB0Dr6smGIZr4P9XaNebrRvw/N24dROL3BEAhdAvnBmsHQE+jGbJsyQ5AqIrktf6+/z8=","dtype":"float64","shape":[13]}},"selected":{"id":"281524ba-c97a-42d8-836e-b6808aad8d88","type":"Selection"},"selection_policy":{"id":"ce155851-fb20-461f-bc39-fe0fc47b8e77","type":"UnionRenderers"}},"id":"080c2dd3-dd4f-4559-aab6-3b2339e3b920","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"c431f730-1902-47e0-957d-f1546ad46e34","type":"Line"},{"attributes":{"plot":null,"text":"Guatemala_Maize(white)"},"id":"f9363e46-3f68-44b2-beaa-a42f6a38361e","type":"Title"},{"attributes":{},"id":"efe48f0c-5334-468c-b786-d460c508acff","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2c9a5108-6b33-461e-b423-85c1af0fcb4e","type":"Line"},{"attributes":{"data_source":{"id":"080c2dd3-dd4f-4559-aab6-3b2339e3b920","type":"ColumnDataSource"},"glyph":{"id":"c431f730-1902-47e0-957d-f1546ad46e34","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2c9a5108-6b33-461e-b423-85c1af0fcb4e","type":"Line"},"selection_glyph":null,"view":{"id":"9625de91-882b-423c-a182-857ccdd59b33","type":"CDSView"}},"id":"2ef60c45-3d43-40fc-8c21-b48b9fccabe4","type":"GlyphRenderer"},{"attributes":{"source":{"id":"080c2dd3-dd4f-4559-aab6-3b2339e3b920","type":"ColumnDataSource"}},"id":"9625de91-882b-423c-a182-857ccdd59b33","type":"CDSView"},{"attributes":{"below":[{"id":"7a56f741-f35c-46d3-8cd7-f1b140304f7a","type":"LinearAxis"}],"left":[{"id":"dbe173ef-162a-466b-8807-23424a0e8e75","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"7a56f741-f35c-46d3-8cd7-f1b140304f7a","type":"LinearAxis"},{"id":"ad2a87c2-acf3-4784-b82e-178e0b41ffcb","type":"Grid"},{"id":"dbe173ef-162a-466b-8807-23424a0e8e75","type":"LinearAxis"},{"id":"057a6b94-87c1-46bb-8e98-ec7ba51c89c6","type":"Grid"},{"id":"50b049d9-4c52-48de-a26a-48b0a801a205","type":"BoxAnnotation"},{"id":"d4034eb1-059f-4da3-89e7-027377c1ed61","type":"GlyphRenderer"},{"id":"2ef60c45-3d43-40fc-8c21-b48b9fccabe4","type":"GlyphRenderer"}],"title":{"id":"f9363e46-3f68-44b2-beaa-a42f6a38361e","type":"Title"},"toolbar":{"id":"cf2cb5c2-05d1-4b1a-bd7c-253a499d36d9","type":"Toolbar"},"x_range":{"id":"53d1c235-77ee-4e9a-a4d1-2b3398363b0e","type":"DataRange1d"},"x_scale":{"id":"67a34a23-e0b5-41ba-bf9f-0bc034dc0c66","type":"LinearScale"},"y_range":{"id":"2a469b6d-88f3-487a-b96e-3426c1f10505","type":"DataRange1d"},"y_scale":{"id":"71a572ab-4c65-4863-95dc-c4e8b9b4b170","type":"LinearScale"}},"id":"b39af2c5-a4bf-4bca-961d-f2997ac22e09","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9838ec81-8472-41cf-94a6-acde88c948bd","type":"Selection"},{"attributes":{},"id":"4eede631-c80d-49ad-bc8d-b5aaed3f0bef","type":"BasicTickFormatter"},{"attributes":{},"id":"ce155851-fb20-461f-bc39-fe0fc47b8e77","type":"UnionRenderers"},{"attributes":{},"id":"db06df1e-f1c4-47c4-9c5d-cbd9ea8ad620","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6c79b83a-3fb8-415c-9433-900732740c63","type":"PanTool"},{"id":"42440cf8-e5cd-416f-b5b1-f4a5ffd3b20d","type":"WheelZoomTool"},{"id":"97eef77f-af99-4433-af12-16dc15ff1dbe","type":"BoxZoomTool"},{"id":"3ad5f3e8-9f6c-4ef8-998a-8c72a39e0438","type":"SaveTool"},{"id":"1407fbcd-9e24-4441-91e8-0b31deda983e","type":"ResetTool"},{"id":"3291853e-dac1-49fc-bb0f-13d416dc47e0","type":"HelpTool"},{"id":"480b5b1a-4db6-4753-9a89-596f6e937e9a","type":"HoverTool"}]},"id":"cf2cb5c2-05d1-4b1a-bd7c-253a499d36d9","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"b775d35a-d76d-424b-bd70-a92a356e313e","type":"Circle"},{"attributes":{},"id":"67a34a23-e0b5-41ba-bf9f-0bc034dc0c66","type":"LinearScale"},{"attributes":{"callback":null},"id":"2a469b6d-88f3-487a-b96e-3426c1f10505","type":"DataRange1d"},{"attributes":{},"id":"71a572ab-4c65-4863-95dc-c4e8b9b4b170","type":"LinearScale"},{"attributes":{"data_source":{"id":"dec33305-4d85-43c1-8efe-79c241a62984","type":"ColumnDataSource"},"glyph":{"id":"b775d35a-d76d-424b-bd70-a92a356e313e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b9a5d254-496c-4f41-b2c5-b38486dbd9fd","type":"Circle"},"selection_glyph":null,"view":{"id":"56d19ae6-4447-4096-b39f-170ffab4a6aa","type":"CDSView"}},"id":"d4034eb1-059f-4da3-89e7-027377c1ed61","type":"GlyphRenderer"},{"attributes":{"axis_label":"Production","axis_line_width":{"value":2},"formatter":{"id":"efe48f0c-5334-468c-b786-d460c508acff","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"b39af2c5-a4bf-4bca-961d-f2997ac22e09","subtype":"Figure","type":"Plot"},"ticker":{"id":"67052c57-aa1e-409b-9364-3569be1bfdfa","type":"BasicTicker"}},"id":"7a56f741-f35c-46d3-8cd7-f1b140304f7a","type":"LinearAxis"},{"attributes":{},"id":"67052c57-aa1e-409b-9364-3569be1bfdfa","type":"BasicTicker"},{"attributes":{"plot":{"id":"b39af2c5-a4bf-4bca-961d-f2997ac22e09","subtype":"Figure","type":"Plot"},"ticker":{"id":"67052c57-aa1e-409b-9364-3569be1bfdfa","type":"BasicTicker"}},"id":"ad2a87c2-acf3-4784-b82e-178e0b41ffcb","type":"Grid"},{"attributes":{"axis_label":"Price","axis_line_width":{"value":2},"formatter":{"id":"4eede631-c80d-49ad-bc8d-b5aaed3f0bef","type":"BasicTickFormatter"},"plot":{"id":"b39af2c5-a4bf-4bca-961d-f2997ac22e09","subtype":"Figure","type":"Plot"},"ticker":{"id":"2cee15f3-4723-4949-b64e-640ab197be67","type":"BasicTicker"}},"id":"dbe173ef-162a-466b-8807-23424a0e8e75","type":"LinearAxis"},{"attributes":{},"id":"281524ba-c97a-42d8-836e-b6808aad8d88","type":"Selection"},{"attributes":{},"id":"2cee15f3-4723-4949-b64e-640ab197be67","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"b39af2c5-a4bf-4bca-961d-f2997ac22e09","subtype":"Figure","type":"Plot"},"ticker":{"id":"2cee15f3-4723-4949-b64e-640ab197be67","type":"BasicTicker"}},"id":"057a6b94-87c1-46bb-8e98-ec7ba51c89c6","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"50b049d9-4c52-48de-a26a-48b0a801a205","type":"BoxAnnotation"},{"attributes":{"source":{"id":"dec33305-4d85-43c1-8efe-79c241a62984","type":"ColumnDataSource"}},"id":"56d19ae6-4447-4096-b39f-170ffab4a6aa","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"b9a5d254-496c-4f41-b2c5-b38486dbd9fd","type":"Circle"},{"attributes":{},"id":"6c79b83a-3fb8-415c-9433-900732740c63","type":"PanTool"},{"attributes":{"callback":null,"data":{"price":{"__ndarray__":"6+rJhiGa+D/V2jXm60b8P5a1OiZ4MP8/qIrktf6+/z/DZ9gVIPf/PzduHUTi9wRAPf8VgkNaBkA1/G2KUcMFQE+jGbJsyQ5AoPRJn/TJCEAhdAvnBmsHQJ020GkDnQdA/UGGyg5TB0A=","dtype":"float64","shape":[13]},"production":{"__ndarray__":"AAAAAHvyMkEAAAAApDszQQAAAACcijNBAAAAAPL+NEEAAAAAxro2QQAAAAAKRTpBAAAAANPOOEEAAAAAaf84QQAAAADjjzlBAAAAAElMOkEAAAAAWGQ7QQAAAADxsjtBAAAAAMxJPEE=","dtype":"float64","shape":[13]}},"selected":{"id":"9838ec81-8472-41cf-94a6-acde88c948bd","type":"Selection"},"selection_policy":{"id":"db06df1e-f1c4-47c4-9c5d-cbd9ea8ad620","type":"UnionRenderers"}},"id":"dec33305-4d85-43c1-8efe-79c241a62984","type":"ColumnDataSource"},{"attributes":{},"id":"42440cf8-e5cd-416f-b5b1-f4a5ffd3b20d","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"50b049d9-4c52-48de-a26a-48b0a801a205","type":"BoxAnnotation"}},"id":"97eef77f-af99-4433-af12-16dc15ff1dbe","type":"BoxZoomTool"},{"attributes":{},"id":"3ad5f3e8-9f6c-4ef8-998a-8c72a39e0438","type":"SaveTool"},{"attributes":{},"id":"1407fbcd-9e24-4441-91e8-0b31deda983e","type":"ResetTool"},{"attributes":{},"id":"3291853e-dac1-49fc-bb0f-13d416dc47e0","type":"HelpTool"}],"root_ids":["b39af2c5-a4bf-4bca-961d-f2997ac22e09"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"b97876df-a048-4a1d-ab81-e54c531c6b5a","roots":{"b39af2c5-a4bf-4bca-961d-f2997ac22e09":"3812e1e1-50b1-4918-aa5f-804a074e7b2a"}}];
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