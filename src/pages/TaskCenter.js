import React, { Component } from 'react';
import '../assets/css/TaskCenter.css'
import levelA from '../assets/images/level_a.png'
import levelB from '../assets/images/level_b.png'
function TaskCondition(props){
    const List =(
        <div className="task_condition">
            <span>{props.txt}</span>
            <div className="condition_btn" onClick={props.onFilter}>{props.btnTxt}</div>
        </div>
    )
    return List
}
function TaskItem(props){
    const taskData=props.taskData
    const isCurrentIndex=props.isCurrentIndex
    const List =(
        taskData.map((item,index)=>
           {
               return (
                <div key={item+index} className={['task_item',isCurrentIndex===index&&'task_item_isSelect'].join(' ')} onClick={(e)=>{props.onSelectTask(index,item)}}>
                    <div 
                        className={['task_type',item.taskType===1&&'task_type_1',item.taskType===2&&'task_type_2'].join(' ')}
                    >
                    {item.taskType===1?'任务':'活动'}
                    </div>
                    <div className="task_name">{item.title}</div>
                    <div className="task_list_con">
                        <div className="t_list_left">开始时间:</div>
                        <div>{item.startTime}</div>
                    </div>
                    <div className="task_list_con">
                        <div className="t_list_left">结束时间:</div>
                        <div>{item.endTime}</div>
                    </div>
                    <div className="task_list_con">
                        <div className="t_list_left">活动地点:</div>
                        <div>{item.activeSpace}</div>
                    </div>
                    <div className="task_list_con task_list_bottom">
                        <div className="t_list_left">活动内容:</div>
                        <div>{item.activeContent}</div>
                    </div>
                </div>
               )
           }
        )
    )
    return List
}
function setNumArr(num){
    if(num ===0){
        return false
    }
    let arr=[]
    for(let i=0;i<num;i++){
        arr[i]=(i+1).toString()
    }
    return arr
}
function ListDetail(props){
    const name =props.name
    const detail =props.detail
    let colorRed=props.colorRed
    if(!colorRed){
        colorRed=''
    }
    const List =(
        <div className="task_bottom_bor task_con_list"><span>{name}:</span> <span className={`col_three ${colorRed}`}>{detail}</span></div>
    )
    return List
}
function Comment(props){
    const level=props.level
    const arr= setNumArr(5)
    const title =props.title
    const className ='level_img'  
    const imgList =arr.map((item,index)=>{
      
        if(index<level){
            return (
                <img key={item} className={className} src={levelB} alt=""/>
             )
        }else{
            return (
                <img key={item} className={className} src={levelA} alt=""/>
             )
        }
    })
    const List =(
            <div className="grade_list">
                <span>{title}</span>
                <div>{imgList}</div>
            </div>
    )
    return List 
}
function UpLoadTask(props){
    const onFileChange =props.onFileChange
    const inputValue=props.inputValue
    const List =(
        <div className="up_load_task">
            <div className="up_left">提交任务:</div>
            <div>
            <input type="file" id="uploadfile" className="uploadfile" onChange={(e)=>{onFileChange(e)}}/> 
            <label htmlFor="uploadfile" className="label_btn">
                <div className="show_file_name">{inputValue}</div>
                <div className="file_btn">本地上传</div>
            </label>
                <div className="submit_btn">提交</div>
            </div>
        </div>
    )
    return List
}

function TaskDetail(props){
    const onFileChange=props.onFileChange
    const inputValue=props.inputValue
    const element =(
        <div className="task_content">
            <div className="task_bottom_bor task_detail_title">周六郊游活动</div>
            <div className="task_bottom_bor task_con_title">活动详情</div>
            <ListDetail name={'任务类型'} detail={'活动，任务'}></ListDetail>
            <div className="task_bottom_bor task_con_list2">
            <span className="task_dsc">任务描述:</span>
            <div className="task_dsc_con">
                <div>活动地点:中关村</div>
                <div>活动负责人:张三</div>
                <div>联系电话:13355556666</div>
            </div>
            </div>
            <ListDetail name={'开始时间'} detail={'2019-01-01 14：00'}></ListDetail>
            <ListDetail name={'结束时间'} detail={'2019-01-01 14：00'}></ListDetail>
            <div className="task_bottom_bor task_con_list"><span>详情下载:</span> <span className="upload_data">课前预习资料.课程内容</span></div>
            <UpLoadTask inputValue={inputValue} onFileChange={onFileChange}></UpLoadTask>

            <div className="task_bottom_bor task_con_title">任务点评</div>
            <ListDetail name={'点评教师'} detail={'张三老师'}></ListDetail>
            <ListDetail name={'点评时间'} detail={'2019-01-01 14：00'}></ListDetail>
            <div className="task_bottom_bor grade_list_con">
                <Comment title={'学生表现'} level={3}></Comment>
                <Comment title={'回答问题情况'} level={4}></Comment>
                <Comment title={'课后作业完成情况'} level={2}></Comment>
            </div>
            <ListDetail name={'评语'} detail={'作业完成很好'}></ListDetail>
            <ListDetail name={'评语'} detail={'A'} colorRed={'classRed'}></ListDetail>
        </div>
    )

    return element
}
function PageNation(props){
    const changePage=props.changePage
    const changeIndex=props.changeIndex
    const List =(
        <div className="page_con">
            <div className={`page_change ${changeIndex==0&&'page_change_cur'}`}  onClick={(e)=>{changePage(0)}}>上一页</div>
            <div className={`page_change ${changeIndex==1&&'page_change_cur'}`}  onClick={(e)=>{changePage(1)}}>下一页</div>
        </div>
    )
    return List
}

class TaskCenter extends Component {
    constructor(props){
      super(props)
      this.state = {
          isCurrentIndex:0,
          inputValue:'上传文件',
          changeIndex:1
      }
      this.taskObj=[
          {
              title:'周六郊游活动1',
              startTime:'2019-01-05 14：00',
              endTime:'不限',
              activeSpace:'北京',
              activeContent:'跑步希望大家需要参与，谢谢...',
              taskType:1,//活动
          },
          {
            title:'周六郊游活动2',
            startTime:'2019-01-05 14：00',
            endTime:'不限',
            activeSpace:'北京',
            activeContent:'跑步希望大家需要参与，谢谢...',
            taskType:2,//任务
        },
        {
            title:'周六郊游活动3',
            startTime:'2019-01-05 14：00',
            endTime:'不限',
            activeSpace:'北京',
            activeContent:'跑步希望大家需要参与，谢谢...',
            taskType:1,//活动
        }
        ,
        {
            title:'周六郊游活动3',
            startTime:'2019-01-05 14：00',
            endTime:'不限',
            activeSpace:'北京',
            activeContent:'跑步希望大家需要参与，谢谢...',
            taskType:1,//活动
        }
      ]
    }

    onFilter=(e)=>{
        console.log(e)
    }
    onSelectTask=(index,item)=>{
       this.setState({
        isCurrentIndex:index
       })
       console.log(item)
    }
    onFileChange=(e)=>{
            this.setState({
                inputValue:e.target.value
            })
    }
    changePage=(e)=>{
        this.setState({
            changeIndex:e
        })
    }
    render() {
      return (
      <div className="task_center">
        <div className="task_list">
            <TaskCondition txt="时间筛选" btnTxt="筛选" onFilter={(e)=>this.onFilter('筛选条件')}></TaskCondition>
            <TaskItem taskData={this.taskObj} isCurrentIndex={this.state.isCurrentIndex}  onSelectTask={this.onSelectTask}></TaskItem>
            <PageNation changeIndex={this.state.changeIndex} changePage={this.changePage}></PageNation>
        </div>
        <div className="task_detail">
            <TaskDetail inputValue={this.state.inputValue} onFileChange={this.onFileChange}></TaskDetail>
        </div>
      </div>
      );
    }
  }

  export default TaskCenter;
  
