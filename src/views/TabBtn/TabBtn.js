
// 002 组件渲染
import React from 'react';

import './TabBtn.css';
import ReactDOM from 'react-dom';

// 类组件
class TabBtn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            btnValue: "1" // 按钮的value
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div >
                <div>06aTab切换练习{this.state.btnValue}</div>
                <button className={'tab-btn ' + (this.state.btnValue==='1'?'active':'') }  onClick={this.selectClick.bind(this, '1')} >按钮一</button>
                <button className={'tab-btn '+(this.state.btnValue==='2'?'active':'') }  onClick={this.selectClick.bind(this, '2')} >按钮二</button>
                <div className={'tab-content '+(this.state.btnValue==='1'?'active':'') } >内容1</div>
                <div className={'tab-content '+(this.state.btnValue==='2'?'active':'') } >内容2</div>
            </div>
        )
    }
    selectClick = (value) => {
        // debugger
        this.setState({
            btnValue:value
        })    
    }

}
export default function () {


    ReactDOM.render(
        <TabBtn />,
        document.querySelector("#example06a")
    );
}
