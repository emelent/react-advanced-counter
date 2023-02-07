import {useEffect} from "react"
import {useCounterStore} from "../../stores/counterStore"


export function DisplayCount() {
  const {
    isLoading,
    count,
    getCount
  } = useCounterStore()

  useEffect(() => {
    getCount()
  }, [])

  return (
    <h3>
      {isLoading ? "Loading..." : `Counter: ${count}`}
    </h3>
  )
}

