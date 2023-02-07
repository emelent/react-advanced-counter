const defaultSuccessRate = 0.7
const failMessage = "You failed to make a difference."

class CounterApi {

  private count: number

  constructor() {
    this.count = 0
  }

  public getCount = (): Promise<number> =>
    new Promise(resolve => {
      setTimeout(
        () => {
          resolve(this.count)
        },
        200
      )
    })

  public incrementCount = (successRate: number = defaultSuccessRate): Promise<number> =>
    new Promise((resolve, reject) => {
      let isSuccessful = Math.random() > (1.0 - successRate)
      setTimeout(
        () => isSuccessful ? resolve(++this.count) : reject(failMessage),
        600
      )
    })

  public decrementCount = (successRate: number = defaultSuccessRate): Promise<number> =>
    new Promise((resolve, reject) => {
      let isSuccessful = Math.random() > (1.0 - successRate)
      setTimeout(
        () => isSuccessful ? resolve(--this.count) : reject(failMessage),
        600
      )
    })
}

export const counter = new CounterApi()