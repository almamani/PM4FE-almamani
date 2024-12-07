"use client";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";

const PerfilComponent = () => {
  const { user } = useContext(UserContext);

  if (!user) return null; // Asegurarse de que el usuario esté disponible

  const { name, email, address, phone } = user.user;

  return (
    <div className="flex flex-col gap-3 mt-3">
      <p className="text-pink-basic text-center text-3xl">
        ----------- Your Profile -----------
      </p>
      <div className="mx-auto">
        <p className="text-2xl">
          <span className="text-gray-basic font-bold">Name: </span>
          {name}
        </p>
        <p className="text-2xl">
          <span className="text-gray-basic font-bold">Email: </span>
          {email}
        </p>
        <p className="text-2xl">
          <span className="text-gray-basic font-bold">Address: </span>
          {address}
        </p>
        <p className="text-2xl">
          <span className="text-gray-basic font-bold">Phone: </span>
          {phone}
        </p>
      </div>
    </div>
  );
};

export default PerfilComponent;
