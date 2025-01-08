import React, { useEffect, useState } from "react";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map(product => (
        <div key={product.id} className="border rounded-lg p-4 shadow-lg">
          <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
          <h3 className="text-md font-bold mt-2">{product.title}</h3>
          <p className="text-gray-600 mt-2">${product.price}</p>
          <button
            className="bg-blue-500 text-white py-2 px-4 mt-4 text-sm rounded hover:bg-blue-800"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
