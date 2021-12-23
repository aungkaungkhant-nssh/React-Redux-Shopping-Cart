import React, { useEffect, useState } from 'react'
import {formatCurrency} from '../util'
import Fade from 'react-reveal/Fade'
import Modal from 'react-modal'
import Zoom from 'react-reveal/Zoom'
import { connect } from 'react-redux'
import { productFetch } from '../action/productAction'
import data from '../data.json'
import { addToCart } from '../action/cartAction'
Modal.setAppElement('#root');
function Products({products,getProducts,addToCart}) {
    const [product,setProduct]=useState(null)
    const openModal=(p)=>{
       setProduct(p);
    }
    const closeModal=()=>{
        setProduct(null)
    }
    useEffect(()=>{
        getProducts(data)
    
    },[])
    return (
        <div>
            <Fade bottom cascade>
                <ul className="products">
                    {
                        products&&products.map((product)=>(
                            <li key={product._id}>
                                <div className="product">
                                    <a href={`#${product._id}`} onClick={()=>openModal(product)}>
                                        <img src={product.image} alt={product.title}></img>
                                        <p>{product.title}</p>
                                    </a>
                                    <div className="product-price">
                                        <div>{formatCurrency(product.price)}</div>
                                        <button className="button primary" onClick={()=>addToCart(product)}>Add To Cart</button>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </Fade>
            {
                product && (
                    <Modal isOpen={true} onRequestClose={closeModal}>
                        <Zoom>
                            <button className="close-modal" onClick={closeModal}>
                                    x
                            </button>
                            <div className="product-details">
                                <img src={product.image} alt="" />
                                <div className="product-details-description">
                                    <p>
                                        <strong>{product.title}</strong>
                                    </p>
                                    <p>{product.description}</p>
                                    <p>
                                        Available Sizes: {" "}
                                        {
                                            product.availableSizes.map((size)=>(
                                                <span key={size.index}>
                                                    {" "}
                                                    <button className="button">{size}</button>
                                                </span>
                                            ))
                                        }
                                    </p>
                                    <div className="product-price">
                                         <div>{formatCurrency(product.price)}</div>
                                         <button
                                                className="button primary"
                                                onClick={() => {
                                                   closeModal()
                                                   addToCart(product)
                                                }}
                                                >
                                                Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    </Modal>
                )
            }
        </div>
    )
}
const mapStateToProps=state=>{
    return {
        products:state.products.filterItems.products,
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        getProducts:(data)=>dispatch(productFetch(data)),
        addToCart:(product)=>dispatch(addToCart(product))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Products)
