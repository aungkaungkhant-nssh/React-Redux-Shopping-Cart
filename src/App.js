
import { useState } from 'react';
import Products from './components/Products';
import data from './data.json'
//feature 1
//feature 1 blah
function App() {
  const [products,setProducts]=useState(data.products)
  console.log(products)
  return (
    <div className="grid-container">
      <header>
          <a href="/">React-Redux Shopping Cart</a>
      </header>
      <main>
          <div className="content">
              <div className="main">
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
