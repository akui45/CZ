(function (){
    //1
    var myChart = echarts.init(document.querySelector('.bar .chart'));
    //2
    var option = {
        color:["rgba(237,90,101,1)",'rgba(93,190,138,1)'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            width:10,
            right: '1%',
            bottom: '8%',
            itemHeight:6,
            itemWidth:6,
            textStyle:{
                fontsize:12,
                color:'white'
            },
            itemStyle:{
                borderColor:'white',
                borderWidth: 1
            }

        },
        grid: {
            left: 0,
            top:0,
            right: '17%',
            bottom: 0,
            containLabel: true
        },
        xAxis: {
            type: 'value',
            axisLine:{
                color:"white"
            },
            axisLabel:{
                color: "white"
            }
        },
        yAxis: {
            type: 'category',
            data: ['红二十五军', '红四面军', '红二面军', '中央红军'],
            axisLabel:{
                color: "white",
            },
            axisLine:{
                show:false,
                color:"white"
            },
            axisTick:{
                show:false
            }
        },
        series: [
            {
                name: '出发时',
                type: 'bar',
                data: [2980,100000,14000, 86000]
            },
            {
                name: '最终',
                type: 'bar',
                data: [3400, 12000, 11000, 6000]
            },
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize',function ({}) {
        myChart.resize();
    })
})();