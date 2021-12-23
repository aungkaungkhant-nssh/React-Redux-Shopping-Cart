import { useState } from 'react';
import Cart from './components/Cart';
import Filter from './components/Filter';
import Products from './components/Products';
import data from './data.json'
import Modal from 'react-modal'
import { Provider } from 'react-redux';
import store from './store';
function App() {

 
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
                  <Filter />
                  <Products />
              </div>
              <div className="sidebar">
                  <Cart  createOrder={createOrder}/>
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
