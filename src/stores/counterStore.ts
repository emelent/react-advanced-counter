import {counter} from "../api/CounterApi"
import {create} from "zustand"

interface CounterState {
  isLoading: boolean
  count: number
  error: string
  getCount: () => void
  incrementCount: () => void
  decrementCount: () => void

}

interface LocalCounterState {
  count: number,
  increment: () => void
}
export const useLocalCounterStore = create<LocalCounterState> ((set) => ({
  count: 0,
  increment: () => set(state => ({count: state.count + 1}))
}))

export const useCounterStore = create<CounterState>((set) => ({
  isLoading: false,
  count: 0,
  error: "",


  getCount: () => {
    set(_ => ({isLoading: true}))
    counter.getCount()
      .then(count => set(state => ({count, isLoading: false})))
  },

  incrementCount: () => {
    set(_ => ({error: "", isLoading: true}))
    counter.incrementCount()
      .then(count => set(state => ({count, isLoading: false})))
      .catch(error => set(state => ({error, isLoading: false})))
  },

  decrementCount: () => {
    set(_ => ({error: "", isLoading: true}))
    counter.decrementCount()
      .then(count => set(state => ({count, isLoading: false})))
      .catch(error => set(state => ({error, isLoading: false})))
  }
}))

