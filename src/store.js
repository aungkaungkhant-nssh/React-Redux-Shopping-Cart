import { applyMiddleware,combineReducers,createStore } from "redux";
import productReducer from "./reducer/productReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import cartReducer from "./reducer/cartReducer";
const store=createStore(combineReducers({products:productReducer,cart:cartReducer}),composeWithDevTools(applyMiddleware(thunk)))

export default store