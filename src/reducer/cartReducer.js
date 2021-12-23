import { ADD_TO_CART, REMOVE_TO_CART } from "../type";

const initialState={
    cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]
}
const cartReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            let  product=action.payload.product;
            let cItems=state.cartItems.slice();
            let alreadyCart=false;
            cItems.forEach(c => {
                if(c._id===product._id){
                    c.count++;
                    alreadyCart=true;
                }
            });
            if(!alreadyCart){
                cItems.push({...product,count:1});
            }
            localStorage.setItem("cartItems",JSON.stringify(cItems))
            return {cartItems:cItems};
        
        case REMOVE_TO_CART:
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems.filter((i)=>(
                i._id!=action.payload.id
            ))))
            return {cartItems:state.cartItems.filter((i)=>(
                i._id!=action.payload.id
            ))}
        default : return state
    }
}
export default cartReducer;