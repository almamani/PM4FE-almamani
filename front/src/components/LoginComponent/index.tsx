"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { validateLogin } from "../../helpers/validateLogin";
import { ILogin } from "../../interfaces/ILogin";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/userService";

const LoginComponent = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<ILogin>({});

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUserData({ ...userData, [name]: value });

    setErrors(validateLogin({ ...userData, [name]: value }));
  };

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateLogin(userData, true);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const res = await userLogin(userData);
      if (!res.message) {
        alert("Logged!");
        router.push("/");
      } else {
        alert(res.message);
      }
    }
  };

  return (
    <form onSubmit={handleOnSubmit} className="mt-8">
      <div className="mb-2">
        <label className="text-xl font-bold">Email:</label>
        <input
          type="text"
          value={userData.email}
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
        />
        {errors.email && (
          <p className="text-pink-basic text-lg">{errors.email}</p>
        )}
      </div>

      <div className="mb-2">
        <label className="text-xl font-bold">Password:</label>
        <input
          type="password"
          value={userData.password}
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
        />
        {errors.password && (
          <p className="text-pink-basic text-lg ">{errors.password}</p>
        )}
      </div>

      <button className="button">Ingresar</button>
    </form>
  );
};

export default LoginComponent;
