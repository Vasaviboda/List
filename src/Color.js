import React, { useState } from 'react'
import './Color.css'

function State() {

  const[color, setColor] = useState(["black","white"])

  function Green(){
    setColor([...color,"Green"])
  }
  function Orange(){
    setColor([...color, "Orange"])
  }

  function RemoveItem (){
    setColor(color.slice(0,-1))

  }


  return (
    <>
      <center>
      <h1>State of Colors</h1>
        <div className="container">
          
      <button onClick={Green}>Add Green</button>
        <button onClick={Orange}>Add Orange</button>
        <br />
        <button  id="bnt" onClick={RemoveItem}>Remove Last item</button>
        {color.map((x,index)=> <li key={index}>{x}</li>)}
      </div>

      </center>
      
      
        
    </>
  )
}

export default State;