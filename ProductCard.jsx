import React from "react";

function ProductCard({
  product,
  addToCart
}) {

  return (
    <div className="card shadow">

      <img
        src={product.image}
        alt={product.name}
        className="card-img-top"
      />

      <div className="card-body">

        <h5>
          {product.name}
        </h5>

        <p>
          ₹{product.price}
        </p>

        <button
          className="btn btn-dark"
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;
