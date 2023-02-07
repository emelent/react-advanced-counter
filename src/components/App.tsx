import "./App.css"
import React, {useState} from "react"
import {ModifyCounter} from "./Counter/ModifyCounter"
import {DisplayCount} from "./Counter/DisplayCounter"

function App() {

  return (
    <div className="App">
        <DisplayCount />
        <ModifyCounter/>
      <br/>
    </div>
  )
}

export default App