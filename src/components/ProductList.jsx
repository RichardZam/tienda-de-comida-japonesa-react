import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = [
    { id: 1, name: "Sushi de salmón", price: 12.99, image: "sushi1.png" },
    { id: 2, name: "Sushi de atún", price: 14.99, image: "sushi2.png" },
    { id: 3, name: "Yakitori de pollo", price: 8.99, image: "yakitori.png" },
    { id: 4, name: "Ramen de mariscos", price: 10.99, image: "ramen.png" },
    { id: 5, name: "Tempura", price: 15.99, image: "tempura.png" },
    { id: 6, name: "Miso", price: 8.99, image: "miso.png" },
    { id: 7, name: "Teriyaki", price: 9.99, image: "teriyaki.png" },
    { id: 8, name: "Udon", price: 10.99, image: "udon.png" },
  ];

  return (
    <div id="productos" className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    
  );
  
};

export default ProductList;