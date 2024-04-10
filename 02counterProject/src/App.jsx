//   this below is the hook useState
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 5;
  // instead use hooks
  // useState hook  
  let [count , setcount] = useState(23)

  const addValue = () => {

    if(count == '30') {
      return
    }
    count = count + 1; // this will not work or never update the value on the showing Ui window
    //using hooks
    console.log(count)
    setcount(count)
  }

  const removeValue = () => {
    if(count == '0') {
      return
    }
    count = count - 1; 
    setcount(count)
  }
  return (
    <>
    <h1>CHAI PEELO GUYZZZ</h1>
    <h2>Counter is : {count}</h2>

    <button 
    onClick={addValue}
    >Update Couter : {count} </button>
    <br />
    <button
    onClick={removeValue}>Decrease Couter : {count} </button>

    </>
  )
}

export default App
