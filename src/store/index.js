import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
const useStore = defineStore('main', {
  // other options...
  state: () => {
    return {
      counter: 0,
      name: '小米',
      isAdmin: true
    }
  },
  actions: {
    changeName(str) {
      this.name = str
    }
  }
})

export default useStore
