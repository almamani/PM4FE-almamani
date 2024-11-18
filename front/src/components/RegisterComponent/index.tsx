"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { validateRegister } from "../../helpers/validateRegister";
import { IRegister } from "../../interfaces/IRegister";
import { useRouter } from "next/navigation";
import { userRegister } from "@/services/userService";

const RegisterComponent = () => {
  const router = useRouter();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    password: "",
    repeatedPassword: "",
  });

  const [errors, setErrors] = useState<IRegister>({});

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    setErrors(validateRegister({ ...userData, [name]: value }));
  };

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateRegister(userData, true);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const res = await userRegister(userData);
      if (!res.message) {
        alert("Registered!");
        router.push("/login");
      } else {
        alert(res.message);
      }

      setUserData({
        name: "",
        email: "",
        address: "",
        phone: "",
        password: "",
        repeatedPassword: "",
      });
    }
  };
  return (
    <form onSubmit={handleOnSubmit} className="mt-8">
      <div className="mb-2">
        <label className="text-xl font-bold">First and Last Name:</label>
        <input
          type="text"
          value={userData.name}
          name="name"
          placeholder="Enter First and Last Name"
          onChange={handleInputChange}
        />
        {errors.name && (
          <p className="text-pink-basic text-lg">{errors.name}</p>
        )}
      </div>
      <div className="mb-2">
        <label className="text-xl font-bold">Email:</label>
        <input
          type="text"
          value={userData.email}
          name="email"
          placeholder="example@gmail.com"
          onChange={handleInputChange}
        />
        {errors.email && (
          <p className="text-pink-basic text-lg">{errors.email}</p>
        )}
      </div>
      <div className="mb-2">
        <label className="text-xl font-bold">Address:</label>
        <input
          type="text"
          value={userData.address}
          name="address"
          placeholder="Enter Address"
          onChange={handleInputChange}
        />
        {errors.address && (
          <p className="text-pink-basic text-lg">{errors.address}</p>
        )}
      </div>
      <div className="mb-2">
        <label className="text-xl font-bold">Phone:</label>
        <input
          type="text"
          value={userData.phone}
          name="phone"
          placeholder="Enter only numbers"
          onChange={handleInputChange}
        />
        {errors.phone && (
          <p className="text-pink-basic text-lg">{errors.phone}</p>
        )}
      </div>

      <div className="mb-2">
        <label className="text-xl font-bold">Password:</label>
        <input
          type="password"
          value={userData.password}
          name="password"
          placeholder="Enter Password"
          onChange={handleInputChange}
        />
        {errors.password && (
          <p className="text-pink-basic text-lg">{errors.password}</p>
        )}
      </div>
      <div className="mb-2">
        <label className="text-xl font-bold">Repeat Password:</label>
        <input
          type="password"
          value={userData.repeatedPassword}
          name="repeatedPassword"
          placeholder="Repeat Password"
          onChange={handleInputChange}
        />
        {errors.repeatedPassword && (
          <p className="text-pink-basic text-lg">{errors.repeatedPassword}</p>
        )}
      </div>
      <button className="button">Register</button>
    </form>
  );
};

export default RegisterComponent;
