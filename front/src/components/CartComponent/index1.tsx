"use client";
import { useContext } from "react";
import { CartContext } from "@/context/cartContext";
import React from "react";

const CartComponent = () => {
  const { cart, setCart } = useContext(CartContext); // Usamos setCart para modificar el carrito

  // Función para eliminar un producto del carrito
  const handleRemoveItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id); // Filtramos el producto eliminado
    setCart(updatedCart); // Actualizamos el carrito en el contexto
  };

  // Función para emitir la orden de compra
  const handleCart = () => {
    alert("Emitiendo Orden...");
  };

  // Cálculo del total del pedido
  const totalOrder = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );

  return (
    <div className="wrapper">
      {!cart || cart.length === 0 ? (
        <h2 className="mt-6 text-pink-basic">Your cart is empty.</h2>
      ) : (
        <div className="flex flex-col gap-8 mt-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between gap-20 items-center p-4 border border-gray-300 rounded-lg bg-gray-50"
            >
              <p className="text-2xl">{item.name}</p>
              <p className="text-2xl">${item.price}</p>
              <button
                className="text-red-500 text-lg font-bold hover:text-red-700 transition-colors duration-300"
                onClick={() => handleRemoveItem(item.id)}
              >
                X
              </button>
            </div>
          ))}
          <div className="flex justify-between gap-20 items-center p-4 border border-gray-300 rounded-lg bg-gray-50">
            <button className="button mt-3 mb-3" onClick={handleCart}>
              Buy Order
            </button>
            <h2>Total: ${totalOrder}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartComponent;
