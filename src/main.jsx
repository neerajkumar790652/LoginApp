import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import CustomProvider from './Components/MyContext';

ReactDOM.createRoot(document.getElementById('root')).render(
 <CustomProvider>
  <App />
 </CustomProvider>
    
  ,
)
