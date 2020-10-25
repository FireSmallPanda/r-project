// 003 jsx
import React from 'react';
import './BtnFlag.css';
import ReactDOM from 'react-dom';

let random = Math.round(Math.random())

let className = random?"redBgm":"blueBgm"
let element = (<div >
    <div>
        03 jsx 和if判断
    </div>
    <div className={className} >
        当前的颜色：{random?"红色":"蓝色"}
    </div>
</div>)


export default function() {
    ReactDOM.render(
        element,
        document.querySelector('#example03')
    );
}
