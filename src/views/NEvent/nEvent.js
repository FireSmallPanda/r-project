// 008事件
import React from 'react';
import ReactDOM from 'react-dom';
// 父组件
class ParentDom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showText:'xxx'
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <h1>008以下是事件点击书写</h1>
                <form action="http://www.baidu.com">
                    <button onClick={(e)=>{ this.event(this.state.showText,e)}}>事件点击按钮</button>
                </form>
            </div>
        )
    }
    event(value,e){
        console.log('事件的Value是',value)
        // 阻止默认事件
        e.preventDefault();
    }
}
export default function () {


    ReactDOM.render(
        <ParentDom />,
        document.querySelector("#example08")
    );
}