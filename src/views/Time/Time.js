
// 002 组件渲染
import React from 'react';

import './Time.css';
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
function TickCom(props) {
    return (
        <div class="time">
            <h1>Hello, React!</h1>
            <h2>现在是 {props.date.toLocaleTimeString()}.</h2>
        </div>
    )
}
function run(){
    ReactDOM.render(
        <TickCom date={new Date()} />,
        document.querySelector('#example')
    );
}

export default function () {
    // setInterval(tick, 1000);
    setInterval(run, 1000);
}

