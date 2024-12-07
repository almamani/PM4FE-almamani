"use client";
import { useContext } from "react";
import { IOrder } from "@/interfaces/IOrder";
import { UserContext } from "@/context/userContext";

const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

const OrdersComponent = () => {
  const { user } = useContext(UserContext);

  if (!user) return null; // Asegurarse de que el usuario esté disponible

  const { orders } = user.user;

  return (
    <div className="mx-auto">
      <p className="text-pink-basic text-center mt-6 mb-5 text-3xl">
        ---------------------- Your Orders ----------------------
      </p>
      {orders.map((order: IOrder, i) => (
        <div
          key={i}
          className="flex justify-between gap-20 items-center p-2 border border-gray-300 rounded-lg bg-gray-50"
        >
          <p className="text-2xl">
            <span className="text-gray-basic font-bold">Id: </span>
            {order.id}
          </p>
          <p className="text-2xl">
            <span className="text-gray-basic font-bold">Date: </span>
            {formatDate(order.date)}
          </p>
          <p className="text-2xl">
            <span className="text-gray-basic font-bold">Status: </span>
            {order.status}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OrdersComponent;
