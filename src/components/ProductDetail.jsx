import React from "react";

const ProductDetail = ({ product }) => {
  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Precio: ${product.price.toFixed(2)}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ProductDetail;
