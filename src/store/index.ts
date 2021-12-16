import { createStore } from 'vuex'

const defaultState = {
  count: 0
}
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state: typeof defaultState) {
      state.count++
    }
  }
})
export default store;