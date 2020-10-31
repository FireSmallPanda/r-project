
// 005 React 组件
import React from 'react';

import './CCom.css';
import ReactDOM from 'react-dom';
// react 函数式组件开发
// function TickCom(props) {
//     return (
//         <div >
//             <h1>005函数式组件：</h1>
//             <h2>现在是 {props.xiayu=="下雨"?"不出门":"出门"}</h2>
//         </div>
//     )
// }
// 类组件
class TickClassCom extends React.Component{
    render(){
        return (
            <div >
                <h1>005类式组件：</h1>
                <h2 onClick={this.show} >现在(类组件)是：  {this.props.xiayu==="下雨"?"不出门":"出门"}</h2>
                <h2>{this.props.showText}</h2>
            </div>
        )
    }
    show = ()=> {
        alert("点击了类组件")
    }

}
export default function() {
    ReactDOM.render(
        <TickClassCom xiayu="下雨" showText="这是一个类组件"/>,
        document.querySelector('#example05')
    );
}
