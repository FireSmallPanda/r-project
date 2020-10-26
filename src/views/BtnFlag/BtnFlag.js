// 003 jsx
import React from 'react';
import './BtnFlag.css';
import ReactDOM from 'react-dom';

let random = Math.round(Math.random())
let borderBottom = {
    borderBottom: "1px solid #000", // 首字母大写
    "border-top":"1px solid #000" // 字符串
}
let className = random ? "redBgm" : "blueBgm"
let element = (<div >
    <div>
        03 jsx 和if判断
    </div>
    <div className={className} >
        当前的颜色：{random ? "红色" : "蓝色"}
    </div>
</div>)
// css 
let element2 = (

<div >
    {/*在这里注释 */}
    <div>
        03 jsx 和if判断
    </div>
    <div className={'bigTxt ' + className} style={borderBottom} >
        当前的颜色：{random ? "红色" : "蓝色"}
    </div>
</div>)
export default function () {
    ReactDOM.render(
        element2,
        document.querySelector('#example03')
    );
}
