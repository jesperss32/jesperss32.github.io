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
      };var element = document.getElementById("252baee1-a93e-44da-8d54-b356a0c61d2a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '252baee1-a93e-44da-8d54-b356a0c61d2a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"eeb46048-028a-40bf-9fe5-63dbd3c7b575":{"roots":{"references":[{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production","@production"],["Price","@price"]]},"id":"7f11d6a7-3075-470c-a2d2-9299df7f3595","type":"HoverTool"},{"attributes":{"callback":null},"id":"2c52137f-a7d6-4263-af67-0ae94488c8a4","type":"DataRange1d"},{"attributes":{},"id":"b19e184f-004d-4d30-a640-e307aa99c184","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Ethiopia_Wheat"},"id":"37f0d7f2-0a23-4c32-9185-c050373f22a0","type":"Title"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"OCzKdhxYRUHS+omTqB5MQbKpO2V7ulJB3qorC68sTEGBoF3CtcdBQdYrZynxwEZBKW9KNkxBT0HiN1/RlH9HQSwzxwbLKk5BHDTTpZqfQEE=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"2HELpT5YEkDq3whl9HYeQFRVVVVVlSdA9uEz7AqQHkCmiz9tVfAHQFywBVuw3RRA84slv1gJIkAGUTb6sjIWQMZLN4lBECFAW202bwDNA0A=","dtype":"float64","shape":[10]}},"selected":{"id":"ac8eda5e-7ee0-4fa8-8044-912bb4938848","type":"Selection"},"selection_policy":{"id":"61f33c68-b872-4738-9008-1ce563d8364f","type":"UnionRenderers"}},"id":"98bd2f02-7584-4bc3-8718-0b1476bfc17d","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"f99ff208-ac96-416e-afdc-37a9cf67f962","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"8693e8af-8907-453b-ae90-de0fec275fac","type":"Line"},{"attributes":{"data_source":{"id":"98bd2f02-7584-4bc3-8718-0b1476bfc17d","type":"ColumnDataSource"},"glyph":{"id":"f99ff208-ac96-416e-afdc-37a9cf67f962","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8693e8af-8907-453b-ae90-de0fec275fac","type":"Line"},"selection_glyph":null,"view":{"id":"37d7505a-16d8-46c5-af18-676d244e9443","type":"CDSView"}},"id":"3f13e16e-47d4-4af4-89ed-b6fed6386169","type":"GlyphRenderer"},{"attributes":{"source":{"id":"98bd2f02-7584-4bc3-8718-0b1476bfc17d","type":"ColumnDataSource"}},"id":"37d7505a-16d8-46c5-af18-676d244e9443","type":"CDSView"},{"attributes":{"below":[{"id":"1ad25446-77b4-499d-bc42-db00e1104308","type":"LinearAxis"}],"left":[{"id":"795d2fc0-a827-4d24-9f97-32c9209d56cb","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1ad25446-77b4-499d-bc42-db00e1104308","type":"LinearAxis"},{"id":"f0187479-d108-4ba8-a34b-76f58f91e507","type":"Grid"},{"id":"795d2fc0-a827-4d24-9f97-32c9209d56cb","type":"LinearAxis"},{"id":"c6adb73c-037c-495b-88b4-cf5f2833a991","type":"Grid"},{"id":"85962a10-43d1-4d0f-8e32-5d416bc82872","type":"BoxAnnotation"},{"id":"7672019f-08c3-47e8-a487-bc101ab94af7","type":"GlyphRenderer"},{"id":"3f13e16e-47d4-4af4-89ed-b6fed6386169","type":"GlyphRenderer"}],"title":{"id":"37f0d7f2-0a23-4c32-9185-c050373f22a0","type":"Title"},"toolbar":{"id":"e27fceb6-708f-440c-9fd4-79af0caccfc6","type":"Toolbar"},"x_range":{"id":"2c52137f-a7d6-4263-af67-0ae94488c8a4","type":"DataRange1d"},"x_scale":{"id":"53521d71-3aca-4bc3-a495-e5a038c9f11d","type":"LinearScale"},"y_range":{"id":"94d4ffb3-cdd1-4c27-9e29-55e2055ef202","type":"DataRange1d"},"y_scale":{"id":"2612f4f3-d565-4d5c-b320-07eaac87bad1","type":"LinearScale"}},"id":"2b71ac93-7ae3-44f9-b2d3-56cdb984ef34","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9d868b7b-0ff1-4a85-b6f4-e965c555e883","type":"BasicTickFormatter"},{"attributes":{},"id":"0bb63b0d-f95e-4eb7-aa49-098d31f4ecb3","type":"Selection"},{"attributes":{},"id":"33854ef2-e60a-4b4d-adaa-fa9224871812","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"ae225ce8-2a04-455b-a24c-4c624cf77093","type":"PanTool"},{"id":"49c0de5a-bbc5-419d-a85b-dca82f8da4c0","type":"WheelZoomTool"},{"id":"f85c0d55-3f36-46d6-8699-62106fac7c2c","type":"BoxZoomTool"},{"id":"81c320af-36d2-4627-ae65-77e930306b95","type":"SaveTool"},{"id":"42ce20a9-52ae-4a79-a67f-a1ea1473e27a","type":"ResetTool"},{"id":"d1a08d4c-b623-4a9d-a423-f8c37c048c9c","type":"HelpTool"},{"id":"7f11d6a7-3075-470c-a2d2-9299df7f3595","type":"HoverTool"}]},"id":"e27fceb6-708f-440c-9fd4-79af0caccfc6","type":"Toolbar"},{"attributes":{},"id":"ac8eda5e-7ee0-4fa8-8044-912bb4938848","type":"Selection"},{"attributes":{},"id":"53521d71-3aca-4bc3-a495-e5a038c9f11d","type":"LinearScale"},{"attributes":{"callback":null},"id":"94d4ffb3-cdd1-4c27-9e29-55e2055ef202","type":"DataRange1d"},{"attributes":{},"id":"2612f4f3-d565-4d5c-b320-07eaac87bad1","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"eaaae406-97e1-482f-898f-0387a2a957db","type":"Circle"},{"attributes":{"axis_label":"Production","axis_line_width":{"value":2},"formatter":{"id":"b19e184f-004d-4d30-a640-e307aa99c184","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"2b71ac93-7ae3-44f9-b2d3-56cdb984ef34","subtype":"Figure","type":"Plot"},"ticker":{"id":"62c8f3a9-b234-4f7b-b7d7-426e843dc409","type":"BasicTicker"}},"id":"1ad25446-77b4-499d-bc42-db00e1104308","type":"LinearAxis"},{"attributes":{},"id":"62c8f3a9-b234-4f7b-b7d7-426e843dc409","type":"BasicTicker"},{"attributes":{"plot":{"id":"2b71ac93-7ae3-44f9-b2d3-56cdb984ef34","subtype":"Figure","type":"Plot"},"ticker":{"id":"62c8f3a9-b234-4f7b-b7d7-426e843dc409","type":"BasicTicker"}},"id":"f0187479-d108-4ba8-a34b-76f58f91e507","type":"Grid"},{"attributes":{},"id":"61f33c68-b872-4738-9008-1ce563d8364f","type":"UnionRenderers"},{"attributes":{"axis_label":"Price","axis_line_width":{"value":2},"formatter":{"id":"9d868b7b-0ff1-4a85-b6f4-e965c555e883","type":"BasicTickFormatter"},"plot":{"id":"2b71ac93-7ae3-44f9-b2d3-56cdb984ef34","subtype":"Figure","type":"Plot"},"ticker":{"id":"c8d6ef0a-85d0-4a42-b78a-fd4afe3ffee7","type":"BasicTicker"}},"id":"795d2fc0-a827-4d24-9f97-32c9209d56cb","type":"LinearAxis"},{"attributes":{},"id":"c8d6ef0a-85d0-4a42-b78a-fd4afe3ffee7","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"2b71ac93-7ae3-44f9-b2d3-56cdb984ef34","subtype":"Figure","type":"Plot"},"ticker":{"id":"c8d6ef0a-85d0-4a42-b78a-fd4afe3ffee7","type":"BasicTicker"}},"id":"c6adb73c-037c-495b-88b4-cf5f2833a991","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"85962a10-43d1-4d0f-8e32-5d416bc82872","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"6c3b4ed5-f5e7-4302-95bd-9f585b3ff477","type":"Circle"},{"attributes":{"data_source":{"id":"a94340d1-4904-406f-b685-41c4ca8de4a3","type":"ColumnDataSource"},"glyph":{"id":"6c3b4ed5-f5e7-4302-95bd-9f585b3ff477","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"eaaae406-97e1-482f-898f-0387a2a957db","type":"Circle"},"selection_glyph":null,"view":{"id":"edef597e-57a8-4564-b66e-5b4dd1800404","type":"CDSView"}},"id":"7672019f-08c3-47e8-a487-bc101ab94af7","type":"GlyphRenderer"},{"attributes":{},"id":"ae225ce8-2a04-455b-a24c-4c624cf77093","type":"PanTool"},{"attributes":{"callback":null,"data":{"price":{"__ndarray__":"xks3iUEQIUBbbTZvAM0DQKeLP21V8AdABlE2+rIyFkBcsAVbsN0UQNhxC6U+WBJA9uEz7AqQHkDp3whl9HYeQPOLJb9YCSJAVFVVVVWVJ0A=","dtype":"float64","shape":[10]},"production":{"__ndarray__":"AAAAAH9PUUEAAACAIe5AQQAAAACsykJBAAAAgHyoQUEAAAAAHndHQQAAAACByUVBAAAAAGk0SkEAAAAAW/JNQQAAAEBpJFBBAAAAgO29UUE=","dtype":"float64","shape":[10]}},"selected":{"id":"0bb63b0d-f95e-4eb7-aa49-098d31f4ecb3","type":"Selection"},"selection_policy":{"id":"33854ef2-e60a-4b4d-adaa-fa9224871812","type":"UnionRenderers"}},"id":"a94340d1-4904-406f-b685-41c4ca8de4a3","type":"ColumnDataSource"},{"attributes":{"source":{"id":"a94340d1-4904-406f-b685-41c4ca8de4a3","type":"ColumnDataSource"}},"id":"edef597e-57a8-4564-b66e-5b4dd1800404","type":"CDSView"},{"attributes":{},"id":"49c0de5a-bbc5-419d-a85b-dca82f8da4c0","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"85962a10-43d1-4d0f-8e32-5d416bc82872","type":"BoxAnnotation"}},"id":"f85c0d55-3f36-46d6-8699-62106fac7c2c","type":"BoxZoomTool"},{"attributes":{},"id":"81c320af-36d2-4627-ae65-77e930306b95","type":"SaveTool"},{"attributes":{},"id":"42ce20a9-52ae-4a79-a67f-a1ea1473e27a","type":"ResetTool"},{"attributes":{},"id":"d1a08d4c-b623-4a9d-a423-f8c37c048c9c","type":"HelpTool"}],"root_ids":["2b71ac93-7ae3-44f9-b2d3-56cdb984ef34"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"eeb46048-028a-40bf-9fe5-63dbd3c7b575","roots":{"2b71ac93-7ae3-44f9-b2d3-56cdb984ef34":"252baee1-a93e-44da-8d54-b356a0c61d2a"}}];
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