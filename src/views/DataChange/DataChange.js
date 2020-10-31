
// 002 组件渲染
import React from 'react';

import './DataChange.css';
import ReactDOM from 'react-dom';
// 非组件
// function tick() {
//     const element = (
//         <div class="time">
//             <h1>Hello, world!</h1>
//             <h2>现在是 {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(
//         element,
//         document.getElementById('example')
//     );
// }
// react 函数式组件开发
// 类组件
class TickClassCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            })
        }, 1000);
    }
    render() {
        return (
            <div >
                <h1>006state设置：</h1>
                <h2>当前日期{this.state.time}</h2>
            </div>
        )
    }
    show = () => {
        alert("点击了类组件")
    }

}
export default function () {
    ReactDOM.render(
        <TickClassCom />,
        document.querySelector("#example06")
    );
}
