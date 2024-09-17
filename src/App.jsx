import { useReducer, useState } from 'react'
import './App.css'

const Function = (state , action)=>{
  switch(action.type){
     case "classOne" :
    return  state = true
    case "classTow" :
      return state = false
  }
}

function App() {
  const [animation, dispath] = useReducer(Function , false)

  return (
    <>
    <div className="flex-btn">
     <button className={animation ? "animation" : "animation2"} onClick={()=>{dispath({type : "classOne"})}}>❌</button>
     <button className={animation ? "animation2" : "base"}  onClick={()=>{dispath({type : "classTow"})}}>✅</button>
    </div>
    </>
  )
}

export default App
