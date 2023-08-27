//  state
//  actions
//  reducers
//  store
//  subscribe
//  dispatch

import { createStore } from "redux";

const initialState = {
  count: 0
};

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = 'RESET'
//  ACTIONS

const incrementAction = () => {
  return {
    type: INCREMENT
  }
}
const decrementAction = () => {
  return {
    type: DECREMENT
  }
}
const resetAction = () => {
  return {
    type: RESET
  }
}

//  reducers 

const counterReducers = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    case RESET:
      return {
        ...state,
        count: 0
      };

    default:
      state;
  }
}


const store = createStore(counterReducers);

store.subscribe(()=>{
   console.log(store.getState())
})

store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(decrementAction())
store.dispatch(resetAction())
store.dispatch(incrementAction())
store.dispatch(decrementAction())
