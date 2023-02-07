import {useCounterStore} from "../../stores/counterStore"


export function ModifyCounter() {
  const {
    isLoading,
    error,
    decrementCount,
    incrementCount
  } = useCounterStore()

  return (
    <div style={{flex: 1}}>
      <button
        disabled={isLoading}
        onClick={incrementCount}
      >Increment</button>
      <button
        disabled={isLoading}
        onClick={decrementCount}>
        Decrement
      </button>
      <div style={{height: 48}}>{error}</div>
    </div>
  )
}

