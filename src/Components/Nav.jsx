import React,{useContext} from 'react'
import './nav.css';
import { Context } from './MyContext';

const Nav = (props) => {
    const {setIsLogin,userName}=useContext(Context);
    console.log(userName)
  return (
    <div className='nav'>
        <div id="title">
            <h2>React Context</h2>
        </div>
        <div id="menu">
         <a href=''>Home</a>
         <a href=''>Profile</a>
         <a href=''>Products</a>
         <a href=''>Support</a>
         <button onClick={()=>setIsLogin(false)}>Logout</button>
         <span style={{color:"yellow",fontSize:"25px",marginLeft:"50px"}}>{userName.name}</span>
        </div>
    </div>
   
   
      
    
  )
}

export default Nav
