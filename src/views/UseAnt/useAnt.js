// 014请求数据
import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, Button,ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
// 021使用Ant
class UseAnt extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <h1>021以下是使用Ant</h1>
                <div className="tab-list" ></div>
                <DatePicker></DatePicker>
                <Button type="primary">Primary Button</Button>
            </div >
        )
    }
}
export default function () {


    ReactDOM.render(
        <ConfigProvider locale={zhCN}>
            <UseAnt />
        </ConfigProvider>
        ,
        document.querySelector("#example21")
    );
}