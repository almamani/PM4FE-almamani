"use client";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";
import { IOrder } from "@/interfaces/IOrder";
import { notFound } from "next/navigation";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    notFound();
  }

  const { name, email, orders } = user.user;

  return (
    <main>
      <div className="container">
        <h1>Dashboard</h1>
        <hr />
        <div className="mx-auto">
          <div className="flex flex-col gap-3 mt-3">
            <h2 className="text-red-700">------ Perfil Data ------</h2>
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
          </div>
          <div className="mx-auto">
            <h2 className="text-red-700 mt-6">------ Orders ------</h2>
            {orders.map((order: IOrder, i) => (
              <div
                key={i}
                className="flex justify-between gap-20 items-center p-4 border border-gray-300 rounded-lg bg-gray-50"
              >
                <h3>{order.id}</h3>
                <h3>{order.date}</h3>
                <h3>{order.status}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
