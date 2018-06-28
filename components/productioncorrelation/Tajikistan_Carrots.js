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
      };var element = document.getElementById("59c3a43f-92bd-44d5-a01f-67bbe85484b5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '59c3a43f-92bd-44d5-a01f-67bbe85484b5' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"154c3000-f885-4755-840d-bf35bc2dd85f":{"roots":{"references":[{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production","@production"],["Price","@price"]]},"id":"f20bc0f6-b183-4372-8feb-7ceabe91000a","type":"HoverTool"},{"attributes":{"callback":null},"id":"27a9fcda-d7a4-4f69-b951-b6742b85acd9","type":"DataRange1d"},{"attributes":{},"id":"28d29055-8145-4da4-a3a6-931bc8a8949d","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Tajikistan_Carrots"},"id":"e8a85fe1-c690-4208-984a-a18f74691cc4","type":"Title"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"p8SmP82hAkFLb40pZE7zQHAdr2o/vg5B1AwAloFHDkFtEELb97IPQY9hj0+G6vlAbUkZoCD1DEG+woHVMkb6QALmbMYgfQFBhVyh1mABDUF0HRmwxAn6QMDI+JqBNQtBphP/h2g/EEEvrO38m0cFQQ==","dtype":"float64","shape":[14]},"y":{"__ndarray__":"ZohjXdzG8D/8fmq8dJPVP+w8FzOvEABAgjJ6W9aK/z/+dYGlzasAQAptOZfiKuM/3t3d3d3d/T9DWeUvGp/jPxa6/7Wpp+4/RSijt2Xt/T+LdhVSflLjP3ncyiVopvs/IlSp2QMtAUAhIiIiIiL0Pw==","dtype":"float64","shape":[14]}},"selected":{"id":"589e2671-e424-4110-85e5-898ca40b1399","type":"Selection"},"selection_policy":{"id":"b3dc4c7d-cb66-4eee-af8c-28eca62981bc","type":"UnionRenderers"}},"id":"d6fd19d7-3bae-4275-8224-294a4ee8c95f","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"e212f3c0-be22-40d2-b335-fec2b0b08454","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3101dd5b-b33a-49ac-8a8f-76db3d5ac31a","type":"Line"},{"attributes":{"data_source":{"id":"d6fd19d7-3bae-4275-8224-294a4ee8c95f","type":"ColumnDataSource"},"glyph":{"id":"e212f3c0-be22-40d2-b335-fec2b0b08454","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3101dd5b-b33a-49ac-8a8f-76db3d5ac31a","type":"Line"},"selection_glyph":null,"view":{"id":"e61f6144-0c1d-4053-98ce-7b4cb5c16281","type":"CDSView"}},"id":"07f4843d-28e2-4b89-bdc6-9f0b16d08b9a","type":"GlyphRenderer"},{"attributes":{"source":{"id":"d6fd19d7-3bae-4275-8224-294a4ee8c95f","type":"ColumnDataSource"}},"id":"e61f6144-0c1d-4053-98ce-7b4cb5c16281","type":"CDSView"},{"attributes":{"below":[{"id":"998387d0-4295-4112-a75b-b5d227f2fab6","type":"LinearAxis"}],"left":[{"id":"bb738b90-6c1f-43e4-a9e7-8e210118c3c3","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"998387d0-4295-4112-a75b-b5d227f2fab6","type":"LinearAxis"},{"id":"20a9eed5-7c7f-4c78-866d-e7df82a09f22","type":"Grid"},{"id":"bb738b90-6c1f-43e4-a9e7-8e210118c3c3","type":"LinearAxis"},{"id":"aa153d75-d5dd-43dc-b142-d9b5051cf6f0","type":"Grid"},{"id":"4cccb660-d78a-41c9-85a5-d052f1876e22","type":"BoxAnnotation"},{"id":"d85ef4b7-336b-47e1-bb08-61a935f80b51","type":"GlyphRenderer"},{"id":"07f4843d-28e2-4b89-bdc6-9f0b16d08b9a","type":"GlyphRenderer"}],"title":{"id":"e8a85fe1-c690-4208-984a-a18f74691cc4","type":"Title"},"toolbar":{"id":"b90a499d-7ab5-418c-be93-05ae5a890327","type":"Toolbar"},"x_range":{"id":"27a9fcda-d7a4-4f69-b951-b6742b85acd9","type":"DataRange1d"},"x_scale":{"id":"76d2c186-6375-40dc-ac79-d8b1f07f9c22","type":"LinearScale"},"y_range":{"id":"b67f54c7-e726-44e1-a63b-20cf27100b0f","type":"DataRange1d"},"y_scale":{"id":"c44e073a-7409-4e24-8156-d30f5942ee76","type":"LinearScale"}},"id":"eb0afa4c-3db8-44e1-9f7d-9105ea90e761","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"27fc57f1-f146-4a01-95cb-54c79ec3855c","type":"BasicTickFormatter"},{"attributes":{},"id":"b3c3ece3-c483-4e21-aaed-00437877b8fd","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"e8a5590e-cca8-4e77-a615-622e13ddd300","type":"PanTool"},{"id":"9fc12e26-beac-44ba-aa00-43331f403c23","type":"WheelZoomTool"},{"id":"beaa6ca2-52a6-4602-b11b-ff1ffd8643db","type":"BoxZoomTool"},{"id":"bba88f71-62ee-4b68-9fcd-e5014da09296","type":"SaveTool"},{"id":"3415eb22-e192-4ba6-9c17-c5f69852e23a","type":"ResetTool"},{"id":"df3cea36-2477-45cc-8bcf-f20f4a6ffea4","type":"HelpTool"},{"id":"f20bc0f6-b183-4372-8feb-7ceabe91000a","type":"HoverTool"}]},"id":"b90a499d-7ab5-418c-be93-05ae5a890327","type":"Toolbar"},{"attributes":{},"id":"f3fd8815-7c45-4746-84b8-93acae04803b","type":"Selection"},{"attributes":{},"id":"b3dc4c7d-cb66-4eee-af8c-28eca62981bc","type":"UnionRenderers"},{"attributes":{},"id":"76d2c186-6375-40dc-ac79-d8b1f07f9c22","type":"LinearScale"},{"attributes":{},"id":"589e2671-e424-4110-85e5-898ca40b1399","type":"Selection"},{"attributes":{"callback":null},"id":"b67f54c7-e726-44e1-a63b-20cf27100b0f","type":"DataRange1d"},{"attributes":{},"id":"c44e073a-7409-4e24-8156-d30f5942ee76","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"5bc6628a-5682-4f7a-ae2b-b799010e9b7c","type":"Circle"},{"attributes":{"axis_label":"Production","axis_line_width":{"value":2},"formatter":{"id":"28d29055-8145-4da4-a3a6-931bc8a8949d","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"eb0afa4c-3db8-44e1-9f7d-9105ea90e761","subtype":"Figure","type":"Plot"},"ticker":{"id":"cc08e984-2714-49a8-ad34-a8e453703967","type":"BasicTicker"}},"id":"998387d0-4295-4112-a75b-b5d227f2fab6","type":"LinearAxis"},{"attributes":{},"id":"cc08e984-2714-49a8-ad34-a8e453703967","type":"BasicTicker"},{"attributes":{"plot":{"id":"eb0afa4c-3db8-44e1-9f7d-9105ea90e761","subtype":"Figure","type":"Plot"},"ticker":{"id":"cc08e984-2714-49a8-ad34-a8e453703967","type":"BasicTicker"}},"id":"20a9eed5-7c7f-4c78-866d-e7df82a09f22","type":"Grid"},{"attributes":{"axis_label":"Price","axis_line_width":{"value":2},"formatter":{"id":"27fc57f1-f146-4a01-95cb-54c79ec3855c","type":"BasicTickFormatter"},"plot":{"id":"eb0afa4c-3db8-44e1-9f7d-9105ea90e761","subtype":"Figure","type":"Plot"},"ticker":{"id":"a5f7e7d3-7cef-42b0-8cec-dc0376687da7","type":"BasicTicker"}},"id":"bb738b90-6c1f-43e4-a9e7-8e210118c3c3","type":"LinearAxis"},{"attributes":{},"id":"a5f7e7d3-7cef-42b0-8cec-dc0376687da7","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"eb0afa4c-3db8-44e1-9f7d-9105ea90e761","subtype":"Figure","type":"Plot"},"ticker":{"id":"a5f7e7d3-7cef-42b0-8cec-dc0376687da7","type":"BasicTicker"}},"id":"aa153d75-d5dd-43dc-b142-d9b5051cf6f0","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4cccb660-d78a-41c9-85a5-d052f1876e22","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"aef57eb4-a52d-47dc-9d35-8e7bfff9318f","type":"Circle"},{"attributes":{"data_source":{"id":"c1849d5f-ae19-4232-93c7-b9a704f8a10c","type":"ColumnDataSource"},"glyph":{"id":"aef57eb4-a52d-47dc-9d35-8e7bfff9318f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5bc6628a-5682-4f7a-ae2b-b799010e9b7c","type":"Circle"},"selection_glyph":null,"view":{"id":"919420e4-2ef8-4fb5-bf83-7d7ffff2d415","type":"CDSView"}},"id":"d85ef4b7-336b-47e1-bb08-61a935f80b51","type":"GlyphRenderer"},{"attributes":{},"id":"e8a5590e-cca8-4e77-a615-622e13ddd300","type":"PanTool"},{"attributes":{"callback":null,"data":{"price":{"__ndarray__":"7DwXM68QAED8fmq8dJPVP4t2FVJ+UuM/Q1nlLxqf4z8KbTmX4irjPxa6/7Wpp+4/ZohjXdzG8D/e3d3d3d39PyEiIiIiIvQ/edzKJWim+z8iVKnZAy0BQP51gaXNqwBARiijt2Xt/T+EMnpb1or/Pw==","dtype":"float64","shape":[14]},"production":{"__ndarray__":"AAAAAOxkEkEAAAAA4ET1QAAAAACAMfdAAAAAAMAf+0AAAAAAgJD8QAAAAADAJv5AAAAAAGBxAEEAAAAAQLMBQQAAAAD4QAlBAAAAABAnCkEAAAAAgJwMQQAAAAC4WQ9BAAAAAOAOEUEAAAAAsH4RQQ==","dtype":"float64","shape":[14]}},"selected":{"id":"f3fd8815-7c45-4746-84b8-93acae04803b","type":"Selection"},"selection_policy":{"id":"b3c3ece3-c483-4e21-aaed-00437877b8fd","type":"UnionRenderers"}},"id":"c1849d5f-ae19-4232-93c7-b9a704f8a10c","type":"ColumnDataSource"},{"attributes":{"source":{"id":"c1849d5f-ae19-4232-93c7-b9a704f8a10c","type":"ColumnDataSource"}},"id":"919420e4-2ef8-4fb5-bf83-7d7ffff2d415","type":"CDSView"},{"attributes":{},"id":"9fc12e26-beac-44ba-aa00-43331f403c23","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"4cccb660-d78a-41c9-85a5-d052f1876e22","type":"BoxAnnotation"}},"id":"beaa6ca2-52a6-4602-b11b-ff1ffd8643db","type":"BoxZoomTool"},{"attributes":{},"id":"bba88f71-62ee-4b68-9fcd-e5014da09296","type":"SaveTool"},{"attributes":{},"id":"3415eb22-e192-4ba6-9c17-c5f69852e23a","type":"ResetTool"},{"attributes":{},"id":"df3cea36-2477-45cc-8bcf-f20f4a6ffea4","type":"HelpTool"}],"root_ids":["eb0afa4c-3db8-44e1-9f7d-9105ea90e761"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"154c3000-f885-4755-840d-bf35bc2dd85f","roots":{"eb0afa4c-3db8-44e1-9f7d-9105ea90e761":"59c3a43f-92bd-44d5-a01f-67bbe85484b5"}}];
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