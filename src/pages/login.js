import React, { Component } from 'react';
const obj={
    a:'123',
    b:'heheda'
}
function tick(obj,e){
   alert(obj)
   console.log(e)
}
function Welcome (props){
    return <h1>hello ,{props.name}，{props.age}</h1>
}

function UserGreeting(){
    return (
       <h1>hello user ...</h1>
    )
}
function GuestGreeting(){
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&
          <h2>
            You have {unreadMessages.length} unread messages.
          </h2>
        }
      </div>
    );
  }

function Test(props){
  const state =props.isTest

  return (
    <div>hello {state}</div>
  )
}


class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            isToggle:true,
            isLoggedIn:false
        }
        this.hellostate={
          isTest:'ni hao'
        }
        this.stringTest='123333'
        // this.handleClick=this.handleClick.bind(this)
        console.log(this)
        this.myRef = React.createRef();
    }
    handleClick(e){
        e.persist()
        console.log(e)
        this.setState((a)=>({
            isToggle:!a.isToggle
        }))
    }
   
    render(){
        const messages = ['React', 'Re: React', 'Re:Re: React'];
        
        return(
            <div className='calendar' >
                <button onClick={(e)=>this.handleClick(e)} >
                    {this.state.isToggle?'ON':'OFF'}
                </button>

                <Test isTest={this.stringTest}></Test>

                <Greeting isLoggedIn={true} />,
                <Mailbox unreadMessages={messages} />,
            </div>
        )
    }
}
export default Login 