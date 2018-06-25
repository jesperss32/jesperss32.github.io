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
      };var element = document.getElementById("8263dcd0-8660-4af6-8806-d11d490d6ac6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8263dcd0-8660-4af6-8806-d11d490d6ac6' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-0.12.16.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.16.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.16.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-0.12.16.min.js"];
    
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
                    
                  var docs_json = '{"d32092eb-c4c9-4f3a-ac17-71a5a13a0a89":{"roots":{"references":[{"attributes":{},"id":"dc35ee20-63d7-437c-b064-9a22490fec4b","type":"BasicTickFormatter"},{"attributes":{},"id":"57eda543-d467-47ca-b247-70a83ecc6619","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"0582a8df-62c2-4cb3-842a-968807dffc5f","type":"Circle"},{"attributes":{},"id":"121e977b-596c-4ad4-9953-21c1f5ffc55f","type":"HelpTool"},{"attributes":{"grid_line_color":{"value":"Black"},"plot":{"id":"043cf5e7-ffa9-4c6b-8027-3f424aa110e4","subtype":"Figure","type":"Plot"},"ticker":{"id":"c010a6de-af94-4126-9e82-80e1823f0e68","type":"BasicTicker"}},"id":"589d8846-448e-4636-a474-b326c4a2a630","type":"Grid"},{"attributes":{},"id":"8338edf5-8f5f-42e9-9c2b-d38922da84be","type":"BasicTicker"},{"attributes":{},"id":"78ee1348-7092-4f72-ad7f-3adc067caedf","type":"BasicTickFormatter"},{"attributes":{},"id":"949897ae-afee-4dfc-85b1-c8ca5b5ae606","type":"Selection"},{"attributes":{"formatter":{"id":"78ee1348-7092-4f72-ad7f-3adc067caedf","type":"BasicTickFormatter"},"plot":{"id":"043cf5e7-ffa9-4c6b-8027-3f424aa110e4","subtype":"Figure","type":"Plot"},"ticker":{"id":"8338edf5-8f5f-42e9-9c2b-d38922da84be","type":"BasicTicker"}},"id":"19d1e4e2-76b2-4f79-b3a4-d02f431e890b","type":"LinearAxis"},{"attributes":{"overlay":{"id":"ec156371-f0e1-4647-9a02-c9d751a287fb","type":"BoxAnnotation"}},"id":"01a45da0-d8ae-4685-9f0b-3f2bbdec6c15","type":"BoxZoomTool"},{"attributes":{},"id":"f90096e3-0b5f-4ce3-8970-9d8c82b0489c","type":"PanTool"},{"attributes":{"callback":null},"id":"c0f8830a-c84f-48d2-bc36-6b952cc7e200","type":"DataRange1d"},{"attributes":{},"id":"f073c064-6b79-4f5c-82db-f9ce4ebfc310","type":"LinearScale"},{"attributes":{},"id":"8fa9135d-855f-49b6-9918-23a1e3010ac5","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"5af04030-ad35-43c1-a207-8407d31fbd4b","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"db030b1c-9afe-4d1d-842b-e7cacbaa1ee4","type":"PanTool"},{"id":"9830c7a7-2299-4eeb-8d9b-7d9e67be6ecb","type":"WheelZoomTool"},{"id":"01a45da0-d8ae-4685-9f0b-3f2bbdec6c15","type":"BoxZoomTool"},{"id":"18a55836-3056-41bc-843c-a497586a09ac","type":"SaveTool"},{"id":"4a148ce0-6c44-43d3-94c2-8d7d03f731d7","type":"ResetTool"},{"id":"3e1d9318-13a1-4efc-a7cf-101b829461f8","type":"HelpTool"}]},"id":"88dfd557-8011-4b79-a44f-3979ac73ecef","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8f720edc-7583-4498-98c5-893f280e5384","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"Relation between Maize price and Maize production"},"id":"b179ba67-572f-4df9-bf61-68a562edf4a3","type":"Title"},{"attributes":{"child":{"id":"8a4be10b-277b-4f90-b51c-59308c7f4ca5","subtype":"Figure","type":"Plot"},"title":"India/Wheat"},"id":"fd572b68-92b6-415a-b420-13b07042030f","type":"Panel"},{"attributes":{"source":{"id":"0a74baa8-8711-4436-840d-be0a37585a64","type":"ColumnDataSource"}},"id":"c8023966-eb37-49ff-9895-b9debf7dd804","type":"CDSView"},{"attributes":{"source":{"id":"87d75815-fbc0-4edd-b9b4-9e11043c8f02","type":"ColumnDataSource"}},"id":"345396c4-17fc-4983-b6a8-4a2b9e421735","type":"CDSView"},{"attributes":{},"id":"18a55836-3056-41bc-843c-a497586a09ac","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ec156371-f0e1-4647-9a02-c9d751a287fb","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"87d75815-fbc0-4edd-b9b4-9e11043c8f02","type":"ColumnDataSource"},"glyph":{"id":"0582a8df-62c2-4cb3-842a-968807dffc5f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"94097ebb-95e8-43ce-a627-dcbc401883cc","type":"Circle"},"selection_glyph":null,"view":{"id":"345396c4-17fc-4983-b6a8-4a2b9e421735","type":"CDSView"}},"id":"49823f4c-c2e0-40dc-a021-4c0e4c3ee591","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[2000.0,2000.0,3625.0,1167.0,8160.0,1592.0,3784.0,2325.0,2907.0,2216.0,3970.0,979.0,19085.0,19324.0,6409.0,1389.0,9756.0,6983.0,15844.0,17813.0,56597.0,35387.0,38022.0],"y":[74.0,96.42391304347827,119.15294117647059,160.50602409638554,171.37209302325581,121.61904761904762,125.16666666666667,182.05962025316455,203.449,141.97317073170734,145.59887499999996,205.08876543209885,170.58084337349396,148.79500000000004,216.17324175824172,228.1902815307821,208.83925608214867,217.08975636998258,247.1984275109172,247.49866682389901,222.4531024922116,204.9965379421221,218.4592720970537]},"selected":{"id":"949897ae-afee-4dfc-85b1-c8ca5b5ae606","type":"Selection"},"selection_policy":{"id":"57eda543-d467-47ca-b247-70a83ecc6619","type":"UnionRenderers"}},"id":"0a74baa8-8711-4436-840d-be0a37585a64","type":"ColumnDataSource"},{"attributes":{},"id":"c010a6de-af94-4126-9e82-80e1823f0e68","type":"BasicTicker"},{"attributes":{"callback":null},"id":"daf185ae-fa11-4a49-9947-72a92e4ca954","type":"DataRange1d"},{"attributes":{},"id":"1cd39bbc-44f4-440f-af41-5fdc97ba48da","type":"Selection"},{"attributes":{},"id":"db030b1c-9afe-4d1d-842b-e7cacbaa1ee4","type":"PanTool"},{"attributes":{"callback":null,"tabs":[{"id":"fd572b68-92b6-415a-b420-13b07042030f","type":"Panel"},{"id":"45eb99cf-9e54-4edc-9cd4-166e10e05c88","type":"Panel"},{"id":"14911894-22b3-4447-9d30-884884c2b74b","type":"Panel"}]},"id":"373d78a4-c6ef-4d38-83de-23c9a9fdd736","type":"Tabs"},{"attributes":{},"id":"cda303aa-cd8f-4801-b784-eef44d09047a","type":"Selection"},{"attributes":{},"id":"59b58432-f9cc-4f2e-958c-d691c98cc8ef","type":"ResetTool"},{"attributes":{"formatter":{"id":"8fa9135d-855f-49b6-9918-23a1e3010ac5","type":"BasicTickFormatter"},"plot":{"id":"043cf5e7-ffa9-4c6b-8027-3f424aa110e4","subtype":"Figure","type":"Plot"},"ticker":{"id":"c010a6de-af94-4126-9e82-80e1823f0e68","type":"BasicTicker"}},"id":"c48f728c-00d9-4d15-86c0-f33f6f4a8191","type":"LinearAxis"},{"attributes":{},"id":"4dc0028b-7aca-4257-b8b0-83216c18fa73","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"7e5b5f61-d102-4b77-8e42-992ad00429b9","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[304000.0,418000.0,271000.0,410000.0,503000.0,476000.0,371000.0,663609.0,669709.0,557000.0,559000.0,944000.0,929000.0,975000.0,1311144.0,738661.0,1301840.0,770322.0,1375697.0,1320250.0,1425982.0,1918330.0,1808263.0],"y":[73.0909090909091,78.75,107.91666666666667,151.72727272727272,170.25,100.25,119.08333333333333,162.86746987951807,177.99739130434781,122.49557894736846,134.5937362637363,209.34782608695653,151.15677083333344,138.43677083333333,186.0637413793104,190.24229707602348,195.37676804915517,174.56466780238497,238.44808749999996,243.6114228070175,220.40967971698086,186.73394931297705,197.94323873121868]},"selected":{"id":"1cd39bbc-44f4-440f-af41-5fdc97ba48da","type":"Selection"},"selection_policy":{"id":"7f6fd623-0982-4371-875f-0139f157fab8","type":"UnionRenderers"}},"id":"868500d5-76b0-4a9c-a61e-03f110f746f9","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"3c337cb4-ca5d-4105-b4d8-213b0cfd5681","type":"DataRange1d"},{"attributes":{"data_source":{"id":"868500d5-76b0-4a9c-a61e-03f110f746f9","type":"ColumnDataSource"},"glyph":{"id":"cdef0b49-97ef-49aa-bbfe-a2aa92dca9db","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dbedebde-eb03-43e7-b6fb-70da6ff2176d","type":"Circle"},"selection_glyph":null,"view":{"id":"3e24abd4-7e7f-4640-9b05-9f8cb3b98b65","type":"CDSView"}},"id":"37c0e5c2-2e2a-4918-9570-eca7a5ed1c76","type":"GlyphRenderer"},{"attributes":{"background_fill_color":{"value":"#eeeeee"},"below":[{"id":"ec85ff63-c5a6-491e-a0df-0cdf96677f6b","type":"LinearAxis"}],"left":[{"id":"0bb69a3b-c7dc-47d3-b7bb-e67cd39eeb50","type":"LinearAxis"}],"renderers":[{"id":"ec85ff63-c5a6-491e-a0df-0cdf96677f6b","type":"LinearAxis"},{"id":"07c34106-8447-4b8c-9b84-2c4e8d8a187c","type":"Grid"},{"id":"0bb69a3b-c7dc-47d3-b7bb-e67cd39eeb50","type":"LinearAxis"},{"id":"77429eba-6e0e-471b-80fe-d71b4da5616f","type":"Grid"},{"id":"8f720edc-7583-4498-98c5-893f280e5384","type":"BoxAnnotation"},{"id":"37c0e5c2-2e2a-4918-9570-eca7a5ed1c76","type":"GlyphRenderer"}],"title":{"id":"41ffc3db-0b87-4b77-b067-23abd7ab9edf","type":"Title"},"toolbar":{"id":"7baaf509-7c04-4669-a75d-34eb71d7eab9","type":"Toolbar"},"x_range":{"id":"daf185ae-fa11-4a49-9947-72a92e4ca954","type":"DataRange1d"},"x_scale":{"id":"a7c7aecc-43d6-4dda-82c4-5c92811a7de9","type":"LinearScale"},"y_range":{"id":"5af04030-ad35-43c1-a207-8407d31fbd4b","type":"DataRange1d"},"y_scale":{"id":"f073c064-6b79-4f5c-82db-f9ce4ebfc310","type":"LinearScale"}},"id":"0525a889-17b9-40a9-a78b-70ed5618980f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3e1d9318-13a1-4efc-a7cf-101b829461f8","type":"HelpTool"},{"attributes":{},"id":"b958da77-e52a-4a19-9e65-c4b96521d067","type":"BasicTickFormatter"},{"attributes":{},"id":"e106dc12-2659-499d-a05c-5b39d2d91b8f","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"dbedebde-eb03-43e7-b6fb-70da6ff2176d","type":"Circle"},{"attributes":{"plot":null,"text":"Relation between Sorghum price and Sorghum production"},"id":"41ffc3db-0b87-4b77-b067-23abd7ab9edf","type":"Title"},{"attributes":{},"id":"4a148ce0-6c44-43d3-94c2-8d7d03f731d7","type":"ResetTool"},{"attributes":{},"id":"00e4c14f-e847-461b-9d45-018bbb97567e","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f90096e3-0b5f-4ce3-8970-9d8c82b0489c","type":"PanTool"},{"id":"07f7f76b-1c43-40e5-b578-f2fa8dfd4765","type":"WheelZoomTool"},{"id":"5fc55202-226b-4370-9831-832d6ee63dec","type":"BoxZoomTool"},{"id":"119c5c34-48a1-4e98-baa3-ed260d6fcb9b","type":"SaveTool"},{"id":"59b58432-f9cc-4f2e-958c-d691c98cc8ef","type":"ResetTool"},{"id":"121e977b-596c-4ad4-9953-21c1f5ffc55f","type":"HelpTool"}]},"id":"7baaf509-7c04-4669-a75d-34eb71d7eab9","type":"Toolbar"},{"attributes":{},"id":"f4192b65-4a1c-4910-b680-6a8ba4a05ee8","type":"HelpTool"},{"attributes":{},"id":"678b5a96-b4bc-4ba2-82ae-bec4186378c1","type":"ResetTool"},{"attributes":{},"id":"4427ca50-c4e9-468e-9c83-fe23ddf13378","type":"SaveTool"},{"attributes":{"background_fill_color":{"value":"#eeeeee"},"below":[{"id":"42e59b02-75af-47aa-ba23-21723ac04b60","type":"LinearAxis"}],"left":[{"id":"bd7d8881-35be-4dd2-aebc-3ff02c5ad79b","type":"LinearAxis"}],"renderers":[{"id":"42e59b02-75af-47aa-ba23-21723ac04b60","type":"LinearAxis"},{"id":"3d8442a3-c32e-41fc-84e8-c4e0908a6044","type":"Grid"},{"id":"bd7d8881-35be-4dd2-aebc-3ff02c5ad79b","type":"LinearAxis"},{"id":"4fa10dc6-234b-4acb-bd68-724ded249a26","type":"Grid"},{"id":"15fa33d4-bcfc-4ad6-840f-b1353e09b9fa","type":"BoxAnnotation"},{"id":"49823f4c-c2e0-40dc-a021-4c0e4c3ee591","type":"GlyphRenderer"}],"title":{"id":"1a4fd37a-4fa9-4fbe-9910-1f6c95dd76f2","type":"Title"},"toolbar":{"id":"ba1a6672-80a0-4f12-9cdb-ac5c6ff80263","type":"Toolbar"},"x_range":{"id":"7e5b5f61-d102-4b77-8e42-992ad00429b9","type":"DataRange1d"},"x_scale":{"id":"1229876a-7968-45b8-9fb4-3e61e3f488a8","type":"LinearScale"},"y_range":{"id":"994f0c24-4253-4752-a6e9-372539f13f5f","type":"DataRange1d"},"y_scale":{"id":"a58f5955-591d-497b-881e-1d827041a194","type":"LinearScale"}},"id":"8a4be10b-277b-4f90-b51c-59308c7f4ca5","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"15fa33d4-bcfc-4ad6-840f-b1353e09b9fa","type":"BoxAnnotation"}},"id":"4f5b7fe4-d4e1-414b-bf3d-f482b154f082","type":"BoxZoomTool"},{"attributes":{},"id":"07f7f76b-1c43-40e5-b578-f2fa8dfd4765","type":"WheelZoomTool"},{"attributes":{},"id":"50b31ea6-9232-4096-bb6c-bfc858f8ec28","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"cdef0b49-97ef-49aa-bbfe-a2aa92dca9db","type":"Circle"},{"attributes":{},"id":"9830c7a7-2299-4eeb-8d9b-7d9e67be6ecb","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"8f720edc-7583-4498-98c5-893f280e5384","type":"BoxAnnotation"}},"id":"5fc55202-226b-4370-9831-832d6ee63dec","type":"BoxZoomTool"},{"attributes":{},"id":"f3af2c8b-e9af-4404-8d2e-0fec46248a58","type":"PanTool"},{"attributes":{},"id":"cde1f8ad-2487-475c-93f8-c0829adc5871","type":"LinearScale"},{"attributes":{"background_fill_color":{"value":"#eeeeee"},"below":[{"id":"c48f728c-00d9-4d15-86c0-f33f6f4a8191","type":"LinearAxis"}],"left":[{"id":"19d1e4e2-76b2-4f79-b3a4-d02f431e890b","type":"LinearAxis"}],"renderers":[{"id":"c48f728c-00d9-4d15-86c0-f33f6f4a8191","type":"LinearAxis"},{"id":"589d8846-448e-4636-a474-b326c4a2a630","type":"Grid"},{"id":"19d1e4e2-76b2-4f79-b3a4-d02f431e890b","type":"LinearAxis"},{"id":"81b115d5-83fd-4a1a-92b3-e6e0dcd912b6","type":"Grid"},{"id":"ec156371-f0e1-4647-9a02-c9d751a287fb","type":"BoxAnnotation"},{"id":"ff030f55-8333-42c1-b073-657e3025ce20","type":"GlyphRenderer"}],"title":{"id":"b179ba67-572f-4df9-bf61-68a562edf4a3","type":"Title"},"toolbar":{"id":"88dfd557-8011-4b79-a44f-3979ac73ecef","type":"Toolbar"},"x_range":{"id":"3c337cb4-ca5d-4105-b4d8-213b0cfd5681","type":"DataRange1d"},"x_scale":{"id":"00e4c14f-e847-461b-9d45-018bbb97567e","type":"LinearScale"},"y_range":{"id":"c0f8830a-c84f-48d2-bc36-6b952cc7e200","type":"DataRange1d"},"y_scale":{"id":"cde1f8ad-2487-475c-93f8-c0829adc5871","type":"LinearScale"}},"id":"043cf5e7-ffa9-4c6b-8027-3f424aa110e4","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"grid_line_color":{"value":"Black"},"plot":{"id":"0525a889-17b9-40a9-a78b-70ed5618980f","subtype":"Figure","type":"Plot"},"ticker":{"id":"f3626c07-12ef-40c2-b203-d3d68f11bf5d","type":"BasicTicker"}},"id":"77429eba-6e0e-471b-80fe-d71b4da5616f","type":"Grid"},{"attributes":{"source":{"id":"868500d5-76b0-4a9c-a61e-03f110f746f9","type":"ColumnDataSource"}},"id":"3e24abd4-7e7f-4640-9b05-9f8cb3b98b65","type":"CDSView"},{"attributes":{},"id":"e7c0ca13-d2d7-44b5-90bb-3ef31c3e8634","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"94097ebb-95e8-43ce-a627-dcbc401883cc","type":"Circle"},{"attributes":{},"id":"7f6fd623-0982-4371-875f-0139f157fab8","type":"UnionRenderers"},{"attributes":{"child":{"id":"0525a889-17b9-40a9-a78b-70ed5618980f","subtype":"Figure","type":"Plot"},"title":"Niger/Sorghum"},"id":"14911894-22b3-4447-9d30-884884c2b74b","type":"Panel"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"15fa33d4-bcfc-4ad6-840f-b1353e09b9fa","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f3af2c8b-e9af-4404-8d2e-0fec46248a58","type":"PanTool"},{"id":"50b31ea6-9232-4096-bb6c-bfc858f8ec28","type":"WheelZoomTool"},{"id":"4f5b7fe4-d4e1-414b-bf3d-f482b154f082","type":"BoxZoomTool"},{"id":"4427ca50-c4e9-468e-9c83-fe23ddf13378","type":"SaveTool"},{"id":"678b5a96-b4bc-4ba2-82ae-bec4186378c1","type":"ResetTool"},{"id":"f4192b65-4a1c-4910-b680-6a8ba4a05ee8","type":"HelpTool"}]},"id":"ba1a6672-80a0-4f12-9cdb-ac5c6ff80263","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"8d827de0-1f82-4f3e-8312-5596dbcb1796","type":"Circle"},{"attributes":{"dimension":1,"grid_line_color":{"value":"Black"},"plot":{"id":"8a4be10b-277b-4f90-b51c-59308c7f4ca5","subtype":"Figure","type":"Plot"},"ticker":{"id":"9e97737c-92a5-4182-9e16-914cc27b97d5","type":"BasicTicker"}},"id":"4fa10dc6-234b-4acb-bd68-724ded249a26","type":"Grid"},{"attributes":{"formatter":{"id":"dc35ee20-63d7-437c-b064-9a22490fec4b","type":"BasicTickFormatter"},"plot":{"id":"0525a889-17b9-40a9-a78b-70ed5618980f","subtype":"Figure","type":"Plot"},"ticker":{"id":"e106dc12-2659-499d-a05c-5b39d2d91b8f","type":"BasicTicker"}},"id":"ec85ff63-c5a6-491e-a0df-0cdf96677f6b","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"e5b31027-537a-46d4-9fd5-bd7115aa22d3","type":"Circle"},{"attributes":{"formatter":{"id":"4dc0028b-7aca-4257-b8b0-83216c18fa73","type":"BasicTickFormatter"},"plot":{"id":"8a4be10b-277b-4f90-b51c-59308c7f4ca5","subtype":"Figure","type":"Plot"},"ticker":{"id":"9e97737c-92a5-4182-9e16-914cc27b97d5","type":"BasicTicker"}},"id":"bd7d8881-35be-4dd2-aebc-3ff02c5ad79b","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Relation between Wheat price and Wheat production"},"id":"1a4fd37a-4fa9-4fbe-9910-1f6c95dd76f2","type":"Title"},{"attributes":{"grid_line_color":{"value":"Black"},"plot":{"id":"0525a889-17b9-40a9-a78b-70ed5618980f","subtype":"Figure","type":"Plot"},"ticker":{"id":"e106dc12-2659-499d-a05c-5b39d2d91b8f","type":"BasicTicker"}},"id":"07c34106-8447-4b8c-9b84-2c4e8d8a187c","type":"Grid"},{"attributes":{},"id":"72be8b2f-e5f7-46c7-99ea-cf7f1ec333be","type":"BasicTicker"},{"attributes":{"dimension":1,"grid_line_color":{"value":"Black"},"plot":{"id":"043cf5e7-ffa9-4c6b-8027-3f424aa110e4","subtype":"Figure","type":"Plot"},"ticker":{"id":"8338edf5-8f5f-42e9-9c2b-d38922da84be","type":"BasicTicker"}},"id":"81b115d5-83fd-4a1a-92b3-e6e0dcd912b6","type":"Grid"},{"attributes":{"formatter":{"id":"e7c0ca13-d2d7-44b5-90bb-3ef31c3e8634","type":"BasicTickFormatter"},"plot":{"id":"8a4be10b-277b-4f90-b51c-59308c7f4ca5","subtype":"Figure","type":"Plot"},"ticker":{"id":"72be8b2f-e5f7-46c7-99ea-cf7f1ec333be","type":"BasicTicker"}},"id":"42e59b02-75af-47aa-ba23-21723ac04b60","type":"LinearAxis"},{"attributes":{"formatter":{"id":"b958da77-e52a-4a19-9e65-c4b96521d067","type":"BasicTickFormatter"},"plot":{"id":"0525a889-17b9-40a9-a78b-70ed5618980f","subtype":"Figure","type":"Plot"},"ticker":{"id":"f3626c07-12ef-40c2-b203-d3d68f11bf5d","type":"BasicTicker"}},"id":"0bb69a3b-c7dc-47d3-b7bb-e67cd39eeb50","type":"LinearAxis"},{"attributes":{},"id":"9e97737c-92a5-4182-9e16-914cc27b97d5","type":"BasicTicker"},{"attributes":{},"id":"a7c7aecc-43d6-4dda-82c4-5c92811a7de9","type":"LinearScale"},{"attributes":{"grid_line_color":{"value":"Black"},"plot":{"id":"8a4be10b-277b-4f90-b51c-59308c7f4ca5","subtype":"Figure","type":"Plot"},"ticker":{"id":"72be8b2f-e5f7-46c7-99ea-cf7f1ec333be","type":"BasicTicker"}},"id":"3d8442a3-c32e-41fc-84e8-c4e0908a6044","type":"Grid"},{"attributes":{},"id":"a58f5955-591d-497b-881e-1d827041a194","type":"LinearScale"},{"attributes":{},"id":"8c592c24-e144-4d64-b139-4537b66aef5b","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"994f0c24-4253-4752-a6e9-372539f13f5f","type":"DataRange1d"},{"attributes":{},"id":"119c5c34-48a1-4e98-baa3-ed260d6fcb9b","type":"SaveTool"},{"attributes":{},"id":"1229876a-7968-45b8-9fb4-3e61e3f488a8","type":"LinearScale"},{"attributes":{"child":{"id":"043cf5e7-ffa9-4c6b-8027-3f424aa110e4","subtype":"Figure","type":"Plot"},"title":"Niger/Maize"},"id":"45eb99cf-9e54-4edc-9cd4-166e10e05c88","type":"Panel"},{"attributes":{},"id":"f3626c07-12ef-40c2-b203-d3d68f11bf5d","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[59840000.0,65767400.0,62097400.0,69350200.0,66345000.0,71287504.0,76368896.0,69680896.0,72766304.0,65760800.0,72156200.0,68636896.0,69354496.0,75806704.0,78570200.0,80679400.0,80803600.0,86874000.0,94880000.0,93510000.0,95850000.0,86530000.0,93500000.0],"y":[6.0210526315789465,5.789534883720931,7.39642857142857,8.337974683544305,8.320890410958903,8.404910714285714,8.460245901639345,8.391509433962264,8.761073825503356,9.281132075471698,9.73301282051282,9.88961038961039,12.279513888888888,13.220666666666666,13.80731543624161,15.00860927152318,16.56496855345912,16.421999999999997,17.449818913480883,20.519186991869923,21.525764705882352,21.80629441624366,23.045540765391014]},"selected":{"id":"cda303aa-cd8f-4801-b784-eef44d09047a","type":"Selection"},"selection_policy":{"id":"8c592c24-e144-4d64-b139-4537b66aef5b","type":"UnionRenderers"}},"id":"87d75815-fbc0-4edd-b9b4-9e11043c8f02","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"0a74baa8-8711-4436-840d-be0a37585a64","type":"ColumnDataSource"},"glyph":{"id":"8d827de0-1f82-4f3e-8312-5596dbcb1796","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e5b31027-537a-46d4-9fd5-bd7115aa22d3","type":"Circle"},"selection_glyph":null,"view":{"id":"c8023966-eb37-49ff-9895-b9debf7dd804","type":"CDSView"}},"id":"ff030f55-8333-42c1-b073-657e3025ce20","type":"GlyphRenderer"}],"root_ids":["373d78a4-c6ef-4d38-83de-23c9a9fdd736"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"d32092eb-c4c9-4f3a-ac17-71a5a13a0a89","elementid":"8263dcd0-8660-4af6-8806-d11d490d6ac6","modelid":"373d78a4-c6ef-4d38-83de-23c9a9fdd736"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.16.min.css");
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