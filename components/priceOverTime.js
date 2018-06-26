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
      };var element = document.getElementById("a8518eb1-e034-480b-acab-60b3c250fd58");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a8518eb1-e034-480b-acab-60b3c250fd58' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7d9429f9-9929-415b-a53b-e134e37b1a85":{"roots":{"references":[{"attributes":{"background_fill_color":{"value":"#eeeeee"},"below":[{"id":"43286ea4-287d-4040-842b-4a6ffe002e31","type":"DatetimeAxis"}],"left":[{"id":"5c44744d-c2ae-4c0d-bfaf-ff50b64770f0","type":"LinearAxis"}],"renderers":[{"id":"43286ea4-287d-4040-842b-4a6ffe002e31","type":"DatetimeAxis"},{"id":"ba70237a-df5e-4b7c-a8e7-e3a618fe407e","type":"Grid"},{"id":"5c44744d-c2ae-4c0d-bfaf-ff50b64770f0","type":"LinearAxis"},{"id":"4fde8975-4778-4bc1-b0a1-f3502760cbbf","type":"Grid"},{"id":"149067cd-d127-4ff6-a9ba-7c4feb565784","type":"BoxAnnotation"},{"id":"c69015e7-5234-4f65-8972-6701521f951a","type":"GlyphRenderer"}],"title":{"id":"34568a4e-252c-4f13-8977-9b0a72a35f2e","type":"Title"},"toolbar":{"id":"2dc8611b-67d5-4401-8518-d6f99b594e9a","type":"Toolbar"},"x_range":{"id":"dff602d9-c0d0-4e96-b390-ba059a79bdbf","type":"DataRange1d"},"x_scale":{"id":"71a2fa6f-dc4d-4223-aa20-6ccf81414177","type":"LinearScale"},"y_range":{"id":"2f1086eb-bc53-40b4-98a4-1567f26a134b","type":"DataRange1d"},"y_scale":{"id":"565aca97-0dce-4618-8e32-befcc5a3e5ae","type":"LinearScale"}},"id":"b5ad45cd-6c29-44bf-9e6e-8a21c1590a82","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"2f1086eb-bc53-40b4-98a4-1567f26a134b","type":"DataRange1d"},{"attributes":{"formatter":{"id":"44556465-f99f-4515-a2d4-8f11ce9fd494","type":"DatetimeTickFormatter"},"plot":{"id":"b5ad45cd-6c29-44bf-9e6e-8a21c1590a82","subtype":"Figure","type":"Plot"},"ticker":{"id":"7dc9dc38-c2a2-4311-9142-c6388e8e53d1","type":"DatetimeTicker"}},"id":"43286ea4-287d-4040-842b-4a6ffe002e31","type":"DatetimeAxis"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"fd63c7bb-453b-4211-ae95-897857a1cd77","type":"AdaptiveTicker"},{"id":"9c376e42-eeb3-48ec-ae75-9b116fd4759d","type":"AdaptiveTicker"},{"id":"95872793-5da0-44c3-9811-0cf7d8adcfa8","type":"AdaptiveTicker"},{"id":"24966e78-bda7-496d-9c6e-8204715fc2de","type":"DaysTicker"},{"id":"49ea4c75-2686-4b4d-a3c7-e9bfa16ef6eb","type":"DaysTicker"},{"id":"43ffb08e-831c-4313-a299-49d7c3cd8bdf","type":"DaysTicker"},{"id":"413a2528-f1a9-486c-bcda-1425533ae96d","type":"DaysTicker"},{"id":"1880f480-bfa0-410f-a267-96f322fdacd4","type":"MonthsTicker"},{"id":"4e42c340-45e8-4614-a107-e7acea0a3b90","type":"MonthsTicker"},{"id":"ba6af456-9f33-4a45-b2e5-26f01a20296e","type":"MonthsTicker"},{"id":"7e443a6d-9277-4773-a48b-423b278540ed","type":"MonthsTicker"},{"id":"0dbb1b92-1200-467c-afd3-051c7fdcc922","type":"YearsTicker"}]},"id":"7dc9dc38-c2a2-4311-9142-c6388e8e53d1","type":"DatetimeTicker"},{"attributes":{"grid_line_color":{"value":"Grey"},"plot":{"id":"b5ad45cd-6c29-44bf-9e6e-8a21c1590a82","subtype":"Figure","type":"Plot"},"ticker":{"id":"7dc9dc38-c2a2-4311-9142-c6388e8e53d1","type":"DatetimeTicker"}},"id":"ba70237a-df5e-4b7c-a8e7-e3a618fe407e","type":"Grid"},{"attributes":{},"id":"565aca97-0dce-4618-8e32-befcc5a3e5ae","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[757382400000.0,760060800000.0,762480000000.0,765158400000.0,767750400000.0,770428800000.0,773020800000.0,775699200000.0,778377600000.0,780969600000.0,783648000000.0,786240000000.0,788918400000.0,791596800000.0,794016000000.0,796694400000.0,799286400000.0,801964800000.0,804556800000.0,807235200000.0,809913600000.0,812505600000.0,815184000000.0,817776000000.0,820454400000.0,823132800000.0,825638400000.0,828316800000.0,830908800000.0,833587200000.0,836179200000.0,838857600000.0,841536000000.0,844128000000.0,846806400000.0,849398400000.0,852076800000.0,854755200000.0,857174400000.0,859852800000.0,862444800000.0,865123200000.0,867715200000.0,870393600000.0,873072000000.0,875664000000.0,878342400000.0,880934400000.0,883612800000.0,886291200000.0,888710400000.0,891388800000.0,893980800000.0,896659200000.0,899251200000.0,901929600000.0,904608000000.0,907200000000.0,909878400000.0,912470400000.0,915148800000.0,917827200000.0,920246400000.0,922924800000.0,925516800000.0,928195200000.0,930787200000.0,933465600000.0,936144000000.0,938736000000.0,941414400000.0,944006400000.0,946684800000.0,949363200000.0,951868800000.0,954547200000.0,957139200000.0,959817600000.0,962409600000.0,965088000000.0,967766400000.0,970358400000.0,973036800000.0,975628800000.0,1009843200000.0,1012521600000.0,1014940800000.0,1017619200000.0,1020211200000.0,1022889600000.0,1025481600000.0,1028160000000.0,1030838400000.0,1033430400000.0,1036108800000.0,1038700800000.0,1041379200000.0,1044057600000.0,1046476800000.0,1049155200000.0,1051747200000.0,1054425600000.0,1057017600000.0,1059696000000.0,1062374400000.0,1064966400000.0,1067644800000.0,1070236800000.0,1072915200000.0,1075593600000.0,1078099200000.0,1080777600000.0,1083369600000.0,1086048000000.0,1088640000000.0,1091318400000.0,1093996800000.0,1096588800000.0,1099267200000.0,1101859200000.0,1104537600000.0,1107216000000.0,1109635200000.0,1112313600000.0,1114905600000.0,1117584000000.0,1120176000000.0,1122854400000.0,1125532800000.0,1128124800000.0,1130803200000.0,1133395200000.0,1136073600000.0,1138752000000.0,1141171200000.0,1143849600000.0,1146441600000.0,1149120000000.0,1151712000000.0,1154390400000.0,1157068800000.0,1159660800000.0,1162339200000.0,1164931200000.0,1167609600000.0,1170288000000.0,1172707200000.0,1175385600000.0,1177977600000.0,1180656000000.0,1183248000000.0,1185926400000.0,1188604800000.0,1191196800000.0,1193875200000.0,1196467200000.0,1199145600000.0,1201824000000.0,1204329600000.0,1207008000000.0,1209600000000.0,1212278400000.0,1214870400000.0,1217548800000.0,1220227200000.0,1222819200000.0,1225497600000.0,1228089600000.0,1230768000000.0,1233446400000.0,1235865600000.0,1238544000000.0,1241136000000.0,1243814400000.0,1246406400000.0,1249084800000.0,1251763200000.0,1254355200000.0,1257033600000.0,1259625600000.0,1262304000000.0,1264982400000.0,1267401600000.0,1270080000000.0,1272672000000.0,1275350400000.0,1277942400000.0,1280620800000.0,1283299200000.0,1285891200000.0,1288569600000.0,1291161600000.0,1293840000000.0,1296518400000.0,1298937600000.0,1301616000000.0,1304208000000.0,1306886400000.0,1309478400000.0,1312156800000.0,1314835200000.0,1317427200000.0,1320105600000.0,1322697600000.0,1325376000000.0,1328054400000.0,1330560000000.0,1333238400000.0,1335830400000.0,1338508800000.0,1341100800000.0,1343779200000.0,1346457600000.0,1349049600000.0,1351728000000.0,1354320000000.0,1356998400000.0,1359676800000.0,1362096000000.0,1364774400000.0,1367366400000.0,1370044800000.0,1372636800000.0,1375315200000.0,1377993600000.0,1380585600000.0,1383264000000.0,1385856000000.0,1388534400000.0,1391212800000.0,1393632000000.0,1396310400000.0,1398902400000.0,1401580800000.0,1404172800000.0,1406851200000.0,1409529600000.0,1412121600000.0,1414800000000.0,1417392000000.0,1420070400000.0,1422748800000.0,1425168000000.0,1427846400000.0,1430438400000.0,1433116800000.0,1435708800000.0,1438387200000.0,1441065600000.0,1443657600000.0,1446336000000.0,1448928000000.0,1451606400000.0,1454284800000.0,1456790400000.0,1459468800000.0,1462060800000.0,1464739200000.0,1467331200000.0,1470009600000.0,1472688000000.0,1475280000000.0,1477958400000.0,1480550400000.0],"y":[6.25,6.25,6.0,5.925,5.875,5.825,5.5,5.9,5.8125,5.75,5.9,6.0,5.916666666666667,5.833333333333333,5.708333333333333,5.933333333333334,5.675,5.5,5.633333333333333,6.016666666666667,6.041666666666667,6.3,6.266666666666667,6.291666666666667,6.741666666666667,6.779166666666666,6.795833333333333,6.7875000000000005,6.525000000000001,7.145833333333333,7.095833333333334,7.320833333333333,7.945833333333333,8.083333333333334,8.679166666666667,9.270833333333334,9.625,9.275,8.6875,8.429166666666667,8.145833333333334,8.383333333333333,8.083333333333334,8.170833333333333,8.137500000000001,7.9375,7.95,8.3375,8.39,8.075,8.015,7.7,7.725,7.775,8.069999999999999,8.075,8.09,8.129999999999999,8.2,8.440000000000001,8.6875,8.9625,8.375,8.11875,7.7625,8.11875,8.35,8.63125,8.75625,8.925,8.95,9.1,9.2875,9.1625,8.91875,8.6875,8.575,8.575,8.5375,8.475,8.35,8.28125,8.6,8.7875,8.772727272727273,8.840909090909092,8.840909090909092,8.954545454545455,8.772727272727273,8.772727272727273,8.909090909090908,8.977272727272727,9.022727272727273,9.022727272727273,9.136363636363637,9.090909090909092,8.979166666666666,9.125,9.041666666666666,9.0,8.8125,8.958333333333334,8.895833333333334,8.916666666666666,9.041666666666666,9.208333333333334,9.25,9.520833333333334,10.211538461538462,10.307692307692308,10.134615384615385,9.673076923076923,9.307692307692308,9.26923076923077,9.423076923076923,9.576923076923077,9.792307692307691,9.638461538461538,9.73076923076923,9.73076923076923,10.0625,9.895833333333334,9.604166666666666,9.458333333333334,9.516666666666667,9.729166666666666,9.75,9.604166666666666,9.6875,9.9,10.458333333333334,10.875,11.508333333333333,11.666666666666666,11.583333333333334,11.458333333333334,11.625,11.966666666666667,11.9,12.416666666666666,12.791666666666666,13.020833333333334,13.645833333333334,13.770833333333334,13.833333333333334,13.895833333333334,13.25,13.083333333333334,12.666666666666666,12.625,13.125,13.133333333333333,13.166666666666666,13.1875,13.479166666666666,13.479166666666666,13.458333333333334,13.520833333333334,14.0,13.691666666666668,13.5,13.6875,13.854166666666666,13.9475,13.905833333333334,13.75,13.75,13.875,14.25,14.233333333333334,14.416666666666666,14.333333333333334,14.375,14.375,15.0,15.166666666666666,15.166666666666666,15.25,16.791666666666668,17.25,18.181818181818183,16.55909090909091,17.454545454545453,15.845454545454546,16.227272727272727,16.40909090909091,16.445454545454545,16.772727272727273,17.09090909090909,17.30272727272727,17.40909090909091,18.227272727272727,17.329411764705885,17.37705882352941,16.848382352941176,16.714117647058828,16.537647058823527,16.400882352941178,16.263529411764708,16.374411764705883,16.352647058823532,16.452352941176468,16.464411764705886,16.504705882352944,16.654838709677417,16.606129032258064,16.79064516129032,16.44645161290323,16.64516129032258,16.63032258064516,16.815806451612904,17.629354838709677,18.455806451612904,19.148709677419355,19.27645161290322,19.72645161290323,19.79897435897436,20.17410256410256,20.350256410256414,20.079743589743586,19.848205128205127,20.13230769230769,20.43128205128205,20.590512820512824,20.71948717948718,20.7751282051282,20.797948717948717,21.162307692307692,21.6102380952381,21.654999999999998,21.613333333333333,21.25190476190476,21.095476190476187,21.00642857142857,21.22904761904762,21.441428571428574,21.480476190476192,21.551190476190477,21.695714285714285,21.550238095238097,21.838125,22.009375000000002,21.919583333333335,21.7,21.661249999999995,21.665625000000002,21.624166666666667,21.69479166666667,21.853333333333335,22.044583333333335,22.281458333333333,22.346875,22.459183673469386,22.702857142857145,22.62265306122449,22.445918367346938,22.66469387755102,22.912040816326538,23.120816326530615,23.12428571428572,23.34306122448979,23.499591836734695,24.136122448979588,24.833469387755105]},"selected":{"id":"e66f5bea-e9d7-42da-aeb7-3afaa4763acd","type":"Selection"},"selection_policy":{"id":"45969564-091a-4fcc-b0be-23f6916fc52b","type":"UnionRenderers"}},"id":"a645bc56-5789-4710-ac31-7195f4311a55","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"75975cfa-74a7-4692-b6d6-9fe2670c14ef","type":"BasicTickFormatter"},"plot":{"id":"b5ad45cd-6c29-44bf-9e6e-8a21c1590a82","subtype":"Figure","type":"Plot"},"ticker":{"id":"32599e8f-55e5-4666-96e0-fb18102df70c","type":"BasicTicker"}},"id":"5c44744d-c2ae-4c0d-bfaf-ff50b64770f0","type":"LinearAxis"},{"attributes":{"callback":null},"id":"dff602d9-c0d0-4e96-b390-ba059a79bdbf","type":"DataRange1d"},{"attributes":{},"id":"75975cfa-74a7-4692-b6d6-9fe2670c14ef","type":"BasicTickFormatter"},{"attributes":{},"id":"44556465-f99f-4515-a2d4-8f11ce9fd494","type":"DatetimeTickFormatter"},{"attributes":{},"id":"32599e8f-55e5-4666-96e0-fb18102df70c","type":"BasicTicker"},{"attributes":{"dimension":1,"grid_line_color":{"value":"Grey"},"plot":{"id":"b5ad45cd-6c29-44bf-9e6e-8a21c1590a82","subtype":"Figure","type":"Plot"},"ticker":{"id":"32599e8f-55e5-4666-96e0-fb18102df70c","type":"BasicTicker"}},"id":"4fde8975-4778-4bc1-b0a1-f3502760cbbf","type":"Grid"},{"attributes":{"source":{"id":"a645bc56-5789-4710-ac31-7195f4311a55","type":"ColumnDataSource"}},"id":"3c951f3c-7ea7-4aed-8958-1faa5d82293e","type":"CDSView"},{"attributes":{},"id":"45969564-091a-4fcc-b0be-23f6916fc52b","type":"UnionRenderers"},{"attributes":{},"id":"e66f5bea-e9d7-42da-aeb7-3afaa4763acd","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"152f8b72-cd8f-4cc4-ac92-b4528a8fdf7d","type":"Line"},{"attributes":{},"id":"0dbb1b92-1200-467c-afd3-051c7fdcc922","type":"YearsTicker"},{"attributes":{},"id":"bec3eb0c-7d91-4bf3-b975-4f138fd3e993","type":"PanTool"},{"attributes":{},"id":"71a2fa6f-dc4d-4223-aa20-6ccf81414177","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"149067cd-d127-4ff6-a9ba-7c4feb565784","type":"BoxAnnotation"},{"attributes":{},"id":"c0d96b78-12f3-4c24-ad8d-487923bd0ae1","type":"WheelZoomTool"},{"attributes":{"months":[0,6]},"id":"7e443a6d-9277-4773-a48b-423b278540ed","type":"MonthsTicker"},{"attributes":{"overlay":{"id":"149067cd-d127-4ff6-a9ba-7c4feb565784","type":"BoxAnnotation"}},"id":"efbdf99f-5852-46e8-9ef8-18c4ff8f95e8","type":"BoxZoomTool"},{"attributes":{"months":[0,4,8]},"id":"ba6af456-9f33-4a45-b2e5-26f01a20296e","type":"MonthsTicker"},{"attributes":{},"id":"e4f15467-169e-4d96-bb90-474501285927","type":"SaveTool"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"4e42c340-45e8-4614-a107-e7acea0a3b90","type":"MonthsTicker"},{"attributes":{},"id":"ce942359-6939-4067-a502-4f219942943f","type":"ResetTool"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"1880f480-bfa0-410f-a267-96f322fdacd4","type":"MonthsTicker"},{"attributes":{},"id":"3e31644d-a235-47c9-8e6e-afaff4561677","type":"HelpTool"},{"attributes":{"days":[1,15]},"id":"413a2528-f1a9-486c-bcda-1425533ae96d","type":"DaysTicker"},{"attributes":{"days":[1,8,15,22]},"id":"43ffb08e-831c-4313-a299-49d7c3cd8bdf","type":"DaysTicker"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"49ea4c75-2686-4b4d-a3c7-e9bfa16ef6eb","type":"DaysTicker"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"9c376e42-eeb3-48ec-ae75-9b116fd4759d","type":"AdaptiveTicker"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"fd63c7bb-453b-4211-ae95-897857a1cd77","type":"AdaptiveTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bec3eb0c-7d91-4bf3-b975-4f138fd3e993","type":"PanTool"},{"id":"c0d96b78-12f3-4c24-ad8d-487923bd0ae1","type":"WheelZoomTool"},{"id":"efbdf99f-5852-46e8-9ef8-18c4ff8f95e8","type":"BoxZoomTool"},{"id":"e4f15467-169e-4d96-bb90-474501285927","type":"SaveTool"},{"id":"ce942359-6939-4067-a502-4f219942943f","type":"ResetTool"},{"id":"3e31644d-a235-47c9-8e6e-afaff4561677","type":"HelpTool"}]},"id":"2dc8611b-67d5-4401-8518-d6f99b594e9a","type":"Toolbar"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"95872793-5da0-44c3-9811-0cf7d8adcfa8","type":"AdaptiveTicker"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"cc2d8802-f456-414c-a30c-47720fc28c39","type":"Line"},{"attributes":{"data_source":{"id":"a645bc56-5789-4710-ac31-7195f4311a55","type":"ColumnDataSource"},"glyph":{"id":"cc2d8802-f456-414c-a30c-47720fc28c39","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"152f8b72-cd8f-4cc4-ac92-b4528a8fdf7d","type":"Line"},"selection_glyph":null,"view":{"id":"3c951f3c-7ea7-4aed-8958-1faa5d82293e","type":"CDSView"}},"id":"c69015e7-5234-4f65-8972-6701521f951a","type":"GlyphRenderer"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"24966e78-bda7-496d-9c6e-8204715fc2de","type":"DaysTicker"},{"attributes":{"plot":null,"text":"Wheat price in India"},"id":"34568a4e-252c-4f13-8977-9b0a72a35f2e","type":"Title"}],"root_ids":["b5ad45cd-6c29-44bf-9e6e-8a21c1590a82"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"7d9429f9-9929-415b-a53b-e134e37b1a85","elementid":"a8518eb1-e034-480b-acab-60b3c250fd58","modelid":"b5ad45cd-6c29-44bf-9e6e-8a21c1590a82"}];
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