
// 012 搜索表单
import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.json';
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
    console.log("当前的数据",cityList)
    return cityList
}

// 类组件
class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
            result: "请按回车搜索",
            listData:[]
        }
    }
    componentDidMount() {
        let data = dataList()
        this.setState({
            listData:data
        })
        console.log(this.state.listData)
    }
    render() {
        return (
            <div >
                <h1>012 React表单</h1>
                <div>
                    <input value={this.state.value} placeholder="请输入要搜索的城市" onKeyDown={(e)=>{ this.onKeyDownEvent(e) }} onChange={(e) => { this.onChangeEvent(e) }} ></input>
                </div>
                <div>
                    <h3>搜索的内容</h3>
                    <div>
                        {this.state.result}
                    </div>
                </div>
            </div>
        )
    }
    onChangeEvent = (e) => {
        this.setState({
            value: e.target.value
        })

    }
    onKeyDownEvent = (e) =>{
        
        if(e.keyCode == 13) {
            console.log("执行了搜索")
           let findCity =  this.state.listData.find(item =>{
                 return item.name == this.state.value 
            })
            let res = "未找到你的城市！"
            if(findCity){
                res = `${findCity.name}确诊人数:${findCity.qz}人！`                
            }
            this.setState({
                result: res
            })
        }
    }

}
export default function () {
    ReactDOM.render(
        <SearchForm />,
        document.querySelector("#example12")
    );
}
