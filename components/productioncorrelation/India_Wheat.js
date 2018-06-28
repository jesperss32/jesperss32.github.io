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
      };var element = document.getElementById("f2836722-b5fb-4895-bf3c-d108dd246633");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f2836722-b5fb-4895-bf3c-d108dd246633' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"925ae1d7-354d-4e5c-9c51-9a7165df660d":{"roots":{"references":[{"attributes":{"callback":null,"data":{"price":{"__ndarray__":"m5mZmZmpF0BJn/RJn7QXQJQ+6ZM+uR1ARERERETcIEBtoNMGOh0gQHd3d3d3HyFAd3d3d3dfIUC66KKLLtohQAAAAAAAICJAdU3XdE13I0Acx3Ecx8EjQHMcx3EcjyhAzczMzMx8KkCLRgK+eX0rQJ/0SZ/0GS5AHY7m4Wj+MEAnwFnzjKIwQEL8GcSfkTFAe6/3eq9nNEAbUatOhG41QDsrGgn44jVALRj/tscnN0A=","dtype":"float64","shape":[22]},"production":{"__ndarray__":"AAAAALCIjEEAAABAP1yPQQAAAMA/nI1BAAAA4MyIkEEAAABAwaKPQQAAAEAL/5BBAAAAADA1kkEAAACATVmRQQAAAABxW49BAAAAoBA0kUEAAACAQ12QQQAAAAAQiZBBAAAAwN8SkkEAAABgi7uSQQAAAKBHPJNBAAAAQNxDk0EAAABAXraUQQAAAAAEn5ZBAAAAwGVLlkEAAABAONqWQQAAAEBfoZRBAAAAgMlKlkE=","dtype":"float64","shape":[22]}},"selected":{"id":"ff011655-4983-4404-9536-f1e75cba63e3","type":"Selection"},"selection_policy":{"id":"76232fe0-6163-49f6-a2ed-ad6779d1e910","type":"UnionRenderers"}},"id":"b15eba6a-c70a-4f77-9333-56a62fc11c7c","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"50c9a9c5-f85b-4012-8c53-34cacb6d6875","type":"Line"},{"attributes":{"callback":null},"id":"fa4af8f3-7480-4c84-90b1-46f523f6c7a3","type":"DataRange1d"},{"attributes":{},"id":"2520f87e-e613-4e5f-a6cb-c58a34aa841c","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"25931c6c-b23e-4a30-a7d3-5d8b75b4b322","type":"Line"},{"attributes":{"data_source":{"id":"bb381b35-de51-4b9e-8fae-453b2ae379d9","type":"ColumnDataSource"},"glyph":{"id":"50c9a9c5-f85b-4012-8c53-34cacb6d6875","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25931c6c-b23e-4a30-a7d3-5d8b75b4b322","type":"Line"},"selection_glyph":null,"view":{"id":"c39483a0-86b5-4750-97fb-7b17e86f523a","type":"CDSView"}},"id":"a2acca57-3cbe-4136-bdaa-0e2ca0c1e565","type":"GlyphRenderer"},{"attributes":{"source":{"id":"bb381b35-de51-4b9e-8fae-453b2ae379d9","type":"ColumnDataSource"}},"id":"c39483a0-86b5-4750-97fb-7b17e86f523a","type":"CDSView"},{"attributes":{},"id":"76232fe0-6163-49f6-a2ed-ad6779d1e910","type":"UnionRenderers"},{"attributes":{},"id":"94a0cd29-f0d6-4ea4-80ef-2b7111d595c1","type":"BasicTickFormatter"},{"attributes":{},"id":"ff011655-4983-4404-9536-f1e75cba63e3","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"c7f47b64-5be7-4380-adab-22830a52fdbf","type":"PanTool"},{"id":"40dc9f66-f777-4d4f-bfef-84e8a140d287","type":"WheelZoomTool"},{"id":"447f280e-939c-44e3-9785-7ceecb5d3c46","type":"BoxZoomTool"},{"id":"fe01c120-5a66-4066-98a6-d34d3fd3e211","type":"SaveTool"},{"id":"dfd166fe-36ac-465e-8ee0-ef7d3a48f665","type":"ResetTool"},{"id":"fb37f0eb-37eb-4cbb-9c23-3f593a24b5bb","type":"HelpTool"},{"id":"503ceea3-e8cc-4ffc-91c8-f448dcbf435e","type":"HoverTool"}]},"id":"6a2d16c5-0e46-46b1-822d-80ae243138eb","type":"Toolbar"},{"attributes":{"plot":null,"text":"India_Wheat"},"id":"feb19a36-e067-4fb1-afa3-bd6eb3c77d14","type":"Title"},{"attributes":{},"id":"58d8d612-e6c6-4a72-805f-e108619a1320","type":"UnionRenderers"},{"attributes":{},"id":"ae3e3cf3-21f7-4517-bf8a-7a5a275eb1d9","type":"LinearScale"},{"attributes":{"callback":null},"id":"ab666fc0-03b6-476f-99b7-24854f42fa32","type":"DataRange1d"},{"attributes":{},"id":"9909723a-8417-4c7c-b698-d49d51652311","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"35f3854f-bc6d-4e83-b6b3-0d946ab651a1","type":"Circle"},{"attributes":{"axis_label":"Production","axis_line_width":{"value":2},"formatter":{"id":"94a0cd29-f0d6-4ea4-80ef-2b7111d595c1","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"1cd06260-c1cd-431a-85ff-4abb98ed274f","subtype":"Figure","type":"Plot"},"ticker":{"id":"9fbc2bff-6fa5-4e9d-ba62-7777b336ef08","type":"BasicTicker"}},"id":"939ae064-1f65-4949-b5b8-e0a078069ed4","type":"LinearAxis"},{"attributes":{},"id":"9fbc2bff-6fa5-4e9d-ba62-7777b336ef08","type":"BasicTicker"},{"attributes":{"plot":{"id":"1cd06260-c1cd-431a-85ff-4abb98ed274f","subtype":"Figure","type":"Plot"},"ticker":{"id":"9fbc2bff-6fa5-4e9d-ba62-7777b336ef08","type":"BasicTicker"}},"id":"216a9944-6dcd-483a-a072-c4fe2e34dc6c","type":"Grid"},{"attributes":{},"id":"c73b0517-7f2d-492e-9619-b8a1fc0db8bd","type":"Selection"},{"attributes":{"axis_label":"Price","axis_line_width":{"value":2},"formatter":{"id":"2520f87e-e613-4e5f-a6cb-c58a34aa841c","type":"BasicTickFormatter"},"plot":{"id":"1cd06260-c1cd-431a-85ff-4abb98ed274f","subtype":"Figure","type":"Plot"},"ticker":{"id":"55f05128-1e32-41f8-b4c6-0e36369662f8","type":"BasicTicker"}},"id":"d1a5ccfa-2306-47b4-9fbe-145edc624bc4","type":"LinearAxis"},{"attributes":{},"id":"55f05128-1e32-41f8-b4c6-0e36369662f8","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"1cd06260-c1cd-431a-85ff-4abb98ed274f","subtype":"Figure","type":"Plot"},"ticker":{"id":"55f05128-1e32-41f8-b4c6-0e36369662f8","type":"BasicTicker"}},"id":"9c7f46dc-1edc-4735-a6d5-210769ab3f2e","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"78bb7842-bb24-4e22-8fa8-9ca40b4c1a7e","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"1a201775-c52b-40ea-b12e-8196619e20b3","type":"Circle"},{"attributes":{"data_source":{"id":"b15eba6a-c70a-4f77-9333-56a62fc11c7c","type":"ColumnDataSource"},"glyph":{"id":"1a201775-c52b-40ea-b12e-8196619e20b3","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35f3854f-bc6d-4e83-b6b3-0d946ab651a1","type":"Circle"},"selection_glyph":null,"view":{"id":"6a07e228-6926-49b8-8767-2db88e841917","type":"CDSView"}},"id":"d80198f3-ce0c-4058-b797-aadbd48e07f6","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"Glg2W10clkFO7UieZZSQQW5sJUMKW5BBbs6fO3BQlkEasDRUqgSSQZa0BOUDTJBBt9BArdWmlUGgIX2/UFiOQRsmJnAn4ZBB+B6DOE0hkEGqZDh4WWmQQTeX76NB95NBAhCkLD2zj0H97juiKWKUQYipNucLc5JBO8diZMmEkEEeZk9mb6ySQZ+1OqLHWo5BRqW9OM7xkEG+xyETr+GWQZoOoZnlQZNBU9ScO1UglEE=","dtype":"float64","shape":[22]},"y":{"__ndarray__":"G1GrToRuNUAAAAAAACAiQHd3d3d3HyFAOisaCfjiNUB0HMdxHI8oQERERERE3CBAe6/3eq9nNECbmZmZmakXQHVN13RNdyNAbaDTBjodIEB3d3d3d18hQCfAWfOMojBAlD7pkz65HUBC/BnEn5ExQM3MzMzMfCpAuuiiiy7aIUCLRgK+eX0rQEif9EmftBdAHMdxHMfBI0AtGP+2xyc3QJ/0SZ/0GS5AHY7m4Wj+MEA=","dtype":"float64","shape":[22]}},"selected":{"id":"c73b0517-7f2d-492e-9619-b8a1fc0db8bd","type":"Selection"},"selection_policy":{"id":"58d8d612-e6c6-4a72-805f-e108619a1320","type":"UnionRenderers"}},"id":"bb381b35-de51-4b9e-8fae-453b2ae379d9","type":"ColumnDataSource"},{"attributes":{},"id":"c7f47b64-5be7-4380-adab-22830a52fdbf","type":"PanTool"},{"attributes":{"source":{"id":"b15eba6a-c70a-4f77-9333-56a62fc11c7c","type":"ColumnDataSource"}},"id":"6a07e228-6926-49b8-8767-2db88e841917","type":"CDSView"},{"attributes":{},"id":"40dc9f66-f777-4d4f-bfef-84e8a140d287","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"78bb7842-bb24-4e22-8fa8-9ca40b4c1a7e","type":"BoxAnnotation"}},"id":"447f280e-939c-44e3-9785-7ceecb5d3c46","type":"BoxZoomTool"},{"attributes":{},"id":"fe01c120-5a66-4066-98a6-d34d3fd3e211","type":"SaveTool"},{"attributes":{},"id":"dfd166fe-36ac-465e-8ee0-ef7d3a48f665","type":"ResetTool"},{"attributes":{},"id":"fb37f0eb-37eb-4cbb-9c23-3f593a24b5bb","type":"HelpTool"},{"attributes":{"below":[{"id":"939ae064-1f65-4949-b5b8-e0a078069ed4","type":"LinearAxis"}],"left":[{"id":"d1a5ccfa-2306-47b4-9fbe-145edc624bc4","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"939ae064-1f65-4949-b5b8-e0a078069ed4","type":"LinearAxis"},{"id":"216a9944-6dcd-483a-a072-c4fe2e34dc6c","type":"Grid"},{"id":"d1a5ccfa-2306-47b4-9fbe-145edc624bc4","type":"LinearAxis"},{"id":"9c7f46dc-1edc-4735-a6d5-210769ab3f2e","type":"Grid"},{"id":"78bb7842-bb24-4e22-8fa8-9ca40b4c1a7e","type":"BoxAnnotation"},{"id":"d80198f3-ce0c-4058-b797-aadbd48e07f6","type":"GlyphRenderer"},{"id":"a2acca57-3cbe-4136-bdaa-0e2ca0c1e565","type":"GlyphRenderer"}],"title":{"id":"feb19a36-e067-4fb1-afa3-bd6eb3c77d14","type":"Title"},"toolbar":{"id":"6a2d16c5-0e46-46b1-822d-80ae243138eb","type":"Toolbar"},"x_range":{"id":"fa4af8f3-7480-4c84-90b1-46f523f6c7a3","type":"DataRange1d"},"x_scale":{"id":"ae3e3cf3-21f7-4517-bf8a-7a5a275eb1d9","type":"LinearScale"},"y_range":{"id":"ab666fc0-03b6-476f-99b7-24854f42fa32","type":"DataRange1d"},"y_scale":{"id":"9909723a-8417-4c7c-b698-d49d51652311","type":"LinearScale"}},"id":"1cd06260-c1cd-431a-85ff-4abb98ed274f","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production","@production"],["Price","@price"]]},"id":"503ceea3-e8cc-4ffc-91c8-f448dcbf435e","type":"HoverTool"}],"root_ids":["1cd06260-c1cd-431a-85ff-4abb98ed274f"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"925ae1d7-354d-4e5c-9c51-9a7165df660d","roots":{"1cd06260-c1cd-431a-85ff-4abb98ed274f":"f2836722-b5fb-4895-bf3c-d108dd246633"}}];
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