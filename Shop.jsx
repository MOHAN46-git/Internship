import React from "react";

import products
from "../data/products";

function Shop() {

 return (

  <div className="container">

   <h2>
    Shop Collection
   </h2>

   <div className="row">

    {
      products.map(product => (

      <div
       className="col-md-4"
       key={product.id}
      >

       <div className="card">

        <img
         src={product.image}
         alt={product.name}
        />

        <div
         className="card-body"
        >

         <h5>
          {product.name}
         </h5>

         <p>
          ₹{product.price}
         </p>

        </div>

       </div>

      </div>

     ))
    }

   </div>

  </div>

 );
}

export default Shop;
