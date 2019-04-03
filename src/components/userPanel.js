import React, { Component } from 'react';
// import './userPanel.css'
import mycss from './userPanel.scss'
console.log(mycss)
function UserMsg(props){
    const userMsg=props.userMsg
    const imgSrc=userMsg.imgSrc
    const userName =userMsg.userName
    const grade =userMsg.grade
    const List=(
        <div className="user_msg">
            <div>
                <div className="headportrait"><img src={imgSrc} alt=""/></div>
                <div className="user_name">{userName}</div>
                <div className="user_grade">{grade}</div>
            </div>
        </div>
    )
    
    return List
}

function PanelList(props) {
    const panelMsg=props.panelMsg
    const onPanelClick=props.onPanelClick
    const currentIndex=props.currentIndex
    const List=(
        panelMsg.map((item,index)=>
        <div className={`panel_item ${currentIndex==index&&'panel_item_cur'}`} key={item}  onClick={(e)=>{onPanelClick(item,index)}}>
            {item}
        </div>
        )
    )
    return (
        <div className="panel_list">
            {List}
        </div>
    )
}

class UserPanel extends Component {
    constructor(props){
        super(props)
        console.log(props)
        this.state={}
        this.panelMsg=['我的报告','成长报告','成绩单','推荐信','毕业证书']
        this.currentIndex=0
    }
    componentDidMount(){
        this.panelMsg=this.props.panelMsg
        if(this.props.currentIndex){
            this.currentIndex=this.props.currentIndex
        }
        this.setState({})
    }
    onPanelClick=(item,index)=>{
        this.currentIndex=index
        this.setState({})
        if(this.props.onPanelClick){
            this.props.onPanelClick(item,index)
        }
    }
    render(){
        return(
            <div id="user_all">
                <div className="user_panel">
                    <UserMsg userMsg={this.props.userMsg}></UserMsg>
                    <PanelList panelMsg={this.panelMsg} onPanelClick={this.onPanelClick} currentIndex={this.currentIndex}></PanelList>
                </div>
            </div>
            
        )
    }
}
export default UserPanel