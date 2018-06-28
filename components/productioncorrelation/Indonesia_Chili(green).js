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
      };var element = document.getElementById("df22576a-f774-4aaf-a8ee-45f1cf0d07c8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'df22576a-f774-4aaf-a8ee-45f1cf0d07c8' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"bb085018-c19b-4517-aa9a-aa0f473ecb07":{"roots":{"references":[{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production","@production"],["Price","@price"]]},"id":"de8f63bc-0d49-4bcb-88a5-923728ba98b6","type":"HoverTool"},{"attributes":{"callback":null},"id":"55863d31-360d-4c6e-88a8-f7a41317eda1","type":"DataRange1d"},{"attributes":{},"id":"95002f00-5f07-4ffc-9e4b-024ec23c4890","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Indonesia_Chili(green)"},"id":"613063e0-a7bb-4bc9-9459-9312be542452","type":"Title"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"svf/P5ukNEHYrTo8PoI9QeGgyFQStzhB/I6NRcsIO0HUGVcJDp08QWi7JzEN5TFBAiEoAWNgNEHGhQeRK7U8Qa0tkAPawTVB64AwGbZGOEE=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"VFVVVbXI0kBUVVVVRWLiQKyqqqpKC9tAAAAAAKC/30Crqqqq0nnhQFwgQfEra8pAArwFElQ+0kAAAAAASJLhQAAAAABQC9VAAAAAAGAn2kA=","dtype":"float64","shape":[10]}},"selected":{"id":"aa18b626-912e-4888-b26f-edbe6b9d87bf","type":"Selection"},"selection_policy":{"id":"209fea66-b502-4386-9adf-74e2f79f55da","type":"UnionRenderers"}},"id":"f1033109-6607-4802-99aa-3538bf74a104","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"c7d50dba-d7d7-4b3a-8732-ee32cd1b8da4","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"086b836a-c32f-402f-bc27-097edfcb76aa","type":"Line"},{"attributes":{"data_source":{"id":"f1033109-6607-4802-99aa-3538bf74a104","type":"ColumnDataSource"},"glyph":{"id":"c7d50dba-d7d7-4b3a-8732-ee32cd1b8da4","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"086b836a-c32f-402f-bc27-097edfcb76aa","type":"Line"},"selection_glyph":null,"view":{"id":"890398d0-0895-477c-9927-ccde4aafee00","type":"CDSView"}},"id":"b0437407-88c4-4c83-b30d-cc3cc8020d8a","type":"GlyphRenderer"},{"attributes":{"source":{"id":"f1033109-6607-4802-99aa-3538bf74a104","type":"ColumnDataSource"}},"id":"890398d0-0895-477c-9927-ccde4aafee00","type":"CDSView"},{"attributes":{"below":[{"id":"1e621d64-4fa1-4f13-abcd-079a6bf3ed42","type":"LinearAxis"}],"left":[{"id":"8b3ac8dd-c1e4-407c-a45c-6da4b2526c24","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1e621d64-4fa1-4f13-abcd-079a6bf3ed42","type":"LinearAxis"},{"id":"384bac95-e52f-4a6e-a6d5-21e4c27c63ee","type":"Grid"},{"id":"8b3ac8dd-c1e4-407c-a45c-6da4b2526c24","type":"LinearAxis"},{"id":"ad30261e-3344-4008-aede-4038173fe1cc","type":"Grid"},{"id":"d2159b46-baac-4542-9f4e-c9f8ea6e9297","type":"BoxAnnotation"},{"id":"10eded0e-2574-43de-b388-feb764f8abef","type":"GlyphRenderer"},{"id":"b0437407-88c4-4c83-b30d-cc3cc8020d8a","type":"GlyphRenderer"}],"title":{"id":"613063e0-a7bb-4bc9-9459-9312be542452","type":"Title"},"toolbar":{"id":"57462b63-8989-40cb-a4c2-442e72c56c3b","type":"Toolbar"},"x_range":{"id":"55863d31-360d-4c6e-88a8-f7a41317eda1","type":"DataRange1d"},"x_scale":{"id":"830e8bfa-c052-4a2d-95eb-2e5cf40d4f09","type":"LinearScale"},"y_range":{"id":"77bbe713-0517-4f17-ae21-2aaf9076a843","type":"DataRange1d"},"y_scale":{"id":"d27e1c32-395a-4d50-8e2e-725fba4a3e59","type":"LinearScale"}},"id":"fd8fd47c-2ca6-45e1-9445-27ba35b4922e","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2e919624-3c41-4723-9b24-d79486dc26db","type":"BasicTickFormatter"},{"attributes":{},"id":"2224e6c6-e2dd-4290-bc0a-08898e49b086","type":"Selection"},{"attributes":{},"id":"27425e6e-98ed-4da9-ab3e-e58f390c6023","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"37968db2-64d9-4f1b-9dce-87bc805c8f5f","type":"PanTool"},{"id":"9ee80159-0c6c-4b4a-a601-388bc284a790","type":"WheelZoomTool"},{"id":"eb62f8e8-060e-4e78-965b-e11a3806a85c","type":"BoxZoomTool"},{"id":"52295c5a-8233-4962-adfc-9f0c2238fe14","type":"SaveTool"},{"id":"545e7739-edc8-45e1-ad6a-f01e613e755b","type":"ResetTool"},{"id":"6b0520be-a149-4339-abed-032b18d40c8f","type":"HelpTool"},{"id":"de8f63bc-0d49-4bcb-88a5-923728ba98b6","type":"HoverTool"}]},"id":"57462b63-8989-40cb-a4c2-442e72c56c3b","type":"Toolbar"},{"attributes":{},"id":"aa18b626-912e-4888-b26f-edbe6b9d87bf","type":"Selection"},{"attributes":{},"id":"830e8bfa-c052-4a2d-95eb-2e5cf40d4f09","type":"LinearScale"},{"attributes":{"callback":null},"id":"77bbe713-0517-4f17-ae21-2aaf9076a843","type":"DataRange1d"},{"attributes":{},"id":"d27e1c32-395a-4d50-8e2e-725fba4a3e59","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"ab389d6c-58ba-4a45-a3ea-e008e9f419e0","type":"Circle"},{"attributes":{"axis_label":"Production","axis_line_width":{"value":2},"formatter":{"id":"95002f00-5f07-4ffc-9e4b-024ec23c4890","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"fd8fd47c-2ca6-45e1-9445-27ba35b4922e","subtype":"Figure","type":"Plot"},"ticker":{"id":"928557a3-e3af-4e59-b237-3ffd4f280d65","type":"BasicTicker"}},"id":"1e621d64-4fa1-4f13-abcd-079a6bf3ed42","type":"LinearAxis"},{"attributes":{},"id":"928557a3-e3af-4e59-b237-3ffd4f280d65","type":"BasicTicker"},{"attributes":{"plot":{"id":"fd8fd47c-2ca6-45e1-9445-27ba35b4922e","subtype":"Figure","type":"Plot"},"ticker":{"id":"928557a3-e3af-4e59-b237-3ffd4f280d65","type":"BasicTicker"}},"id":"384bac95-e52f-4a6e-a6d5-21e4c27c63ee","type":"Grid"},{"attributes":{},"id":"209fea66-b502-4386-9adf-74e2f79f55da","type":"UnionRenderers"},{"attributes":{"axis_label":"Price","axis_line_width":{"value":2},"formatter":{"id":"2e919624-3c41-4723-9b24-d79486dc26db","type":"BasicTickFormatter"},"plot":{"id":"fd8fd47c-2ca6-45e1-9445-27ba35b4922e","subtype":"Figure","type":"Plot"},"ticker":{"id":"4440a480-7387-4c64-893a-11cf14905493","type":"BasicTicker"}},"id":"8b3ac8dd-c1e4-407c-a45c-6da4b2526c24","type":"LinearAxis"},{"attributes":{},"id":"4440a480-7387-4c64-893a-11cf14905493","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"fd8fd47c-2ca6-45e1-9445-27ba35b4922e","subtype":"Figure","type":"Plot"},"ticker":{"id":"4440a480-7387-4c64-893a-11cf14905493","type":"BasicTicker"}},"id":"ad30261e-3344-4008-aede-4038173fe1cc","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d2159b46-baac-4542-9f4e-c9f8ea6e9297","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"c1de8a95-4536-44ec-9b45-d9606666ea67","type":"Circle"},{"attributes":{"data_source":{"id":"7ab0be63-6a56-4058-af82-4fd38e462d85","type":"ColumnDataSource"},"glyph":{"id":"c1de8a95-4536-44ec-9b45-d9606666ea67","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ab389d6c-58ba-4a45-a3ea-e008e9f419e0","type":"Circle"},"selection_glyph":null,"view":{"id":"bee2930e-7f3d-49a0-bf27-bff8a7a025f4","type":"CDSView"}},"id":"10eded0e-2574-43de-b388-feb764f8abef","type":"GlyphRenderer"},{"attributes":{},"id":"37968db2-64d9-4f1b-9dce-87bc805c8f5f","type":"PanTool"},{"attributes":{"callback":null,"data":{"price":{"__ndarray__":"VFVVVUVi4kBcIEHxK2vKQFRVVVW1yNJAArwFElQ+0kAAAAAAYCfaQKyqqqpKC9tAAAAAAFAL1UAAAAAAoL/fQKuqqqrSeeFAAAAAAEiS4UA=","dtype":"float64","shape":[10]},"production":{"__ndarray__":"AAAAAH7uPUEAAAAAWDkxQQAAAAC16jFBAAAAAJO7NUEAAAAA+B41QQAAAACDnzhBAAAAAHeXOkEAAAAAX3I6QQAAAAD6tzxBAAAAAIg4PUE=","dtype":"float64","shape":[10]}},"selected":{"id":"2224e6c6-e2dd-4290-bc0a-08898e49b086","type":"Selection"},"selection_policy":{"id":"27425e6e-98ed-4da9-ab3e-e58f390c6023","type":"UnionRenderers"}},"id":"7ab0be63-6a56-4058-af82-4fd38e462d85","type":"ColumnDataSource"},{"attributes":{"source":{"id":"7ab0be63-6a56-4058-af82-4fd38e462d85","type":"ColumnDataSource"}},"id":"bee2930e-7f3d-49a0-bf27-bff8a7a025f4","type":"CDSView"},{"attributes":{},"id":"9ee80159-0c6c-4b4a-a601-388bc284a790","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"d2159b46-baac-4542-9f4e-c9f8ea6e9297","type":"BoxAnnotation"}},"id":"eb62f8e8-060e-4e78-965b-e11a3806a85c","type":"BoxZoomTool"},{"attributes":{},"id":"52295c5a-8233-4962-adfc-9f0c2238fe14","type":"SaveTool"},{"attributes":{},"id":"545e7739-edc8-45e1-ad6a-f01e613e755b","type":"ResetTool"},{"attributes":{},"id":"6b0520be-a149-4339-abed-032b18d40c8f","type":"HelpTool"}],"root_ids":["fd8fd47c-2ca6-45e1-9445-27ba35b4922e"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"bb085018-c19b-4517-aa9a-aa0f473ecb07","roots":{"fd8fd47c-2ca6-45e1-9445-27ba35b4922e":"df22576a-f774-4aaf-a8ee-45f1cf0d07c8"}}];
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