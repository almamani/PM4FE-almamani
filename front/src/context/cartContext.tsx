"use client";

import { IProduct } from "@/interfaces/IProduct";
import { createContext, useState, useEffect } from "react";

interface CartContextProps {
  cart: IProduct[];
  setCart: (cart: IProduct[]) => void;
  cleanCart: () => void;
}

export const CartContext = createContext<CartContextProps>({
  cart: [],
  setCart: () => {},
  cleanCart: () => {},
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    setCart(localCart ? JSON.parse(localCart) : []);
  }, []);

  const cleanCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, cleanCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
