import React from "react";

function Product({ product, deleteBtn }) {
  return (
    <li className="productCard">
      {/* <img src={product.images[0]} alt="" width={200} /> */}
      <h2 className="productCard__title">{product.title}</h2>
      <p className="productCard__category">Category: {product.category}</p>
      <button onClick={() => deleteBtn(product.id)}>Delete</button>
    </li>
  );
}

export default Product;
