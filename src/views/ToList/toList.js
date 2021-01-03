// 009条件渲染
import { func } from 'assert-plus';
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
            <p>010现在开始列表渲染</p>
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
        document.querySelector("#example10")
    );
}