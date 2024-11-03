import React from "react";
import Card from "@/components/Card";
import { getProducts } from "@/services/productService";

const productsfound = getProducts();

const Products = () => {
  return (
    <main>
      <div className="container">
        <h1>Products</h1>
        <hr />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-11/12 mx-auto my-4">
          {productsfound.map((product) => {
            return (
              <div className="card" key={product.id}>
                <Card
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                />{" "}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Products;
