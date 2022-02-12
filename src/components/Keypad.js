// Code Keypad Component Here
import React from 'react'

function Keypad() {

    function inputHandler(){
        console.log("Entering password...")
    }
  return (
    <div Keypad>
        <input type="password" 
        onChange={inputHandler}/>
    </div>
  )
}

export default Keypad