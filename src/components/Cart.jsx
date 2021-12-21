import React, { useState } from 'react'
import { formatCurrency } from '../util'
import Fade from 'react-reveal/Fade'
function Cart({cartItems,removeCart,createOrder}) {
    const [checkOut,setCheckOut]=useState(false);
    const [order,setOrder]=useState({email:"",name:"",address:""})
    const handleSubmit=(e)=>{
        e.preventDefault();
        createOrder(order)
    }
    const handleInput=(e)=>{
        setOrder({
            ...order,
            [e.target.name]:e.target.value
        })
    }
    
    return (
        <div>
            {
                cartItems.length===0?
                <div className="cart cart-header">
                     Cart is empty
                </div>:
                <div className="cart cart-header">
                    You have {cartItems.length} in the cart {" "}
                </div>
            }
            <div className="cart">
                <Fade left cascade>
                    <ul className="cart-items">
                        {
                            cartItems.map((c)=>(
                                <li key={c._id}>
                                    <div>
                                        <img src={c.image} alt="" />
                                    </div>
                                    <div>
                                        <div>{c.title}</div>
                                        <div>
                                            {formatCurrency(c.price)} x {c.count} {" "}
                                            <button className="button" onClick={()=>removeCart(c._id)}>Remove</button>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </Fade>
            </div>
            {
                cartItems.length!==0 &&
                <div>
                    <div className="cart">
                    <div className="total">
                        <div>
                            Total: {" "}
                            {formatCurrency(
                                cartItems.reduce((a,c)=>a+c.price*c.count,0)
                            )}
                        </div>
                        <button className="button primary" onClick={()=>setCheckOut(true)}>
                                Proceed
                        </button>
                    </div>
                </div>
                  {
                    checkOut &&
                    <div className="cart">
                        <Fade right cascade>
                            <form onSubmit={handleSubmit}>
                                <ul className="form-container">
                                    <li>
                                        <label>Email</label>
                                        <input type="text" name="email" type="email" 
                                        value={order.email} onChange={(e)=>handleInput(e)}/>
                                    </li>
                                    <li>
                                        <label>Name</label>
                                        <input type="text" name="name" type="text"
                                        value={order.name} onChange={(e)=>handleInput(e)}/>
                                    </li>
                                    <li>
                                        <label>Address</label>
                                        <input type="text" name="address" value={order.address} required onChange={(e)=>handleInput(e)}/>
                                    </li>
                                    <li>
                                        <button className="button primary" type="submit">
                                        Checkout
                                        </button>
                                    </li>
                                </ul>
                            </form>
                        </Fade>
                       
                    </div>
                }
                </div>
                
            }
        </div>
    )
}

export default Cart
