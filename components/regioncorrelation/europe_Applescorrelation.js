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
      };var element = document.getElementById("8186a1cf-ea22-4aec-9996-31e10f82e57f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8186a1cf-ea22-4aec-9996-31e10f82e57f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d226352b-d26a-40e4-9c51-649626f9d951":{"roots":{"references":[{"attributes":{"below":[{"id":"7a2cc913-6d2b-4b14-88db-820196415cc5","type":"LinearAxis"}],"left":[{"id":"760cd762-769e-462d-9a38-effc3739f505","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"7a2cc913-6d2b-4b14-88db-820196415cc5","type":"LinearAxis"},{"id":"a105f07d-9da7-4c0a-8053-a0245b5794cd","type":"Grid"},{"id":"760cd762-769e-462d-9a38-effc3739f505","type":"LinearAxis"},{"id":"a5542e66-53f1-4a73-8a78-49bbfeea94c4","type":"Grid"},{"id":"3963ee24-f4a4-4417-a12f-eb07d18e75ce","type":"BoxAnnotation"},{"id":"264ba239-2dae-41a0-9667-adc0145f6bc0","type":"GlyphRenderer"},{"id":"dfafd17a-05c0-4a6e-8c00-d6b54513dbda","type":"GlyphRenderer"}],"title":{"id":"ac491c18-4f44-4c99-a4ea-288f0862ef49","type":"Title"},"toolbar":{"id":"2ad2bffb-04d8-460e-b9a6-26549d09a440","type":"Toolbar"},"x_range":{"id":"52781c1d-746e-43b1-a13c-4fc4a32eeb8e","type":"DataRange1d"},"x_scale":{"id":"9121917b-3da4-41bb-a5e7-4a87c2be5231","type":"LinearScale"},"y_range":{"id":"c79171a5-4885-4211-920b-1d2749a8e90e","type":"DataRange1d"},"y_scale":{"id":"85fe2087-1a5a-4dec-8e6a-44c0592dbdf4","type":"LinearScale"}},"id":"87c96eb3-38cb-4792-976f-415a5eb92f83","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"93481301-6741-44ce-b2c1-86f960b6c88a","type":"ColumnDataSource"},"glyph":{"id":"2afa1745-a5b0-4d73-a316-08e1fa5bb61e","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5aece857-b202-47c0-a049-6013fd5c68b2","type":"Line"},"selection_glyph":null,"view":{"id":"236d7652-9597-414f-9ea9-2dcc5bd3af87","type":"CDSView"}},"id":"dfafd17a-05c0-4a6e-8c00-d6b54513dbda","type":"GlyphRenderer"},{"attributes":{"source":{"id":"93481301-6741-44ce-b2c1-86f960b6c88a","type":"ColumnDataSource"}},"id":"236d7652-9597-414f-9ea9-2dcc5bd3af87","type":"CDSView"},{"attributes":{},"id":"b38bf532-fc3f-42d9-834e-d600f7aa4a66","type":"Selection"},{"attributes":{},"id":"69ab88a6-dcbf-444b-947f-485ff3615a17","type":"BasicTickFormatter"},{"attributes":{},"id":"51dfd750-39e4-4277-8cac-8a703fc7b0ef","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"52781c1d-746e-43b1-a13c-4fc4a32eeb8e","type":"DataRange1d"},{"attributes":{},"id":"91c6af74-0127-4f73-84cf-283f1a2f3c78","type":"Selection"},{"attributes":{},"id":"9121917b-3da4-41bb-a5e7-4a87c2be5231","type":"LinearScale"},{"attributes":{},"id":"c7457b1b-b1c4-4bdd-b7ba-e4c887381cf4","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"c79171a5-4885-4211-920b-1d2749a8e90e","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"price_change":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAN4m/ViAI9e/AAAAAAAAAADfnixGOhE2P2TvchaR9IY/","dtype":"float64","shape":[6]},"value_change":{"__ndarray__":"RPbyIP3Ejj/USKqM972lv3tX+VySO+C/7/VfmFeDyr9pfOzKmG+iP9ZJi/JfvME/","dtype":"float64","shape":[6]}},"selected":{"id":"b38bf532-fc3f-42d9-834e-d600f7aa4a66","type":"Selection"},"selection_policy":{"id":"51dfd750-39e4-4277-8cac-8a703fc7b0ef","type":"UnionRenderers"}},"id":"0148d7fe-39eb-45e7-9a1d-6325cf4c7fc4","type":"ColumnDataSource"},{"attributes":{},"id":"85fe2087-1a5a-4dec-8e6a-44c0592dbdf4","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"value_change"},"y":{"field":"price_change"}},"id":"1869eab9-2cf5-42d5-a375-1d1bebfc3ef2","type":"Circle"},{"attributes":{"axis_label":"Production change","axis_line_width":{"value":2},"formatter":{"id":"1a69a6a9-9e25-47fd-b185-a36da72ca681","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"87c96eb3-38cb-4792-976f-415a5eb92f83","subtype":"Figure","type":"Plot"},"ticker":{"id":"9ff74480-8b8b-4fc6-935b-752b04f2c702","type":"BasicTicker"}},"id":"7a2cc913-6d2b-4b14-88db-820196415cc5","type":"LinearAxis"},{"attributes":{},"id":"9ff74480-8b8b-4fc6-935b-752b04f2c702","type":"BasicTicker"},{"attributes":{"plot":{"id":"87c96eb3-38cb-4792-976f-415a5eb92f83","subtype":"Figure","type":"Plot"},"ticker":{"id":"9ff74480-8b8b-4fc6-935b-752b04f2c702","type":"BasicTicker"}},"id":"a105f07d-9da7-4c0a-8053-a0245b5794cd","type":"Grid"},{"attributes":{"axis_label":"Price change","axis_line_width":{"value":2},"formatter":{"id":"69ab88a6-dcbf-444b-947f-485ff3615a17","type":"BasicTickFormatter"},"plot":{"id":"87c96eb3-38cb-4792-976f-415a5eb92f83","subtype":"Figure","type":"Plot"},"ticker":{"id":"456e359d-6fb5-45e8-bb0f-b0cf20a98aab","type":"BasicTicker"}},"id":"760cd762-769e-462d-9a38-effc3739f505","type":"LinearAxis"},{"attributes":{},"id":"456e359d-6fb5-45e8-bb0f-b0cf20a98aab","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"87c96eb3-38cb-4792-976f-415a5eb92f83","subtype":"Figure","type":"Plot"},"ticker":{"id":"456e359d-6fb5-45e8-bb0f-b0cf20a98aab","type":"BasicTicker"}},"id":"a5542e66-53f1-4a73-8a78-49bbfeea94c4","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3963ee24-f4a4-4417-a12f-eb07d18e75ce","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"europe_Applescorrelation"},"id":"ac491c18-4f44-4c99-a4ea-288f0862ef49","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"value_change"},"y":{"field":"price_change"}},"id":"a52fcd5e-1cad-4426-8e41-5ced190a1ec8","type":"Circle"},{"attributes":{"data_source":{"id":"0148d7fe-39eb-45e7-9a1d-6325cf4c7fc4","type":"ColumnDataSource"},"glyph":{"id":"a52fcd5e-1cad-4426-8e41-5ced190a1ec8","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1869eab9-2cf5-42d5-a375-1d1bebfc3ef2","type":"Circle"},"selection_glyph":null,"view":{"id":"0ace199e-4daf-446c-90c1-a1e26c80f916","type":"CDSView"}},"id":"264ba239-2dae-41a0-9667-adc0145f6bc0","type":"GlyphRenderer"},{"attributes":{},"id":"6d39a38a-bd38-4907-a058-cad68d0d06cf","type":"PanTool"},{"attributes":{"source":{"id":"0148d7fe-39eb-45e7-9a1d-6325cf4c7fc4","type":"ColumnDataSource"}},"id":"0ace199e-4daf-446c-90c1-a1e26c80f916","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6d39a38a-bd38-4907-a058-cad68d0d06cf","type":"PanTool"},{"id":"75473368-bd5f-4c46-9f76-95ca455f11a8","type":"WheelZoomTool"},{"id":"872f7f0d-7f6e-43b5-913d-3d8f497f3792","type":"BoxZoomTool"},{"id":"23f0e83d-45bb-45f4-9dea-614e0df1280a","type":"SaveTool"},{"id":"1f818507-5129-42b6-9c17-a40703feacfa","type":"ResetTool"},{"id":"40110e60-a560-402d-a965-dced2fa4aca5","type":"HelpTool"},{"id":"40735efd-dc6f-478f-a190-23139f75c3c1","type":"HoverTool"}]},"id":"2ad2bffb-04d8-460e-b9a6-26549d09a440","type":"Toolbar"},{"attributes":{},"id":"75473368-bd5f-4c46-9f76-95ca455f11a8","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"3963ee24-f4a4-4417-a12f-eb07d18e75ce","type":"BoxAnnotation"}},"id":"872f7f0d-7f6e-43b5-913d-3d8f497f3792","type":"BoxZoomTool"},{"attributes":{},"id":"23f0e83d-45bb-45f4-9dea-614e0df1280a","type":"SaveTool"},{"attributes":{},"id":"1f818507-5129-42b6-9c17-a40703feacfa","type":"ResetTool"},{"attributes":{},"id":"40110e60-a560-402d-a965-dced2fa4aca5","type":"HelpTool"},{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production change","@value_change"],["Price change","@price_change"]]},"id":"40735efd-dc6f-478f-a190-23139f75c3c1","type":"HoverTool"},{"attributes":{},"id":"1a69a6a9-9e25-47fd-b185-a36da72ca681","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"QgvUJNSj0r/4XzaogGyPP+avp1lyvrI/jFK+VwKwbD9PElN13DK/vzYApf7Nop2/","dtype":"float64","shape":[6]},"y":{"__ndarray__":"e1f5XJI74L9pfOzKmG+iP9ZJi/JfvME/RPbyIP3Ejj/v9V+YV4PKv9RIqoz3vaW/","dtype":"float64","shape":[6]}},"selected":{"id":"91c6af74-0127-4f73-84cf-283f1a2f3c78","type":"Selection"},"selection_policy":{"id":"c7457b1b-b1c4-4bdd-b7ba-e4c887381cf4","type":"UnionRenderers"}},"id":"93481301-6741-44ce-b2c1-86f960b6c88a","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2afa1745-a5b0-4d73-a316-08e1fa5bb61e","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5aece857-b202-47c0-a049-6013fd5c68b2","type":"Line"}],"root_ids":["87c96eb3-38cb-4792-976f-415a5eb92f83"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"d226352b-d26a-40e4-9c51-649626f9d951","roots":{"87c96eb3-38cb-4792-976f-415a5eb92f83":"8186a1cf-ea22-4aec-9996-31e10f82e57f"}}];
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