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
      };var element = document.getElementById("540a3c19-b63b-4d8f-8b9f-06dc5019c616");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '540a3c19-b63b-4d8f-8b9f-06dc5019c616' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"fbffbcb7-a545-449e-b56f-a3c0f7eda24e":{"roots":{"references":[{"attributes":{"callback":null},"id":"dfe66a57-b62a-4945-aa1d-28a18735447f","type":"DataRange1d"},{"attributes":{},"id":"fca39114-8206-4607-8209-0a7a83eb95fc","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"vL48ZOXIWUHk+g1Q2ExTQQWivwF/41tBRjyAu5VJWkE0dNf199tQQWqf9CFlykdBSM539toxVUEEaL9eRsZYQadCa2WmPFlBcVYCGnsPSkE=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"TH6x5BfLF0DXo3A9CvQOQN3d3d3dfRpA+yBlKCRwGECuljdGMLEIQNrzIgAl6/c/4jPsChDoEUCHpCkVZ38WQEBsKg05FxdAq1xLjau9/T8=","dtype":"float64","shape":[10]}},"selected":{"id":"a3eab577-e4ab-4301-8ccb-08fe272599ba","type":"Selection"},"selection_policy":{"id":"ee2f372d-6990-40ca-a8ce-be1e42cae25d","type":"UnionRenderers"}},"id":"22ca8506-4eb9-4090-bfc1-789c631f17a3","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Ethiopia_Maize(white)"},"id":"b384cb10-959c-43f0-9859-f3ec6c0299f3","type":"Title"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"d7f6457f-828f-4ccb-b3ff-20fb2dda9eb4","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7a117e64-9241-4637-be35-19bbb17f2008","type":"Line"},{"attributes":{"data_source":{"id":"22ca8506-4eb9-4090-bfc1-789c631f17a3","type":"ColumnDataSource"},"glyph":{"id":"d7f6457f-828f-4ccb-b3ff-20fb2dda9eb4","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7a117e64-9241-4637-be35-19bbb17f2008","type":"Line"},"selection_glyph":null,"view":{"id":"86d55f8d-0e74-486e-9b0d-c2c24132f5b5","type":"CDSView"}},"id":"c65d59d3-c76b-49e9-b01b-0e492e70e454","type":"GlyphRenderer"},{"attributes":{"source":{"id":"22ca8506-4eb9-4090-bfc1-789c631f17a3","type":"ColumnDataSource"}},"id":"86d55f8d-0e74-486e-9b0d-c2c24132f5b5","type":"CDSView"},{"attributes":{"below":[{"id":"9dd6e106-739e-4069-87fc-2b681ca8b799","type":"LinearAxis"}],"left":[{"id":"9fc76e48-491c-4a8b-93bf-b75bd1e8023d","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"9dd6e106-739e-4069-87fc-2b681ca8b799","type":"LinearAxis"},{"id":"86f3bb72-4445-4bba-b4a0-7e45d1754118","type":"Grid"},{"id":"9fc76e48-491c-4a8b-93bf-b75bd1e8023d","type":"LinearAxis"},{"id":"1215408d-0edd-4a85-be0e-c610a1cad99d","type":"Grid"},{"id":"96639eb6-763d-4a6b-9ff0-495011ff303b","type":"BoxAnnotation"},{"id":"730eb587-f3e0-4053-b579-e0251f0e9868","type":"GlyphRenderer"},{"id":"c65d59d3-c76b-49e9-b01b-0e492e70e454","type":"GlyphRenderer"}],"title":{"id":"b384cb10-959c-43f0-9859-f3ec6c0299f3","type":"Title"},"toolbar":{"id":"058b436a-7b44-4e9a-8277-b915970f2b46","type":"Toolbar"},"x_range":{"id":"dfe66a57-b62a-4945-aa1d-28a18735447f","type":"DataRange1d"},"x_scale":{"id":"c78d3b43-2cdb-434a-b8ec-b95a773a3b37","type":"LinearScale"},"y_range":{"id":"88e28016-8278-49e2-9b2c-dab7febdb138","type":"DataRange1d"},"y_scale":{"id":"0a32eb98-465d-4a34-b1cc-0d4ae9f68ffb","type":"LinearScale"}},"id":"515771d4-6287-435e-8270-aa5de5fa9b1b","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3315f527-eaac-4ba3-8913-5ff7df88fe39","type":"UnionRenderers"},{"attributes":{},"id":"e7ba93dd-fd8e-4b37-819c-942eb4902777","type":"BasicTickFormatter"},{"attributes":{},"id":"93af12ce-e5c7-4986-a9e6-8be229dfef03","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11b1cc42-9410-47ad-8379-ee5f7664484e","type":"PanTool"},{"id":"0dcb4fa1-24b3-4b96-b692-f3efa7b2ddb1","type":"WheelZoomTool"},{"id":"e9023fe4-9a4c-49a2-bcd9-09aff7cc36e2","type":"BoxZoomTool"},{"id":"8ee8e7e4-e61c-4eaa-9514-049b200223db","type":"SaveTool"},{"id":"a6b1d4ea-0fdb-487f-aea6-7b728cf9e455","type":"ResetTool"},{"id":"62bb2942-f150-4127-9746-a6a1c0e19424","type":"HelpTool"},{"id":"bdb22219-29c6-438a-8d20-310bf7935a26","type":"HoverTool"}]},"id":"058b436a-7b44-4e9a-8277-b915970f2b46","type":"Toolbar"},{"attributes":{},"id":"ee2f372d-6990-40ca-a8ce-be1e42cae25d","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"96639eb6-763d-4a6b-9ff0-495011ff303b","type":"BoxAnnotation"}},"id":"e9023fe4-9a4c-49a2-bcd9-09aff7cc36e2","type":"BoxZoomTool"},{"attributes":{},"id":"c78d3b43-2cdb-434a-b8ec-b95a773a3b37","type":"LinearScale"},{"attributes":{"callback":null},"id":"88e28016-8278-49e2-9b2c-dab7febdb138","type":"DataRange1d"},{"attributes":{},"id":"0a32eb98-465d-4a34-b1cc-0d4ae9f68ffb","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"fbdcbf74-99ac-4bb7-a4c5-420578acfc19","type":"Circle"},{"attributes":{"axis_label":"Production","axis_line_width":{"value":2},"formatter":{"id":"e7ba93dd-fd8e-4b37-819c-942eb4902777","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"515771d4-6287-435e-8270-aa5de5fa9b1b","subtype":"Figure","type":"Plot"},"ticker":{"id":"995a9317-b128-49c0-bd18-8b3120abf2bb","type":"BasicTicker"}},"id":"9dd6e106-739e-4069-87fc-2b681ca8b799","type":"LinearAxis"},{"attributes":{},"id":"995a9317-b128-49c0-bd18-8b3120abf2bb","type":"BasicTicker"},{"attributes":{"plot":{"id":"515771d4-6287-435e-8270-aa5de5fa9b1b","subtype":"Figure","type":"Plot"},"ticker":{"id":"995a9317-b128-49c0-bd18-8b3120abf2bb","type":"BasicTicker"}},"id":"86f3bb72-4445-4bba-b4a0-7e45d1754118","type":"Grid"},{"attributes":{},"id":"a3eab577-e4ab-4301-8ccb-08fe272599ba","type":"Selection"},{"attributes":{"axis_label":"Price","axis_line_width":{"value":2},"formatter":{"id":"fca39114-8206-4607-8209-0a7a83eb95fc","type":"BasicTickFormatter"},"plot":{"id":"515771d4-6287-435e-8270-aa5de5fa9b1b","subtype":"Figure","type":"Plot"},"ticker":{"id":"d73985ca-5c48-4b52-83dc-0882dc77dd53","type":"BasicTicker"}},"id":"9fc76e48-491c-4a8b-93bf-b75bd1e8023d","type":"LinearAxis"},{"attributes":{},"id":"d73985ca-5c48-4b52-83dc-0882dc77dd53","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"515771d4-6287-435e-8270-aa5de5fa9b1b","subtype":"Figure","type":"Plot"},"ticker":{"id":"d73985ca-5c48-4b52-83dc-0882dc77dd53","type":"BasicTicker"}},"id":"1215408d-0edd-4a85-be0e-c610a1cad99d","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96639eb6-763d-4a6b-9ff0-495011ff303b","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"production"},"y":{"field":"price"}},"id":"245ec28e-94cc-4d27-b8f7-d07aa0e1301a","type":"Circle"},{"attributes":{"data_source":{"id":"96fd23e1-d5c9-4f1a-9c13-04400895b2dd","type":"ColumnDataSource"},"glyph":{"id":"245ec28e-94cc-4d27-b8f7-d07aa0e1301a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fbdcbf74-99ac-4bb7-a4c5-420578acfc19","type":"Circle"},"selection_glyph":null,"view":{"id":"6048917c-1f4e-44c9-bc77-5caf94e21615","type":"CDSView"}},"id":"730eb587-f3e0-4053-b579-e0251f0e9868","type":"GlyphRenderer"},{"attributes":{},"id":"11b1cc42-9410-47ad-8379-ee5f7664484e","type":"PanTool"},{"attributes":{"callback":null,"data":{"price":{"__ndarray__":"TH6x5BfLF0Da8yIAJev3P6tcS42rvf0/4jPsChDoEUDXo3A9CvQOQK6WN0YwsQhAh6QpFWd/FkD7IGUoJHAYQEBsKg05FxdA3d3d3d19GkA=","dtype":"float64","shape":[10]},"production":{"__ndarray__":"AAAAwEHvXUEAAAAAX75OQQAAAIAtdUlBAAAAANzPTEEAAACApbtNQQAAAEBDBVNBAAAAgPt9V0EAAAAAZcNYQQAAAMBimVtBAAAAALMRXkE=","dtype":"float64","shape":[10]}},"selected":{"id":"93af12ce-e5c7-4986-a9e6-8be229dfef03","type":"Selection"},"selection_policy":{"id":"3315f527-eaac-4ba3-8913-5ff7df88fe39","type":"UnionRenderers"}},"id":"96fd23e1-d5c9-4f1a-9c13-04400895b2dd","type":"ColumnDataSource"},{"attributes":{},"id":"8ee8e7e4-e61c-4eaa-9514-049b200223db","type":"SaveTool"},{"attributes":{},"id":"0dcb4fa1-24b3-4b96-b692-f3efa7b2ddb1","type":"WheelZoomTool"},{"attributes":{"source":{"id":"96fd23e1-d5c9-4f1a-9c13-04400895b2dd","type":"ColumnDataSource"}},"id":"6048917c-1f4e-44c9-bc77-5caf94e21615","type":"CDSView"},{"attributes":{},"id":"a6b1d4ea-0fdb-487f-aea6-7b728cf9e455","type":"ResetTool"},{"attributes":{},"id":"62bb2942-f150-4127-9746-a6a1c0e19424","type":"HelpTool"},{"attributes":{"callback":null,"renderers":"auto","tooltips":[["Production","@production"],["Price","@price"]]},"id":"bdb22219-29c6-438a-8d20-310bf7935a26","type":"HoverTool"}],"root_ids":["515771d4-6287-435e-8270-aa5de5fa9b1b"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"fbffbcb7-a545-449e-b56f-a3c0f7eda24e","roots":{"515771d4-6287-435e-8270-aa5de5fa9b1b":"540a3c19-b63b-4d8f-8b9f-06dc5019c616"}}];
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