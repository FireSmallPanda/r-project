
// 011 组件渲染
import React from 'react';
import ReactDOM from 'react-dom';

// 引入 ECharts 主模块
import * as echarts from 'echarts/lib/echarts'
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

// 类组件
class Map extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mapData: {}
        }
    }
    componentDidMount() {
        this.initChart()
    }
    render() {
        return (
            <div >
                <h1>React引入Echarts</h1>
                <div id="map" style={{ width: '500px', height: "500px" }} ></div>
            </div>
        )
    }
    show = () => {
        alert("点击了类组件")
    }
    initChart = () => {
        // 基于准备好的dom，初始化echarts实例
        // var myChart = echarts.init(document.getElementById('map'));
        // // 绘制图表
        // myChart.setOption({
        //     title: { text: 'ECharts 入门示例' },
        //     tooltip: {},
        //     xAxis: {
        //         type: 'category',
        //         data:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]
        //     },
        //     yAxis: {},
        //     series: [{
        //         name: '销量',
        //         type: 'bar',
        //         data: [5, 20, 36, 10, 10, 20]
        //     }]
        // });
    }

}
export default function () {
    ReactDOM.render(
        <Map />,
        document.querySelector("#example11map")
    );
}
