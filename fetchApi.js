// constans

const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");

const GET_REQUEST = "GET_REQUEST"
const GET_SUCCESS = "GET_SUCCESS"
const GET_FAILED = "GET_FAILED"
const API = "https://jsonplaceholder.typicod.com/users"

//  INISTIAL STATE 
const initialState = {
    persons: [],
    isLoading: false,
    error: null
}

// actions 

const getRequest = ()=>{
     return{
         type : GET_REQUEST
     }
};

const getTodos = (persons)=>{
     return{
         type: GET_SUCCESS,
         payload : persons
     }
}

const getError = (error)=>{
     return{
         type : GET_FAILED,
         payload : error
     }
}

//  reducers 

const todoReducers = (state= initialState, action)=>{
     switch (action.type) {
       case GET_REQUEST:
        return{
            ...state,
            isLoading :  true
        }
        case GET_SUCCESS:
            return{
                   ...state,
                   isLoading :false,
                   persons: action.payload
            }
     case GET_FAILED :
        return{
             ...state,
             isLoading :false,
             error : action.payload
        }
        default:
          return  state;
     }
}

//  store 

const fetchApi =()=>{
     return (dispatch)=>{
        dispatch(getRequest())
      axios.get(API)
      .then(res => {
        //  console.log(res.data)
         dispatch(getTodos(res.data))
      })
      .catch(err =>{
        //  console.log(err.message)
        dispatch(getError(err.message))
      })
     }
}



const store = createStore(todoReducers, applyMiddleware(thunk))

store.subscribe(()=>{
     console.log(store.getState())
})

store.dispatch(fetchApi())
