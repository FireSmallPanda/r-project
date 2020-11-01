
// 007 组件渲染
import React, { Children } from 'react';

import './ParentProps.css';
import ReactDOM from 'react-dom';

// 父组件
class ParentDom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showText:'这是一首小时光（父元素的参数）'// 子组件显示文字
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <h1>007父子组件传值:  这是父组件</h1>
                <ChildDom showContent={this.state.showText}  content={(val)=>this.giveMeth(val)} ></ChildDom>
                <div>子组件传父组件的数据：{this.state.parText}</div>
            </div>
        )
    }
    giveMeth(e){
        this.setState({
            parText:e
        })
    }
}
// 子组件
class ChildDom extends React.Component {
      // 设置默认值
    //defaultProps 可以为 Class 组件添加默认 props,基于 static 的写法
    static defaultProps = {
        name:'默认的姓名'
    }
        
    constructor(props) {
        super(props)
        this.state ={
            cdata:"这是子组件的数据"
        }
    }
   
    componentDidMount() {
    }
    render() {
        return (
            <div >
                <div >姓名:{this.props.name} </div>
                <div>---{this.props.showContent}--- </div>
                <button onClick={()=>this.transValue(this.state.cdata)}> 点击后传递父组件参数</button>
            </div>
        )
    }
    transValue(val){
        console.log(val);
        
        this.props.content(val)
    }
}
export default function () {


    ReactDOM.render(
        <ParentDom />,
        document.querySelector("#example07")
    );
}
