
import React, { useState } from 'react';
import ProductList from './ProductList';
import Navbar from './Navbar';
import CartModal from './CartModal';

function App() {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (product) => {
    if (cart.some(item => item.id === product.id)) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="App">
      <Navbar cartCount={cart.length} setIsModalOpen={setIsModalOpen} />
      <ProductList addToCart={addToCart} />
      {isModalOpen && <CartModal cart={cart} removeFromCart={removeFromCart} setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}

export default App;
