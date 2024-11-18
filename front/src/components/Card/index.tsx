import React from "react";
import Link from "next/link";

import { IProduct } from "@/interfaces/IProduct";

const Card = ({ id, name, price, description }: IProduct) => {
  return (
    <Link href={`products/${id}`}>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <br />
        <h3>${price}</h3>
      </div>
    </Link>
  );
};

export default Card;
