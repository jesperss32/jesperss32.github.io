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
      };var element = document.getElementById("6a7cd183-52f2-4ba3-be52-82247cadfd36");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6a7cd183-52f2-4ba3-be52-82247cadfd36' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"fa2b9620-229e-458b-b0d4-7d9b82f19e04":{"roots":{"references":[{"attributes":{"plot":{"id":"c1c725b3-9a3e-4ddd-9875-331f5679c773","subtype":"Figure","type":"Plot"},"ticker":{"id":"22de2e51-903e-49df-9311-b76dac69f9cd","type":"MercatorTicker"}},"id":"f2fb5844-9c57-4943-9b89-c5301cbaef35","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0ec2c1c3-4bde-4d8b-9bb2-1e8b88188d0a","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"5f0a9149-67e1-4561-ab31-98763cd02356","type":"MercatorTickFormatter"},"plot":{"id":"c1c725b3-9a3e-4ddd-9875-331f5679c773","subtype":"Figure","type":"Plot"},"ticker":{"id":"22de2e51-903e-49df-9311-b76dac69f9cd","type":"MercatorTicker"}},"id":"d2bcb7a4-6e4f-4556-bbee-b6f873c80b9a","type":"MercatorAxis"},{"attributes":{},"id":"d38c2777-7cd1-4b54-ab14-e40ffe27ec71","type":"HelpTool"},{"attributes":{"dimension":"lon"},"id":"22de2e51-903e-49df-9311-b76dac69f9cd","type":"MercatorTicker"},{"attributes":{"dimension":"lon"},"id":"5f0a9149-67e1-4561-ab31-98763cd02356","type":"MercatorTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"02640b54-2b5a-4d7f-bbb0-06def06272d4","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"c1c725b3-9a3e-4ddd-9875-331f5679c773","subtype":"Figure","type":"Plot"},"ticker":{"id":"1c05f550-3269-4d4c-9206-48c5e8a61519","type":"MercatorTicker"}},"id":"34660a51-eea1-463f-b5e8-e3e05d18ccda","type":"Grid"},{"attributes":{"formatter":{"id":"462d5b33-e7e3-46a5-a9b4-efd1a7cfd5ec","type":"MercatorTickFormatter"},"plot":{"id":"c1c725b3-9a3e-4ddd-9875-331f5679c773","subtype":"Figure","type":"Plot"},"ticker":{"id":"1c05f550-3269-4d4c-9206-48c5e8a61519","type":"MercatorTicker"}},"id":"4159ddf5-34ae-4a22-b9af-8a9a047acb34","type":"MercatorAxis"},{"attributes":{"dimension":"lat"},"id":"1c05f550-3269-4d4c-9206-48c5e8a61519","type":"MercatorTicker"},{"attributes":{"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors,&amp;copy; &lt;a href=\\"https://cartodb.com/attributions\\"&gt;CartoDB&lt;/a&gt;","url":"https://tiles.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"},"id":"cac5acd1-ca92-4912-9101-102906087de3","type":"WMTSTileSource"},{"attributes":{"dimension":"lat"},"id":"462d5b33-e7e3-46a5-a9b4-efd1a7cfd5ec","type":"MercatorTickFormatter"},{"attributes":{"tile_source":{"id":"cac5acd1-ca92-4912-9101-102906087de3","type":"WMTSTileSource"}},"id":"a697908b-946e-4fba-ad93-aed9b6fb0efd","type":"TileRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"709241b7-a3ad-46e2-8062-11f75f2148c7","type":"PanTool"},{"id":"9621f5e0-62cb-48a9-b722-f322da6a97ae","type":"WheelZoomTool"},{"id":"f95d212b-8474-42e8-814f-26ebf4fb02d9","type":"BoxZoomTool"},{"id":"0f8d8eb3-88a6-4e52-9dd8-5478c2525d6e","type":"SaveTool"},{"id":"34b2bfe5-7c92-4ced-88f3-71e21239e9fa","type":"ResetTool"},{"id":"d38c2777-7cd1-4b54-ab14-e40ffe27ec71","type":"HelpTool"}]},"id":"12d1f883-73af-4df8-bc0b-ba5eb7dbc913","type":"Toolbar"},{"attributes":{"below":[{"id":"d2bcb7a4-6e4f-4556-bbee-b6f873c80b9a","type":"MercatorAxis"}],"left":[{"id":"4159ddf5-34ae-4a22-b9af-8a9a047acb34","type":"MercatorAxis"}],"renderers":[{"id":"d2bcb7a4-6e4f-4556-bbee-b6f873c80b9a","type":"MercatorAxis"},{"id":"f2fb5844-9c57-4943-9b89-c5301cbaef35","type":"Grid"},{"id":"4159ddf5-34ae-4a22-b9af-8a9a047acb34","type":"MercatorAxis"},{"id":"34660a51-eea1-463f-b5e8-e3e05d18ccda","type":"Grid"},{"id":"0ec2c1c3-4bde-4d8b-9bb2-1e8b88188d0a","type":"BoxAnnotation"},{"id":"a697908b-946e-4fba-ad93-aed9b6fb0efd","type":"TileRenderer"}],"title":{"id":"02640b54-2b5a-4d7f-bbb0-06def06272d4","type":"Title"},"toolbar":{"id":"12d1f883-73af-4df8-bc0b-ba5eb7dbc913","type":"Toolbar"},"x_range":{"id":"fc1c1a1a-92fa-4e51-ad13-6901fb5579bc","type":"Range1d"},"x_scale":{"id":"1e001905-fbad-41eb-989a-ed0142bf4973","type":"LinearScale"},"y_range":{"id":"176c83e3-2280-48aa-9b06-66e5a5adb6b3","type":"Range1d"},"y_scale":{"id":"4989a0dc-3288-4cd6-9ffe-7aff4acdc60c","type":"LinearScale"}},"id":"c1c725b3-9a3e-4ddd-9875-331f5679c773","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"709241b7-a3ad-46e2-8062-11f75f2148c7","type":"PanTool"},{"attributes":{"callback":null,"end":6000000,"start":-2000000},"id":"fc1c1a1a-92fa-4e51-ad13-6901fb5579bc","type":"Range1d"},{"attributes":{},"id":"34b2bfe5-7c92-4ced-88f3-71e21239e9fa","type":"ResetTool"},{"attributes":{},"id":"9621f5e0-62cb-48a9-b722-f322da6a97ae","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":7000000,"start":-1000000},"id":"176c83e3-2280-48aa-9b06-66e5a5adb6b3","type":"Range1d"},{"attributes":{"overlay":{"id":"0ec2c1c3-4bde-4d8b-9bb2-1e8b88188d0a","type":"BoxAnnotation"}},"id":"f95d212b-8474-42e8-814f-26ebf4fb02d9","type":"BoxZoomTool"},{"attributes":{},"id":"1e001905-fbad-41eb-989a-ed0142bf4973","type":"LinearScale"},{"attributes":{},"id":"0f8d8eb3-88a6-4e52-9dd8-5478c2525d6e","type":"SaveTool"},{"attributes":{},"id":"4989a0dc-3288-4cd6-9ffe-7aff4acdc60c","type":"LinearScale"}],"root_ids":["c1c725b3-9a3e-4ddd-9875-331f5679c773"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"fa2b9620-229e-458b-b0d4-7d9b82f19e04","roots":{"c1c725b3-9a3e-4ddd-9875-331f5679c773":"6a7cd183-52f2-4ba3-be52-82247cadfd36"}}];
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