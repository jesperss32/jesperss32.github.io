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
      };var element = document.getElementById("f174a0d6-ad9c-481d-92d7-315f58ce3767");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f174a0d6-ad9c-481d-92d7-315f58ce3767' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3174ef27-895a-448b-9c7f-c062e3e7be8b":{"roots":{"references":[{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production","@production"],["Price","@price"]]},"id":"5d5f880d-c958-466e-9e87-dc6039cb9413","type":"HoverTool"},{"attributes":{"callback":null},"id":"8c23832a-d266-4116-b3e4-0298e7caeb98","type":"DataRange1d"},{"attributes":{},"id":"9dc611b3-addd-485c-b751-42779f150db1","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Kenya_Beans(dry)"},"id":"f3c8f344-bced-4a39-8351-be0a4e0a6002","type":"Title"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"44IAO5XBI0EtztHhCbkkQTAyFYQ1dRxBbFFpW3gMFkEcit8SsNMfQdsKuYpAHCVBK6MlUKzvIkFLWCFyXU0eQS+lhhk6RxdB4/FV1HISI0FoCfZ0fM4iQQ==","dtype":"float64","shape":[11]},"y":{"__ndarray__":"nK/hS52PUkCY8nW9/6NTQPBXoGZvxkhA5mJIneKdQUDNikYCvolMQD5ZKqPPElRAtATePyqlUUDyTt3lydVKQGH1IFJw/UJADopchAHMUUCj88wuGYBRQA==","dtype":"float64","shape":[11]}},"selected":{"id":"e3739cd2-59b8-4df6-9bef-3b558744d7cb","type":"Selection"},"selection_policy":{"id":"d7bd7414-51f1-4c50-9139-2e1169c0e601","type":"UnionRenderers"}},"id":"05010e92-d2c3-4ac7-bf3c-c46681e8a2f3","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"f6f33d4a-e93d-4da1-8a0c-37d4f0dbcbfa","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1d6bcc16-d14b-469d-a46f-20430a064576","type":"Line"},{"attributes":{"data_source":{"id":"05010e92-d2c3-4ac7-bf3c-c46681e8a2f3","type":"ColumnDataSource"},"glyph":{"id":"f6f33d4a-e93d-4da1-8a0c-37d4f0dbcbfa","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1d6bcc16-d14b-469d-a46f-20430a064576","type":"Line"},"selection_glyph":null,"view":{"id":"d64a86c6-4101-4068-b2a3-17acf5ac6547","type":"CDSView"}},"id":"b1f2e28e-7cb3-4b9e-ae22-860c75f67572","type":"GlyphRenderer"},{"attributes":{"source":{"id":"05010e92-d2c3-4ac7-bf3c-c46681e8a2f3","type":"ColumnDataSource"}},"id":"d64a86c6-4101-4068-b2a3-17acf5ac6547","type":"CDSView"},{"attributes":{"below":[{"id":"36762fb2-a8c3-4e85-a259-a4a6a27164ac","type":"LinearAxis"}],"left":[{"id":"8eb69b18-9667-4446-9154-595b3be7bfa6","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"36762fb2-a8c3-4e85-a259-a4a6a27164ac","type":"LinearAxis"},{"id":"4c349572-e507-48b9-90d7-13d2dec66b12","type":"Grid"},{"id":"8eb69b18-9667-4446-9154-595b3be7bfa6","type":"LinearAxis"},{"id":"05f94f49-a192-4668-8eea-c543fa5f9356","type":"Grid"},{"id":"4ca4ea25-63f0-4599-8d84-a578c9ee8f68","type":"BoxAnnotation"},{"id":"ba89a61a-b997-41fd-aeeb-8129ef7cb89e","type":"GlyphRenderer"},{"id":"b1f2e28e-7cb3-4b9e-ae22-860c75f67572","type":"GlyphRenderer"}],"title":{"id":"f3c8f344-bced-4a39-8351-be0a4e0a6002","type":"Title"},"toolbar":{"id":"0c435377-1fd3-4c05-bde5-dc82652ae0c1","type":"Toolbar"},"x_range":{"id":"8c23832a-d266-4116-b3e4-0298e7caeb98","type":"DataRange1d"},"x_scale":{"id":"137ed2d7-e566-4500-b009-abe29d862d9c","type":"LinearScale"},"y_range":{"id":"e377e06f-feba-4974-a55a-8e51214d1cd3","type":"DataRange1d"},"y_scale":{"id":"50d823df-0249-4ed3-969b-2425bce08ba5","type":"LinearScale"}},"id":"382fc786-ebba-43ab-91ab-94b793870f13","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"80b664a9-499c-48d5-987a-7eec97b57a0f","type":"BasicTickFormatter"},{"attributes":{},"id":"47d4a1ca-4871-4b29-82cf-1599f33e6afa","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"fc55ee9c-99f8-4404-a493-070feaae1d7b","type":"PanTool"},{"id":"26b881de-9437-4b33-b837-6dd54d134084","type":"WheelZoomTool"},{"id":"1d9f2f86-fa46-4eaa-850f-84dc7d995d97","type":"BoxZoomTool"},{"id":"12478035-227c-4c7d-b16c-89f70f9daee5","type":"SaveTool"},{"id":"9eebef79-4591-43a8-bcf1-5c8a96c72f07","type":"ResetTool"},{"id":"92283be8-c488-428c-9b18-62f8ed833c08","type":"HelpTool"},{"id":"5d5f880d-c958-466e-9e87-dc6039cb9413","type":"HoverTool"}]},"id":"0c435377-1fd3-4c05-bde5-dc82652ae0c1","type":"Toolbar"},{"attributes":{},"id":"fe5ae2be-55d4-4be8-b184-445ad17bef39","type":"UnionRenderers"},{"attributes":{},"id":"e3739cd2-59b8-4df6-9bef-3b558744d7cb","type":"Selection"},{"attributes":{},"id":"137ed2d7-e566-4500-b009-abe29d862d9c","type":"LinearScale"},{"attributes":{},"id":"d7bd7414-51f1-4c50-9139-2e1169c0e601","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"e377e06f-feba-4974-a55a-8e51214d1cd3","type":"DataRange1d"},{"attributes":{},"id":"50d823df-0249-4ed3-969b-2425bce08ba5","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"7672ece3-b9d4-4e72-8796-ae706d3f01c9","type":"Circle"},{"attributes":{"axis_label":"Production","axis_line_width":{"value":2},"formatter":{"id":"9dc611b3-addd-485c-b751-42779f150db1","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"382fc786-ebba-43ab-91ab-94b793870f13","subtype":"Figure","type":"Plot"},"ticker":{"id":"1f01612b-ab0c-48ba-83ed-6c1375a4df8a","type":"BasicTicker"}},"id":"36762fb2-a8c3-4e85-a259-a4a6a27164ac","type":"LinearAxis"},{"attributes":{},"id":"1f01612b-ab0c-48ba-83ed-6c1375a4df8a","type":"BasicTicker"},{"attributes":{"plot":{"id":"382fc786-ebba-43ab-91ab-94b793870f13","subtype":"Figure","type":"Plot"},"ticker":{"id":"1f01612b-ab0c-48ba-83ed-6c1375a4df8a","type":"BasicTicker"}},"id":"4c349572-e507-48b9-90d7-13d2dec66b12","type":"Grid"},{"attributes":{"axis_label":"Price","axis_line_width":{"value":2},"formatter":{"id":"80b664a9-499c-48d5-987a-7eec97b57a0f","type":"BasicTickFormatter"},"plot":{"id":"382fc786-ebba-43ab-91ab-94b793870f13","subtype":"Figure","type":"Plot"},"ticker":{"id":"6d3ad167-84b8-4a5e-ba4e-a9aa1e019b27","type":"BasicTicker"}},"id":"8eb69b18-9667-4446-9154-595b3be7bfa6","type":"LinearAxis"},{"attributes":{},"id":"6d3ad167-84b8-4a5e-ba4e-a9aa1e019b27","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"382fc786-ebba-43ab-91ab-94b793870f13","subtype":"Figure","type":"Plot"},"ticker":{"id":"6d3ad167-84b8-4a5e-ba4e-a9aa1e019b27","type":"BasicTicker"}},"id":"05f94f49-a192-4668-8eea-c543fa5f9356","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4ca4ea25-63f0-4599-8d84-a578c9ee8f68","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"73d957db-7fad-4c1f-9306-b67b4c27810e","type":"Circle"},{"attributes":{"data_source":{"id":"35bacb65-c593-4d8d-a1d1-7ca4406f5711","type":"ColumnDataSource"},"glyph":{"id":"73d957db-7fad-4c1f-9306-b67b4c27810e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7672ece3-b9d4-4e72-8796-ae706d3f01c9","type":"Circle"},"selection_glyph":null,"view":{"id":"47bf9ca5-d95e-45c2-b1ef-eb47280b8f46","type":"CDSView"}},"id":"ba89a61a-b997-41fd-aeeb-8129ef7cb89e","type":"GlyphRenderer"},{"attributes":{},"id":"fc55ee9c-99f8-4404-a493-070feaae1d7b","type":"PanTool"},{"attributes":{"callback":null,"data":{"price":{"__ndarray__":"mPJ1vf+jU0Bh9SBScP1CQOZiSJ3inUFA8k7d5cnVSkDNikYCvolMQPBXoGZvxkhAo/PMLhmAUUC0BN4/KqVRQA6KXIQBzFFAnK/hS52PUkA+WSqjzxJUQA==","dtype":"float64","shape":[11]},"production":{"__ndarray__":"AAAAAMA4JkEAAAAAsDogQQAAAAA8PBpBAAAAALgsEEEAAAAATGccQQAAAAAY1xdBAAAAABShIUEAAAAATgEjQQAAAAD4zSVBAAAAAHDMIkEAAAAAkFgnQQ==","dtype":"float64","shape":[11]}},"selected":{"id":"47d4a1ca-4871-4b29-82cf-1599f33e6afa","type":"Selection"},"selection_policy":{"id":"fe5ae2be-55d4-4be8-b184-445ad17bef39","type":"UnionRenderers"}},"id":"35bacb65-c593-4d8d-a1d1-7ca4406f5711","type":"ColumnDataSource"},{"attributes":{"source":{"id":"35bacb65-c593-4d8d-a1d1-7ca4406f5711","type":"ColumnDataSource"}},"id":"47bf9ca5-d95e-45c2-b1ef-eb47280b8f46","type":"CDSView"},{"attributes":{},"id":"26b881de-9437-4b33-b837-6dd54d134084","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"4ca4ea25-63f0-4599-8d84-a578c9ee8f68","type":"BoxAnnotation"}},"id":"1d9f2f86-fa46-4eaa-850f-84dc7d995d97","type":"BoxZoomTool"},{"attributes":{},"id":"12478035-227c-4c7d-b16c-89f70f9daee5","type":"SaveTool"},{"attributes":{},"id":"9eebef79-4591-43a8-bcf1-5c8a96c72f07","type":"ResetTool"},{"attributes":{},"id":"92283be8-c488-428c-9b18-62f8ed833c08","type":"HelpTool"}],"root_ids":["382fc786-ebba-43ab-91ab-94b793870f13"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"3174ef27-895a-448b-9c7f-c062e3e7be8b","roots":{"382fc786-ebba-43ab-91ab-94b793870f13":"f174a0d6-ad9c-481d-92d7-315f58ce3767"}}];
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