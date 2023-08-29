import { combineReducers, createStore } from "redux"
 const GET_PRODUCTS = "GET_PRODUCTS"
 const ADD_PRODUCT = "ADD_PRODUCTS"
 const GET_CARTS = "GET_CARTS"
 const ADD_CART = "ADD_CART"
// state
const initisalState = {
   products : ["pen" , "pencil"],
  count : 2
}

const initisalCartState= {
     cartItems : ["apple"],
     count : 1 
}
//  actions
const getProduts = ()=>{
      return {
         type : GET_PRODUCTS
      }
}
const addProduct = (product)=>{
  return {
     type : ADD_PRODUCT,
     payload : product
  }
}

//     cart actions
const getCarts = ()=>{
    return{ 
       type : GET_CARTS
    }
}

const addCart = (item)=>{
  return{ 
     type : ADD_CART,
     payload : item
  }
}

//  reducres

const productReducer = (state = initisalState , action)=>{
      switch (action.type) {
        case GET_PRODUCTS:
          return{
              ...state
          };
          
       case ADD_PRODUCT:
        return{
          products : [...state.products , action.payload],
          count : state.count + 1
        }
        default:
        return   state;
      }
}


//  cart reducers 
const cartReducers = (state= initisalCartState , action)=>{
     
 switch (action.type) {
  case GET_CARTS:
      return{
          ...state
      } ;
      case ADD_CART:
        return{
            cartItems : [...state.cartItems , action.payload],
            count : state.count + 1
        } ;
   
  default:
     return state;
 }
}

const rootReducer = combineReducers({
    productR : productReducer,
    cartR : cartReducers
})

//  store
const store = createStore(rootReducer);

store.subscribe(()=>{
   console.log(store.getState())
})

store.dispatch(getProduts())
store.dispatch(getCarts()) 
store.dispatch(addCart("kola"))
