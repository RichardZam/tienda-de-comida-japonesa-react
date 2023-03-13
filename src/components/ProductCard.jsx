import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div data-testid="product-card"className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Precio: ${product.price.toFixed(2)}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;
