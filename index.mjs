import { createStore } from "redux"
//  state 
//  actions
//  reducers 
//  store   getState() , dispacth() , subscribe()
//  displatch

//  constans 
const INCREMENET = "INCREMENT"
const DECREMENT = "DECREMENT"

const initisalState = {
    count: 0
}

const incressCounter = ()=>{
     return{
       type : INCREMENET
     }
}

const decressCounter = ()=>{
  return{
    type : DECREMENT
  }
}

// create reducer 

const counterReducer = (state = initisalState , action )=>{
     
  switch (action.type) {
    case INCREMENET:
      return {
        ...state,
         count: state.count +1
      } 
      case DECREMENT:
        return{
           ...state,
           count : state.count - 1 
        } 
  
    default:
      state;
  }
}


// createStore 

const store = createStore(counterReducer)

store.subscribe(()=>{
    console.log(store.getState())
})

//  dispatch
store.dispatch(incressCounter())
store.dispatch(incressCounter())
store.dispatch(incressCounter())
store.dispatch(decressCounter())