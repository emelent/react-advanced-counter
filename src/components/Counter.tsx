import React, {useEffect} from "react"
import {useCounterStore, useLocalCounterStore} from "../stores/counterStore"


let counterRenders = 0
let localCounterRenders = 0

export function LocalCounter() {

  const {count, increment} = useLocalCounterStore()
  const isLoading = useCounterStore(state => state.count)
  console.log("LocalCounterRenders:", ++localCounterRenders)

  return (
    <div style={{flex:1}}>
      <h3>Local Count: {count}</h3>
      <p>IsLoading: {isLoading}</p>
      <button onClick={increment}>Local Increment</button>
    </div>
  )
}

export function Counter() {
  const {
    isLoading,
    count,
    error,
    getCount,
    decrementCount,
    incrementCount
  } = useCounterStore()

  console.log("CounterRenders:", ++counterRenders)
  useEffect(() => {
    getCount()
  }, [])

  return (
    <div style={{flex: 1}}>
      <h3>
        {isLoading ? "Loading..." : `Counter: ${count}`}
      </h3>

      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <div style={{height: 48}}>{error}</div>
    </div>
  )
}

