import { useState } from 'react';
import Cart from './components/Cart';
import Filter from './components/Filter';
import Products from './components/Products';
import data from './data.json'
import Modal from 'react-modal'
import { Provider } from 'react-redux';
import store from './store';
function App() {
  const [products,setProducts]=useState(data.products)
  const [size,setSize]=useState("");
  const [sort,setSort]=useState("");
  const [cartItems,setCartItems]=useState(localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]);
  const sortProduct=(e)=>{
    const sortValue=e.target.value;
    if(sortValue===""){
       setSort("");
       setProducts(data.products)
    }else{
      setSort(sortValue)
    const sortProducts=products.sort((a,b)=>(
        sortValue=="lowest"?
        a.price-b.price
        :sortValue=="highest"?
        b.price-a.price
        :a._id-b._id
    ))
    setProducts(sortProducts);
    }
    
  }
  const sizeProduct=(e)=>{
    const sizeValue=e.target.value
    if(sizeValue==""){
      setSize("")
     return setProducts(data.products)
    }
    setSize(sizeValue)
    let filterProduct=data.products.filter((p)=>(
      p.availableSizes.indexOf(sizeValue)>=0
    ))
    setProducts(filterProduct)
  }
  const addToCart=(product)=>{
      let aleradyInCart=false;
      const cItems=cartItems.slice();
      cItems.forEach((i)=>{
        if(i._id==product._id){
          i.count++; 
          aleradyInCart=true;
        }
      })
      if(!aleradyInCart){
         cItems.push({...product,count:1})
      }
      setCartItems(cItems)
      localStorage.setItem("cartItems",JSON.stringify(cItems))
  }
  const removeCart=(id)=>{
      setCartItems(cartItems.filter((c)=>(
        c._id!==id
      )))
      localStorage.setItem("cartItems",JSON.stringify(cartItems.filter((c)=>(
        c._id!==id
      ))))

  }
  const createOrder=(order)=>{
      console.log(order)
  }
  return (
    <Provider store={store}>
          <div className="grid-container">
      <header>
          <a href="/">React-Redux Shopping Cart</a>
      </header>
      <main>
          <div className="content">
              <div className="main">
                  <Filter 
                    count={products.length}
                    sort={sort}
                    size={size}
                    sortProduct={sortProduct}
                    sizeProduct={sizeProduct}
                   />
                  <Products addToCart={addToCart}/>
              </div>
              <div className="sidebar">
                  <Cart cartItems={cartItems} removeCart={removeCart} createOrder={createOrder}/>
              </div>
          </div>
      </main>
      <footer>
        All right is reserved
      </footer>
          </div>
    </Provider>
  
  );
}

export default App;
