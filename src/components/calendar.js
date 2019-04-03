import React, { Component } from 'react';
import './calendar.css'
import PropTypes from 'prop-types';
// import _ from 'loadsh'

// 周列表
function WeekList(props){
    const week =props.week
    const list =week.map((item)=> 
        <div className="every_day" key={item}>{item}</div>
    )
    return (
       <div className="week_list">{list}</div>
    )
}

function DayList(date){//处理时间方法
    // 设置月份数组对象：
    let dateArray=[]

    // 获取初始化时间
    let initDate =new Date(date);
    let year =initDate.getFullYear();
    let month =initDate.getMonth()+1;
    let day =initDate.getDate();
    // 获取初始化时间当月有多少天：
    let haveDay=new Date(year,month,0).getDate()
    // console.log(initDate)

    // 获取当前时间
    let currentDate= new Date()//当前时间 
    let currentYear =currentDate.getFullYear();
    let currentMonth =currentDate.getMonth()+1;
    let currentDay =currentDate.getDate();

    
    // 获取初始化时间的上个月：
    let prevDate =new Date(year,month-1,0)
    let prevYear =prevDate.getFullYear();
    let prevMonth=prevDate.getMonth()+1;
    let prevDay= prevDate.getDate();
    // 获取上个月最后一天是周几
    let preMonthLastWeek =prevDate.getDay()==0?7:prevDate.getDay();


    // 获取初始化时间下个月：
    let nextDate=new Date(year,month+1,0);
    let nextYear =nextDate.getFullYear();
    let nextMonth =nextDate.getMonth()+1;
    // let nextDay =nextDate.getDate();
    
    for(let i=0;i<42;i++){
        let dayObj={
            year:'',
            month:'',
            day:'',
            timeStamp:'',
            isCurrentMonth:false,
            isCurrentDay:false,
            haveDate:false
        }
        dateArray.push(dayObj)
    }
    // 设置初始化时间数据：
    for(let i=0;i<haveDay;i++){
        let j=preMonthLastWeek+i
        dateArray[j].year=year;
        dateArray[j].month=month;
        dateArray[j].day=i+1;
        dateArray[j].timeStamp=new Date(year,month,i+1).getTime();
        dateArray[j].isCurrentMonth=true;
        if(currentYear==year&&currentMonth==month&&currentDay==dateArray[j].day){
            dateArray[j].isCurrentDay=true;
        }
    }
     // 设置初始化时间的上个月的数据：
     for(let i=0;i<preMonthLastWeek;i++){
        dateArray[i].year=prevYear;
        dateArray[i].month=prevMonth;
        dateArray[i].day=(prevDay-preMonthLastWeek+1)+i;
        dateArray[i].timeStamp=new Date(prevYear,prevMonth,(prevDay-preMonthLastWeek+1)+i).getTime()
    }
    // 设置初始化时间的下个月的数据：
    for(let i=0;i<(42-preMonthLastWeek-haveDay);i++){//设置日历数组中下个月的显示数据
        let j =preMonthLastWeek+haveDay+i
        dateArray[j].year=nextYear;
        dateArray[j].month=nextMonth;
        dateArray[j].day=i+1;
        dateArray[j].timeStamp=new Date(nextYear,nextMonth,i+1).getTime()
    }
    // console.log(dateArray)
    return dateArray
}
class Calendar extends Component{
    constructor(props){
        super(props)
        // console.log(props.dateObj)
        this.dateObj={
            weekList:['周一','周二','周三','周四','周五','周六','周日',],
            date:new Date().getTime(),
            haveDate:[],
            todayTxt:''
        }
        // this.state={
        //     weekList:['周一','周二','周三','周四','周五','周六','周日',],
        //     date:new Date().getTime()
        // }
        this.year=2019;
        this.month=1;
        this.clcikDay={
            year:'',
            month:'',
            day:''
        }
    }
    // static propoTypes={//定义触发事件等
    //     handleDayClick:PropTypes.func.isRequired
    // }
    componentDidMount(){
        // if(this.dateObj){
        //     this.setState((prevState)=>{
        //         return {
        //             weekList:this.dateObj.weekList,
        //             date:this.dateObj.date
        //         }
        //     })
        // }
        this.dateObj=Object.assign({},this.dateObj,this.props.dateObj)
        this.setState({})
    }
    onChangeMonth=(i)=>{
        if(i==0){
            this.month --
        }else{
            this.month++
        }
        this.dateObj.date=new Date(this.year,this.month,0)
        this.setState({})
        if(this.props.handleDayClick){
            this.props.handleDayClick(new Date(this.year,this.month,0))
        }
    }
    onClickDay=(item)=>{
        if( this.props.handleDayClick){
            this.props.handleDayClick(item)
        }
        this.clcikDay.year=item.year
        this.clcikDay.month=item.month
        this.clcikDay.day=item.day
        this.setState({})
    }
    render(){
        const date=  DayList(this.dateObj.date)
        const haveDate=this.dateObj.haveDate
        this.year=new Date(this.dateObj.date).getFullYear()
        this.month=new Date(this.dateObj.date).getMonth()+1
        const List =(//jsx 语法 生产一个模板
            date.map((item,index)=>{
                return (
                    <div 
                    className='every_day' 
                    key={index+item.timeStamp} 
                    onClick={(e)=>this.onClickDay(item)}>
                    <span 
                        className={['day_item',!item.isCurrentMonth?'other_month':'',item.isCurrentDay?'current_day':'',(this.clcikDay.year==item.year&&this.clcikDay.month==item.month&&this.clcikDay.day==item.day)?'isClick':''].join(' ')}>
                        {item.isCurrentDay&&this.dateObj.todayTxt?this.dateObj.todayTxt:item.day}
                        {
                            haveDate.map((its)=>{
                                if(item.year==new Date(its).getFullYear()&&item.month==(new Date(its).getMonth()+1)&&item.day==new Date(its).getDate()){
                                    return (
                                        <b className="red_tip" key={its}></b>
                                    )
                                }
                            })
                        }
                    </span>
                 </div>
                )
            }   
            )
         )
        return(
            <div className='calendar'>
                <div className="change_month">
                    <div className="change_tip" onClick={(e)=>this.onChangeMonth(0)}>上</div>
                        <div> {this.year}年{this.month}月</div>
                    <div className="change_tip"  onClick={(e)=>this.onChangeMonth(1)} >下</div>
                </div>
                <WeekList week={this.dateObj.weekList}></WeekList>
                <div className="month_line"></div>
                <div className="every_day_box">
                        {List}
                </div>
            </div>
        )
    }
}
export default Calendar 