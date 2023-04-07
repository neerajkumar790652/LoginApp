import { createContext,useState } from "react";
 export const Context=createContext()
 const CustomProvider =({children})=>{
    const [isLogin,setIsLogin]=useState(false);
    const [userName,setUserName]=useState({
        name:"",
        password:""
    })

    return(
        <Context.Provider value={{isLogin,setIsLogin,userName,setUserName}}>
           {children}
        </Context.Provider>
    )
 }
 export default CustomProvider;