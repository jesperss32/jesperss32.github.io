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
      };var element = document.getElementById("6863e0d7-8267-49d7-afba-8fc863905d86");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6863e0d7-8267-49d7-afba-8fc863905d86' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"0440d25b-cb0e-44f2-9273-f607d7c49d08":{"roots":{"references":[{"attributes":{"callback":null,"data":{"price":{"__ndarray__":"3Xu45LhTAEDg+wjpFifjP1dWmpSCLuI/swH+Foph3j8bmUf+YGDqP5qZmZmZmfg/IDmsg5YI9z/6xZJfLHn7P65H4XoULvs/slbHBA/m+j9/arx0k9gAQPoMuwLkHgNADAIrhxa5AkAezBP1b7QDQA==","dtype":"float64","shape":[14]},"production":{"__ndarray__":"AAAAAIhoK0EAAAAAfMUVQQAAAADM4xxBAAAAABAXIEEAAAAA6vAgQQAAAADugSFBAAAAAJo0JEEAAAAAvL4kQQAAAABKFSVBAAAAAJYyJ0EAAAAA+FYqQQAAAACIPi5BAAAAADAGMUEAAAAA9BQrQQ==","dtype":"float64","shape":[14]}},"selected":{"id":"2491049e-84dd-4ccf-8148-052f7e2f3f72","type":"Selection"},"selection_policy":{"id":"c89ba912-98c7-4170-8631-2925c2fa5b66","type":"UnionRenderers"}},"id":"e6954eb3-a2a8-4fc7-8a05-0b93348b0345","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"a85e15fd-f49f-4530-9924-09b1940e53ad","type":"Line"},{"attributes":{"callback":null},"id":"16f80fb7-10d1-4215-9050-5289c1341922","type":"DataRange1d"},{"attributes":{},"id":"f10831cd-bbea-4f5c-8438-6c94701785f2","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"c9dd99fe-6ac7-4401-a39a-79eaf216f782","type":"Line"},{"attributes":{"data_source":{"id":"cf9032cc-8991-4b45-ae19-c34948746484","type":"ColumnDataSource"},"glyph":{"id":"a85e15fd-f49f-4530-9924-09b1940e53ad","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c9dd99fe-6ac7-4401-a39a-79eaf216f782","type":"Line"},"selection_glyph":null,"view":{"id":"6f47b2c7-dadb-475c-8f75-85634bf35492","type":"CDSView"}},"id":"14bd0b05-e9b3-4f8c-b4b3-3dfb610c00c3","type":"GlyphRenderer"},{"attributes":{"source":{"id":"cf9032cc-8991-4b45-ae19-c34948746484","type":"ColumnDataSource"}},"id":"6f47b2c7-dadb-475c-8f75-85634bf35492","type":"CDSView"},{"attributes":{},"id":"995b9ddd-7872-46a9-98bb-eee59e453fac","type":"BasicTickFormatter"},{"attributes":{},"id":"c89ba912-98c7-4170-8631-2925c2fa5b66","type":"UnionRenderers"},{"attributes":{},"id":"2491049e-84dd-4ccf-8148-052f7e2f3f72","type":"Selection"},{"attributes":{},"id":"5905cdd8-07ce-4703-9185-8d22c552942e","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"f7cb7366-96a0-4387-921d-2da51cc7cdc7","type":"PanTool"},{"id":"83fccbec-62f7-4965-9972-8327ceafb3a1","type":"WheelZoomTool"},{"id":"0fa3a484-29ca-46c2-958e-fe7d540a0ab3","type":"BoxZoomTool"},{"id":"ea2bae1f-3312-43f1-a582-c389431ac083","type":"SaveTool"},{"id":"4f943d23-fc33-4322-8eff-3385e0ed756f","type":"ResetTool"},{"id":"4458ad93-e1bf-478b-af28-992f77ca23b5","type":"HelpTool"},{"id":"6b7910dc-80e8-412f-a79f-9e7a4d6109d0","type":"HoverTool"}]},"id":"035f8e10-b010-40c7-bc20-f44cbd24acb5","type":"Toolbar"},{"attributes":{"plot":null,"text":"Tajikistan_Potatoes"},"id":"fccb48cb-670e-42e1-9e31-a752ec757ecc","type":"Title"},{"attributes":{"source":{"id":"e6954eb3-a2a8-4fc7-8a05-0b93348b0345","type":"ColumnDataSource"}},"id":"7100e317-0ad4-4feb-be7b-64b3e2a939ca","type":"CDSView"},{"attributes":{},"id":"538215aa-708a-45e8-a0f6-1031793ac2b8","type":"LinearScale"},{"attributes":{"callback":null},"id":"0a029ecb-21ec-488c-9b29-76a09e6f72e3","type":"DataRange1d"},{"attributes":{},"id":"cc2fd7f7-8585-4e94-8b06-6dc82f9a28e5","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"00e81f82-2a33-4ff7-80d6-b21a24b5de4a","type":"Circle"},{"attributes":{"axis_label":"Production","axis_line_width":{"value":2},"formatter":{"id":"995b9ddd-7872-46a9-98bb-eee59e453fac","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"a5c31d1b-674e-4cd3-a615-1fd9a3a00162","subtype":"Figure","type":"Plot"},"ticker":{"id":"d74a3be8-fbf4-4f79-8ac3-14714cc6ae9c","type":"BasicTicker"}},"id":"1c7e13ef-420b-4f4a-bf4d-645b35693074","type":"LinearAxis"},{"attributes":{},"id":"d74a3be8-fbf4-4f79-8ac3-14714cc6ae9c","type":"BasicTicker"},{"attributes":{"plot":{"id":"a5c31d1b-674e-4cd3-a615-1fd9a3a00162","subtype":"Figure","type":"Plot"},"ticker":{"id":"d74a3be8-fbf4-4f79-8ac3-14714cc6ae9c","type":"BasicTicker"}},"id":"6483996c-9420-4d81-b68f-6f462ba60d6e","type":"Grid"},{"attributes":{"axis_label":"Price","axis_line_width":{"value":2},"formatter":{"id":"f10831cd-bbea-4f5c-8438-6c94701785f2","type":"BasicTickFormatter"},"plot":{"id":"a5c31d1b-674e-4cd3-a615-1fd9a3a00162","subtype":"Figure","type":"Plot"},"ticker":{"id":"9547650a-ca02-414f-a5ac-93aced423c23","type":"BasicTicker"}},"id":"5174ac1d-e3c7-4988-96b0-ac668501a40f","type":"LinearAxis"},{"attributes":{},"id":"7d5b88a9-1375-4ba6-b30f-6b8b20fb1466","type":"UnionRenderers"},{"attributes":{},"id":"9547650a-ca02-414f-a5ac-93aced423c23","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"a5c31d1b-674e-4cd3-a615-1fd9a3a00162","subtype":"Figure","type":"Plot"},"ticker":{"id":"9547650a-ca02-414f-a5ac-93aced423c23","type":"BasicTicker"}},"id":"658e4190-5ad1-4774-86c6-50350d80a98a","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0f14865d-24bb-467d-9b8f-b3abfb8908b1","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"235adb40-6ed3-4593-acde-907a265c57b9","type":"Circle"},{"attributes":{"data_source":{"id":"e6954eb3-a2a8-4fc7-8a05-0b93348b0345","type":"ColumnDataSource"},"glyph":{"id":"235adb40-6ed3-4593-acde-907a265c57b9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"00e81f82-2a33-4ff7-80d6-b21a24b5de4a","type":"Circle"},"selection_glyph":null,"view":{"id":"7100e317-0ad4-4feb-be7b-64b3e2a939ca","type":"CDSView"}},"id":"e82c302b-a734-4d70-be51-b7fdd7c52af1","type":"GlyphRenderer"},{"attributes":{},"id":"f7cb7366-96a0-4387-921d-2da51cc7cdc7","type":"PanTool"},{"attributes":{},"id":"83fccbec-62f7-4965-9972-8327ceafb3a1","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"0f14865d-24bb-467d-9b8f-b3abfb8908b1","type":"BoxAnnotation"}},"id":"0fa3a484-29ca-46c2-958e-fe7d540a0ab3","type":"BoxZoomTool"},{"attributes":{},"id":"ea2bae1f-3312-43f1-a582-c389431ac083","type":"SaveTool"},{"attributes":{},"id":"4f943d23-fc33-4322-8eff-3385e0ed756f","type":"ResetTool"},{"attributes":{},"id":"4458ad93-e1bf-478b-af28-992f77ca23b5","type":"HelpTool"},{"attributes":{"below":[{"id":"1c7e13ef-420b-4f4a-bf4d-645b35693074","type":"LinearAxis"}],"left":[{"id":"5174ac1d-e3c7-4988-96b0-ac668501a40f","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1c7e13ef-420b-4f4a-bf4d-645b35693074","type":"LinearAxis"},{"id":"6483996c-9420-4d81-b68f-6f462ba60d6e","type":"Grid"},{"id":"5174ac1d-e3c7-4988-96b0-ac668501a40f","type":"LinearAxis"},{"id":"658e4190-5ad1-4774-86c6-50350d80a98a","type":"Grid"},{"id":"0f14865d-24bb-467d-9b8f-b3abfb8908b1","type":"BoxAnnotation"},{"id":"e82c302b-a734-4d70-be51-b7fdd7c52af1","type":"GlyphRenderer"},{"id":"14bd0b05-e9b3-4f8c-b4b3-3dfb610c00c3","type":"GlyphRenderer"}],"title":{"id":"fccb48cb-670e-42e1-9e31-a752ec757ecc","type":"Title"},"toolbar":{"id":"035f8e10-b010-40c7-bc20-f44cbd24acb5","type":"Toolbar"},"x_range":{"id":"16f80fb7-10d1-4215-9050-5289c1341922","type":"DataRange1d"},"x_scale":{"id":"538215aa-708a-45e8-a0f6-1031793ac2b8","type":"LinearScale"},"y_range":{"id":"0a029ecb-21ec-488c-9b29-76a09e6f72e3","type":"DataRange1d"},"y_scale":{"id":"cc2fd7f7-8585-4e94-8b06-6dc82f9a28e5","type":"LinearScale"}},"id":"a5c31d1b-674e-4cd3-a615-1fd9a3a00162","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production","@production"],["Price","@price"]]},"id":"6b7910dc-80e8-412f-a79f-9e7a4d6109d0","type":"HoverTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"2PS8gpjRJEEgf/3ykT8bQe+qprQ/HB9Bt26AwpfiJkHKdVTpGAknQWwBpoI+MSdB+OjIgyWGLEEmKi8I55ItQaytjblN9ilBBvw4S6y6GkE1SJ3S//IsQeIj6sH8pyVBMEHLv0khGUG8xGabW4QqQQ==","dtype":"float64","shape":[14]},"y":{"__ndarray__":"IDmsg5YI9z/g+wjpFifjPxuZR/5gYOo/slbHBA/m+j+uR+F6FC77P/rFkl8sefs/DAIrhxa5AkAezBP1b7QDQN17uOS4UwBAV1aalIIu4j/6DLsC5B4DQJqZmZmZmfg/swH+Foph3j9/arx0k9gAQA==","dtype":"float64","shape":[14]}},"selected":{"id":"5905cdd8-07ce-4703-9185-8d22c552942e","type":"Selection"},"selection_policy":{"id":"7d5b88a9-1375-4ba6-b30f-6b8b20fb1466","type":"UnionRenderers"}},"id":"cf9032cc-8991-4b45-ae19-c34948746484","type":"ColumnDataSource"}],"root_ids":["a5c31d1b-674e-4cd3-a615-1fd9a3a00162"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"0440d25b-cb0e-44f2-9273-f607d7c49d08","roots":{"a5c31d1b-674e-4cd3-a615-1fd9a3a00162":"6863e0d7-8267-49d7-afba-8fc863905d86"}}];
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