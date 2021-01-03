// 009条件渲染
import { func } from 'assert-plus';
import React from 'react';
import ReactDOM from 'react-dom';


let IsLogin = function(){
    return (<h2>已经登录，姓名是：XXX</h2>)
}

let NoLogin = function(){
    return (<h2>未登录，请登录</h2>)
}
// 条件渲染节点
class ParentDom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin:false // 是否登录
        }
    }
    componentDidMount() {
    }
    render() {
        let element = null
        if(this.state.isLogin){
            element = (<IsLogin></IsLogin>)
        }else{
            element = (<NoLogin></NoLogin>)
        }
        return (
            <div>
                <h2>009以下是条件渲染书写</h2>
                {element}
                <h2>条件渲染结束</h2>
            </div>
        )
    }
}
export default function () {
    ReactDOM.render(
        <ParentDom />,
        document.querySelector("#example09")
    );
}