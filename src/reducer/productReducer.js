import { FETCH_PRODUCT } from "../type"

const initialState={
    items:[],
   
}
const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_PRODUCT:return {items:action.payload.data}
        default:return state;
    }
}
export default productReducer