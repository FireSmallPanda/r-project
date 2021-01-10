// 014请求数据
import React from 'react';
import ReactDOM from 'react-dom';
import http from '../../util/http';
// 父组件
class SendAxios extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            resData: {
                dataName: "为找到",
                pic: ""
            }
        }
    }
    componentDidMount() {
        this.getData()
    }
    render() {
        return (
            <div>
                <h1>014React导入Axios(以下是请求到的数据)</h1>
                <div>{this.state.resData.dataName}</div>
                <img src={this.state.resData.pic} style={{width:'160px',height:'160px'}} ></img>
            </div >
        )
    }
    async getData() {
        let res = await http.getSystemDicts()
        this.setState({
            resData: res.data
        })
    }
}
export default function () {


    ReactDOM.render(
        <SendAxios />,
        document.querySelector("#example14")
    );
}