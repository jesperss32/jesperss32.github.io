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
      };var element = document.getElementById("9173fc15-a648-44a8-85d4-878cd392051b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9173fc15-a648-44a8-85d4-878cd392051b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5a46edf8-d299-40e7-88ab-dd939edb35cf":{"roots":{"references":[{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production","@production"],["Price","@price"]]},"id":"60d9302b-52df-43ac-9f21-229506a38569","type":"HoverTool"},{"attributes":{"callback":null},"id":"d3395578-0be7-4bbd-9c38-8e862d7dc868","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"ae8138f9-7d23-4664-b644-8c76ea2f169f","type":"Line"},{"attributes":{"plot":null,"text":"Tajikistan_Onions"},"id":"27248747-891a-480a-b4c4-fd230ecacc74","type":"Title"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"/tBlE7B9FUEePzyvNbkSQRPHU/pZdhZB2ZCjIJ+RG0H6ynClJpAPQT/kVBCcfBZBVrEVVuR+GEE0926UAV8CQarZ5KMjiRJBU2KQ0UpzG0GSyi1TtLoLQQ==","dtype":"float64","shape":[11]},"y":{"__ndarray__":"ImlKxdmH+z8h95oLSVP3P4FOG+i0Af0/lKywBhViAkBN7TLp3NryP6DLwVk3C/0/4CA0lVgMAEBpdzVm/6nhPwvXo3A9Cvc/tM2N6QlLAkC6Rt5MX+LvPw==","dtype":"float64","shape":[11]}},"selected":{"id":"170901a3-aeaa-4358-9d56-36e85286fd83","type":"Selection"},"selection_policy":{"id":"f8ba9db2-7a48-4380-93d3-bb0b4784d336","type":"UnionRenderers"}},"id":"902c22ed-15e4-4456-994b-6a5380d24307","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"95c63a54-322d-42ff-a44a-b218a680e1e0","type":"Line"},{"attributes":{"data_source":{"id":"902c22ed-15e4-4456-994b-6a5380d24307","type":"ColumnDataSource"},"glyph":{"id":"95c63a54-322d-42ff-a44a-b218a680e1e0","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ae8138f9-7d23-4664-b644-8c76ea2f169f","type":"Line"},"selection_glyph":null,"view":{"id":"db55bbc5-37be-4535-b3f7-bbb0c1b30df1","type":"CDSView"}},"id":"33a0e257-17db-4df4-9fda-42c7a097a4bd","type":"GlyphRenderer"},{"attributes":{"source":{"id":"902c22ed-15e4-4456-994b-6a5380d24307","type":"ColumnDataSource"}},"id":"db55bbc5-37be-4535-b3f7-bbb0c1b30df1","type":"CDSView"},{"attributes":{},"id":"f965219d-d862-49bc-adae-87a471387f35","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"f2969a03-f2b3-4022-9ab3-99799b891f41","type":"LinearAxis"}],"left":[{"id":"01ba8f1c-56f8-4e40-a3be-dd3d589ede01","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f2969a03-f2b3-4022-9ab3-99799b891f41","type":"LinearAxis"},{"id":"a5d8e801-f217-45c6-a10c-3dab82f2ce0e","type":"Grid"},{"id":"01ba8f1c-56f8-4e40-a3be-dd3d589ede01","type":"LinearAxis"},{"id":"59afa47a-0f08-4b0b-97c5-3132b4dc3ebb","type":"Grid"},{"id":"8ea7ecaf-8c98-44ed-ba33-f89201536896","type":"BoxAnnotation"},{"id":"bafbe8bd-9fc6-4458-b0c4-7777505020a0","type":"GlyphRenderer"},{"id":"33a0e257-17db-4df4-9fda-42c7a097a4bd","type":"GlyphRenderer"}],"title":{"id":"27248747-891a-480a-b4c4-fd230ecacc74","type":"Title"},"toolbar":{"id":"1397aaeb-0289-41e0-94a3-3fd5e9613d21","type":"Toolbar"},"x_range":{"id":"d3395578-0be7-4bbd-9c38-8e862d7dc868","type":"DataRange1d"},"x_scale":{"id":"61f1a94b-e3fe-4b6a-a52f-e4375ae61b16","type":"LinearScale"},"y_range":{"id":"acccc05f-5608-4018-8551-1a28c3ebe142","type":"DataRange1d"},"y_scale":{"id":"eb41f60d-e586-4222-a7ea-7beffbfb68b7","type":"LinearScale"}},"id":"79497774-403f-439b-aeea-535e508d8d13","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"4984c6ae-3246-48be-ac35-1df2bdbc1cc9","type":"Selection"},{"attributes":{},"id":"7cc99e77-37bf-4aee-9468-a1687880e7ea","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"eeb96fac-6326-4306-ac67-c7a3468681c3","type":"PanTool"},{"id":"c71e5ec3-3290-4312-9396-c7647309ef4f","type":"WheelZoomTool"},{"id":"0d31c1b9-17f8-4833-82d9-34c6cc43a346","type":"BoxZoomTool"},{"id":"80ffe121-0452-419e-b44c-33791b5e40d6","type":"SaveTool"},{"id":"8c7a3e27-e589-421f-9502-d1fbd961003e","type":"ResetTool"},{"id":"30f64578-967b-4974-a9ce-a3f8f9d0ae80","type":"HelpTool"},{"id":"60d9302b-52df-43ac-9f21-229506a38569","type":"HoverTool"}]},"id":"1397aaeb-0289-41e0-94a3-3fd5e9613d21","type":"Toolbar"},{"attributes":{},"id":"170901a3-aeaa-4358-9d56-36e85286fd83","type":"Selection"},{"attributes":{},"id":"9990387f-05a6-4393-aca1-b25b22bc6b1f","type":"BasicTickFormatter"},{"attributes":{},"id":"61f1a94b-e3fe-4b6a-a52f-e4375ae61b16","type":"LinearScale"},{"attributes":{"callback":null},"id":"acccc05f-5608-4018-8551-1a28c3ebe142","type":"DataRange1d"},{"attributes":{},"id":"eb41f60d-e586-4222-a7ea-7beffbfb68b7","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"f3a717a5-f674-460e-b645-721199f0b115","type":"Circle"},{"attributes":{"axis_label":"Production","axis_line_width":{"value":2},"formatter":{"id":"f965219d-d862-49bc-adae-87a471387f35","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"79497774-403f-439b-aeea-535e508d8d13","subtype":"Figure","type":"Plot"},"ticker":{"id":"83f2c0cd-3049-4682-b2bb-8f6c8840fc83","type":"BasicTicker"}},"id":"f2969a03-f2b3-4022-9ab3-99799b891f41","type":"LinearAxis"},{"attributes":{},"id":"83f2c0cd-3049-4682-b2bb-8f6c8840fc83","type":"BasicTicker"},{"attributes":{"plot":{"id":"79497774-403f-439b-aeea-535e508d8d13","subtype":"Figure","type":"Plot"},"ticker":{"id":"83f2c0cd-3049-4682-b2bb-8f6c8840fc83","type":"BasicTicker"}},"id":"a5d8e801-f217-45c6-a10c-3dab82f2ce0e","type":"Grid"},{"attributes":{"axis_label":"Price","axis_line_width":{"value":2},"formatter":{"id":"9990387f-05a6-4393-aca1-b25b22bc6b1f","type":"BasicTickFormatter"},"plot":{"id":"79497774-403f-439b-aeea-535e508d8d13","subtype":"Figure","type":"Plot"},"ticker":{"id":"42ae9d5a-956c-438e-8454-b6b3cdfe28c9","type":"BasicTicker"}},"id":"01ba8f1c-56f8-4e40-a3be-dd3d589ede01","type":"LinearAxis"},{"attributes":{},"id":"f8ba9db2-7a48-4380-93d3-bb0b4784d336","type":"UnionRenderers"},{"attributes":{},"id":"42ae9d5a-956c-438e-8454-b6b3cdfe28c9","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"79497774-403f-439b-aeea-535e508d8d13","subtype":"Figure","type":"Plot"},"ticker":{"id":"42ae9d5a-956c-438e-8454-b6b3cdfe28c9","type":"BasicTicker"}},"id":"59afa47a-0f08-4b0b-97c5-3132b4dc3ebb","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8ea7ecaf-8c98-44ed-ba33-f89201536896","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"f35d27df-d309-4c81-ae35-33335f29c6aa","type":"Circle"},{"attributes":{"data_source":{"id":"c5507e54-5353-4e0a-8769-9fbcd6d866b2","type":"ColumnDataSource"},"glyph":{"id":"f35d27df-d309-4c81-ae35-33335f29c6aa","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f3a717a5-f674-460e-b645-721199f0b115","type":"Circle"},"selection_glyph":null,"view":{"id":"edfa0872-edd9-488d-a4ab-b88ba373484d","type":"CDSView"}},"id":"bafbe8bd-9fc6-4458-b0c4-7777505020a0","type":"GlyphRenderer"},{"attributes":{},"id":"eeb96fac-6326-4306-ac67-c7a3468681c3","type":"PanTool"},{"attributes":{"source":{"id":"c5507e54-5353-4e0a-8769-9fbcd6d866b2","type":"ColumnDataSource"}},"id":"edfa0872-edd9-488d-a4ab-b88ba373484d","type":"CDSView"},{"attributes":{"callback":null,"data":{"price":{"__ndarray__":"oMvBWTcL/T9pdzVm/6nhP7pG3kxf4u8/Te0y6dza8j8L16NwPQr3P4FOG+i0Af0/IfeaC0lT9z+zzY3pCUsCQOAgNJVYDABAImlKxdmH+z+UrLAGFWICQA==","dtype":"float64","shape":[11]},"production":{"__ndarray__":"AAAAADb/IEEAAAAAAPMGQQAAAADASghBAAAAAEB9CkEAAAAAgMIMQQAAAADMYxBBAAAAAABzEkEAAAAA+PUUQQAAAADQdhZBAAAAAICSGkEAAAAAfPgfQQ==","dtype":"float64","shape":[11]}},"selected":{"id":"4984c6ae-3246-48be-ac35-1df2bdbc1cc9","type":"Selection"},"selection_policy":{"id":"7cc99e77-37bf-4aee-9468-a1687880e7ea","type":"UnionRenderers"}},"id":"c5507e54-5353-4e0a-8769-9fbcd6d866b2","type":"ColumnDataSource"},{"attributes":{},"id":"c71e5ec3-3290-4312-9396-c7647309ef4f","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"8ea7ecaf-8c98-44ed-ba33-f89201536896","type":"BoxAnnotation"}},"id":"0d31c1b9-17f8-4833-82d9-34c6cc43a346","type":"BoxZoomTool"},{"attributes":{},"id":"80ffe121-0452-419e-b44c-33791b5e40d6","type":"SaveTool"},{"attributes":{},"id":"8c7a3e27-e589-421f-9502-d1fbd961003e","type":"ResetTool"},{"attributes":{},"id":"30f64578-967b-4974-a9ce-a3f8f9d0ae80","type":"HelpTool"}],"root_ids":["79497774-403f-439b-aeea-535e508d8d13"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"5a46edf8-d299-40e7-88ab-dd939edb35cf","roots":{"79497774-403f-439b-aeea-535e508d8d13":"9173fc15-a648-44a8-85d4-878cd392051b"}}];
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