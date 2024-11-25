"use client";
import React from "react";
import { IProduct } from "@/interfaces/IProduct";
import { UserContext } from "@/context/userContext";
import { CartContext } from "@/context/cartContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";

const Detail = ({ id, name, price, description }: IProduct) => {
  const { user } = useContext(UserContext);
  const { cart, setCart } = useContext(CartContext);
  const router = useRouter();

  const isInCart = cart.some((p) => p.id === id);

  const handleBuy = () => {
    if (user) {
      if (!isInCart) {
        setCart([...cart, { id, name, price, description }]);
        alert("Added!");
      } else {
        alert("Product is already in the cart!");
      }
      router.back(); // Redirige al historial previo tras el alert
    } else {
      alert("Please log in first!");
      router.push("/login");
    }
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <br />
      <h3>${price}</h3>
      <button className={`button mt-3 mb-3`} onClick={handleBuy}>
        Buy Product
      </button>
    </div>
  );
};

export default Detail;
