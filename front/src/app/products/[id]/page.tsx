import React from "react";
import { notFound } from "next/navigation";

import Card from "@/components/Card";
import { getProductById } from "@/services/productService";

interface PageProps {
  params: {
    id: string;
  };
}

const Product = async ({ params }: PageProps) => {
  const { id } = await params;

  const productFind = await getProductById(parseInt(id));

  if (!productFind) {
    return notFound();
  }

  return (
    <div className="container">
      <h1>El producto seleccionado es el nro: {id}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-11/12 mx-auto my-4">
        <div className="card">
          <Card
            name={productFind.name}
            description={productFind.description}
            price={productFind.price}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
