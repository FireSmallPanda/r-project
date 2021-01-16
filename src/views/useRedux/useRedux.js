// 018使用Redux
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux' 

// 初始化数据 通过动作
const reducer = function (state = { num: 0 }, action) {
    switch (action.type) {
        case "add":
            state.num++
            break;
        case "decrement":
            state.num--
            break;
        default:
            break;
    }
    return { ...state }
}
const store = createStore(reducer)
// 父组件
class UseRedux extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
    }
    render() {
        let state = store.getState()
        return (
            <div>
                <h1>019以下是Redux调用</h1>
                <div>当前的数字:{state.num}</div>
                <div>
                    <button onClick={this.add} >增加</button>
                    <button onClick={this.decrement}>减少</button>
                </div>

            </div>
        )
    }
    
    add() {
        store.dispatch({type:"add"})
    }
    decrement() {
        store.dispatch({type:"decrement"})
    }
}
export default function () {


    ReactDOM.render(
        <UseRedux />,
        document.querySelector("#example19")
    );
    store.subscribe(() => {
        ReactDOM.render(
            <UseRedux />,
            document.querySelector("#example19")
        );
    })
}