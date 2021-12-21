import { FETCH_PRODUCT } from "../type"
export const productFetch=(data)=>{
    return {
        type:FETCH_PRODUCT,
        payload:{data}
    }
}