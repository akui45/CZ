(function (){
    //1
    var myChart = echarts.init(document.querySelector('.bar .chart'));
    //2
    var option = {
        color:["rgba(237,90,101,1)"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '0%',
            top: '10px',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['中央红军', '红二面军', '红四面军', '红二十五军'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel:{
                    color:"white",
                    fontsize:12
                },
                axisLine:{
                    show:false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: "white",
                    fontsize: '12'
                },
                axisLine: {
                    show: true,
                    lineStyle:{
                        color:"rgba(255,255,255,.1)",
                        width:2
                    }
                },
                splitLine:{
                    lineStyle: {
                        color:"rgba(255,255,255,1)"
                    }
                }
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '30%',
                data: [86000,14000,100000,2980]
            }
        ]
    };
    //3
    myChart.setOption(option);
})();