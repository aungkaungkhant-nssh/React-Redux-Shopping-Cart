import React from 'react'
import { connect } from 'react-redux'
import { orderProductByPrice, orderProductBySize } from '../action/productAction'

function Filter({sorts,size,orderSort,orderSize,products}) {
    return (
        <div className="filter">
            <div className="filter-result">{products&&products.length} products</div>
            <div className="filter-sort">
                Order{" "}
                <select value={sorts} onChange={(e)=>orderSort(e.target.value)}>
                    <option value="">Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <div className="filter-size">
                Filter{" "}
                <select value={size} onChange={(e)=>orderSize(e.target.value)}>
                    <option value="">ALL</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
        </div>
    )
}
const mapStateToProps=state=>{
      return {
          sorts:state.products.sorts,
          size:state.products.size
      }
}
const mapStateToDispatch=dispatch=>{
    return {
      orderSort:(value)=>dispatch(orderProductByPrice(value)),
      orderSize:(value)=>dispatch(orderProductBySize(value))
    }
}
export default  connect(mapStateToProps,mapStateToDispatch)(Filter)
