import { ADD_TO_CART, REMOVE_TO_CART } from "../type"


export const addToCart=(product)=>{
    return {
        type:ADD_TO_CART,
        payload:{product}
    }
}
export const removeToCart=(id)=>{
    console.log(id)
    
    return {
        type:REMOVE_TO_CART,
        payload:{id}
    }
}