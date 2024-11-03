"use client";
import React from "react";
import Card from "@/components/Card/index";
import products from "../mocks/products";
import { useRouter } from "next/navigation";

const featuredProducts = products.slice(0, 3);

const Home = () => {
  const Router = useRouter();
  return (
    <main>
      <div className="container">
        <h1>Home</h1>
        <hr />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-11/12 mx-auto my-4">
          {featuredProducts.map((product) => {
            return (
              <div key={product.id} className="card">
                <Card
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                />
              </div>
            );
          })}
        </div>
        <button
          onClick={() => Router.push("/products/1")}
          className="button mx-auto"
        >
          Redirect
        </button>
      </div>
    </main>
  );
};

export default Home;
