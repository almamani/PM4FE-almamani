"use client";
import { createContext, useState, useEffect } from "react";
import { IUser } from "@/interfaces/IUser";
import { IOrder } from "@/interfaces/IOrder";

interface UserContextProps {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  updateOrders: (order: IOrder) => void;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
  updateOrders: () => {},
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const localUser = localStorage.getItem("user");
    setUser(localUser ? JSON.parse(localUser) : null);
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const updateOrders = (order: IOrder) => {
    const newUser = user;
    newUser?.user.orders.push({
      id: order.id,
      status: order.status,
      date: order.date,
    });
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <UserContext.Provider value={{ user, setUser, updateOrders }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
