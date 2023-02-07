import {counter} from "../api/CounterApi"
import {create} from "zustand"

interface CounterState {
  // state
  isLoading: boolean
  count: number
  error: string

  // actions
  getCount: () => void
  incrementCount: () => void
  decrementCount: () => void
}

export const useCounterStore = create<CounterState>((set) => ({
  // initial value
  isLoading: false,
  count: 0,
  error: "",


  // actions

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

