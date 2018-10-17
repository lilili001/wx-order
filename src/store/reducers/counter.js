import { handleActions } from 'redux-actions'
import { INCREMENT, DECREMENT, ASYNC_INCREMENT } from '../types/counter'

export default handleActions({
  ['INCREMENT'] (state,payload) {
    return {
      ...state,
      num: state.num + 1
    }
  },
  ['DECREMENT'] (state,payload) {
    return {
      ...state,
      num: state.num - 1
    }
  },
  ['ASYNC_INCREMENT'] (state, action) {
    console.log('ASYNC_INCREMENT',state,action)
    return {
      ...state,
      asyncNum: state.asyncNum + action.payload
    }
  }
}, {
  num: 0,
  asyncNum: 0
})