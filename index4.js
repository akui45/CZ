//中央
(function (){
    //1
    var myChart = echarts.init(document.querySelector('.line .chart'));
    //2
    var option = {
        color:'rgba(237,90,101,1)',
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: 0,
            top:'4%',
            right: '6%',
            bottom: 0,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel:{
                color: "white",
            },
            axisLine:{
                show:false,
                color:"white"
            },
            data: ['1934.10', '1934.12', '1935.4', '1935.6', '1935.9','1935.10']
        },
        yAxis: {
            type: 'value',
            axisLabel:{
                color: "white",
            },
            axisLine:{
                show:false,
                color:"white"
            },
        },
        series: [
            {
                name:'',
                data: [86000, 30000, 24000, 18000,14000, 6000],
                type: 'line'
            }
        ]
    };
         myChart.setOption(option);
         window.addEventListener("resize", function ({}) {
             myChart.resize();
    })
})();
//红二
(function (){
    //1
    var myChart = echarts.init(document.querySelector('.pie .chart'));
    //2
    var option = {
        color:'rgba(237,90,101,1)',
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: 0,
            top:'4%',
            right: '6%',
            bottom: 0,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel:{
                color: "white",
            },
            axisLine:{
                show:false,
                color:"white"
            },
            data: ['1935.11','1936','1936.4','1936.7','1936.10']
        },
        yAxis: {
            type: 'value',
            axisLabel:{
                color: "white",
            },
            axisLine:{
                show:false,
                color:"white"
            },
        },
        series: [
            {
                name:'',
                data: [14000,17000,16000,14000,11000],
                type: 'line'
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function ({}) {
        myChart.resize();
    })
})();
//红四
(function (){
    //1
    var myChart = echarts.init(document.querySelector('.line2 .chart'));
    //2
    var option = {
        color:'rgba(237,90,101,1)',
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: 0,
            top:'4%',
            right: '6%',
            bottom: 0,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel:{
                color: "white",
            },
            axisLine:{
                show:false,
                color:"white"
            },
            data: ['1935.5', '1936.4','1936.10']
        },
        yAxis: {
            type: 'value',
            axisLabel:{
                color: "white",
            },
            axisLine:{
                show:false,
                color:"white"
            },
        },
        series: [
            {
                name:'',
                data: [100000,40000,12000],
                type: 'line'
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function ({}) {
        myChart.resize();
    })
})();
//红二十五
(function (){
    //1
    var myChart = echarts.init(document.querySelector('.pie3 .chart'));
    //2
    var option = {
        color:'rgba(237,90,101,1)',
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: 0,
            top:'4%',
            right: '6%',
            bottom: 0,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel:{
                color: "white",
            },
            axisLine:{
                show:false,
                color:"white"
            },
            data: ['1934.11', '1935.5','1935.9']
        },
        yAxis: {
            type: 'value',
            axisLabel:{
                color: "white",
            },
            axisLine:{
                show:false,
                color:"white"
            },
        },
        series: [
            {
                name:'',
                data: [2980,4000,3400],
                type: 'line'
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function ({}) {
        myChart.resize();
    })
})();
//路线
(function () {
    var myChart=echarts.init(document.querySelector(".map .chart1"));
    var geoCoordMap = {
        '于都': [115.4103,25.9549],
        '兴安': [110.6670,25.6147],
        '通道': [109.7798,26.1613],
        '黎平': [109.1320,26.2336],
        '遵义': [106.9235,27.7291],
        '娄山关': [110.6670,28.0205],
        '赤水': [105.6946,28.5929],
        '扎西': [105.0450,27.8436],
        '皎平渡': [102.4504,26.1276],
        '安顺场': [105.1509,28.2956],
        '泸定': [102.2332,29.9168],
        '懋功': [102.3626,31.0013],
        '毛儿盖': [103.0540,32.5989],
        '腊子口': [103.0263,34.1285],
        '会宁': [104.8813,36.2348],
        '吴起镇': [108.1936,36.9057],
        '桑植': [110.1999,29.4167],
        '石阡': [108.2194,27.5168],
        '修文': [106.5962,26.8397],
        '黔西': [106.0286,27.0120],
        '大定': [105.5989,27.1465],
        '丽江': [100.2266,26.8585],
        '中甸': [99.7048,27.8265],
        '甘孜': [101.9607,30.0523],
        '将台堡': [105.8383,35.8103],
        '苍溪': [105.9311,31.7340],
        '茂县': [103.8513,31.6834],
        '松潘': [103.6021,32.6581],
        '何家冲': [110.0827,26.5262],
        '方城县独树镇': [113.1613,33.3231],
        '庾家河': [110.3263,33.6996],
        '两当': [106.3008,33.9104],
        '天水': [105.7210,34.5821],
        '隆德': [106.1069,35.6260],
        '永坪': [109.8190,37.0102]
    };
    var ZYData = [
        [{name:'于都'}, {name:'于都',value:80}],
        [{name:'于都'}, {name:'兴安',value:80}],
        [{name:'兴安'}, {name:'通道',value:80}],
        [{name:'通道'}, {name:'黎平',value:80}],
        [{name:'黎平'}, {name:'遵义',value:80}],
        [{name:'遵义'}, {name:'娄山关',value:80}],
        [{name:'娄山关'}, {name:'赤水',value:80}],
        [{name:'赤水'}, {name:'扎西',value:80}],
        [{name:'扎西'}, {name:'皎平渡',value:80}],
        [{name:'皎平渡'}, {name:'安顺场',value:80}],
        [{name:'安顺场'}, {name:'泸定',value:80}],
        [{name:'泸定'}, {name:'懋功',value:80}],
        [{name:'懋功'}, {name:'毛儿盖',value:80}],
        [{name:'毛儿盖'}, {name:'腊子口',value:80}],
        [{name:'腊子口'}, {name:'会宁',value:80}],
        [{name:'会宁'}, {name:'吴起镇',value:80}]
    ];
    var HEData = [
        [{name:'桑植'}, {name:'桑植',value:80}],
        [{name:'桑植'}, {name:'石阡',value:80}],
        [{name:'石阡'}, {name:'修文',value:80}],
        [{name:'修文'}, {name:'黔西',value:80}],
        [{name:'黔西'}, {name:'大定',value:80}],
        [{name:'大定'}, {name:'丽江',value:80}],
        [{name:'丽江'}, {name:'中甸',value:80}],
        [{name:'中甸'}, {name:'甘孜',value:80}],
        [{name:'甘孜'}, {name:'腊子口',value:80}],
        [{name:'腊子口'}, {name:'将台堡',value:80}]

    ];
    var HSData = [
        [{name:'苍溪'}, {name:'苍溪',value:80}],
        [{name:'苍溪'}, {name:'茂县',value:80}],
        [{name:'茂县'}, {name:'松潘',value:80}],
        [{name:'松潘'}, {name:'懋功',value:80}],
        [{name:'懋功'}, {name:'甘孜',value:80}],
        [{name:'甘孜'}, {name:'会宁',value:80}]

    ];
    var EWData = [
        [{name:'何家冲'}, {name:'何家冲',value:80}],
        [{name:'何家冲'}, {name:'方城县独树镇',value:80}],
        [{name:'方城县独树镇'}, {name:'庾家河',value:80}],
        [{name:'庾家河'}, {name:'两当',value:80}],
        [{name:'两当'}, {name:'天水',value:80}],
        [{name:'天水'}, {name:'会宁',value:80}],
        [{name:'会宁'}, {name:'隆德',value:80}],
        [{name:'隆德'}, {name:'永坪',value:80}]
    ];
    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    //var planePath = 'arrow';
    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {

            var dataItem = data[i];

            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord],
                    value: dataItem[1].value
                });
            }
        }
        return res;

    };


    var color = ['rgba(237,90,101)', 'rgba(131,203,172)', 'rgba(249,215,112)','rgba(129,92,148)'];//航线的颜色
    var series = [];
    [['中央红军', ZYData], ['红二面军', HEData], ['红四面军', HSData],['红二十五军', EWData]].forEach(function (item, i) {
        series.push({
                name: item[0],
                type: 'lines',
                zlevel: 1,
                effect: {
                    show: true,
                    period: 4,
                    trailLength: 0.3,
                    symbol: 'arrow',
                    color: color[i],   //arrow箭头的颜色
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        width: 0,
                        color: color[i],
                        opacity:1,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0],
                type: 'lines',
                zlevel: 2,
                symbol: ['none', 'arrow'],
                symbolSize: 5,
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.6,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0],
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}',
                        fontSize:10
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 12;
                },
                itemStyle: {
                    normal: {
                        color: color[i],
                    },
                    emphasis: {
                        areaColor: '#2B91B7'
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            });
    });
    var option = {
        tooltip : {
            trigger: 'item',
            formatter:function(params, ticket, callback){
                if(params.seriesType=="effectScatter") {
                    return "所经地点："+params.data.name;
                }
                else{
                    return params.name;
                }
            }
        },
        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'left',
            data:['中央红军', '红二面军', '红四面军','红二十五军'],
            textStyle: {
                color: '#fff'
            },
            selectedMode: 'multiple'
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: true,
                    color:'#fff'
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: 'rgba(209,194,211)',
                    borderColor: 'white',
                    borderWidth: 1,
                },
                emphasis: {
                    areaColor: 'rgba(128,118,163,0.8)'
                }
            },
        },
        series: series
    };
    myChart.setOption(option);
    window.addEventListener("resize", function ({}) {
        myChart.resize();
    })
})()