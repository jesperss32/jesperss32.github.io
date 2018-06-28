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
      };var element = document.getElementById("26473757-5d3d-4480-97df-4b3e0324092e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '26473757-5d3d-4480-97df-4b3e0324092e' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"9bbf295f-95d7-4ba4-902f-ba35ba230446":{"roots":{"references":[{"attributes":{"below":[{"id":"48db552b-5a4d-4e18-b665-5ea344290944","type":"LinearAxis"}],"left":[{"id":"44826dc0-d023-47b6-adfe-6d96de1db763","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"48db552b-5a4d-4e18-b665-5ea344290944","type":"LinearAxis"},{"id":"f0034e05-906d-4e6b-aec0-779881041bee","type":"Grid"},{"id":"44826dc0-d023-47b6-adfe-6d96de1db763","type":"LinearAxis"},{"id":"d0423d5d-6ac1-4a3e-8207-db0884fb5428","type":"Grid"},{"id":"df9d5a70-9fa0-4bc7-a98d-0da8a1416a25","type":"BoxAnnotation"},{"id":"bbb79296-199c-4a12-8df3-0adebd303c0d","type":"GlyphRenderer"},{"id":"4f4a101b-b5a7-434c-87d3-575a4b5e9aed","type":"GlyphRenderer"}],"title":{"id":"973e005b-3b8f-44fa-9bf5-c32132f85664","type":"Title"},"toolbar":{"id":"21008433-d4c7-46d1-9c67-c120c9cd787c","type":"Toolbar"},"x_range":{"id":"0be0d6e7-5bf6-4e32-83ff-5ee11c4646ce","type":"DataRange1d"},"x_scale":{"id":"d59780e7-1b40-4b77-a44e-716ec5ebd145","type":"LinearScale"},"y_range":{"id":"3c1cd8f6-d9cd-4065-ab89-783ba8feb151","type":"DataRange1d"},"y_scale":{"id":"b90d1e4f-52d9-4742-90ab-0c57779dc65c","type":"LinearScale"}},"id":"5ded2c5d-23d3-494a-9daf-91a6e3dac7c4","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"9743915e-c53a-48b5-a24c-f3eefdcb743b","type":"ColumnDataSource"},"glyph":{"id":"87faef3b-f80d-4cd4-8ec6-bf70172707d6","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f95a36a0-cd5a-407a-be37-a68945e618e9","type":"Line"},"selection_glyph":null,"view":{"id":"58842a8c-f608-4667-8700-846edb51971e","type":"CDSView"}},"id":"4f4a101b-b5a7-434c-87d3-575a4b5e9aed","type":"GlyphRenderer"},{"attributes":{"source":{"id":"9743915e-c53a-48b5-a24c-f3eefdcb743b","type":"ColumnDataSource"}},"id":"58842a8c-f608-4667-8700-846edb51971e","type":"CDSView"},{"attributes":{},"id":"642ea9cb-4144-45d8-bcb1-6e40fa687ddb","type":"BasicTickFormatter"},{"attributes":{},"id":"ed6ab239-0a5f-4053-adb4-7d9d801b3748","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"0be0d6e7-5bf6-4e32-83ff-5ee11c4646ce","type":"DataRange1d"},{"attributes":{},"id":"3e9473cd-54b0-4ac4-a469-f59b3277efd8","type":"Selection"},{"attributes":{},"id":"01aba3d0-0086-4e96-a8b2-77f8cb1e7b69","type":"UnionRenderers"},{"attributes":{},"id":"d59780e7-1b40-4b77-a44e-716ec5ebd145","type":"LinearScale"},{"attributes":{},"id":"87e60ecf-0797-4d3b-bbf9-4d94851ba24d","type":"Selection"},{"attributes":{"callback":null},"id":"3c1cd8f6-d9cd-4065-ab89-783ba8feb151","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"price_change":{"__ndarray__":"AAAAAAAAAACDIzvdAC61P8d9KI1WuMq/QDpNjUeM3j8AAAAAAAAAAKLgiCA4JaU/","dtype":"float64","shape":[6]},"value_change":{"__ndarray__":"ZP1t4RZ9pj9hKzRLIICgvyNiiGPXdKE/maGAOHQDnb86zTODu9+RvxspPJ4UwpW/","dtype":"float64","shape":[6]}},"selected":{"id":"3e9473cd-54b0-4ac4-a469-f59b3277efd8","type":"Selection"},"selection_policy":{"id":"ed6ab239-0a5f-4053-adb4-7d9d801b3748","type":"UnionRenderers"}},"id":"beeb3705-3aa5-47da-8077-8bf1026aaa86","type":"ColumnDataSource"},{"attributes":{},"id":"b90d1e4f-52d9-4742-90ab-0c57779dc65c","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"value_change"},"y":{"field":"price_change"}},"id":"ea429926-82da-4e0d-969e-c2c11645fddf","type":"Circle"},{"attributes":{"axis_label":"Production change","axis_line_width":{"value":2},"formatter":{"id":"f2f73353-b4f6-41aa-900e-5431cb1cfb52","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"5ded2c5d-23d3-494a-9daf-91a6e3dac7c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"330ad828-42d7-48e8-bc42-0a46ef8e8214","type":"BasicTicker"}},"id":"48db552b-5a4d-4e18-b665-5ea344290944","type":"LinearAxis"},{"attributes":{},"id":"330ad828-42d7-48e8-bc42-0a46ef8e8214","type":"BasicTicker"},{"attributes":{"plot":{"id":"5ded2c5d-23d3-494a-9daf-91a6e3dac7c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"330ad828-42d7-48e8-bc42-0a46ef8e8214","type":"BasicTicker"}},"id":"f0034e05-906d-4e6b-aec0-779881041bee","type":"Grid"},{"attributes":{"axis_label":"Price change","axis_line_width":{"value":2},"formatter":{"id":"642ea9cb-4144-45d8-bcb1-6e40fa687ddb","type":"BasicTickFormatter"},"plot":{"id":"5ded2c5d-23d3-494a-9daf-91a6e3dac7c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"df8c0bf8-3017-48c4-a64b-829732ea0240","type":"BasicTicker"}},"id":"44826dc0-d023-47b6-adfe-6d96de1db763","type":"LinearAxis"},{"attributes":{},"id":"df8c0bf8-3017-48c4-a64b-829732ea0240","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"5ded2c5d-23d3-494a-9daf-91a6e3dac7c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"df8c0bf8-3017-48c4-a64b-829732ea0240","type":"BasicTicker"}},"id":"d0423d5d-6ac1-4a3e-8207-db0884fb5428","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"df9d5a70-9fa0-4bc7-a98d-0da8a1416a25","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"asia_Cabbagesandotherbrassicascorrelation"},"id":"973e005b-3b8f-44fa-9bf5-c32132f85664","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"value_change"},"y":{"field":"price_change"}},"id":"8d519554-3507-4cfa-8110-784e490a44a2","type":"Circle"},{"attributes":{"data_source":{"id":"beeb3705-3aa5-47da-8077-8bf1026aaa86","type":"ColumnDataSource"},"glyph":{"id":"8d519554-3507-4cfa-8110-784e490a44a2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ea429926-82da-4e0d-969e-c2c11645fddf","type":"Circle"},"selection_glyph":null,"view":{"id":"51a95fd2-a579-4e0b-bd15-07c0f0e31410","type":"CDSView"}},"id":"bbb79296-199c-4a12-8df3-0adebd303c0d","type":"GlyphRenderer"},{"attributes":{},"id":"e19042d0-6da2-42f1-9e77-a435601b4ab9","type":"PanTool"},{"attributes":{"source":{"id":"beeb3705-3aa5-47da-8077-8bf1026aaa86","type":"ColumnDataSource"}},"id":"51a95fd2-a579-4e0b-bd15-07c0f0e31410","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"e19042d0-6da2-42f1-9e77-a435601b4ab9","type":"PanTool"},{"id":"40ab1a94-6b80-465a-9b86-a6475a7fb86d","type":"WheelZoomTool"},{"id":"69297b0b-6264-415b-b681-66c8c14a5782","type":"BoxZoomTool"},{"id":"ff39b7bf-a6e6-4717-8527-2b8ecf9933eb","type":"SaveTool"},{"id":"89576316-51c7-4324-b1ce-485bc509369d","type":"ResetTool"},{"id":"64f89157-c542-421e-bd3d-e3f891b06925","type":"HelpTool"},{"id":"545f8dd4-a50a-44b6-8728-4a4149a99f76","type":"HoverTool"}]},"id":"21008433-d4c7-46d1-9c67-c120c9cd787c","type":"Toolbar"},{"attributes":{},"id":"40ab1a94-6b80-465a-9b86-a6475a7fb86d","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"df9d5a70-9fa0-4bc7-a98d-0da8a1416a25","type":"BoxAnnotation"}},"id":"69297b0b-6264-415b-b681-66c8c14a5782","type":"BoxZoomTool"},{"attributes":{},"id":"ff39b7bf-a6e6-4717-8527-2b8ecf9933eb","type":"SaveTool"},{"attributes":{},"id":"89576316-51c7-4324-b1ce-485bc509369d","type":"ResetTool"},{"attributes":{},"id":"64f89157-c542-421e-bd3d-e3f891b06925","type":"HelpTool"},{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production change","@value_change"],["Price change","@price_change"]]},"id":"545f8dd4-a50a-44b6-8728-4a4149a99f76","type":"HoverTool"},{"attributes":{},"id":"f2f73353-b4f6-41aa-900e-5431cb1cfb52","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"8J8RFqg2vz8uaYWoAJTBP6+FBtT9SsC/l2/dALNCxT/+zENenl62vxOE7lLMSMc/","dtype":"float64","shape":[6]},"y":{"__ndarray__":"Os0zg7vfkb8bKTyeFMKVv2T9beEWfaY/maGAOHQDnb8jYohj13ShP2ErNEsggKC/","dtype":"float64","shape":[6]}},"selected":{"id":"87e60ecf-0797-4d3b-bbf9-4d94851ba24d","type":"Selection"},"selection_policy":{"id":"01aba3d0-0086-4e96-a8b2-77f8cb1e7b69","type":"UnionRenderers"}},"id":"9743915e-c53a-48b5-a24c-f3eefdcb743b","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"87faef3b-f80d-4cd4-8ec6-bf70172707d6","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"f95a36a0-cd5a-407a-be37-a68945e618e9","type":"Line"}],"root_ids":["5ded2c5d-23d3-494a-9daf-91a6e3dac7c4"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"9bbf295f-95d7-4ba4-902f-ba35ba230446","roots":{"5ded2c5d-23d3-494a-9daf-91a6e3dac7c4":"26473757-5d3d-4480-97df-4b3e0324092e"}}];
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