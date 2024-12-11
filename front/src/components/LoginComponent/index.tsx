"use client";
import { ChangeEvent, FormEvent, useState, useContext } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ILogin } from "../../interfaces/ILogin";
import { validateLogin } from "../../helpers/validateLogin";
import { userLogin } from "@/services/userService";
import { UserContext } from "../../context/userContext";
import styles from "./LoginComponent.module.css";

const LoginComponent = () => {
  const { setUser } = useContext(UserContext);
  const router = useRouter();

  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect");

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
        alert("Logged in!");
        setUser(res);
        router.push(redirectPath || "/");
      } else {
        alert(res.message);
      }
    }
  };

  return (
    <form onSubmit={handleOnSubmit} className={styles.form}>
      <div className="mb-2">
        <label className="text-xl font-bold">Email:</label>
        <input
          type="text"
          value={userData.email}
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
          className={styles.input}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
      </div>

      <div className="mb-2">
        <label className="text-xl font-bold">Password:</label>
        <input
          type="password"
          value={userData.password}
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
          className={styles.input}
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}
      </div>

      {/* Centrando el botón */}
      <div className="flex justify-center">
        <button className="button">Sign In</button>
      </div>

      {/* Link to Register */}
      <div className="mt-4">
        <p className="text-center">
          Not registered yet?{" "}
          <Link
            href="/register"
            className="text-ocean-dark underline hover:text-ocean-basic"
          >
            Sign up here!
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginComponent;
