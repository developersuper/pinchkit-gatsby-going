import actionTypes from 'redux/actionTypes'

let orderData = typeof window !== 'undefined' && window.localStorage.getItem('order');
const initialState = orderData ? orderData : {};

const order = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes?.UPDATE_ORDER:
      return {
        ...state,
        ...action.data,
      }
    default:
      return state
  }
}

export default order