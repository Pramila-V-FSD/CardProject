import React from 'react';

const Navbar = ({ cartCount, setIsModalOpen }) => {
  return (
    <nav className="bg-cyan-600 p-4 flex justify-between items-center ">
      <h1 className="font-bold text-xl text-white">Product Store</h1>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="bg-red-500 py-2 px-4 rounded font-bold text-lg hover:bg-red-800 text-white"
      >
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
