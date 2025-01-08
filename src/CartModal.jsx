import React from 'react';

const CartModal = ({ cart, removeFromCart, setIsModalOpen }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        <ul>
          {cart.length === 0 ? (
            <li>No items in the cart</li>
          ) : (
            cart.map((product) => (
              <li key={product.id} className="flex justify-between items-center mb-4 ">
                <div>
                  <h3>{product.title}</h3>
                  <p>${product.price}</p>
                </div>
                <button 
                  className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-700"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </li>
            ))
          )}
        </ul>
        <button 
          onClick={() => setIsModalOpen(false)} 
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
