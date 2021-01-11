// 014请求数据
import React from 'react';
import ReactDOM from 'react-dom';
import http from '../../util/http';
import './sendAxios.less';
// 父组件
class SendAxios extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            resData: {
                dataName: "为找到",
                pic: ""
            },
            tabList: [
                { text: "商品", name: "goods" },
                { text: "列表", name: "list" },
                { text: "时间", name: "date" },
            ],
            selectTab: "goods" // 当前选中的内容
        }
    }
    componentDidMount() {
        this.getData()
    }
    render() {
        return (
            <div>
                <h1>014React导入Axios(以下是请求到的数据)</h1>
                <div className="tab-list" >
                    {this.state.tabList.map((item, index) => {
                        return (
                            <div key={index} onClick={e=>{ this.setSelectTab(e,item.name) }} className={ 'tab-item '+ (this.state.selectTab == item.name ? "isActive" : "") } >{item.text}</div>
                        )
                    })}
                </div>
                <div>{this.state.resData.dataName}</div>
                <img src={this.state.resData.pic} style={{ width: '160px', height: '160px' }} ></img>
            </div >
        )
    }
    async getData() {
        let res = await http.getSystemDicts()
        this.setState({
            resData: res.data
        })
    }
    /**
     * 设置选中tab
     * @param {*} e 
     * @param {*} name 
     */
    setSelectTab(e,name){
        this.setState({
            selectTab:name
        })
        this.getData()
    }
}
export default function () {


    ReactDOM.render(
        <SendAxios />,
        document.querySelector("#example14")
    );
}