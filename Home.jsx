import React, { useState } from "react";

import products from "../data/products";

import ProductCard from
"../components/ProductCard";

function Home() {

  const [cart, setCart] =
    useState([]);

  const addToCart = (product) => {

    setCart([...cart, product]);

    alert(
      `${product.name} added to cart`
    );
  };

  return (

    <div className="container">

      <h2 className="my-4">
        Featured Collection
      </h2>

      <div className="row">

        {products.map((product) => (

          <div
            className="col-md-4 mb-4"
            key={product.id}
          >

            <ProductCard
              product={product}
              addToCart={addToCart}
            />

          </div>

        ))}

      </div>

      <h4>
        Cart Items :
        {cart.length}
      </h4>

    </div>

  );
}

export default Home;
