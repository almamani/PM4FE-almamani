import React from "react";
import Link from "next/link";

import { IProduct } from "@/interfaces/IProduct";

const Card = ({ id, name, price, description }: IProduct) => {
  return (
    <Link href={`products/${id}`}>
      <div>
        <h4>{name}</h4>
        <h6>{description}</h6>
        <br />
        <h4>${price}</h4>
      </div>
    </Link>
  );
};

export default Card;
