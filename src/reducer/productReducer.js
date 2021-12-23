import { FETCH_PRODUCT, ORDER_PRODUCT_BY_PRICE, ORDER_PRODUCT_BY_SIZE } from "../type"

const initialState={
    items:[],
    sorts:"",
    size:"",
    filterItems:[],

}
const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_PRODUCT:return {...state,items:action.payload.data,filterItems:action.payload.data};
        case ORDER_PRODUCT_BY_PRICE:
            const sortValue=action.payload.value
            if(sortValue=="")
            {
                const sortItems=state.filterItems.products.sort((a,b)=>(
                    a._id-b._id
                ))
                return {...state,sorts:sortValue,filterItems:{products:[...sortItems]}}
            }else{
                const sortItems=state.filterItems.products.sort((a,b)=>(
                    sortValue==="lowest"?
                    a.price-b.price:
                    b.price-a.price
                 ))
                 return {...state,sorts:sortValue,filterItems:{products:[...sortItems]}}
            };
        case ORDER_PRODUCT_BY_SIZE:
            const sizeValue=action.payload.value;
       
            if(sizeValue==""){
                const sizeItems=state.items.products.sort((a,b)=>(
                    a._id-b._id
                ))
                return {...state,size:sizeValue,filterItems:{products:[...sizeItems]}}
            }else{
                const sizeItems=state.items.products.filter((i)=>(
                    i.availableSizes.indexOf(sizeValue)>=0
                ))
                return {...state,size:sizeValue,filterItems:{products:[...sizeItems]}
                }
            }
            
        default:return state;
    }
}
export default productReducer