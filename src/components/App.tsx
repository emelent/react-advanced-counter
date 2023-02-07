import "./App.css"
import React, {useState} from "react"
import {Counter, LocalCounter} from "./Counter"

let appRenders = 0
function App() {

  console.log("AppRenders:", ++appRenders)
  const [isCounterVisible, setCounterVisibility] = useState(true)
  return (
    <div className="App">
      <div style={{display: "flex", flexFlow: "row", gap: 24}}>
        {isCounterVisible && <Counter/>}
        <LocalCounter />
      </div>
      <br/>
      <button onClick={() => setCounterVisibility(!isCounterVisible)}>
        Toggle Counter Visible
      </button>
    </div>
  )
}

export default App