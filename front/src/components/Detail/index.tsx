"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { useRouter, usePathname } from "next/navigation";
import { IProduct } from "@/interfaces/IProduct";
import { UserContext } from "@/context/userContext";
import { CartContext } from "@/context/cartContext";

interface DetailProps {
  product: IProduct;
}

const Detail = ({ product }: DetailProps) => {
  const { user } = useContext(UserContext);
  const { cart, setCart } = useContext(CartContext);
  const router = useRouter();
  const pathname = usePathname(); // Obtiene la ruta actual

  const isInCart = cart.some((p) => p.id === product.id);

  const handleBuy = () => {
    if (user) {
      if (!isInCart) {
        setCart([...cart, product]);
        alert("Added!");
      } else {
        alert("Product is already in the cart!");
        router.back(); // Redirige al historial previo tras el alert
      }
    } else {
      alert("Please log in first!");
      // Redirige al login con un query param indicando la URL actual
      router.push(`/login?redirect=${pathname}`);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row items-start gap-10 max-w-5xl mx-auto">
        {/* Columna izquierda: Imagen */}
        <div className="flex-shrink-0 w-full md:w-[380px] h-[450px]  bg-white-basic border border-gray-light rounded-lg">
          <Image
            src={product.image}
            alt={product.name}
            width={380} // Ancho fijo
            height={450} // Alto fijo
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Columna derecha: Información del producto */}
        <div className="flex flex-col justify-between w-full md:w-[500px]">
          <div>
            <p className="text-gray-basic text-justify leading-relaxed mb-6 mt-12">
              {product.description}
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-pink-basic mb-6">
              ${product.price}
            </h3>
            <button className="button" onClick={handleBuy}>
              Buy Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
