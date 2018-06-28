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
      };var element = document.getElementById("2f0691c7-c3db-4ade-b262-b3db58b23650");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2f0691c7-c3db-4ade-b262-b3db58b23650' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a9d3286a-a137-49a7-ad87-2f82bf344ac0":{"roots":{"references":[{"attributes":{"below":[{"id":"00d70214-ccab-44e9-bb91-37d78e451026","type":"LinearAxis"}],"left":[{"id":"27cf8c14-a9d6-4111-9df4-8aafeb58823b","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"00d70214-ccab-44e9-bb91-37d78e451026","type":"LinearAxis"},{"id":"04f973d3-c758-4d3f-8034-2f49131e33fa","type":"Grid"},{"id":"27cf8c14-a9d6-4111-9df4-8aafeb58823b","type":"LinearAxis"},{"id":"d1f665ff-a8c8-4868-afb9-71ff84c0d03b","type":"Grid"},{"id":"d45e7b5c-2424-46e7-be9f-1e8f72427f4a","type":"BoxAnnotation"},{"id":"14d17f11-5225-4a87-8e21-dba0ee128fce","type":"GlyphRenderer"},{"id":"027b7b73-3141-4324-bc91-38f6d5e4660c","type":"GlyphRenderer"}],"title":{"id":"e52949ee-5647-400d-9986-1838b3f3b513","type":"Title"},"toolbar":{"id":"aba26f35-bd08-4c2a-90ec-7775b1ed0a67","type":"Toolbar"},"x_range":{"id":"ffa07972-06e8-413c-acd8-a0151acc4bef","type":"DataRange1d"},"x_scale":{"id":"5b10eb18-7c33-4110-b3ee-f0eff1edf265","type":"LinearScale"},"y_range":{"id":"02a39a27-04e6-4f8d-8f80-fec824a6b0af","type":"DataRange1d"},"y_scale":{"id":"5bad18d8-48ca-4ab7-a07c-4564888780fc","type":"LinearScale"}},"id":"90c6fd02-25ff-47e1-9790-293daa644b12","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"82bf358b-7d7a-4dcd-ada4-b4aa85985ee0","type":"ColumnDataSource"},"glyph":{"id":"43847d12-b06c-4fcb-899f-107ac3543bc8","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2eefe846-1f84-4dc2-8ceb-f2d22037519b","type":"Line"},"selection_glyph":null,"view":{"id":"2ecce109-5708-437f-a84c-81d3ffd71a17","type":"CDSView"}},"id":"027b7b73-3141-4324-bc91-38f6d5e4660c","type":"GlyphRenderer"},{"attributes":{"source":{"id":"82bf358b-7d7a-4dcd-ada4-b4aa85985ee0","type":"ColumnDataSource"}},"id":"2ecce109-5708-437f-a84c-81d3ffd71a17","type":"CDSView"},{"attributes":{},"id":"43fb68f9-69e5-444b-90dd-baefb83bfeee","type":"BasicTickFormatter"},{"attributes":{},"id":"e6e55271-7a68-430d-b097-e09f00f2832b","type":"Selection"},{"attributes":{},"id":"d7179666-d5d1-46b3-b0e1-e85dcee24b6e","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"ffa07972-06e8-413c-acd8-a0151acc4bef","type":"DataRange1d"},{"attributes":{},"id":"afcd6685-ad59-4289-9ef8-a4d1c169f290","type":"Selection"},{"attributes":{},"id":"5b10eb18-7c33-4110-b3ee-f0eff1edf265","type":"LinearScale"},{"attributes":{"callback":null},"id":"02a39a27-04e6-4f8d-8f80-fec824a6b0af","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"price_change":{"__ndarray__":"AAAAAAAAAAB7XRyPtffDP3IvKsN8zNg/ybk/KXzEvz/oyY4hyWimv95lutYAvbu/73dH+Rysrj+2XDnRCr6gP/3CWUL925K/NAUBeEuuxj9Wj2wm7wS2PwAAAAAAAAAAANosgry5xD80rEIaOFTNPxdwYjOG8GG/AAAAAAAAAACG6Q+Eo2OZPw==","dtype":"float64","shape":[17]},"value_change":{"__ndarray__":"ApTN3LwVqL/ggpZx8Y+JPwteHURczti/afA7Hdmtw79vhEMyolXGP3pFWGF30cA/8kZu+iYkcL+hbmtzX5HEPwYWWGCBBeY/Q+AYRTe7sD8qH+4Umaarv8/8y+Q+NbI/xJsRb0a8ub8dHh4eHh6OP8bI3JpXUZQ/rhIKvCvcuz9AEWj8FPagvw==","dtype":"float64","shape":[17]}},"selected":{"id":"e6e55271-7a68-430d-b097-e09f00f2832b","type":"Selection"},"selection_policy":{"id":"d7179666-d5d1-46b3-b0e1-e85dcee24b6e","type":"UnionRenderers"}},"id":"0fc27e25-5564-4773-b57b-9e54870f283b","type":"ColumnDataSource"},{"attributes":{},"id":"5bad18d8-48ca-4ab7-a07c-4564888780fc","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"value_change"},"y":{"field":"price_change"}},"id":"43ec6b46-1b32-4295-9150-88bbbfe6c941","type":"Circle"},{"attributes":{"axis_label":"Production change","axis_line_width":{"value":2},"formatter":{"id":"43fb68f9-69e5-444b-90dd-baefb83bfeee","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"90c6fd02-25ff-47e1-9790-293daa644b12","subtype":"Figure","type":"Plot"},"ticker":{"id":"b48c9b1f-fb89-4384-a8b6-6cb5ac86e752","type":"BasicTicker"}},"id":"00d70214-ccab-44e9-bb91-37d78e451026","type":"LinearAxis"},{"attributes":{},"id":"b48c9b1f-fb89-4384-a8b6-6cb5ac86e752","type":"BasicTicker"},{"attributes":{"plot":{"id":"90c6fd02-25ff-47e1-9790-293daa644b12","subtype":"Figure","type":"Plot"},"ticker":{"id":"b48c9b1f-fb89-4384-a8b6-6cb5ac86e752","type":"BasicTicker"}},"id":"04f973d3-c758-4d3f-8034-2f49131e33fa","type":"Grid"},{"attributes":{"axis_label":"Price change","axis_line_width":{"value":2},"formatter":{"id":"a1b1a811-24c6-46c0-946c-0f13821a7bb6","type":"BasicTickFormatter"},"plot":{"id":"90c6fd02-25ff-47e1-9790-293daa644b12","subtype":"Figure","type":"Plot"},"ticker":{"id":"eaee7fc8-a20a-4758-abfc-2c085469bf4b","type":"BasicTicker"}},"id":"27cf8c14-a9d6-4111-9df4-8aafeb58823b","type":"LinearAxis"},{"attributes":{},"id":"732a3ce2-9f66-43fb-a498-8b0b1b1a5b50","type":"UnionRenderers"},{"attributes":{},"id":"eaee7fc8-a20a-4758-abfc-2c085469bf4b","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"90c6fd02-25ff-47e1-9790-293daa644b12","subtype":"Figure","type":"Plot"},"ticker":{"id":"eaee7fc8-a20a-4758-abfc-2c085469bf4b","type":"BasicTicker"}},"id":"d1f665ff-a8c8-4868-afb9-71ff84c0d03b","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d45e7b5c-2424-46e7-be9f-1e8f72427f4a","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"asia_Lentilscorrelation"},"id":"e52949ee-5647-400d-9986-1838b3f3b513","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"value_change"},"y":{"field":"price_change"}},"id":"0370fc96-388b-4a22-b94b-903a3d461ec2","type":"Circle"},{"attributes":{"data_source":{"id":"0fc27e25-5564-4773-b57b-9e54870f283b","type":"ColumnDataSource"},"glyph":{"id":"0370fc96-388b-4a22-b94b-903a3d461ec2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43ec6b46-1b32-4295-9150-88bbbfe6c941","type":"Circle"},"selection_glyph":null,"view":{"id":"91246d1c-24e6-4ed4-8cf3-59cbcef0ed95","type":"CDSView"}},"id":"14d17f11-5225-4a87-8e21-dba0ee128fce","type":"GlyphRenderer"},{"attributes":{},"id":"dd0f7b4d-ae4d-469d-90bf-e8dfde7416ff","type":"PanTool"},{"attributes":{"source":{"id":"0fc27e25-5564-4773-b57b-9e54870f283b","type":"ColumnDataSource"}},"id":"91246d1c-24e6-4ed4-8cf3-59cbcef0ed95","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"dd0f7b4d-ae4d-469d-90bf-e8dfde7416ff","type":"PanTool"},{"id":"50bb400b-4ded-43d1-b0ff-d88158a195c7","type":"WheelZoomTool"},{"id":"e5b7648a-682f-4ec5-be70-b19f332eb703","type":"BoxZoomTool"},{"id":"d99c7bc1-6b25-49df-8be6-2ace63087372","type":"SaveTool"},{"id":"3e9a4045-4755-4d85-b1c1-667a6fa337f6","type":"ResetTool"},{"id":"fb1335cb-b34f-47cd-b5f8-e488f086c9c6","type":"HelpTool"},{"id":"5f457171-88ec-44d5-90dc-1df5c9cd1769","type":"HoverTool"}]},"id":"aba26f35-bd08-4c2a-90ec-7775b1ed0a67","type":"Toolbar"},{"attributes":{},"id":"50bb400b-4ded-43d1-b0ff-d88158a195c7","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"d45e7b5c-2424-46e7-be9f-1e8f72427f4a","type":"BoxAnnotation"}},"id":"e5b7648a-682f-4ec5-be70-b19f332eb703","type":"BoxZoomTool"},{"attributes":{},"id":"d99c7bc1-6b25-49df-8be6-2ace63087372","type":"SaveTool"},{"attributes":{},"id":"3e9a4045-4755-4d85-b1c1-667a6fa337f6","type":"ResetTool"},{"attributes":{},"id":"fb1335cb-b34f-47cd-b5f8-e488f086c9c6","type":"HelpTool"},{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production change","@value_change"],["Price change","@price_change"]]},"id":"5f457171-88ec-44d5-90dc-1df5c9cd1769","type":"HoverTool"},{"attributes":{},"id":"a1b1a811-24c6-46c0-946c-0f13821a7bb6","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"Zgr02tu0uj/XXTt63sKwP2w+JiXrEsI/OKtJsXYsw7+AAzU3fWvMP9J/W+iR5LY/hQzot1TUqT/eKWhDNUCwPwqP7tmTcLU/c7AZbfymoD/piLrDdHC/P2uNn4UxPrU/lNHXKp5Suz8yRSO43Mm0Pwz2Qx0a1qU/gprYt21rnD+w8oyTsnm5Pw==","dtype":"float64","shape":[17]},"y":{"__ndarray__":"ApTN3LwVqL9D4BhFN7uwP2nwOx3ZrcO/BhZYYIEF5j8LXh1EXM7Yv/JGbvomJHC/rhIKvCvcuz/P/MvkPjWyP+CClnHxj4k/oW5rc1+RxD/EmxFvRry5vx0eHh4eHo4/Kh/uFJmmq7/GyNyaV1GUP3pFWGF30cA/b4RDMqJVxj9AEWj8FPagvw==","dtype":"float64","shape":[17]}},"selected":{"id":"afcd6685-ad59-4289-9ef8-a4d1c169f290","type":"Selection"},"selection_policy":{"id":"732a3ce2-9f66-43fb-a498-8b0b1b1a5b50","type":"UnionRenderers"}},"id":"82bf358b-7d7a-4dcd-ada4-b4aa85985ee0","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"43847d12-b06c-4fcb-899f-107ac3543bc8","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2eefe846-1f84-4dc2-8ceb-f2d22037519b","type":"Line"}],"root_ids":["90c6fd02-25ff-47e1-9790-293daa644b12"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"a9d3286a-a137-49a7-ad87-2f82bf344ac0","roots":{"90c6fd02-25ff-47e1-9790-293daa644b12":"2f0691c7-c3db-4ade-b262-b3db58b23650"}}];
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