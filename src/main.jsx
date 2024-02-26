import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const DATA =[


  {id:"todo-0", name:"Eat", comleted:true},
  {id:"todo-1", name:"Sleep", comleted:false},
  {id:"todo-2", name:"Repeat", comleted:false}
];



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks = {DATA} />
   
  </React.StrictMode>,
)
