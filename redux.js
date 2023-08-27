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
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE"
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


const incrementByValueAction = (value)=>{
     return{
       type : INCREMENT_BY_VALUE,
       payload :value
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

    case INCREMENT_BY_VALUE:
       return {
        ...state,
        count : state.count + action.payload
       }

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
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementByValueAction(10))
