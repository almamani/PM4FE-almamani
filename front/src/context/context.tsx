"use client";
import React from "react";
import CartProvider from "./cartContext";
import UserProvider from "./userContext";

const Contexts = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserProvider>
      <CartProvider>{children}</CartProvider>
    </UserProvider>
  );
};

export default Contexts;
