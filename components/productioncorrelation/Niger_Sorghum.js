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
      };var element = document.getElementById("b94f73b0-29bf-413b-9258-aeac21a4abb5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b94f73b0-29bf-413b-9258-aeac21a4abb5' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"bb4b0609-9881-46e1-a107-0363fa974b8d":{"roots":{"references":[{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production","@production"],["Price","@price"]]},"id":"f13bff41-c503-4712-8fc1-c89e44634d0b","type":"HoverTool"},{"attributes":{"callback":null},"id":"cb0d4166-9fb4-461b-ae6f-110576c2175e","type":"DataRange1d"},{"attributes":{},"id":"9d15a178-c665-49f6-8289-b4984f3638d3","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Niger_Sorghum"},"id":"739e5be6-6a7c-457b-a468-f91a7e34d7be","type":"Title"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"UyIAwftkLkGADdTvgeozQbOl0j+5ZCRBpCmbmv9ZLUH6RhrQ7WQpQblIYyd9sxhB2bRRLSFND0HWK3/RRRE1QQGBgWezECdBKasgR2ssLEG9XziGRJAxQcggmnZhQCdBq6zZY5T4IEE+n+WDUmMkQfcQV82iVy9BFU2pniw5L0HBbPEGuR8vQVnNIMqt7RtB0p+nXuxRCkEPo9dxhVAgQUIu2zd7FStB","dtype":"float64","shape":[21]},"y":{"__ndarray__":"Sw8w4FI/Z0AT8kHPLtpsQOCbVxPPTmFAIl0FicOgZkBzHMdxHEdkQAAAAAAAEFlAAAAAAACwU0ByeNKsTDhuQEREREQE5WJAPBrEl6jtZUBBpw102g5qQFVVVVVVAWNAMzMzM/OMXkBtoNMG+k1hQL6ASc9uz2dAzDdmile9Z0AitWP9Oa5nQKyqqqqq+lpAVVVVVVU1UkBUVVVVVcVdQAAAAAAASGVA","dtype":"float64","shape":[21]}},"selected":{"id":"a88571a4-ec49-42b6-957a-cea2116676c6","type":"Selection"},"selection_policy":{"id":"3a2dee90-2440-486c-b39b-c87717353a5f","type":"UnionRenderers"}},"id":"039797db-fba5-4b9a-8415-9d782b835c93","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7524d148-a86d-4436-82fa-881c13c46b0c","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"47e8e1da-8b07-4846-9a43-9dbb88437b0b","type":"Line"},{"attributes":{"data_source":{"id":"039797db-fba5-4b9a-8415-9d782b835c93","type":"ColumnDataSource"},"glyph":{"id":"7524d148-a86d-4436-82fa-881c13c46b0c","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47e8e1da-8b07-4846-9a43-9dbb88437b0b","type":"Line"},"selection_glyph":null,"view":{"id":"7f12da6d-c100-4eca-b31d-a6fada23da76","type":"CDSView"}},"id":"bbda8031-218b-4c67-a0ad-a52f0f00ba50","type":"GlyphRenderer"},{"attributes":{"source":{"id":"039797db-fba5-4b9a-8415-9d782b835c93","type":"ColumnDataSource"}},"id":"7f12da6d-c100-4eca-b31d-a6fada23da76","type":"CDSView"},{"attributes":{"below":[{"id":"db9b7764-c4e4-4969-8ada-e72c27e7dce9","type":"LinearAxis"}],"left":[{"id":"538e6501-0670-4ba4-b2ed-0c9aaf2a786d","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"db9b7764-c4e4-4969-8ada-e72c27e7dce9","type":"LinearAxis"},{"id":"4c7ed03e-3d6c-4ba7-98bd-7cc2b97e3bb7","type":"Grid"},{"id":"538e6501-0670-4ba4-b2ed-0c9aaf2a786d","type":"LinearAxis"},{"id":"a4e654c3-880b-4e54-8715-aac4ef04c3d7","type":"Grid"},{"id":"0a63a242-12fa-41e3-8a35-202d25a3aae0","type":"BoxAnnotation"},{"id":"13eaea5d-e739-4edf-a6bf-b3f7d2edf363","type":"GlyphRenderer"},{"id":"bbda8031-218b-4c67-a0ad-a52f0f00ba50","type":"GlyphRenderer"}],"title":{"id":"739e5be6-6a7c-457b-a468-f91a7e34d7be","type":"Title"},"toolbar":{"id":"96f5a0a1-5314-4b5a-b848-4c8e3a0712fa","type":"Toolbar"},"x_range":{"id":"cb0d4166-9fb4-461b-ae6f-110576c2175e","type":"DataRange1d"},"x_scale":{"id":"07cd081f-00ec-4c77-801d-025bf1ed346f","type":"LinearScale"},"y_range":{"id":"c6ab0b94-784e-43d8-a894-9216b2c0ef82","type":"DataRange1d"},"y_scale":{"id":"20d78156-31b6-491b-9771-800f1c35fcb6","type":"LinearScale"}},"id":"5f0550f7-f39d-42af-a1e7-e19c46be6c80","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"6c0fc1da-f9fd-458f-b678-2f87a810cdf5","type":"UnionRenderers"},{"attributes":{},"id":"dad5cea0-c3fd-41f2-84b9-6fd214fc27be","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"af57b8cb-e7d2-40e7-8787-619c86e54cf0","type":"PanTool"},{"id":"50c1ec6b-4ed1-4501-bb8e-8110e8a7152e","type":"WheelZoomTool"},{"id":"49559ad5-06cf-414f-b5b6-9dd190a620de","type":"BoxZoomTool"},{"id":"74fe2a97-2ae7-4144-8055-ce0d8ec0f786","type":"SaveTool"},{"id":"2699cd0b-8eed-4f16-a880-31c500e02f4b","type":"ResetTool"},{"id":"ac57ef61-881f-41d1-b9d3-0fdc8dfa39f6","type":"HelpTool"},{"id":"f13bff41-c503-4712-8fc1-c89e44634d0b","type":"HoverTool"}]},"id":"96f5a0a1-5314-4b5a-b848-4c8e3a0712fa","type":"Toolbar"},{"attributes":{},"id":"3a2dee90-2440-486c-b39b-c87717353a5f","type":"UnionRenderers"},{"attributes":{},"id":"8951fc97-156e-49e7-a239-84d173a1bd52","type":"Selection"},{"attributes":{},"id":"a88571a4-ec49-42b6-957a-cea2116676c6","type":"Selection"},{"attributes":{},"id":"07cd081f-00ec-4c77-801d-025bf1ed346f","type":"LinearScale"},{"attributes":{"callback":null},"id":"c6ab0b94-784e-43d8-a894-9216b2c0ef82","type":"DataRange1d"},{"attributes":{},"id":"20d78156-31b6-491b-9771-800f1c35fcb6","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"811d39ed-ba8b-40f2-b2a9-b7f2ad098ad6","type":"Circle"},{"attributes":{"axis_label":"Production","axis_line_width":{"value":2},"formatter":{"id":"9d15a178-c665-49f6-8289-b4984f3638d3","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"5f0550f7-f39d-42af-a1e7-e19c46be6c80","subtype":"Figure","type":"Plot"},"ticker":{"id":"0c81a8ae-9898-40b3-b5db-86b5d8abeb6a","type":"BasicTicker"}},"id":"db9b7764-c4e4-4969-8ada-e72c27e7dce9","type":"LinearAxis"},{"attributes":{},"id":"0c81a8ae-9898-40b3-b5db-86b5d8abeb6a","type":"BasicTicker"},{"attributes":{"plot":{"id":"5f0550f7-f39d-42af-a1e7-e19c46be6c80","subtype":"Figure","type":"Plot"},"ticker":{"id":"0c81a8ae-9898-40b3-b5db-86b5d8abeb6a","type":"BasicTicker"}},"id":"4c7ed03e-3d6c-4ba7-98bd-7cc2b97e3bb7","type":"Grid"},{"attributes":{"axis_label":"Price","axis_line_width":{"value":2},"formatter":{"id":"dad5cea0-c3fd-41f2-84b9-6fd214fc27be","type":"BasicTickFormatter"},"plot":{"id":"5f0550f7-f39d-42af-a1e7-e19c46be6c80","subtype":"Figure","type":"Plot"},"ticker":{"id":"24c1b9bc-2eb1-4f9b-8590-1ce3e9cdd7e5","type":"BasicTicker"}},"id":"538e6501-0670-4ba4-b2ed-0c9aaf2a786d","type":"LinearAxis"},{"attributes":{},"id":"24c1b9bc-2eb1-4f9b-8590-1ce3e9cdd7e5","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"5f0550f7-f39d-42af-a1e7-e19c46be6c80","subtype":"Figure","type":"Plot"},"ticker":{"id":"24c1b9bc-2eb1-4f9b-8590-1ce3e9cdd7e5","type":"BasicTicker"}},"id":"a4e654c3-880b-4e54-8715-aac4ef04c3d7","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0a63a242-12fa-41e3-8a35-202d25a3aae0","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"c67cede1-3ac0-4170-b668-699e913e08c3","type":"Circle"},{"attributes":{"data_source":{"id":"219501e4-ee53-4c32-9cde-6a758617830d","type":"ColumnDataSource"},"glyph":{"id":"c67cede1-3ac0-4170-b668-699e913e08c3","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"811d39ed-ba8b-40f2-b2a9-b7f2ad098ad6","type":"Circle"},"selection_glyph":null,"view":{"id":"36e3f8fd-015a-43a9-8c20-50117bbeb33d","type":"CDSView"}},"id":"13eaea5d-e739-4edf-a6bf-b3f7d2edf363","type":"GlyphRenderer"},{"attributes":{},"id":"af57b8cb-e7d2-40e7-8787-619c86e54cf0","type":"PanTool"},{"attributes":{"callback":null,"data":{"price":{"__ndarray__":"VVVVVVU1UkAAAAAAALBTQKyqqqqq+lpAVVVVVVUBY0AAAAAAAEhlQAAAAAAAEFlAVFVVVVXFXUBzHMdxHEdkQCJdBYnDoGZAMzMzM/OMXkDgm1cTz05hQEGnDXTaDmpARERERATlYkBtoNMG+k1hQEsPMOBSP2dAzDdmile9Z0C+gEnPbs9nQDwaxJeo7WVAE/JBzy7abEByeNKsTDhuQCK1Y/05rmdA","dtype":"float64","shape":[21]},"production":{"__ndarray__":"AAAAAACOEkEAAAAAQIMZQQAAAABgihBBAAAAAEAGGUEAAAAAYLMeQQAAAACADR1BAAAAAOCkFkEAAAAAckAkQQAAAAAacCRBAAAAAJD/IEEAAAAAMA8hQQAAAAAAzyxBAAAAANBZLEEAAAAAMMEtQQAAAACoATRBAAAAAMqKJkEAAAAAUN0zQQAAAAAkgidBAAAAANH9NEEAAAAAOiU0QQAAAAB6RT1B","dtype":"float64","shape":[21]}},"selected":{"id":"8951fc97-156e-49e7-a239-84d173a1bd52","type":"Selection"},"selection_policy":{"id":"6c0fc1da-f9fd-458f-b678-2f87a810cdf5","type":"UnionRenderers"}},"id":"219501e4-ee53-4c32-9cde-6a758617830d","type":"ColumnDataSource"},{"attributes":{"source":{"id":"219501e4-ee53-4c32-9cde-6a758617830d","type":"ColumnDataSource"}},"id":"36e3f8fd-015a-43a9-8c20-50117bbeb33d","type":"CDSView"},{"attributes":{},"id":"50c1ec6b-4ed1-4501-bb8e-8110e8a7152e","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"0a63a242-12fa-41e3-8a35-202d25a3aae0","type":"BoxAnnotation"}},"id":"49559ad5-06cf-414f-b5b6-9dd190a620de","type":"BoxZoomTool"},{"attributes":{},"id":"74fe2a97-2ae7-4144-8055-ce0d8ec0f786","type":"SaveTool"},{"attributes":{},"id":"2699cd0b-8eed-4f16-a880-31c500e02f4b","type":"ResetTool"},{"attributes":{},"id":"ac57ef61-881f-41d1-b9d3-0fdc8dfa39f6","type":"HelpTool"}],"root_ids":["5f0550f7-f39d-42af-a1e7-e19c46be6c80"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"bb4b0609-9881-46e1-a107-0363fa974b8d","roots":{"5f0550f7-f39d-42af-a1e7-e19c46be6c80":"b94f73b0-29bf-413b-9258-aeac21a4abb5"}}];
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