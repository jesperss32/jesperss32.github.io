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
      };var element = document.getElementById("4aec3866-3b65-4a4b-b964-fdd473e8b6e2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4aec3866-3b65-4a4b-b964-fdd473e8b6e2' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"eb6c7c0c-25a7-4668-975c-713103dd274e":{"roots":{"references":[{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production","@production"],["Price","@price"]]},"id":"d8744934-ee15-4ce9-8c96-47965e7e6721","type":"HoverTool"},{"attributes":{"callback":null},"id":"f206bbcd-34e3-4068-911b-705c7f01922f","type":"DataRange1d"},{"attributes":{},"id":"b4198e55-f5ce-4f69-9b5b-79d9c941822e","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Nepal_Wheat"},"id":"6a6ab4be-0e23-43d0-9df2-e51e6f0c06e4","type":"Title"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"3IGD0HcOOUFJPX+J5xc2QRrzUTuRRTxBQOzIUJ4NNEFyV3LuOAQ1QToVRMgl3zdBH28oMRDEOkEzKF2Yhys1QYDOuC3FoDNBKptRgVF4OUH0SmZmdl83QVTKaUIIjDxB1mlTKhBHOUG2dHgXU702QQ==","dtype":"float64","shape":[14]},"y":{"__ndarray__":"+rOcP8s5QUBI4XoULk44QGPJL5b8ukZAagOdNtBRMUDQaQOdNp40QHO/T/f7ZD5Ah7VvWPsmREDaVilRziQ1QKI1WqM1ui9AjECwCATvQUCyne+nxq88QNMGOm2gM0dApZvEILCaQUB5W9bqmIQ6QA==","dtype":"float64","shape":[14]}},"selected":{"id":"ea51b0f1-3a4e-4bc8-9a5f-f68dbf4bd0a1","type":"Selection"},"selection_policy":{"id":"01ba970b-e66e-41ca-b0c8-b71f75bf8aa8","type":"UnionRenderers"}},"id":"fc12a955-f9da-442b-bf40-f3f270e82e49","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"c5899436-ca17-4f54-9687-e26d0e34614c","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"336a1dc3-1cf7-497d-9132-95deb50827fc","type":"Line"},{"attributes":{"data_source":{"id":"fc12a955-f9da-442b-bf40-f3f270e82e49","type":"ColumnDataSource"},"glyph":{"id":"c5899436-ca17-4f54-9687-e26d0e34614c","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"336a1dc3-1cf7-497d-9132-95deb50827fc","type":"Line"},"selection_glyph":null,"view":{"id":"91dc081c-ada6-40bb-a2fe-c5c2c1e15c2f","type":"CDSView"}},"id":"8093cebd-c123-438a-a97b-2a134d40b2df","type":"GlyphRenderer"},{"attributes":{"source":{"id":"fc12a955-f9da-442b-bf40-f3f270e82e49","type":"ColumnDataSource"}},"id":"91dc081c-ada6-40bb-a2fe-c5c2c1e15c2f","type":"CDSView"},{"attributes":{"below":[{"id":"ebac19ee-497e-40ee-afc6-dac9c103e1db","type":"LinearAxis"}],"left":[{"id":"95de8fd1-e783-434f-98e0-e758dea38382","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"ebac19ee-497e-40ee-afc6-dac9c103e1db","type":"LinearAxis"},{"id":"3e8e2e42-b6ab-44e2-9134-25209226eebb","type":"Grid"},{"id":"95de8fd1-e783-434f-98e0-e758dea38382","type":"LinearAxis"},{"id":"1b71efdd-12c0-4b8a-b92f-d53728aa2646","type":"Grid"},{"id":"2963caf5-def6-422d-836f-da195f41a1c1","type":"BoxAnnotation"},{"id":"d8b7c441-0618-47c6-8217-0df6a7ba02e1","type":"GlyphRenderer"},{"id":"8093cebd-c123-438a-a97b-2a134d40b2df","type":"GlyphRenderer"}],"title":{"id":"6a6ab4be-0e23-43d0-9df2-e51e6f0c06e4","type":"Title"},"toolbar":{"id":"cb0e3161-8f8e-4160-9b5c-f4765a05f620","type":"Toolbar"},"x_range":{"id":"f206bbcd-34e3-4068-911b-705c7f01922f","type":"DataRange1d"},"x_scale":{"id":"aa4cc2c3-f210-442a-a3fc-7418daac150a","type":"LinearScale"},"y_range":{"id":"e202f17c-2f64-4e22-b83c-40de44fe6b36","type":"DataRange1d"},"y_scale":{"id":"b30c1e95-7d34-4665-8c01-dbedcf028e4e","type":"LinearScale"}},"id":"922e221f-8432-4728-a5a3-db2af6ea1a37","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"5c4d1180-6e51-4178-b791-fc5b1271d7ea","type":"BasicTickFormatter"},{"attributes":{},"id":"74111a13-e59b-4525-9b8f-c04a7807d9ee","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"346f2184-fe4d-4f9e-9220-3ecebabbeaf4","type":"PanTool"},{"id":"21801aa5-5d4b-4b1f-b573-361c290d7dcf","type":"WheelZoomTool"},{"id":"3f0471f1-61e8-4b53-9d03-748d3d067cc7","type":"BoxZoomTool"},{"id":"26840a3a-8c2d-4ec3-af76-39db6f71bd51","type":"SaveTool"},{"id":"22bc2b7d-e212-4a9c-9104-8d7d9c9f0012","type":"ResetTool"},{"id":"ec6c1954-f50f-493e-b886-c5166ec50c42","type":"HelpTool"},{"id":"d8744934-ee15-4ce9-8c96-47965e7e6721","type":"HoverTool"}]},"id":"cb0e3161-8f8e-4160-9b5c-f4765a05f620","type":"Toolbar"},{"attributes":{},"id":"32c9cfcb-a74f-4a0a-8d78-b46a42bb2e55","type":"UnionRenderers"},{"attributes":{},"id":"ea51b0f1-3a4e-4bc8-9a5f-f68dbf4bd0a1","type":"Selection"},{"attributes":{},"id":"aa4cc2c3-f210-442a-a3fc-7418daac150a","type":"LinearScale"},{"attributes":{},"id":"01ba970b-e66e-41ca-b0c8-b71f75bf8aa8","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"e202f17c-2f64-4e22-b83c-40de44fe6b36","type":"DataRange1d"},{"attributes":{},"id":"b30c1e95-7d34-4665-8c01-dbedcf028e4e","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"0f576289-0f52-428e-acad-1ad22644f787","type":"Circle"},{"attributes":{"axis_label":"Production","axis_line_width":{"value":2},"formatter":{"id":"b4198e55-f5ce-4f69-9b5b-79d9c941822e","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"922e221f-8432-4728-a5a3-db2af6ea1a37","subtype":"Figure","type":"Plot"},"ticker":{"id":"5edfd7f8-4547-48bb-a0de-d5819c73b235","type":"BasicTicker"}},"id":"ebac19ee-497e-40ee-afc6-dac9c103e1db","type":"LinearAxis"},{"attributes":{},"id":"5edfd7f8-4547-48bb-a0de-d5819c73b235","type":"BasicTicker"},{"attributes":{"plot":{"id":"922e221f-8432-4728-a5a3-db2af6ea1a37","subtype":"Figure","type":"Plot"},"ticker":{"id":"5edfd7f8-4547-48bb-a0de-d5819c73b235","type":"BasicTicker"}},"id":"3e8e2e42-b6ab-44e2-9134-25209226eebb","type":"Grid"},{"attributes":{"axis_label":"Price","axis_line_width":{"value":2},"formatter":{"id":"5c4d1180-6e51-4178-b791-fc5b1271d7ea","type":"BasicTickFormatter"},"plot":{"id":"922e221f-8432-4728-a5a3-db2af6ea1a37","subtype":"Figure","type":"Plot"},"ticker":{"id":"1055d17f-7954-4d21-bb78-8be36489471b","type":"BasicTicker"}},"id":"95de8fd1-e783-434f-98e0-e758dea38382","type":"LinearAxis"},{"attributes":{},"id":"1055d17f-7954-4d21-bb78-8be36489471b","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"922e221f-8432-4728-a5a3-db2af6ea1a37","subtype":"Figure","type":"Plot"},"ticker":{"id":"1055d17f-7954-4d21-bb78-8be36489471b","type":"BasicTicker"}},"id":"1b71efdd-12c0-4b8a-b92f-d53728aa2646","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2963caf5-def6-422d-836f-da195f41a1c1","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"092cc28a-c391-491e-81ee-d8e2250ac502","type":"Circle"},{"attributes":{"data_source":{"id":"2e4179e0-4ec0-4334-93da-974b558833b8","type":"ColumnDataSource"},"glyph":{"id":"092cc28a-c391-491e-81ee-d8e2250ac502","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0f576289-0f52-428e-acad-1ad22644f787","type":"Circle"},"selection_glyph":null,"view":{"id":"715b4ead-fc7c-4841-8b49-932c8eca8a4a","type":"CDSView"}},"id":"d8b7c441-0618-47c6-8217-0df6a7ba02e1","type":"GlyphRenderer"},{"attributes":{},"id":"346f2184-fe4d-4f9e-9220-3ecebabbeaf4","type":"PanTool"},{"attributes":{"callback":null,"data":{"price":{"__ndarray__":"0wY6baAzR0CiNVqjNbovQGoDnTbQUTFA0GkDnTaeNEDaVilRziQ1QEjhehQuTjhAeVvW6piEOkCyne+nxq88QHO/T/f7ZD5A+rOcP8s5QUCMQLAIBO9BQKWbxCCwmkFAh7VvWPsmREBjyS+W/LpGQA==","dtype":"float64","shape":[14]},"production":{"__ndarray__":"AAAAAJGAOkEAAAAAPTIzQQAAAADAgjRBAAAAALcqNUEAAAAAigI2QQAAAADORTVBAAAAAIMeN0EAAAAA4fw3QQAAAAB2gTRBAAAAADvAN0EAAAAAk6M6QQAAAAB+KzxBAAAAAHJbOkEAAAAASSU+QQ==","dtype":"float64","shape":[14]}},"selected":{"id":"74111a13-e59b-4525-9b8f-c04a7807d9ee","type":"Selection"},"selection_policy":{"id":"32c9cfcb-a74f-4a0a-8d78-b46a42bb2e55","type":"UnionRenderers"}},"id":"2e4179e0-4ec0-4334-93da-974b558833b8","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2e4179e0-4ec0-4334-93da-974b558833b8","type":"ColumnDataSource"}},"id":"715b4ead-fc7c-4841-8b49-932c8eca8a4a","type":"CDSView"},{"attributes":{},"id":"21801aa5-5d4b-4b1f-b573-361c290d7dcf","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"2963caf5-def6-422d-836f-da195f41a1c1","type":"BoxAnnotation"}},"id":"3f0471f1-61e8-4b53-9d03-748d3d067cc7","type":"BoxZoomTool"},{"attributes":{},"id":"26840a3a-8c2d-4ec3-af76-39db6f71bd51","type":"SaveTool"},{"attributes":{},"id":"22bc2b7d-e212-4a9c-9104-8d7d9c9f0012","type":"ResetTool"},{"attributes":{},"id":"ec6c1954-f50f-493e-b886-c5166ec50c42","type":"HelpTool"}],"root_ids":["922e221f-8432-4728-a5a3-db2af6ea1a37"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"eb6c7c0c-25a7-4668-975c-713103dd274e","roots":{"922e221f-8432-4728-a5a3-db2af6ea1a37":"4aec3866-3b65-4a4b-b964-fdd473e8b6e2"}}];
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