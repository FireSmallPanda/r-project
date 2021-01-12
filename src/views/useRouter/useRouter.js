// 018使用路由
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// router使用
class ParentDom extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {

        return (
            <div>
                <h1>018路由</h1>
                <Router>
                    <div>
                        <Link to="/goods" >去商品</Link>
                        <Link to="/user" >去用户</Link>
                    </div>
                    <Route path="/goods" component={Goods}></Route>
                    <Route path="/user" component={User}></Route>
                </Router>
            </div>
        )
    }
}

class User extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {

        return (
            <div>
                用户页面
            </div>
        )
    }
}
class Goods extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {

        return (
            <div>
                产品页面
            </div>
        )
    }
}
export default function () {
    ReactDOM.render(
        <ParentDom />,
        document.querySelector("#example18")
    );
}