import React, { Component } from 'react';
import UserPanel from '../components/userPanel'
import UserImg from '../assets/images/level_b.png'
import   '../assets/css/ReportCenter.scss'

class ReportCenter extends Component {
    constructor(props){
        super(props)
        this.state={}
        this.panelMsg=['我的报告1','成长报告2','成绩单3','推荐信4','毕业证书5']
        this.userMsg={
            imgSrc:UserImg,
            userName:'小明',
            grade:'8年级'
        }
    }
    onPanelClick=(item,index)=>{
        console.log(item,index)
        // this.currentIndex=index
        this.setState({})
    }
    render(){
        return(
            <div id="userpanel" >
                <UserPanel
                 panelMsg={this.panelMsg}
                 onPanelClick={this.onPanelClick}
                 userMsg={this.userMsg}
                >
                </UserPanel>
                <div className="report_detail">
                 
                </div>
            </div>
        )
    }
}
export default ReportCenter