import { FETCH_PRODUCT, ORDER_PRODUCT_BY_SIZE } from "../type"
import { ORDER_PRODUCT_BY_PRICE } from "../type"
export const productFetch=(data)=>{
    return {
        type:FETCH_PRODUCT,
        payload:{data}
    }
}
export const orderProductByPrice=(value)=>{
    return{
        type:ORDER_PRODUCT_BY_PRICE,
        payload:{value},
    }
}
export const orderProductBySize=(value)=>{
    return {
        type:ORDER_PRODUCT_BY_SIZE,
        payload:{value}
    }
}
