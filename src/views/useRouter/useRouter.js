// 018使用路由
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom';
// router使用
class ParentDom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "张三"
        }
    }
    render() {

        return (
            <div>
                <h1>018路由</h1>
                <Router>
                    <div>
                        <Link to="/goods" >去商品</Link>
                        <Link to={{ pathname: "/user", state: { user: "1" } }} >去用户</Link>
                    </div>
                    <Route exact path="/goods" component={Goods}></Route>
                    <Route exact path="/user" component={User}></Route>
                    <Route exact path="/userInfo" component={UserInfo}></Route>
                    <Route exact path="/userInfo/:userName" component={UserInfo}></Route>
                </Router>
            </div>
        )
    }

}

class User extends React.Component {
    constructor(props) {
        super(props)
        console.log('props', props)
    }
    render() {

        return (
            <div>
                用户页面 state中读取的内容{this.props.location.state ? this.props.location.state.user : "暂无数据"}
                <div onClick={(e) => { this.doPath(e) }}  >跳转用户详情页面</div>
            </div>
        )
    }
    doPath(e) {
        this.props.history.push("/userInfo", { userName: "李四" })
        // this.props.history.push('/re');
        // this.props.history.push("/re",this.state)
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
class UserInfo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let userName;

        if (this.props.match.params.userName) {
            userName = (<span>{this.props.match.params.userName}</span>)
        } else {
            
            userName = (<span>{this.props.location.state ? this.props.location.state.userName : "无用户数据"}</span>)
        }
        
        return (
            <div>
                <div>这是用户详情页面
                    {userName}
                </div>
                <div onClick={(e) => { this.back(e) }}  >后退</div>
            </div>

        )
    }
    back(e) {
        this.props.history.go(-1)
    }
}
export default function () {
    ReactDOM.render(
        <ParentDom />,
        document.querySelector("#example18")
    );
}