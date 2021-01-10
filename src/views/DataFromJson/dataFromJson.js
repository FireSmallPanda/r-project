// 011 从JSON中获取data(例子)
// 数据来源 
import data from './data.json';
import React from 'react';
import ReactDOM from 'react-dom';
import './data.css';

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
        cityList.push(cityItem)
    });
    return cityList
}

// 渲染列表
class ParentDom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listData : []
        }
        
    }
    componentDidMount() {
        let data = dataList()
        this.setState({
            listData:data
        })
    }
    ascData(value){
       let sortList = this.state.listData.sort((a,b)=>{
        if(b[value] > a[value])
            return 1;
        else if(b[value] < a[value])
            return -1;
        else
            return 0;
        })
        this.setState({
            listData:sortList
        })
    }
    render() {
        return (
            <div>
                <p>011疫情渲染列表</p>
                <table className="table-data">
                <tbody>
                        <tr>
                            <th onClick={(e)=>{this.ascData('name')}} >城市名称</th>
                            <th onClick={(e)=>{this.ascData('qz')}}>累计确诊</th>
                            <th onClick={(e)=>{this.ascData('zy')}} >治愈</th>
                            <th onClick={(e)=>{this.ascData('sw')}}>死亡</th>
                            <th onClick={(e)=>{this.ascData('xzqz')}}>新增确诊</th>
                        </tr>
                        {
                            this.state.listData.map((item,index) => {
                               return (<tr key={index} className={'table-row ' + (index%2===1?'row-gray':'') } >
                                   <td>{item.name}</td>
                                    <td>{item.qz}</td>
                                    <td>{item.zy}</td>
                                    <td>{item.sw}</td>
                                    <td>{item.xzqz}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
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