// state 
//  actions
//  reducers
//  store
//  subscribe
//  dispatch

import { createStore } from "redux";

const ADD_USER = "ADD_USER";

const initialState ={
   user : ["abdur rahim"],
   count : 1,
}           

const addUserAction = (user)=>{
   return {
    type : ADD_USER,
    payload : user
   }
}

//  reducers 
const userReducers = (state = initialState , action)=>{
    switch (action.type) {
      case ADD_USER:
        return{ 
            user : [...state.user , action.payload],
            count : state.count + 1
        }
         
    
      default:
        state;
    }
}

//  store
const store = createStore(userReducers);

store.subscribe(()=>{
   console.log(store.getState())
})

store.dispatch(addUserAction("salam"))
