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
      };var element = document.getElementById("61c0ccfe-005c-4d6b-8f38-640ea8a7d30f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '61c0ccfe-005c-4d6b-8f38-640ea8a7d30f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e432175d-d22a-45ff-aeaf-096c9c8cd321":{"roots":{"references":[{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production","@production"],["Price","@price"]]},"id":"e5ae4a47-e085-48ae-9d3c-662753b83c75","type":"HoverTool"},{"attributes":{"callback":null},"id":"ad362d97-5ff2-41da-bdd6-3c99fbd3bf5a","type":"DataRange1d"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"bb1ae3bd-b1fb-43cb-8e30-4b98d2c8059a","type":"Line"},{"attributes":{"plot":null,"text":"Guatemala_Maize(yellow)"},"id":"217e55f5-2e03-49e0-9e1f-49fbf8629718","type":"Title"},{"attributes":{},"id":"8e80ddc7-5717-4606-85dc-5a91af7a3454","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5c6d1ed8-0208-4b9d-a6d4-6ce5690aa006","type":"Line"},{"attributes":{"data_source":{"id":"8cd62cb3-b99d-4482-bf6a-2cceca4dec2f","type":"ColumnDataSource"},"glyph":{"id":"bb1ae3bd-b1fb-43cb-8e30-4b98d2c8059a","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5c6d1ed8-0208-4b9d-a6d4-6ce5690aa006","type":"Line"},"selection_glyph":null,"view":{"id":"f4cf4c83-b4a7-4b81-90f8-969492794a9b","type":"CDSView"}},"id":"879f74e5-e99b-4ba4-9393-4b63f7d7b4cc","type":"GlyphRenderer"},{"attributes":{"source":{"id":"8cd62cb3-b99d-4482-bf6a-2cceca4dec2f","type":"ColumnDataSource"}},"id":"f4cf4c83-b4a7-4b81-90f8-969492794a9b","type":"CDSView"},{"attributes":{"below":[{"id":"202b5c65-c144-4fb2-a459-14fca76cf04d","type":"LinearAxis"}],"left":[{"id":"e3ca336e-099a-4afd-ae92-6df60395f4cb","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"202b5c65-c144-4fb2-a459-14fca76cf04d","type":"LinearAxis"},{"id":"cf20f015-fedc-48a2-a022-52f28143be00","type":"Grid"},{"id":"e3ca336e-099a-4afd-ae92-6df60395f4cb","type":"LinearAxis"},{"id":"d104d649-fde7-4b1f-972d-76b8a78731a1","type":"Grid"},{"id":"f21a0c1d-aba4-4057-b797-6db201b6dd53","type":"BoxAnnotation"},{"id":"fd6a8e5b-725f-4a8d-803e-379cbd9b7c2a","type":"GlyphRenderer"},{"id":"879f74e5-e99b-4ba4-9393-4b63f7d7b4cc","type":"GlyphRenderer"}],"title":{"id":"217e55f5-2e03-49e0-9e1f-49fbf8629718","type":"Title"},"toolbar":{"id":"6703bd1a-aa00-4ba5-bb39-de324b13148f","type":"Toolbar"},"x_range":{"id":"ad362d97-5ff2-41da-bdd6-3c99fbd3bf5a","type":"DataRange1d"},"x_scale":{"id":"ade70472-445d-4fd6-88e1-6f7b8c72d8eb","type":"LinearScale"},"y_range":{"id":"eb23cb84-38c7-488b-be69-98648a3e80e3","type":"DataRange1d"},"y_scale":{"id":"061ceada-3e01-4fe0-a8de-f11548c31a2d","type":"LinearScale"}},"id":"2b122002-31b7-4de0-93cb-1be0f5825a8c","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"28c73d5d-53fc-4626-9e14-e618147d3d30","type":"BasicTickFormatter"},{"attributes":{},"id":"411134fd-8826-4b4f-ba6c-7d2d3f267ada","type":"Selection"},{"attributes":{},"id":"2e2be092-5878-4a66-b4e4-6c84ae05cb7b","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"056d337e-1fff-4d22-9502-b5512be4ec45","type":"PanTool"},{"id":"652bb1ba-8080-4500-89ad-ed4492832a11","type":"WheelZoomTool"},{"id":"3ed6b088-a021-405e-b1f9-e55139d9fad4","type":"BoxZoomTool"},{"id":"e210940e-f3bc-4011-8679-047e20f0bd43","type":"SaveTool"},{"id":"62cb9c4e-c3d4-4fb6-a633-66c6c34732ce","type":"ResetTool"},{"id":"73113f21-9d19-46a1-8e41-27c192cf6479","type":"HelpTool"},{"id":"e5ae4a47-e085-48ae-9d3c-662753b83c75","type":"HoverTool"}]},"id":"6703bd1a-aa00-4ba5-bb39-de324b13148f","type":"Toolbar"},{"attributes":{},"id":"ce7341d5-11bb-418d-957c-0c4411bb0781","type":"Selection"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"pMPE1O+pNUGxqqDfBNs4Qcm/nU6nbTlBub5nrux5OUFYUK+NjTg0QawicYjIhTpBqxANTefpNEFiPoYiaj81QZdXUuPZADRB0U9oXr5iPUFN5dzKilk6QfNU0VlqGzpBcW94YjyWOEE=","dtype":"float64","shape":[13]},"y":{"__ndarray__":"I3mtv6/9AEAC2hrCz0MHQARskHAMZAhAPWwjYyt8CEC3OiZ4ME/8P09BzfKxigpA+S3+Z2sI/z8hEr8nTCwAQIyoTn00dPs/U5I5R7sVEECBhGMguzMKQHt2+gacuQlAvxyLCpu8BkA=","dtype":"float64","shape":[13]}},"selected":{"id":"ce7341d5-11bb-418d-957c-0c4411bb0781","type":"Selection"},"selection_policy":{"id":"25cfaae9-d9eb-47b4-bf88-452749c8f9ff","type":"UnionRenderers"}},"id":"8cd62cb3-b99d-4482-bf6a-2cceca4dec2f","type":"ColumnDataSource"},{"attributes":{},"id":"ade70472-445d-4fd6-88e1-6f7b8c72d8eb","type":"LinearScale"},{"attributes":{"callback":null},"id":"eb23cb84-38c7-488b-be69-98648a3e80e3","type":"DataRange1d"},{"attributes":{},"id":"061ceada-3e01-4fe0-a8de-f11548c31a2d","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"b419e409-bedc-48e6-b44e-231c44c2ea1b","type":"Circle"},{"attributes":{"axis_label":"Production","axis_line_width":{"value":2},"formatter":{"id":"28c73d5d-53fc-4626-9e14-e618147d3d30","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"2b122002-31b7-4de0-93cb-1be0f5825a8c","subtype":"Figure","type":"Plot"},"ticker":{"id":"38f542d1-5aae-4c12-a0b7-bf8889ed9f77","type":"BasicTicker"}},"id":"202b5c65-c144-4fb2-a459-14fca76cf04d","type":"LinearAxis"},{"attributes":{},"id":"38f542d1-5aae-4c12-a0b7-bf8889ed9f77","type":"BasicTicker"},{"attributes":{"plot":{"id":"2b122002-31b7-4de0-93cb-1be0f5825a8c","subtype":"Figure","type":"Plot"},"ticker":{"id":"38f542d1-5aae-4c12-a0b7-bf8889ed9f77","type":"BasicTicker"}},"id":"cf20f015-fedc-48a2-a022-52f28143be00","type":"Grid"},{"attributes":{},"id":"25cfaae9-d9eb-47b4-bf88-452749c8f9ff","type":"UnionRenderers"},{"attributes":{"axis_label":"Price","axis_line_width":{"value":2},"formatter":{"id":"8e80ddc7-5717-4606-85dc-5a91af7a3454","type":"BasicTickFormatter"},"plot":{"id":"2b122002-31b7-4de0-93cb-1be0f5825a8c","subtype":"Figure","type":"Plot"},"ticker":{"id":"219941a6-95bb-4252-9c86-a83aaaf5e648","type":"BasicTicker"}},"id":"e3ca336e-099a-4afd-ae92-6df60395f4cb","type":"LinearAxis"},{"attributes":{},"id":"219941a6-95bb-4252-9c86-a83aaaf5e648","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"2b122002-31b7-4de0-93cb-1be0f5825a8c","subtype":"Figure","type":"Plot"},"ticker":{"id":"219941a6-95bb-4252-9c86-a83aaaf5e648","type":"BasicTicker"}},"id":"d104d649-fde7-4b1f-972d-76b8a78731a1","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f21a0c1d-aba4-4057-b797-6db201b6dd53","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"0d9cd13e-ebd4-4dab-b6f2-8714cc806d8e","type":"Circle"},{"attributes":{"data_source":{"id":"4a7e647a-d6fb-4ae8-a192-11e780252c20","type":"ColumnDataSource"},"glyph":{"id":"0d9cd13e-ebd4-4dab-b6f2-8714cc806d8e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b419e409-bedc-48e6-b44e-231c44c2ea1b","type":"Circle"},"selection_glyph":null,"view":{"id":"5414343d-bdf3-44d9-89e7-85b2a893eb93","type":"CDSView"}},"id":"fd6a8e5b-725f-4a8d-803e-379cbd9b7c2a","type":"GlyphRenderer"},{"attributes":{},"id":"056d337e-1fff-4d22-9502-b5512be4ec45","type":"PanTool"},{"attributes":{"callback":null,"data":{"price":{"__ndarray__":"jKhOfTR0+z+3OiZ4ME/8P/gt/mdrCP8/IRK/J0wsAEAjea2/r/0AQL8ciwqbvAZABGyQcAxkCEAB2hrCz0MHQFOSOUe7FRBAT0HN8rGKCkB7dvoGnLkJQD1sI2MrfAhAgoRjILszCkA=","dtype":"float64","shape":[13]},"production":{"__ndarray__":"AAAAAHvyMkEAAAAApDszQQAAAACcijNBAAAAAPL+NEEAAAAAxro2QQAAAAAKRTpBAAAAANPOOEEAAAAAaf84QQAAAADjjzlBAAAAAElMOkEAAAAAWGQ7QQAAAADxsjtBAAAAAMxJPEE=","dtype":"float64","shape":[13]}},"selected":{"id":"411134fd-8826-4b4f-ba6c-7d2d3f267ada","type":"Selection"},"selection_policy":{"id":"2e2be092-5878-4a66-b4e4-6c84ae05cb7b","type":"UnionRenderers"}},"id":"4a7e647a-d6fb-4ae8-a192-11e780252c20","type":"ColumnDataSource"},{"attributes":{"source":{"id":"4a7e647a-d6fb-4ae8-a192-11e780252c20","type":"ColumnDataSource"}},"id":"5414343d-bdf3-44d9-89e7-85b2a893eb93","type":"CDSView"},{"attributes":{},"id":"652bb1ba-8080-4500-89ad-ed4492832a11","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"f21a0c1d-aba4-4057-b797-6db201b6dd53","type":"BoxAnnotation"}},"id":"3ed6b088-a021-405e-b1f9-e55139d9fad4","type":"BoxZoomTool"},{"attributes":{},"id":"e210940e-f3bc-4011-8679-047e20f0bd43","type":"SaveTool"},{"attributes":{},"id":"62cb9c4e-c3d4-4fb6-a633-66c6c34732ce","type":"ResetTool"},{"attributes":{},"id":"73113f21-9d19-46a1-8e41-27c192cf6479","type":"HelpTool"}],"root_ids":["2b122002-31b7-4de0-93cb-1be0f5825a8c"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"e432175d-d22a-45ff-aeaf-096c9c8cd321","roots":{"2b122002-31b7-4de0-93cb-1be0f5825a8c":"61c0ccfe-005c-4d6b-8f38-640ea8a7d30f"}}];
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