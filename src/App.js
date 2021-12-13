
import { useState } from 'react';
import Filter from './components/Filter';
import Products from './components/Products';
import data from './data.json'
function App() {
  const [products,setProducts]=useState(data.products)
  const [size,setSize]=useState("");
  const [sort,setSort]=useState("");
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
  return (
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
                  <Products products={products}/>
              </div>
              <div className="sidebar">
              </div>
          </div>
      </main>
      <footer>
        All right is reserved
      </footer>
    </div>
  );
}

export default App;
