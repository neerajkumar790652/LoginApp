import React, { useContext, useState } from 'react';
import { Context } from './MyContext';


var style={
    width:"300px",
    boxShadow:"0 0 10px black",
    padding:"30px",
    margin:"150px auto",
    textAlign:"center"

}
const Login = (props) => {
    const {setIsLogin} = useContext(Context)
  
    const {userName,setUserName}=useContext(Context);
    const handlerAuth = ()=>{
        if(userName.name ==="Neeraj" && userName.password ==="Neeraj@123"||userName.name ==="admin" && userName.password ==="admin@123"){
          setIsLogin(true);
        }
        else{
            alert("enter proper authentications")
        }
    }
  return (
    <div style={style}>
      <h3>Login Form</h3>
      <div>
        <input type='text' placeholder='User Name' onChange={(e)=>{setUserName({...userName,name:e.target.value})}}/>
      </div>
      <br/>
      <div>
        <input type='passowrd' placeholder='Password'onChange={(e)=>{setUserName({...userName,password:e.target.value})}}/>
      </div>
      <br/>
      <div>
        <button onClick={handlerAuth}>Login</button>
      </div>
    </div>
  )
}

export default Login
