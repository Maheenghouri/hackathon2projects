'use Client'

import React from "react";
import Footer from "@/app/footer"

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  rating: number;
}

const categoryPage: React.FC = () => {
    
  const products: Product[] = [
    
    { id: 1, name: "Gradient Graphic T-shirt   ", image: "/images/graphicshirt.png" , price: 145, rating: 3.5 },
    { id: 2, name: "Polo with Tipping Details", image: "/images/tiping.png", price: 180, rating: 4.5 },
    { id: 3, name: "Black Striped T-shirt", image: "/images/blackstriped.png", price: 120, oldPrice: 150, discount: 30, rating: 5.0 },
    { id: 4, name: "Skinny Fit Jeans", image: "/images/jeans.png", price: 240, oldPrice: 260, discount: 20, rating: 3.5 },
    { id: 5, name: "Checkered Shirt", image: "/images/shirt.png", price: 180, rating: 4.5 },
    { id: 6, name: "Sleeve Striped T-shirt", image: "/images/stripesshirt.png", price: 130, oldPrice: 160, discount: 30, rating: 4.5 },
    { id: 7, name: "Vertical Striped Shirt", image: "/images/verticalstriped.png", price: 212, oldPrice: 232, discount: 20, rating: 5.0 },
    { id: 8, name: "Courage Graphic T-shirt", image: "/images/courageshirt.png", price: 145, rating: 4.0 },
    { id: 9, name: "Loose Fit Bermuda Shorts", image: "/images/looseshort.png", price: 80, rating: 3.0 },

  ];
 

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
       
        <aside className="col-span-1 bg-white border rounded-lg shadow p-4">
          <h2 className="text-lg font-bold mb-4">Filters</h2>

         
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2">Category</h3>
            <ul className="space-y-2">
              {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((category, index) => (
                <li key={index}>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span>{category}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

       
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2">Price</h3>
            <input type="range" min={50} max={200} className="w-full" defaultValue={100} />
          </div>

      
<div className="mb-4">
  <h3 className="text-sm font-semibold mb-2">Colors</h3>
  <div className="flex space-x-2">
    {["red", "blue", "yellow", "green", "purple", "black", "white"].map((color, index) => (
      <div
        key={index}
        className={`w-6 h-6 rounded-full border border-gray-300`}
        style={{ backgroundColor: color }}
      ></div>
    ))}
  </div>  




</div>
<div className="mb-4">
  
  <div className="flex space-x-2">
    {["orange", "lightblue", "yellow", "pink", "grey", "darkgreen"].map((color, index) => (
      <div
        key={index}
        className={`w-6 h-6 rounded-full border border-gray-300`}
        style={{ backgroundColor: color }}
      ></div>
    ))}
  </div>
</div>
         
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2">Size</h3>
            <div className="flex flex-wrap gap-2">
              {["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large"].map((size, index) => (
                <button key={index} className="border border-gray-300 rounded px-4 py-1 text-sm">
                  {size}
                </button>
              ))}
            </div>
          </div>
       
      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2">Dress Style</h3>
        <ul className="space-y-2">
          {["Casual", "Formal", "Party", "Gym"].map((style, index) => (
            <li
              key={index}
              className="flex justify-between items-center text-gray-700"
            >
              <span>{style}</span>
              <i className="fas fa-chevron-right text-gray-400"></i>
            </li>
          ))}
        </ul>
      </div>

      
          <button className="bg-black text-white w-full py-2 mt-4 rounded">Apply Filter</button>
        </aside>

   
        <main className="col-span-3">
          <h2 className="text-xl font-bold mb-4">Casual</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white border rounded-lg shadow hover:shadow-lg transition p-4">
                <div className="w-full h-52 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <img src={product.image} alt={product.name} className="max-h-full" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold">${product.price}</span>
                  {product.oldPrice && (
                    <span className="text-sm text-gray-400 line-through">${product.oldPrice}</span>
                  )}
                  {product.discount && (
                    <span className="text-sm bg-red-100 text-red-500 px-2 py-1 rounded">
                      -{product.discount}%
                    </span>
                  )}
                </div>
                <div className="text-yellow-500 text-sm mt-1">
                  {"★".repeat(Math.floor(product.rating))}
                  {"☆".repeat(5 - Math.floor(product.rating))}
                </div>
              </div>
            ))}
          </div>

    
          <div className="flex justify-between items-center mt-6">
            <button className="px-4 py-2 border rounded">Previous</button>
            <div className="flex items-center space-x-2">
              {Array.from({ length: 10 }).map((_, index) => (
                <button
                  key={index}
                  className={`px-3 py-1 border rounded ${
                    index === 0 ? "bg-black text-white" : "bg-gray-100 text-black"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button className="px-4 py-2 border rounded">Next</button>
          </div>
        </main>
      </div>
      <Footer/>
    </div>
   
  );
};

export default categoryPage;
