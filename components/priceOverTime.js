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
      };var element = document.getElementById("daf97279-bc2e-4c63-80d3-9349bf710105");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'daf97279-bc2e-4c63-80d3-9349bf710105' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1c326a6e-3295-4e8e-a6bc-029bb4e0d349":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d10e4556-6ef0-414b-9203-380aa4da57f2","type":"BoxAnnotation"},{"attributes":{},"id":"612b32b6-c079-468b-a791-593c25032dc2","type":"PanTool"},{"attributes":{},"id":"45a5720c-4243-40c6-be99-4f532ff95f8f","type":"UnionRenderers"},{"attributes":{},"id":"6015e3f1-8cda-44ba-ac76-1f895d709674","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"d10e4556-6ef0-414b-9203-380aa4da57f2","type":"BoxAnnotation"}},"id":"1f5537c9-1742-41c7-b1f5-834875ea09d8","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"a4d6efc6-c876-48bd-bce3-369b1cc4f4f9","type":"DataRange1d"},{"attributes":{},"id":"d2e46a01-ff92-42d2-a60f-7b9330a99014","type":"SaveTool"},{"attributes":{},"id":"08125336-752b-4cce-a3f2-64fbdd862d45","type":"Selection"},{"attributes":{},"id":"057361bb-66bb-4afb-8629-42709a14ede0","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"612b32b6-c079-468b-a791-593c25032dc2","type":"PanTool"},{"id":"6015e3f1-8cda-44ba-ac76-1f895d709674","type":"WheelZoomTool"},{"id":"1f5537c9-1742-41c7-b1f5-834875ea09d8","type":"BoxZoomTool"},{"id":"d2e46a01-ff92-42d2-a60f-7b9330a99014","type":"SaveTool"},{"id":"057361bb-66bb-4afb-8629-42709a14ede0","type":"ResetTool"},{"id":"34b3e996-af5a-45f6-a155-e276ae12d320","type":"HelpTool"}]},"id":"7741a940-2a43-4332-83c0-c81623a52012","type":"Toolbar"},{"attributes":{},"id":"34b3e996-af5a-45f6-a155-e276ae12d320","type":"HelpTool"},{"attributes":{},"id":"f7399902-4248-4288-a703-b0afb5a3f173","type":"LinearScale"},{"attributes":{},"id":"66a0248d-4c3e-47e0-b797-3d67d7cb66e7","type":"YearsTicker"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"34f03125-acff-4436-ab24-140c380d41eb","type":"AdaptiveTicker"},{"attributes":{"months":[0,6]},"id":"cac2e2b7-d66d-4dc5-b13f-1f17a960da31","type":"MonthsTicker"},{"attributes":{"months":[0,4,8]},"id":"a50fdab9-c205-48ec-86cd-55278611a0ea","type":"MonthsTicker"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"724a5be8-c9a7-43ba-8b21-6713ee3a3db1","type":"MonthsTicker"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"0213918f-0d44-4955-a0e8-5a667c7dd664","type":"MonthsTicker"},{"attributes":{"dimension":1,"grid_line_color":{"value":"Grey"},"plot":{"id":"653daab4-ae07-4627-bb7b-d5bb25b164cb","subtype":"Figure","type":"Plot"},"ticker":{"id":"8319c482-caf9-4582-9809-31455e739547","type":"BasicTicker"}},"id":"2419a0f3-50f8-4b19-9f6d-2100b60eebeb","type":"Grid"},{"attributes":{"days":[1,15]},"id":"6b04d5f6-93da-4dae-843a-fec44cdd85e6","type":"DaysTicker"},{"attributes":{},"id":"41a2e6ce-b279-4a7e-bb57-8ba18b0d80f0","type":"LinearScale"},{"attributes":{"days":[1,8,15,22]},"id":"ed59d645-8f88-4a82-8549-b8d562a80dcc","type":"DaysTicker"},{"attributes":{},"id":"8319c482-caf9-4582-9809-31455e739547","type":"BasicTicker"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"3971e6d3-c74f-4ea2-8208-f19a392d81b1","type":"DaysTicker"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"fa50d7c0-b2fc-4cf7-b423-753b1e626202","type":"DaysTicker"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"01002e44-45bc-402b-b3d9-5b8c705fcee9","type":"AdaptiveTicker"},{"attributes":{"background_fill_color":{"value":"#eeeeee"},"below":[{"id":"ea61d8c6-643a-4d07-9d10-b96a0eca1b46","type":"DatetimeAxis"}],"left":[{"id":"42caf0b2-0341-4d31-872f-2effffcd217a","type":"LinearAxis"}],"renderers":[{"id":"ea61d8c6-643a-4d07-9d10-b96a0eca1b46","type":"DatetimeAxis"},{"id":"d89a72d5-f61a-4b8a-86e9-198e0444d48d","type":"Grid"},{"id":"42caf0b2-0341-4d31-872f-2effffcd217a","type":"LinearAxis"},{"id":"2419a0f3-50f8-4b19-9f6d-2100b60eebeb","type":"Grid"},{"id":"d10e4556-6ef0-414b-9203-380aa4da57f2","type":"BoxAnnotation"},{"id":"fe6d3ec6-213d-419f-bcf1-a3d3c678c518","type":"GlyphRenderer"}],"title":{"id":"d50b1ed3-a21f-46a5-8b3f-1d2b0b256d66","type":"Title"},"toolbar":{"id":"7741a940-2a43-4332-83c0-c81623a52012","type":"Toolbar"},"x_range":{"id":"a4d6efc6-c876-48bd-bce3-369b1cc4f4f9","type":"DataRange1d"},"x_scale":{"id":"41a2e6ce-b279-4a7e-bb57-8ba18b0d80f0","type":"LinearScale"},"y_range":{"id":"a3729368-91a1-490c-b861-7ad3ab450f9f","type":"DataRange1d"},"y_scale":{"id":"f7399902-4248-4288-a703-b0afb5a3f173","type":"LinearScale"}},"id":"653daab4-ae07-4627-bb7b-d5bb25b164cb","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[757382400000.0,760060800000.0,762480000000.0,765158400000.0,767750400000.0,770428800000.0,773020800000.0,775699200000.0,778377600000.0,780969600000.0,783648000000.0,786240000000.0,788918400000.0,791596800000.0,794016000000.0,796694400000.0,799286400000.0,801964800000.0,804556800000.0,807235200000.0,809913600000.0,812505600000.0,815184000000.0,817776000000.0,820454400000.0,823132800000.0,825638400000.0,828316800000.0,830908800000.0,833587200000.0,836179200000.0,838857600000.0,841536000000.0,844128000000.0,846806400000.0,849398400000.0,852076800000.0,854755200000.0,857174400000.0,859852800000.0,862444800000.0,865123200000.0,867715200000.0,870393600000.0,873072000000.0,875664000000.0,878342400000.0,880934400000.0,883612800000.0,886291200000.0,888710400000.0,891388800000.0,893980800000.0,896659200000.0,899251200000.0,901929600000.0,904608000000.0,907200000000.0,909878400000.0,912470400000.0,915148800000.0,917827200000.0,920246400000.0,922924800000.0,925516800000.0,928195200000.0,930787200000.0,933465600000.0,936144000000.0,938736000000.0,941414400000.0,944006400000.0,946684800000.0,949363200000.0,951868800000.0,954547200000.0,957139200000.0,959817600000.0,962409600000.0,965088000000.0,967766400000.0,970358400000.0,973036800000.0,975628800000.0,1009843200000.0,1012521600000.0,1014940800000.0,1017619200000.0,1020211200000.0,1022889600000.0,1025481600000.0,1028160000000.0,1030838400000.0,1033430400000.0,1036108800000.0,1038700800000.0,1041379200000.0,1044057600000.0,1046476800000.0,1049155200000.0,1051747200000.0,1054425600000.0,1057017600000.0,1059696000000.0,1062374400000.0,1064966400000.0,1067644800000.0,1070236800000.0,1072915200000.0,1075593600000.0,1078099200000.0,1080777600000.0,1083369600000.0,1086048000000.0,1088640000000.0,1091318400000.0,1093996800000.0,1096588800000.0,1099267200000.0,1101859200000.0,1104537600000.0,1107216000000.0,1109635200000.0,1112313600000.0,1114905600000.0,1117584000000.0,1120176000000.0,1122854400000.0,1125532800000.0,1128124800000.0,1130803200000.0,1133395200000.0,1136073600000.0,1138752000000.0,1141171200000.0,1143849600000.0,1146441600000.0,1149120000000.0,1151712000000.0,1154390400000.0,1157068800000.0,1159660800000.0,1162339200000.0,1164931200000.0,1167609600000.0,1170288000000.0,1172707200000.0,1175385600000.0,1177977600000.0,1180656000000.0,1183248000000.0,1185926400000.0,1188604800000.0,1191196800000.0,1193875200000.0,1196467200000.0,1199145600000.0,1201824000000.0,1204329600000.0,1207008000000.0,1209600000000.0,1212278400000.0,1214870400000.0,1217548800000.0,1220227200000.0,1222819200000.0,1225497600000.0,1228089600000.0,1230768000000.0,1233446400000.0,1235865600000.0,1238544000000.0,1241136000000.0,1243814400000.0,1246406400000.0,1249084800000.0,1251763200000.0,1254355200000.0,1257033600000.0,1259625600000.0,1262304000000.0,1264982400000.0,1267401600000.0,1270080000000.0,1272672000000.0,1275350400000.0,1277942400000.0,1280620800000.0,1283299200000.0,1285891200000.0,1288569600000.0,1291161600000.0,1293840000000.0,1296518400000.0,1298937600000.0,1301616000000.0,1304208000000.0,1306886400000.0,1309478400000.0,1312156800000.0,1314835200000.0,1317427200000.0,1320105600000.0,1322697600000.0,1325376000000.0,1328054400000.0,1330560000000.0,1333238400000.0,1335830400000.0,1338508800000.0,1341100800000.0,1343779200000.0,1346457600000.0,1349049600000.0,1351728000000.0,1354320000000.0,1356998400000.0,1359676800000.0,1362096000000.0,1364774400000.0,1367366400000.0,1370044800000.0,1372636800000.0,1375315200000.0,1377993600000.0,1380585600000.0,1383264000000.0,1385856000000.0,1388534400000.0,1391212800000.0,1393632000000.0,1396310400000.0,1398902400000.0,1401580800000.0,1404172800000.0,1406851200000.0,1409529600000.0,1412121600000.0,1414800000000.0,1417392000000.0,1420070400000.0,1422748800000.0,1425168000000.0,1427846400000.0,1430438400000.0,1433116800000.0,1435708800000.0,1438387200000.0,1441065600000.0,1443657600000.0,1446336000000.0,1448928000000.0,1451606400000.0,1454284800000.0,1456790400000.0,1459468800000.0,1462060800000.0,1464739200000.0,1467331200000.0,1470009600000.0,1472688000000.0,1475280000000.0,1477958400000.0,1480550400000.0],"y":[6.25,6.25,6.0,5.925,5.875,5.825,5.5,5.9,5.8125,5.75,5.9,6.0,5.916666666666667,5.833333333333333,5.708333333333333,5.933333333333334,5.675,5.5,5.633333333333333,6.016666666666667,6.041666666666667,6.3,6.266666666666667,6.291666666666667,6.741666666666667,6.779166666666666,6.795833333333333,6.7875000000000005,6.525000000000001,7.145833333333333,7.095833333333334,7.320833333333333,7.945833333333333,8.083333333333334,8.679166666666667,9.270833333333334,9.625,9.275,8.6875,8.429166666666667,8.145833333333334,8.383333333333333,8.083333333333334,8.170833333333333,8.137500000000001,7.9375,7.95,8.3375,8.39,8.075,8.015,7.7,7.725,7.775,8.069999999999999,8.075,8.09,8.129999999999999,8.2,8.440000000000001,8.6875,8.9625,8.375,8.11875,7.7625,8.11875,8.35,8.63125,8.75625,8.925,8.95,9.1,9.2875,9.1625,8.91875,8.6875,8.575,8.575,8.5375,8.475,8.35,8.28125,8.6,8.7875,8.772727272727273,8.840909090909092,8.840909090909092,8.954545454545455,8.772727272727273,8.772727272727273,8.909090909090908,8.977272727272727,9.022727272727273,9.022727272727273,9.136363636363637,9.090909090909092,8.979166666666666,9.125,9.041666666666666,9.0,8.8125,8.958333333333334,8.895833333333334,8.916666666666666,9.041666666666666,9.208333333333334,9.25,9.520833333333334,10.211538461538462,10.307692307692308,10.134615384615385,9.673076923076923,9.307692307692308,9.26923076923077,9.423076923076923,9.576923076923077,9.792307692307691,9.638461538461538,9.73076923076923,9.73076923076923,10.0625,9.895833333333334,9.604166666666666,9.458333333333334,9.516666666666667,9.729166666666666,9.75,9.604166666666666,9.6875,9.9,10.458333333333334,10.875,11.508333333333333,11.666666666666666,11.583333333333334,11.458333333333334,11.625,11.966666666666667,11.9,12.416666666666666,12.791666666666666,13.020833333333334,13.645833333333334,13.770833333333334,13.833333333333334,13.895833333333334,13.25,13.083333333333334,12.666666666666666,12.625,13.125,13.133333333333333,13.166666666666666,13.1875,13.479166666666666,13.479166666666666,13.458333333333334,13.520833333333334,14.0,13.691666666666668,13.5,13.6875,13.854166666666666,13.9475,13.905833333333334,13.75,13.75,13.875,14.25,14.233333333333334,14.416666666666666,14.333333333333334,14.375,14.375,15.0,15.166666666666666,15.166666666666666,15.25,16.791666666666668,17.25,18.181818181818183,16.55909090909091,17.454545454545453,15.845454545454546,16.227272727272727,16.40909090909091,16.445454545454545,16.772727272727273,17.09090909090909,17.30272727272727,17.40909090909091,18.227272727272727,17.329411764705885,17.37705882352941,16.848382352941176,16.714117647058828,16.537647058823527,16.400882352941178,16.263529411764708,16.374411764705883,16.352647058823532,16.452352941176468,16.464411764705886,16.504705882352944,16.654838709677417,16.606129032258064,16.79064516129032,16.44645161290323,16.64516129032258,16.63032258064516,16.815806451612904,17.629354838709677,18.455806451612904,19.148709677419355,19.27645161290322,19.72645161290323,19.79897435897436,20.17410256410256,20.350256410256414,20.079743589743586,19.848205128205127,20.13230769230769,20.43128205128205,20.590512820512824,20.71948717948718,20.7751282051282,20.797948717948717,21.162307692307692,21.6102380952381,21.654999999999998,21.613333333333333,21.25190476190476,21.095476190476187,21.00642857142857,21.22904761904762,21.441428571428574,21.480476190476192,21.551190476190477,21.695714285714285,21.550238095238097,21.838125,22.009375000000002,21.919583333333335,21.7,21.661249999999995,21.665625000000002,21.624166666666667,21.69479166666667,21.853333333333335,22.044583333333335,22.281458333333333,22.346875,22.459183673469386,22.702857142857145,22.62265306122449,22.445918367346938,22.66469387755102,22.912040816326538,23.120816326530615,23.12428571428572,23.34306122448979,23.499591836734695,24.136122448979588,24.833469387755105]},"selected":{"id":"08125336-752b-4cce-a3f2-64fbdd862d45","type":"Selection"},"selection_policy":{"id":"45a5720c-4243-40c6-be99-4f532ff95f8f","type":"UnionRenderers"}},"id":"ec913ae6-d7fe-4b05-8f88-76d60dcc2dea","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Wheat price in India"},"id":"d50b1ed3-a21f-46a5-8b3f-1d2b0b256d66","type":"Title"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"3cea890b-8afd-40d4-b4de-c98d8438671a","type":"AdaptiveTicker"},{"attributes":{"formatter":{"id":"939dd3ab-8109-434d-aa38-2bc4a7133e5d","type":"DatetimeTickFormatter"},"plot":{"id":"653daab4-ae07-4627-bb7b-d5bb25b164cb","subtype":"Figure","type":"Plot"},"ticker":{"id":"8d237295-816e-4e30-b678-72fcef22c862","type":"DatetimeTicker"}},"id":"ea61d8c6-643a-4d07-9d10-b96a0eca1b46","type":"DatetimeAxis"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"34f03125-acff-4436-ab24-140c380d41eb","type":"AdaptiveTicker"},{"id":"3cea890b-8afd-40d4-b4de-c98d8438671a","type":"AdaptiveTicker"},{"id":"01002e44-45bc-402b-b3d9-5b8c705fcee9","type":"AdaptiveTicker"},{"id":"fa50d7c0-b2fc-4cf7-b423-753b1e626202","type":"DaysTicker"},{"id":"3971e6d3-c74f-4ea2-8208-f19a392d81b1","type":"DaysTicker"},{"id":"ed59d645-8f88-4a82-8549-b8d562a80dcc","type":"DaysTicker"},{"id":"6b04d5f6-93da-4dae-843a-fec44cdd85e6","type":"DaysTicker"},{"id":"0213918f-0d44-4955-a0e8-5a667c7dd664","type":"MonthsTicker"},{"id":"724a5be8-c9a7-43ba-8b21-6713ee3a3db1","type":"MonthsTicker"},{"id":"a50fdab9-c205-48ec-86cd-55278611a0ea","type":"MonthsTicker"},{"id":"cac2e2b7-d66d-4dc5-b13f-1f17a960da31","type":"MonthsTicker"},{"id":"66a0248d-4c3e-47e0-b797-3d67d7cb66e7","type":"YearsTicker"}]},"id":"8d237295-816e-4e30-b678-72fcef22c862","type":"DatetimeTicker"},{"attributes":{"grid_line_color":{"value":"Grey"},"plot":{"id":"653daab4-ae07-4627-bb7b-d5bb25b164cb","subtype":"Figure","type":"Plot"},"ticker":{"id":"8d237295-816e-4e30-b678-72fcef22c862","type":"DatetimeTicker"}},"id":"d89a72d5-f61a-4b8a-86e9-198e0444d48d","type":"Grid"},{"attributes":{"formatter":{"id":"50be47e5-146e-4a24-bd89-fcbf93594589","type":"BasicTickFormatter"},"plot":{"id":"653daab4-ae07-4627-bb7b-d5bb25b164cb","subtype":"Figure","type":"Plot"},"ticker":{"id":"8319c482-caf9-4582-9809-31455e739547","type":"BasicTicker"}},"id":"42caf0b2-0341-4d31-872f-2effffcd217a","type":"LinearAxis"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"fc5cfd64-779d-4aa5-9207-9ef421c304c0","type":"Line"},{"attributes":{"callback":null},"id":"a3729368-91a1-490c-b861-7ad3ab450f9f","type":"DataRange1d"},{"attributes":{},"id":"50be47e5-146e-4a24-bd89-fcbf93594589","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"ec913ae6-d7fe-4b05-8f88-76d60dcc2dea","type":"ColumnDataSource"}},"id":"e083ce18-9768-4b6d-89a7-739797c689a9","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"989ffb3e-1430-417c-b3ea-811072f97896","type":"Line"},{"attributes":{},"id":"939dd3ab-8109-434d-aa38-2bc4a7133e5d","type":"DatetimeTickFormatter"},{"attributes":{"data_source":{"id":"ec913ae6-d7fe-4b05-8f88-76d60dcc2dea","type":"ColumnDataSource"},"glyph":{"id":"fc5cfd64-779d-4aa5-9207-9ef421c304c0","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"989ffb3e-1430-417c-b3ea-811072f97896","type":"Line"},"selection_glyph":null,"view":{"id":"e083ce18-9768-4b6d-89a7-739797c689a9","type":"CDSView"}},"id":"fe6d3ec6-213d-419f-bcf1-a3d3c678c518","type":"GlyphRenderer"}],"root_ids":["653daab4-ae07-4627-bb7b-d5bb25b164cb"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"1c326a6e-3295-4e8e-a6bc-029bb4e0d349","elementid":"daf97279-bc2e-4c63-80d3-9349bf710105","modelid":"653daab4-ae07-4627-bb7b-d5bb25b164cb"}];
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