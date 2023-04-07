import { useContext } from 'react'

import './App.css'
import Home from './Components/Home';
import Login from './Components/Login';
import Nav from './Components/Nav';
import { Context } from './Components/MyContext';

function App(props) {
 const {isLogin} = useContext(Context);


  return (
    <div className="App">
     {
      isLogin?<div><Nav/><Home/></div>:<Login/>
     }
      
      
    </div>
  )
}

export default App
