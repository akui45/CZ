(function (){
    //1
    var myChart = echarts.init(document.querySelector('.bar2 .chart'));
    //2
    var option = {
        color: ['rgba(237,90,101,1)','rgba(131,203,172)','rgba(249,215,112)','rgba(129,92,148,1)'],
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '3%',
            left: 'center',
            bottom:0,
            textStyle: {
                color: '#fff'
            },
        },
        series: [
            {
                name: '长征开始',
                type: 'pie',
                radius: ['30%', '60%'],
                center: ['25%','60%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 3,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '15',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 86000, name: '中央红军' },
                    { value: 14000, name: '红二面军' },
                    { value: 100000, name: '红四面军' },
                    { value: 2980, name: '红二十五军' }
                ]},
            {
                name: '长征结束',
                type: 'pie',
                radius: ['30%', '60%'],
                center: ['75%','60%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 3,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '15',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 6000, name: '中央红军' },
                    { value: 1100, name: '红二面军' },
                    { value: 12000, name: '红四面军' },
                    { value: 3400, name: '红二十五军' }
                ]
            }
        ]
    };

    //3
    myChart.setOption(option);
    window.addEventListener('resize',function ({}) {
        myChart.resize();
    })
})();