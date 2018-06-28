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
      };var element = document.getElementById("6f891ebb-44c5-445a-a9d4-b0d54e4fbad1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6f891ebb-44c5-445a-a9d4-b0d54e4fbad1' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"42a5455b-8fd5-4fce-b382-15f258d0e666":{"roots":{"references":[{"attributes":{"below":[{"id":"ba698a8b-be4c-40c3-b1b1-89bc030818ba","type":"LinearAxis"}],"left":[{"id":"31b2472c-79db-49b9-bdce-bcd2320f4a74","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"ba698a8b-be4c-40c3-b1b1-89bc030818ba","type":"LinearAxis"},{"id":"fe999bca-e69e-43af-b084-c905fbb55ba6","type":"Grid"},{"id":"31b2472c-79db-49b9-bdce-bcd2320f4a74","type":"LinearAxis"},{"id":"716b779b-3dd9-4727-956c-68ccee4be6b4","type":"Grid"},{"id":"6976da29-673f-48fe-9130-d1998c24bd1b","type":"BoxAnnotation"},{"id":"81c29170-a703-40de-9b24-79ed953bf3c9","type":"GlyphRenderer"},{"id":"39a9789a-ca85-4370-91fb-43ee7b66c69f","type":"GlyphRenderer"}],"title":{"id":"fd2f2b13-cd00-435d-8603-ab83600c639f","type":"Title"},"toolbar":{"id":"72ad081e-7ccf-40fa-a59c-945b144df529","type":"Toolbar"},"x_range":{"id":"2dde4011-f15b-4019-9a11-13606950f5fd","type":"DataRange1d"},"x_scale":{"id":"f6855700-3121-4a8f-a7d7-118c1cbdc631","type":"LinearScale"},"y_range":{"id":"a3aaac53-d2a1-4b1e-911e-8b2c310ef933","type":"DataRange1d"},"y_scale":{"id":"deb762fb-a4ef-427d-b193-1f3d85452088","type":"LinearScale"}},"id":"f0212dee-25b7-4c13-8127-da627f5d895e","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"b8c8855e-42ff-46f2-91d3-4384d2a5f1f9","type":"ColumnDataSource"},"glyph":{"id":"8c4ab80f-d124-44ac-8322-ca1652201d54","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ac1f67ae-58a8-4f99-b2a4-415f2ce3b6f5","type":"Line"},"selection_glyph":null,"view":{"id":"0e47914b-a4be-4d68-b635-63566c3563be","type":"CDSView"}},"id":"39a9789a-ca85-4370-91fb-43ee7b66c69f","type":"GlyphRenderer"},{"attributes":{"source":{"id":"b8c8855e-42ff-46f2-91d3-4384d2a5f1f9","type":"ColumnDataSource"}},"id":"0e47914b-a4be-4d68-b635-63566c3563be","type":"CDSView"},{"attributes":{},"id":"5bfb83d9-b644-4583-9726-1b64b4c31620","type":"BasicTickFormatter"},{"attributes":{},"id":"c92377d6-254c-4abf-aa8f-5017fd1e86b8","type":"Selection"},{"attributes":{},"id":"0ecb33a8-7a48-4929-a7b2-23a16559d7b3","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"2dde4011-f15b-4019-9a11-13606950f5fd","type":"DataRange1d"},{"attributes":{},"id":"64df4d8a-87f3-4a62-9439-2ad514b70059","type":"Selection"},{"attributes":{},"id":"f6855700-3121-4a8f-a7d7-118c1cbdc631","type":"LinearScale"},{"attributes":{},"id":"c7ebe69a-5d4b-4588-87e4-fc73dba6dd8f","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"a3aaac53-d2a1-4b1e-911e-8b2c310ef933","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"price_change":{"__ndarray__":"AAAAAAAAAAAdgGyJ4z+yP0agDApm+Mg/GWRlVhSO2T8AAAAAAAAAAO0lrz1Q9tk/Q+kQa0gx2z8=","dtype":"float64","shape":[7]},"value_change":{"__ndarray__":"kiRJkiRJwj+k0fnLtLG3P4FSjzBHd60/tC/0Obijiz+HjwhGzfaOP0QBLKGF91Y/JaTS2Mqylb8=","dtype":"float64","shape":[7]}},"selected":{"id":"c92377d6-254c-4abf-aa8f-5017fd1e86b8","type":"Selection"},"selection_policy":{"id":"0ecb33a8-7a48-4929-a7b2-23a16559d7b3","type":"UnionRenderers"}},"id":"390a54c8-9825-457f-90b0-59ff7fbefdad","type":"ColumnDataSource"},{"attributes":{},"id":"deb762fb-a4ef-427d-b193-1f3d85452088","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"value_change"},"y":{"field":"price_change"}},"id":"61aca5af-7866-48e9-97a7-5c7374751628","type":"Circle"},{"attributes":{"axis_label":"Production change","axis_line_width":{"value":2},"formatter":{"id":"15175499-456c-4b74-8f3b-44bfa6fcc9c6","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"f0212dee-25b7-4c13-8127-da627f5d895e","subtype":"Figure","type":"Plot"},"ticker":{"id":"3b5e1d55-460c-4366-9b53-cdaf593e65b3","type":"BasicTicker"}},"id":"ba698a8b-be4c-40c3-b1b1-89bc030818ba","type":"LinearAxis"},{"attributes":{},"id":"3b5e1d55-460c-4366-9b53-cdaf593e65b3","type":"BasicTicker"},{"attributes":{"plot":{"id":"f0212dee-25b7-4c13-8127-da627f5d895e","subtype":"Figure","type":"Plot"},"ticker":{"id":"3b5e1d55-460c-4366-9b53-cdaf593e65b3","type":"BasicTicker"}},"id":"fe999bca-e69e-43af-b084-c905fbb55ba6","type":"Grid"},{"attributes":{"axis_label":"Price change","axis_line_width":{"value":2},"formatter":{"id":"5bfb83d9-b644-4583-9726-1b64b4c31620","type":"BasicTickFormatter"},"plot":{"id":"f0212dee-25b7-4c13-8127-da627f5d895e","subtype":"Figure","type":"Plot"},"ticker":{"id":"4caf4138-c723-463e-8f91-14fad6314064","type":"BasicTicker"}},"id":"31b2472c-79db-49b9-bdce-bcd2320f4a74","type":"LinearAxis"},{"attributes":{},"id":"4caf4138-c723-463e-8f91-14fad6314064","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"f0212dee-25b7-4c13-8127-da627f5d895e","subtype":"Figure","type":"Plot"},"ticker":{"id":"4caf4138-c723-463e-8f91-14fad6314064","type":"BasicTicker"}},"id":"716b779b-3dd9-4727-956c-68ccee4be6b4","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6976da29-673f-48fe-9130-d1998c24bd1b","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"asia_Chickpeascorrelation"},"id":"fd2f2b13-cd00-435d-8603-ab83600c639f","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"value_change"},"y":{"field":"price_change"}},"id":"60f6d666-5759-4692-af29-60e63f199b06","type":"Circle"},{"attributes":{"data_source":{"id":"390a54c8-9825-457f-90b0-59ff7fbefdad","type":"ColumnDataSource"},"glyph":{"id":"60f6d666-5759-4692-af29-60e63f199b06","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"61aca5af-7866-48e9-97a7-5c7374751628","type":"Circle"},"selection_glyph":null,"view":{"id":"b09a9d11-c4a8-42fb-9f4b-d1cbf4dea545","type":"CDSView"}},"id":"81c29170-a703-40de-9b24-79ed953bf3c9","type":"GlyphRenderer"},{"attributes":{},"id":"9b82b7e1-aa4b-4756-9e72-c1b80914c005","type":"PanTool"},{"attributes":{"source":{"id":"390a54c8-9825-457f-90b0-59ff7fbefdad","type":"ColumnDataSource"}},"id":"b09a9d11-c4a8-42fb-9f4b-d1cbf4dea545","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"9b82b7e1-aa4b-4756-9e72-c1b80914c005","type":"PanTool"},{"id":"6a2beca9-00d4-4f4f-9fa7-ed43db025800","type":"WheelZoomTool"},{"id":"e11385ea-cc05-44d2-97d8-c0db8c13ee91","type":"BoxZoomTool"},{"id":"81876c5e-6b91-4a5a-ba6c-61beddabff39","type":"SaveTool"},{"id":"7aac8e79-815d-481e-be8d-363c07f9b567","type":"ResetTool"},{"id":"41367975-d582-4487-b7d9-b1b3f8e60e04","type":"HelpTool"},{"id":"3dbf6bc3-0b51-4855-900b-e22a42fc6297","type":"HoverTool"}]},"id":"72ad081e-7ccf-40fa-a59c-945b144df529","type":"Toolbar"},{"attributes":{},"id":"6a2beca9-00d4-4f4f-9fa7-ed43db025800","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"6976da29-673f-48fe-9130-d1998c24bd1b","type":"BoxAnnotation"}},"id":"e11385ea-cc05-44d2-97d8-c0db8c13ee91","type":"BoxZoomTool"},{"attributes":{},"id":"81876c5e-6b91-4a5a-ba6c-61beddabff39","type":"SaveTool"},{"attributes":{},"id":"7aac8e79-815d-481e-be8d-363c07f9b567","type":"ResetTool"},{"attributes":{},"id":"41367975-d582-4487-b7d9-b1b3f8e60e04","type":"HelpTool"},{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production change","@value_change"],["Price change","@price_change"]]},"id":"3dbf6bc3-0b51-4855-900b-e22a42fc6297","type":"HoverTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"ac1f67ae-58a8-4f99-b2a4-415f2ce3b6f5","type":"Line"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mhSJ8IVF1D/aFlK5ixrSP4AiJkLEq6C/1ypm+LXLxj8hCPLdiNfXP0I7DLyMdrc/+E/Iuzhc0j8=","dtype":"float64","shape":[7]},"y":{"__ndarray__":"RAEsoYX3Vj+HjwhGzfaOP5IkSZIkScI/gVKPMEd3rT8lpNLYyrKVv6TR+cu0sbc/tC/0Obijiz8=","dtype":"float64","shape":[7]}},"selected":{"id":"64df4d8a-87f3-4a62-9439-2ad514b70059","type":"Selection"},"selection_policy":{"id":"c7ebe69a-5d4b-4588-87e4-fc73dba6dd8f","type":"UnionRenderers"}},"id":"b8c8855e-42ff-46f2-91d3-4384d2a5f1f9","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"8c4ab80f-d124-44ac-8322-ca1652201d54","type":"Line"},{"attributes":{},"id":"15175499-456c-4b74-8f3b-44bfa6fcc9c6","type":"BasicTickFormatter"}],"root_ids":["f0212dee-25b7-4c13-8127-da627f5d895e"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"42a5455b-8fd5-4fce-b382-15f258d0e666","roots":{"f0212dee-25b7-4c13-8127-da627f5d895e":"6f891ebb-44c5-445a-a9d4-b0d54e4fbad1"}}];
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