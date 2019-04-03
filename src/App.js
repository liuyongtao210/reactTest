import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello,{test} from './pages/hello.js'
import Button from 'antd/lib/button';
import './App.css';
// import _ from 'loadsh'
import Login from './pages/login'
import Calendar from './components/calendar'
import TaskCenter from './pages/TaskCenter'

import ReportCenter from './pages/ReportCenter'

class App extends Component {
  constructor(props){
    super(props)
    this.calendar={
      weekList:['周一','周二','周三','周四','周五','周六','周日',],
      date:new Date(),
      haveDate:['2019/03/05','2019/03/29','2019/03/25','2019/04/25','2019/04/15'],
      todayTxt:'今'
    }
    this.state = {
        isShowList3: 'hello 通信',
    };
  }

  handleDayClick=(e)=>{//子组件点击每天的回调函数处理 在这里可以请求后台数据等操作
      console.log(e)
  }
  render() {
    return (
    <div>
    <Login></Login>
    <Hello></Hello>
      测试修改
      <Button type="primary">Button</Button>
      <Button type="dashed">Dashed</Button>
      <Calendar dateObj={this.calendar} handleDayClick={this.handleDayClick}></Calendar>
      <TaskCenter></TaskCenter>
      <ReportCenter></ReportCenter>
      <div style={{marginBottom: '120px', color: 'red',height:'100px'}}></div>
    </div>
    );
  }
}
// <div className="App">
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
// </div>
export default App;
