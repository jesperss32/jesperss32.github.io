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
      };var element = document.getElementById("c8b27633-f652-4f3d-8531-ea7106a6ee75");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c8b27633-f652-4f3d-8531-ea7106a6ee75' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7ebd8661-32e7-41de-8dd1-cdb10be4522c":{"roots":{"references":[{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production","@production"],["Price","@price"]]},"id":"65340c66-bf1b-48ec-a858-9ef9d1e1a67c","type":"HoverTool"},{"attributes":{"callback":null},"id":"0d829b2f-6254-4616-bad5-c1207e5c3460","type":"DataRange1d"},{"attributes":{},"id":"605df230-0705-458a-8594-359a85dc80a7","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Chad_Maize(white)"},"id":"156dbc8d-9747-4a1f-8f6b-774314b9cdd5","type":"Title"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"rrRwDcxbG0G5zfXl9ZoYQePlg+NwRBVBgDqWhXzoDUHa+cPwBssGQQz34jks2gxBSQ3+KsSOEEEt/TfuWc/8QKXNNbxSDBFBH4fnqj0vBUGwmwy7BhgSQaLItF1KmRFB","dtype":"float64","shape":[12]},"y":{"__ndarray__":"q6qqqqoAckCrqqqqqoxwQFRVVVVVk21AVFVVVVXpZkAAAAAAAChjQKyqqqqqWmZAqaqqqqqaaEBUVVVVVXVdQDMzMzMzH2lAq6qqqqpOYkCtH4gZxzlqQAAAAAAAtGlA","dtype":"float64","shape":[12]}},"selected":{"id":"68706ad9-68c5-4496-a3d5-1e657b2e51f6","type":"Selection"},"selection_policy":{"id":"02129547-3e91-4816-86bd-5860fc47b279","type":"UnionRenderers"}},"id":"b5dd125a-9d26-4b6e-8391-d5aacc836808","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"02dafad0-c00a-461d-abec-0878ee42f175","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6c169585-ddd2-45c3-bd16-8ce83a5a9932","type":"Line"},{"attributes":{"data_source":{"id":"b5dd125a-9d26-4b6e-8391-d5aacc836808","type":"ColumnDataSource"},"glyph":{"id":"02dafad0-c00a-461d-abec-0878ee42f175","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6c169585-ddd2-45c3-bd16-8ce83a5a9932","type":"Line"},"selection_glyph":null,"view":{"id":"0823e5aa-39cb-4f06-a8c2-3ecc9d761a07","type":"CDSView"}},"id":"cf08a0a2-9965-421e-8dec-ccc2c1c4cc9c","type":"GlyphRenderer"},{"attributes":{"source":{"id":"b5dd125a-9d26-4b6e-8391-d5aacc836808","type":"ColumnDataSource"}},"id":"0823e5aa-39cb-4f06-a8c2-3ecc9d761a07","type":"CDSView"},{"attributes":{"below":[{"id":"9689f95a-edf2-4819-9fdb-d08de97e1db7","type":"LinearAxis"}],"left":[{"id":"100136d2-0e08-4e07-a46b-72de4d7196b2","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"9689f95a-edf2-4819-9fdb-d08de97e1db7","type":"LinearAxis"},{"id":"6a521f88-dd82-4bbd-9088-1e45ff622e27","type":"Grid"},{"id":"100136d2-0e08-4e07-a46b-72de4d7196b2","type":"LinearAxis"},{"id":"d0b9ea91-1ae2-4b42-987f-02846ee2a04c","type":"Grid"},{"id":"1d81f5b2-4906-42bd-abb1-38f1d9674f91","type":"BoxAnnotation"},{"id":"432244ca-9ab4-4d83-ae5c-0a92bdd3f9a1","type":"GlyphRenderer"},{"id":"cf08a0a2-9965-421e-8dec-ccc2c1c4cc9c","type":"GlyphRenderer"}],"title":{"id":"156dbc8d-9747-4a1f-8f6b-774314b9cdd5","type":"Title"},"toolbar":{"id":"e00fbb7e-28d1-46e8-aa76-1cd8d67d10bd","type":"Toolbar"},"x_range":{"id":"0d829b2f-6254-4616-bad5-c1207e5c3460","type":"DataRange1d"},"x_scale":{"id":"72b61663-bbc9-44ea-88b0-c4a1ed07a09d","type":"LinearScale"},"y_range":{"id":"797a9f24-2a6c-4fae-866a-598df1234c16","type":"DataRange1d"},"y_scale":{"id":"90bf2df2-633b-419c-b446-fe836593621e","type":"LinearScale"}},"id":"f45814eb-5569-41cf-b20c-615b2ce600ad","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"0881c250-2c32-4019-b587-a9eab97e79a7","type":"BasicTickFormatter"},{"attributes":{},"id":"cf3dcf96-826f-4b57-97bc-765baf44630c","type":"UnionRenderers"},{"attributes":{},"id":"fd11e824-0a9f-407d-81fd-cf50d12f489a","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"a9749abc-affd-44d9-bd78-b2145112d017","type":"PanTool"},{"id":"15ad52ab-d887-4303-a443-3bf1a3bbac6f","type":"WheelZoomTool"},{"id":"15053957-f975-48a1-b403-320c6393a87f","type":"BoxZoomTool"},{"id":"21f1570f-8172-4aef-9d24-71192e4a7946","type":"SaveTool"},{"id":"3400221c-3a13-43ae-b817-ca96811971d0","type":"ResetTool"},{"id":"397570d5-cfe4-44d9-bf9e-88dd6d58f999","type":"HelpTool"},{"id":"65340c66-bf1b-48ec-a858-9ef9d1e1a67c","type":"HoverTool"}]},"id":"e00fbb7e-28d1-46e8-aa76-1cd8d67d10bd","type":"Toolbar"},{"attributes":{},"id":"02129547-3e91-4816-86bd-5860fc47b279","type":"UnionRenderers"},{"attributes":{},"id":"72b61663-bbc9-44ea-88b0-c4a1ed07a09d","type":"LinearScale"},{"attributes":{"callback":null},"id":"797a9f24-2a6c-4fae-866a-598df1234c16","type":"DataRange1d"},{"attributes":{},"id":"90bf2df2-633b-419c-b446-fe836593621e","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"30489cc9-dfbb-4dab-928b-26a785cd2b1b","type":"Circle"},{"attributes":{"axis_label":"Production","axis_line_width":{"value":2},"formatter":{"id":"605df230-0705-458a-8594-359a85dc80a7","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"f45814eb-5569-41cf-b20c-615b2ce600ad","subtype":"Figure","type":"Plot"},"ticker":{"id":"6bd9cd92-c967-4ced-9c38-738706b139c2","type":"BasicTicker"}},"id":"9689f95a-edf2-4819-9fdb-d08de97e1db7","type":"LinearAxis"},{"attributes":{},"id":"6bd9cd92-c967-4ced-9c38-738706b139c2","type":"BasicTicker"},{"attributes":{"plot":{"id":"f45814eb-5569-41cf-b20c-615b2ce600ad","subtype":"Figure","type":"Plot"},"ticker":{"id":"6bd9cd92-c967-4ced-9c38-738706b139c2","type":"BasicTicker"}},"id":"6a521f88-dd82-4bbd-9088-1e45ff622e27","type":"Grid"},{"attributes":{"axis_label":"Price","axis_line_width":{"value":2},"formatter":{"id":"0881c250-2c32-4019-b587-a9eab97e79a7","type":"BasicTickFormatter"},"plot":{"id":"f45814eb-5569-41cf-b20c-615b2ce600ad","subtype":"Figure","type":"Plot"},"ticker":{"id":"881444b7-2ba9-411b-aac9-573b16ee2ee8","type":"BasicTicker"}},"id":"100136d2-0e08-4e07-a46b-72de4d7196b2","type":"LinearAxis"},{"attributes":{},"id":"68706ad9-68c5-4496-a3d5-1e657b2e51f6","type":"Selection"},{"attributes":{},"id":"881444b7-2ba9-411b-aac9-573b16ee2ee8","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"f45814eb-5569-41cf-b20c-615b2ce600ad","subtype":"Figure","type":"Plot"},"ticker":{"id":"881444b7-2ba9-411b-aac9-573b16ee2ee8","type":"BasicTicker"}},"id":"d0b9ea91-1ae2-4b42-987f-02846ee2a04c","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1d81f5b2-4906-42bd-abb1-38f1d9674f91","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"5c76c7bc-7200-4fe0-9df9-a8e9f8adc741","type":"Circle"},{"attributes":{"data_source":{"id":"55254a2a-9d2c-4321-9227-5f32a0cf4410","type":"ColumnDataSource"},"glyph":{"id":"5c76c7bc-7200-4fe0-9df9-a8e9f8adc741","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30489cc9-dfbb-4dab-928b-26a785cd2b1b","type":"Circle"},"selection_glyph":null,"view":{"id":"9910a06b-5b54-48a7-a6a6-f68f68869a8a","type":"CDSView"}},"id":"432244ca-9ab4-4d83-ae5c-0a92bdd3f9a1","type":"GlyphRenderer"},{"attributes":{},"id":"a9749abc-affd-44d9-bd78-b2145112d017","type":"PanTool"},{"attributes":{"callback":null,"data":{"price":{"__ndarray__":"VFVVVVWTbUBUVVVVVXVdQKqqqqqqmmhAAAAAAAAoY0Crqqqqqk5iQFRVVVVV6WZArR+IGcc5akCsqqqqqlpmQDMzMzMzH2lAq6qqqqoAckAAAAAAALRpQKuqqqqqjHBA","dtype":"float64","shape":[12]},"production":{"__ndarray__":"AAAAAAwWG0EAAAAA4Dn6QAAAAADIkghBAAAAAFB0BkEAAAAASJEIQQAAAABIlgtBAAAAADiECUEAAAAAqFcKQQAAAABARxJBAAAAAHTUG0EAAAAACIMZQQAAAABkURRB","dtype":"float64","shape":[12]}},"selected":{"id":"fd11e824-0a9f-407d-81fd-cf50d12f489a","type":"Selection"},"selection_policy":{"id":"cf3dcf96-826f-4b57-97bc-765baf44630c","type":"UnionRenderers"}},"id":"55254a2a-9d2c-4321-9227-5f32a0cf4410","type":"ColumnDataSource"},{"attributes":{"source":{"id":"55254a2a-9d2c-4321-9227-5f32a0cf4410","type":"ColumnDataSource"}},"id":"9910a06b-5b54-48a7-a6a6-f68f68869a8a","type":"CDSView"},{"attributes":{},"id":"15ad52ab-d887-4303-a443-3bf1a3bbac6f","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"1d81f5b2-4906-42bd-abb1-38f1d9674f91","type":"BoxAnnotation"}},"id":"15053957-f975-48a1-b403-320c6393a87f","type":"BoxZoomTool"},{"attributes":{},"id":"21f1570f-8172-4aef-9d24-71192e4a7946","type":"SaveTool"},{"attributes":{},"id":"3400221c-3a13-43ae-b817-ca96811971d0","type":"ResetTool"},{"attributes":{},"id":"397570d5-cfe4-44d9-bf9e-88dd6d58f999","type":"HelpTool"}],"root_ids":["f45814eb-5569-41cf-b20c-615b2ce600ad"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"7ebd8661-32e7-41de-8dd1-cdb10be4522c","roots":{"f45814eb-5569-41cf-b20c-615b2ce600ad":"c8b27633-f652-4f3d-8531-ea7106a6ee75"}}];
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