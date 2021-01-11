
// 015 使用插槽
import React  from 'react';
import ReactDOM from 'react-dom';

// 父组件
class ParentDom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            heardData:"头部数据",
            footData:"底部数据",
            contentData:"内容数据"
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <h1>015使用插槽</h1>
                <ChildDom >
                    <div data-position="heard" >这是头部</div>
                    <div data-position="content" >这是内容 丨{this.state.contentData}</div>
                    <div data-position="foot" >这是底部</div>
                </ChildDom>
            </div>
        )
    }
}
// 子组件
class ChildDom extends React.Component {        
    constructor(props) {
        super(props)  
    }
    render() {
        let heard,content,foot;
        this.props.children.forEach(item =>{
            if(item.props['data-position'] == 'heard'){
                heard = item
            }else if(item.props['data-position'] == 'content'){
                content = item
            }else if(item.props['data-position'] == 'foot'){
                foot = item
            }
        })  
        return (
            <div >
                <p>我是子组件</p>
               <div className="heard">
                   {heard}
               </div>
               <div className="content">
                   {content}
               </div>
               <div className="foot">
                   {foot}
               </div>
            </div>
        )
    }
}
export default function () {


    ReactDOM.render(
        <ParentDom />,
        document.querySelector("#example15")
    );
}
