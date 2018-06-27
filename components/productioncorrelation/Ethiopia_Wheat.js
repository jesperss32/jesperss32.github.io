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
      };var element = document.getElementById("316dd650-6123-47ea-b3d0-24e64ef3e0e7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '316dd650-6123-47ea-b3d0-24e64ef3e0e7' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"0d326cb2-8aac-459d-bbea-d5043a1da3b7":{"roots":{"references":[{"attributes":{},"id":"df43d40f-9e80-4ff1-ad17-205e18cc558a","type":"PanTool"},{"attributes":{"below":[{"id":"0b544354-316d-49de-a46d-3914a5fac174","type":"LinearAxis"}],"left":[{"id":"906f2bf0-cdd5-4b2b-bb1a-0dcd793fc27c","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"0b544354-316d-49de-a46d-3914a5fac174","type":"LinearAxis"},{"id":"7e00e7f2-a022-4800-8004-c145ea42d5e8","type":"Grid"},{"id":"906f2bf0-cdd5-4b2b-bb1a-0dcd793fc27c","type":"LinearAxis"},{"id":"5b48fce1-d46f-4063-86e1-47e3965462eb","type":"Grid"},{"id":"fc62eb18-3d09-47f6-8e1c-e3bed59589d1","type":"BoxAnnotation"},{"id":"88b5fc4c-ea54-4328-b150-ea733b82e17b","type":"GlyphRenderer"}],"title":{"id":"5a2c6af4-b7c4-4b8a-9ee8-90533d3caba1","type":"Title"},"toolbar":{"id":"7e8f77e3-5e82-48e8-89a3-209d0fde6d8c","type":"Toolbar"},"x_range":{"id":"4a9ba235-d391-4bad-aee8-d79951a25ee2","type":"DataRange1d"},"x_scale":{"id":"abdb57d7-3f94-4ac6-88c2-24375d150d47","type":"LinearScale"},"y_range":{"id":"c1e841b6-029b-4ebb-a4a5-386804478663","type":"DataRange1d"},"y_scale":{"id":"c437a283-c1fb-48b6-ade9-9a344574285e","type":"LinearScale"}},"id":"82c21d58-1cde-4de5-a501-499bd9561934","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"4ba50a68-4707-42b2-9093-7ae494c95313","type":"ColumnDataSource"}},"id":"3ec66e4c-4a3d-40ee-afae-ea525b627c59","type":"CDSView"},{"attributes":{},"id":"a2ae987d-43ef-431a-8afa-849960a48a01","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"fc62eb18-3d09-47f6-8e1c-e3bed59589d1","type":"BoxAnnotation"}},"id":"3ad41418-ddb9-46f4-aa77-96678de50525","type":"BoxZoomTool"},{"attributes":{},"id":"1633b792-afe0-48ae-84a6-3ed3e7f32cef","type":"SaveTool"},{"attributes":{},"id":"7df74c54-0e74-43be-a039-47734f3a9594","type":"ResetTool"},{"attributes":{},"id":"6f9f415c-c1a0-483f-8416-3bc23b1e6ab1","type":"BasicTicker"},{"attributes":{},"id":"9a15cb4d-104b-4dec-9405-c6d0059bf944","type":"HelpTool"},{"attributes":{"plot":{"id":"82c21d58-1cde-4de5-a501-499bd9561934","subtype":"Figure","type":"Plot"},"ticker":{"id":"6f9f415c-c1a0-483f-8416-3bc23b1e6ab1","type":"BasicTicker"}},"id":"7e00e7f2-a022-4800-8004-c145ea42d5e8","type":"Grid"},{"attributes":{"plot":null,"text":"Ethiopia_Wheat"},"id":"5a2c6af4-b7c4-4b8a-9ee8-90533d3caba1","type":"Title"},{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production","@production"],["Price","@price"]]},"id":"d3c43873-e6c1-483c-bdc6-6eb74f0b9063","type":"HoverTool"},{"attributes":{"axis_label":"Price","axis_line_width":{"value":2},"formatter":{"id":"39e8c7a0-06e6-49ea-b366-6f077c79c093","type":"BasicTickFormatter"},"plot":{"id":"82c21d58-1cde-4de5-a501-499bd9561934","subtype":"Figure","type":"Plot"},"ticker":{"id":"03572e9e-e2eb-4d97-af6b-db261c75e852","type":"BasicTicker"}},"id":"906f2bf0-cdd5-4b2b-bb1a-0dcd793fc27c","type":"LinearAxis"},{"attributes":{},"id":"abdb57d7-3f94-4ac6-88c2-24375d150d47","type":"LinearScale"},{"attributes":{"data_source":{"id":"4ba50a68-4707-42b2-9093-7ae494c95313","type":"ColumnDataSource"},"glyph":{"id":"3ddddfa1-fecb-461a-990c-a03b0c68728a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69102f4b-a814-4bd7-b376-c349ab57f936","type":"Circle"},"selection_glyph":null,"view":{"id":"3ec66e4c-4a3d-40ee-afae-ea525b627c59","type":"CDSView"}},"id":"88b5fc4c-ea54-4328-b150-ea733b82e17b","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"4a9ba235-d391-4bad-aee8-d79951a25ee2","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"price":{"__ndarray__":"xks3iUEQIUBbbTZvAM0DQKeLP21V8AdABlE2+rIyFkBcsAVbsN0UQNhxC6U+WBJA9uEz7AqQHkDp3whl9HYeQPOLJb9YCSJAVFVVVVWVJ0A=","dtype":"float64","shape":[10]},"production":{"__ndarray__":"AAAAAH9PUUEAAACAIe5AQQAAAACsykJBAAAAgHyoQUEAAAAAHndHQQAAAACByUVBAAAAAGk0SkEAAAAAW/JNQQAAAEBpJFBBAAAAgO29UUE=","dtype":"float64","shape":[10]}},"selected":{"id":"dd9363cd-0e70-4cb5-827f-ed37fa02a876","type":"Selection"},"selection_policy":{"id":"25021e6a-a926-4c57-87ab-7bed60db93f1","type":"UnionRenderers"}},"id":"4ba50a68-4707-42b2-9093-7ae494c95313","type":"ColumnDataSource"},{"attributes":{"axis_label":"Production","axis_line_width":{"value":2},"formatter":{"id":"c30e787f-f331-4d17-920f-6544ab57e404","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"82c21d58-1cde-4de5-a501-499bd9561934","subtype":"Figure","type":"Plot"},"ticker":{"id":"6f9f415c-c1a0-483f-8416-3bc23b1e6ab1","type":"BasicTicker"}},"id":"0b544354-316d-49de-a46d-3914a5fac174","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"df43d40f-9e80-4ff1-ad17-205e18cc558a","type":"PanTool"},{"id":"a2ae987d-43ef-431a-8afa-849960a48a01","type":"WheelZoomTool"},{"id":"3ad41418-ddb9-46f4-aa77-96678de50525","type":"BoxZoomTool"},{"id":"1633b792-afe0-48ae-84a6-3ed3e7f32cef","type":"SaveTool"},{"id":"7df74c54-0e74-43be-a039-47734f3a9594","type":"ResetTool"},{"id":"9a15cb4d-104b-4dec-9405-c6d0059bf944","type":"HelpTool"},{"id":"d3c43873-e6c1-483c-bdc6-6eb74f0b9063","type":"HoverTool"}]},"id":"7e8f77e3-5e82-48e8-89a3-209d0fde6d8c","type":"Toolbar"},{"attributes":{},"id":"c30e787f-f331-4d17-920f-6544ab57e404","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"69102f4b-a814-4bd7-b376-c349ab57f936","type":"Circle"},{"attributes":{"callback":null},"id":"c1e841b6-029b-4ebb-a4a5-386804478663","type":"DataRange1d"},{"attributes":{},"id":"39e8c7a0-06e6-49ea-b366-6f077c79c093","type":"BasicTickFormatter"},{"attributes":{},"id":"03572e9e-e2eb-4d97-af6b-db261c75e852","type":"BasicTicker"},{"attributes":{},"id":"25021e6a-a926-4c57-87ab-7bed60db93f1","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"82c21d58-1cde-4de5-a501-499bd9561934","subtype":"Figure","type":"Plot"},"ticker":{"id":"03572e9e-e2eb-4d97-af6b-db261c75e852","type":"BasicTicker"}},"id":"5b48fce1-d46f-4063-86e1-47e3965462eb","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fc62eb18-3d09-47f6-8e1c-e3bed59589d1","type":"BoxAnnotation"},{"attributes":{},"id":"dd9363cd-0e70-4cb5-827f-ed37fa02a876","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"3ddddfa1-fecb-461a-990c-a03b0c68728a","type":"Circle"},{"attributes":{},"id":"c437a283-c1fb-48b6-ade9-9a344574285e","type":"LinearScale"}],"root_ids":["82c21d58-1cde-4de5-a501-499bd9561934"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"0d326cb2-8aac-459d-bbea-d5043a1da3b7","roots":{"82c21d58-1cde-4de5-a501-499bd9561934":"316dd650-6123-47ea-b3d0-24e64ef3e0e7"}}];
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