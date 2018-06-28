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
      };var element = document.getElementById("8f010433-9cff-446b-b357-dc720c7ef591");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8f010433-9cff-446b-b357-dc720c7ef591' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"08a97df9-58bb-4cb4-9692-36d11960f218":{"roots":{"references":[{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production","@production"],["Price","@price"]]},"id":"fc28b37a-3e61-4b8b-a61d-c5c7532c0931","type":"HoverTool"},{"attributes":{"callback":null},"id":"bcf98322-7084-4af8-95f4-b65903178c73","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"lb7FGZnlRUE6ZUzV4PhJQTpka3uZN0pBV6NjR1sxSkE9D/f7bUJHQQR4TPSBBEtBsrjDXmTnSkGwsCuWY41KQRi1u034WkdBjfmUexBtRUFbNZufZqtIQQ==","dtype":"float64","shape":[11]},"y":{"__ndarray__":"LYzfdw2QM0Byhb0+UppEQA4/yJbeQEVA0RaexEowRUAYwWM+m8w6QM7Xje75YEdAo2V86KkTR0ADNUAarCRGQO+NPQLvTjtA8TIm/u0PMUBHvTDA0CRBQA==","dtype":"float64","shape":[11]}},"selected":{"id":"6b8f8ea7-8538-4d87-931b-9820ec64245f","type":"Selection"},"selection_policy":{"id":"6bfd0974-c430-4a7d-9d4f-9c9fc5f52491","type":"UnionRenderers"}},"id":"2bc94653-a32d-4e40-90f3-3e99e159880d","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5d01595b-9a9d-40da-be08-2c4d5ce10d39","type":"Line"},{"attributes":{"plot":null,"text":"Kenya_Maize(white)"},"id":"dc763f54-849d-42fa-a662-73e64f4d42b4","type":"Title"},{"attributes":{},"id":"d2b4f355-ffe7-410a-9ddf-24cd56584499","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"259e9d4d-c156-4a7a-8cf8-094fcc8955b8","type":"Line"},{"attributes":{"data_source":{"id":"2bc94653-a32d-4e40-90f3-3e99e159880d","type":"ColumnDataSource"},"glyph":{"id":"5d01595b-9a9d-40da-be08-2c4d5ce10d39","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"259e9d4d-c156-4a7a-8cf8-094fcc8955b8","type":"Line"},"selection_glyph":null,"view":{"id":"d45776df-ee71-4520-b1bc-3058a98c4d41","type":"CDSView"}},"id":"8031bd29-87e3-4596-b88a-a9793c6da0e5","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2bc94653-a32d-4e40-90f3-3e99e159880d","type":"ColumnDataSource"}},"id":"d45776df-ee71-4520-b1bc-3058a98c4d41","type":"CDSView"},{"attributes":{"below":[{"id":"0a0e829f-f35d-4642-b4d8-b199f212df6f","type":"LinearAxis"}],"left":[{"id":"9a479add-9af5-4fb0-8161-3c524dbf5297","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"0a0e829f-f35d-4642-b4d8-b199f212df6f","type":"LinearAxis"},{"id":"d0fbf737-9c53-4984-971d-f4f3dc767a29","type":"Grid"},{"id":"9a479add-9af5-4fb0-8161-3c524dbf5297","type":"LinearAxis"},{"id":"acdabb50-caaf-4f62-968c-788284b59c62","type":"Grid"},{"id":"724f97a8-4694-4386-a04d-a59f819cbc1e","type":"BoxAnnotation"},{"id":"1f112b92-68d2-4a51-8ea5-962699543c42","type":"GlyphRenderer"},{"id":"8031bd29-87e3-4596-b88a-a9793c6da0e5","type":"GlyphRenderer"}],"title":{"id":"dc763f54-849d-42fa-a662-73e64f4d42b4","type":"Title"},"toolbar":{"id":"39a51a72-05f4-4502-b221-a5c5dd5ae3fe","type":"Toolbar"},"x_range":{"id":"bcf98322-7084-4af8-95f4-b65903178c73","type":"DataRange1d"},"x_scale":{"id":"fba3e98d-f3c1-4251-8131-8fbab8c8fa64","type":"LinearScale"},"y_range":{"id":"502457d3-5c7e-4801-99a0-f523e8a666a8","type":"DataRange1d"},"y_scale":{"id":"997e296a-f0a1-4b06-a2e5-b70a20c6954c","type":"LinearScale"}},"id":"e92b7ce2-8b24-46f4-8a6f-84efc8d55485","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b47483b3-4b0a-4155-b631-9297cafb9b38","type":"BasicTickFormatter"},{"attributes":{},"id":"94127803-6af9-44c7-83c4-cacc91980186","type":"UnionRenderers"},{"attributes":{},"id":"a6ba6924-ddb2-407f-ba37-512e56cf1098","type":"Selection"},{"attributes":{},"id":"6b8f8ea7-8538-4d87-931b-9820ec64245f","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"bc983b4b-20f6-4821-b9d3-d66e11c45a00","type":"PanTool"},{"id":"5549765f-99a5-42c7-ab50-ef3918adf6bf","type":"WheelZoomTool"},{"id":"7b97db77-9e15-4b6f-a530-febe99865e77","type":"BoxZoomTool"},{"id":"904aeacb-f63c-4621-861b-e3f4cdd447b7","type":"SaveTool"},{"id":"14e61217-21b1-4d53-89a1-847dc2652e5f","type":"ResetTool"},{"id":"80e5572c-f89a-4442-a3a9-9d5b6ab91bcf","type":"HelpTool"},{"id":"fc28b37a-3e61-4b8b-a61d-c5c7532c0931","type":"HoverTool"}]},"id":"39a51a72-05f4-4502-b221-a5c5dd5ae3fe","type":"Toolbar"},{"attributes":{"source":{"id":"24642005-d188-4743-9dbb-7432673e922f","type":"ColumnDataSource"}},"id":"8181e533-38da-4149-b38f-a62f6a2cfd75","type":"CDSView"},{"attributes":{},"id":"fba3e98d-f3c1-4251-8131-8fbab8c8fa64","type":"LinearScale"},{"attributes":{"callback":null},"id":"502457d3-5c7e-4801-99a0-f523e8a666a8","type":"DataRange1d"},{"attributes":{},"id":"997e296a-f0a1-4b06-a2e5-b70a20c6954c","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"b01e3fd3-ce1c-4fd3-b767-f9e5c0e25564","type":"Circle"},{"attributes":{"axis_label":"Production","axis_line_width":{"value":2},"formatter":{"id":"d2b4f355-ffe7-410a-9ddf-24cd56584499","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"e92b7ce2-8b24-46f4-8a6f-84efc8d55485","subtype":"Figure","type":"Plot"},"ticker":{"id":"6b915e63-868c-4096-9d26-73a113b7d49f","type":"BasicTicker"}},"id":"0a0e829f-f35d-4642-b4d8-b199f212df6f","type":"LinearAxis"},{"attributes":{},"id":"6b915e63-868c-4096-9d26-73a113b7d49f","type":"BasicTicker"},{"attributes":{"plot":{"id":"e92b7ce2-8b24-46f4-8a6f-84efc8d55485","subtype":"Figure","type":"Plot"},"ticker":{"id":"6b915e63-868c-4096-9d26-73a113b7d49f","type":"BasicTicker"}},"id":"d0fbf737-9c53-4984-971d-f4f3dc767a29","type":"Grid"},{"attributes":{},"id":"6bfd0974-c430-4a7d-9d4f-9c9fc5f52491","type":"UnionRenderers"},{"attributes":{"axis_label":"Price","axis_line_width":{"value":2},"formatter":{"id":"b47483b3-4b0a-4155-b631-9297cafb9b38","type":"BasicTickFormatter"},"plot":{"id":"e92b7ce2-8b24-46f4-8a6f-84efc8d55485","subtype":"Figure","type":"Plot"},"ticker":{"id":"49c7351d-e2f6-478c-bc43-3df8f931ca20","type":"BasicTicker"}},"id":"9a479add-9af5-4fb0-8161-3c524dbf5297","type":"LinearAxis"},{"attributes":{},"id":"49c7351d-e2f6-478c-bc43-3df8f931ca20","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"e92b7ce2-8b24-46f4-8a6f-84efc8d55485","subtype":"Figure","type":"Plot"},"ticker":{"id":"49c7351d-e2f6-478c-bc43-3df8f931ca20","type":"BasicTicker"}},"id":"acdabb50-caaf-4f62-968c-788284b59c62","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"724f97a8-4694-4386-a04d-a59f819cbc1e","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"7f7457a3-b318-453f-99ac-fa203362261a","type":"Circle"},{"attributes":{"data_source":{"id":"24642005-d188-4743-9dbb-7432673e922f","type":"ColumnDataSource"},"glyph":{"id":"7f7457a3-b318-453f-99ac-fa203362261a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b01e3fd3-ce1c-4fd3-b767-f9e5c0e25564","type":"Circle"},"selection_glyph":null,"view":{"id":"8181e533-38da-4149-b38f-a62f6a2cfd75","type":"CDSView"}},"id":"1f112b92-68d2-4a51-8ea5-962699543c42","type":"GlyphRenderer"},{"attributes":{},"id":"bc983b4b-20f6-4821-b9d3-d66e11c45a00","type":"PanTool"},{"attributes":{"callback":null,"data":{"price":{"__ndarray__":"Dj/Ilt5ARUAtjN93DZAzQPEyJv7tDzFA7409Au9OO0BHvTDA0CRBQBjBYz6bzDpAcoW9PlKaREDO143u+WBHQKRlfOipE0dAAzVAGqwkRkDRFp7ESjBFQA==","dtype":"float64","shape":[11]},"production":{"__ndarray__":"AAAAAHx5SUEAAAAAMMZIQQAAAIBMWEZBAAAAgIIPQkEAAAAArJtCQQAAAICubkpBAAAAAG/DSUEAAAAA/JtMQQAAAAD4aEtBAAAAgKnNSkEAAAAAtC5NQQ==","dtype":"float64","shape":[11]}},"selected":{"id":"a6ba6924-ddb2-407f-ba37-512e56cf1098","type":"Selection"},"selection_policy":{"id":"94127803-6af9-44c7-83c4-cacc91980186","type":"UnionRenderers"}},"id":"24642005-d188-4743-9dbb-7432673e922f","type":"ColumnDataSource"},{"attributes":{},"id":"5549765f-99a5-42c7-ab50-ef3918adf6bf","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"724f97a8-4694-4386-a04d-a59f819cbc1e","type":"BoxAnnotation"}},"id":"7b97db77-9e15-4b6f-a530-febe99865e77","type":"BoxZoomTool"},{"attributes":{},"id":"904aeacb-f63c-4621-861b-e3f4cdd447b7","type":"SaveTool"},{"attributes":{},"id":"14e61217-21b1-4d53-89a1-847dc2652e5f","type":"ResetTool"},{"attributes":{},"id":"80e5572c-f89a-4442-a3a9-9d5b6ab91bcf","type":"HelpTool"}],"root_ids":["e92b7ce2-8b24-46f4-8a6f-84efc8d55485"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"08a97df9-58bb-4cb4-9692-36d11960f218","roots":{"e92b7ce2-8b24-46f4-8a6f-84efc8d55485":"8f010433-9cff-446b-b357-dc720c7ef591"}}];
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