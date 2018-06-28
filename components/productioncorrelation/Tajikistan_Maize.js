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
      };var element = document.getElementById("f6e87271-d56e-4ac8-a9d6-fb65c4e958c0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f6e87271-d56e-4ac8-a9d6-fb65c4e958c0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a30cb10b-00a7-4492-9963-6b86bb160e5c":{"roots":{"references":[{"attributes":{},"id":"5b091136-97b7-49bc-ac3b-2e6f158eb741","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"price":{"__ndarray__":"AU2EDU+fA0A17zhFR7LTP2LrLI1yA9U/i7MPn2H34z9Di2zn+ynkP5DC9Shcb+Y/PzVeukmM8j9VVVVVVXX+PxIRERERUfU/82koyOLR9z9PG+i0gYYDQDptoNMGugNA5x2n6EjWAkDkpZvEIOAEQA==","dtype":"float64","shape":[14]},"production":{"__ndarray__":"AAAAAIhnCUEAAAAAYArrQAAAAAAgKPdAAAAAAKCT+0AAAAAAKAUDQQAAAAAo9ABBAAAAALDB/0AAAAAAYKcAQQAAAACYZQFBAAAAAKhwAkEAAAAACOgCQQAAAABIWAVBAAAAAOhnBUEAAAAAOHoIQQ==","dtype":"float64","shape":[14]}},"selected":{"id":"0ce9c6d1-43b7-4303-9984-5eb14acd4ccc","type":"Selection"},"selection_policy":{"id":"a05f6cf3-878a-4d40-9d92-7d412ee073e6","type":"UnionRenderers"}},"id":"77caed4c-5e28-4784-a550-b56fa1dbb864","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"35bb78fe-d0da-43fb-a48d-320f93e6dc12","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"1lalQRu8BUFTQ5lsACIGQTq0MT6KNABBGTc8k3QBAUHwy4umyj8GQX/fUhK5ugFBAIb7EQ2mA0FAjeS/VzAGQTXFe+DY6QZBUDsCYPwr/EAkiVRvaIj4QKlD7Gfng/tAXJoiwyW5+EDISswvRnX7QA==","dtype":"float64","shape":[14]},"y":{"__ndarray__":"5x2n6EjWAkBPG+i0gYYDQD81XrpJjPI/EhERERFR9T86baDTBroDQPNpKMji0fc/VVVVVVV1/j8BTYQNT58DQOSlm8Qg4ARAkML1KFxv5j817zhFR7LTP0OLbOf7KeQ/YussjXID1T+Lsw+fYffjPw==","dtype":"float64","shape":[14]}},"selected":{"id":"e6cf3909-4350-47e4-b978-44c18381fb92","type":"Selection"},"selection_policy":{"id":"5ae2b2b3-cdd1-4006-8737-97b1e9f0bb99","type":"UnionRenderers"}},"id":"385ca981-210a-46e5-b092-5e293c4d040b","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"c9d69e36-8935-4197-a2c2-c35416660935","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2c607796-a40d-4a96-b7f2-f779beeb7c17","type":"Line"},{"attributes":{"data_source":{"id":"385ca981-210a-46e5-b092-5e293c4d040b","type":"ColumnDataSource"},"glyph":{"id":"c9d69e36-8935-4197-a2c2-c35416660935","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2c607796-a40d-4a96-b7f2-f779beeb7c17","type":"Line"},"selection_glyph":null,"view":{"id":"f5ec8c1e-d021-40ab-8a02-98d1ccbead26","type":"CDSView"}},"id":"b322b7a7-7098-4253-9525-2ea226a198d6","type":"GlyphRenderer"},{"attributes":{"source":{"id":"385ca981-210a-46e5-b092-5e293c4d040b","type":"ColumnDataSource"}},"id":"f5ec8c1e-d021-40ab-8a02-98d1ccbead26","type":"CDSView"},{"attributes":{},"id":"a05f6cf3-878a-4d40-9d92-7d412ee073e6","type":"UnionRenderers"},{"attributes":{},"id":"c409f4a8-d4b8-45e2-9f07-173d146f6e2b","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"bcf2faea-b12a-4d66-b2b1-33216da8abbc","type":"PanTool"},{"id":"2a458755-76c0-4da7-ae91-f6ce3755dd6f","type":"WheelZoomTool"},{"id":"b45d397d-a9d4-48b8-8741-f32065606cc0","type":"BoxZoomTool"},{"id":"9215598e-1cd5-419c-babb-a1bc39321797","type":"SaveTool"},{"id":"8134018d-d60c-40fc-bea9-485a8a4f00ca","type":"ResetTool"},{"id":"91af2146-3cb2-4a32-ac9f-37bffa3f5c9b","type":"HelpTool"},{"id":"7a64c753-087f-469f-a00a-8007b4f05bcb","type":"HoverTool"}]},"id":"1b797ef3-b8b0-4c9a-8c17-b0495831aca1","type":"Toolbar"},{"attributes":{},"id":"0ce9c6d1-43b7-4303-9984-5eb14acd4ccc","type":"Selection"},{"attributes":{"plot":null,"text":"Tajikistan_Maize"},"id":"4f9929c4-90ff-4dc8-b780-9dc3873e0b84","type":"Title"},{"attributes":{},"id":"5ae2b2b3-cdd1-4006-8737-97b1e9f0bb99","type":"UnionRenderers"},{"attributes":{},"id":"445a15b7-456e-4d3b-880b-7488fe48e3c6","type":"LinearScale"},{"attributes":{"callback":null},"id":"e821b59b-4cf8-438b-b512-e4fdb41f74bb","type":"DataRange1d"},{"attributes":{},"id":"5effbe68-109e-4330-abd3-4a62727b50cf","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"8c7c77ee-7ae7-4a91-aa86-9af600f68b3a","type":"Circle"},{"attributes":{"axis_label":"Production","axis_line_width":{"value":2},"formatter":{"id":"5b091136-97b7-49bc-ac3b-2e6f158eb741","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"c26c54d3-2b86-47d4-b3a5-d2fe4fde6f78","subtype":"Figure","type":"Plot"},"ticker":{"id":"222dae4e-7c3d-48d4-bd6f-5ded6171e082","type":"BasicTicker"}},"id":"d30779a3-2a15-4552-90a4-8931a8400e51","type":"LinearAxis"},{"attributes":{},"id":"222dae4e-7c3d-48d4-bd6f-5ded6171e082","type":"BasicTicker"},{"attributes":{"plot":{"id":"c26c54d3-2b86-47d4-b3a5-d2fe4fde6f78","subtype":"Figure","type":"Plot"},"ticker":{"id":"222dae4e-7c3d-48d4-bd6f-5ded6171e082","type":"BasicTicker"}},"id":"6ceae865-3e04-4010-bb55-e77ba2b596dd","type":"Grid"},{"attributes":{"axis_label":"Price","axis_line_width":{"value":2},"formatter":{"id":"c409f4a8-d4b8-45e2-9f07-173d146f6e2b","type":"BasicTickFormatter"},"plot":{"id":"c26c54d3-2b86-47d4-b3a5-d2fe4fde6f78","subtype":"Figure","type":"Plot"},"ticker":{"id":"76c4198f-8d45-4246-bfbb-e7f8d345c8f7","type":"BasicTicker"}},"id":"24e7c1db-0dba-4536-8ade-b2ff2f937391","type":"LinearAxis"},{"attributes":{},"id":"e6cf3909-4350-47e4-b978-44c18381fb92","type":"Selection"},{"attributes":{},"id":"76c4198f-8d45-4246-bfbb-e7f8d345c8f7","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"c26c54d3-2b86-47d4-b3a5-d2fe4fde6f78","subtype":"Figure","type":"Plot"},"ticker":{"id":"76c4198f-8d45-4246-bfbb-e7f8d345c8f7","type":"BasicTicker"}},"id":"acb09cac-c18c-44a3-b639-9452bced8d04","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0b511e56-4c01-4ef8-bc1d-1e6384bacadd","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"63f723ae-8769-4669-9707-b6ce0b7d4f96","type":"Circle"},{"attributes":{"data_source":{"id":"77caed4c-5e28-4784-a550-b56fa1dbb864","type":"ColumnDataSource"},"glyph":{"id":"63f723ae-8769-4669-9707-b6ce0b7d4f96","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8c7c77ee-7ae7-4a91-aa86-9af600f68b3a","type":"Circle"},"selection_glyph":null,"view":{"id":"0c363d13-d924-480d-bcb2-419b15124cc6","type":"CDSView"}},"id":"e67e7bb8-f296-42c3-ada4-0627ddaa4366","type":"GlyphRenderer"},{"attributes":{},"id":"bcf2faea-b12a-4d66-b2b1-33216da8abbc","type":"PanTool"},{"attributes":{"source":{"id":"77caed4c-5e28-4784-a550-b56fa1dbb864","type":"ColumnDataSource"}},"id":"0c363d13-d924-480d-bcb2-419b15124cc6","type":"CDSView"},{"attributes":{},"id":"2a458755-76c0-4da7-ae91-f6ce3755dd6f","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"0b511e56-4c01-4ef8-bc1d-1e6384bacadd","type":"BoxAnnotation"}},"id":"b45d397d-a9d4-48b8-8741-f32065606cc0","type":"BoxZoomTool"},{"attributes":{},"id":"9215598e-1cd5-419c-babb-a1bc39321797","type":"SaveTool"},{"attributes":{},"id":"8134018d-d60c-40fc-bea9-485a8a4f00ca","type":"ResetTool"},{"attributes":{},"id":"91af2146-3cb2-4a32-ac9f-37bffa3f5c9b","type":"HelpTool"},{"attributes":{"below":[{"id":"d30779a3-2a15-4552-90a4-8931a8400e51","type":"LinearAxis"}],"left":[{"id":"24e7c1db-0dba-4536-8ade-b2ff2f937391","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d30779a3-2a15-4552-90a4-8931a8400e51","type":"LinearAxis"},{"id":"6ceae865-3e04-4010-bb55-e77ba2b596dd","type":"Grid"},{"id":"24e7c1db-0dba-4536-8ade-b2ff2f937391","type":"LinearAxis"},{"id":"acb09cac-c18c-44a3-b639-9452bced8d04","type":"Grid"},{"id":"0b511e56-4c01-4ef8-bc1d-1e6384bacadd","type":"BoxAnnotation"},{"id":"e67e7bb8-f296-42c3-ada4-0627ddaa4366","type":"GlyphRenderer"},{"id":"b322b7a7-7098-4253-9525-2ea226a198d6","type":"GlyphRenderer"}],"title":{"id":"4f9929c4-90ff-4dc8-b780-9dc3873e0b84","type":"Title"},"toolbar":{"id":"1b797ef3-b8b0-4c9a-8c17-b0495831aca1","type":"Toolbar"},"x_range":{"id":"35bb78fe-d0da-43fb-a48d-320f93e6dc12","type":"DataRange1d"},"x_scale":{"id":"445a15b7-456e-4d3b-880b-7488fe48e3c6","type":"LinearScale"},"y_range":{"id":"e821b59b-4cf8-438b-b512-e4fdb41f74bb","type":"DataRange1d"},"y_scale":{"id":"5effbe68-109e-4330-abd3-4a62727b50cf","type":"LinearScale"}},"id":"c26c54d3-2b86-47d4-b3a5-d2fe4fde6f78","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production","@production"],["Price","@price"]]},"id":"7a64c753-087f-469f-a00a-8007b4f05bcb","type":"HoverTool"}],"root_ids":["c26c54d3-2b86-47d4-b3a5-d2fe4fde6f78"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"a30cb10b-00a7-4492-9963-6b86bb160e5c","roots":{"c26c54d3-2b86-47d4-b3a5-d2fe4fde6f78":"f6e87271-d56e-4ac8-a9d6-fb65c4e958c0"}}];
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