// 011 从JSON中获取data(例子)
// 数据来源 
import data from './data.json';
import React from 'react';
import ReactDOM from 'react-dom';


class ListItem2 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <li onClick={(e)=>{this.selectBook(this.props.data.title,e) }}>
            {this.props.data.title},价格:{this.props.data.value}
        </li>
        )
    }
    selectBook(title,e){
        alert(`你选择了：${title}`)
    }
}

// 算法数据
let dataList = () =>{
    if(data.status!=0){
        return false
    }
    let cityList = []
    data.data.forEach(element => {
        let cityItem = {}
        // 设置城市名称
        cityItem.name = element.name
        // 设置数据
        element.trend.list.forEach(trendItem =>{
            let dataName = "qz"
            if(trendItem.name == '确诊'){
                dataName = "qz"
            }else if(trendItem.name == '治愈'){
                dataName = "zy"
            }else if(trendItem.name == '死亡'){
                dataName = "sw"
            }else if(trendItem.name == '新增确诊'){
                dataName = "xzqz"
            }
            // 计算总合
            let num = 0
            trendItem.data.map(numData => num += numData)
            cityItem[dataName] = num
        })
    });
}

// 渲染列表
class ParentDom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listData : [
                { title: "《马丁》", value: "14.00元" },
                { title: "《马修》", value: "12.00元" },
                { title: "《马弄》", value: "15.00元" },
                { title: "《马克》", value: "17.00元" },
            ]
        }
    }
    render() {
        let list = this.state.listData.map((item,index)=>{
            return <ListItem2 key={index} data={item} index={index} ></ListItem2>
        })
        return (
        <div>
            <p>011疫情渲染列表</p>
            <ul>
                {list}
            </ul>
        </div>
        )
    }
}
export default function () {
    ReactDOM.render(
        <ParentDom />,
        document.querySelector("#example11")
    );
}