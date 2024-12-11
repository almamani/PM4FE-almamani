"use client";
import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/userContext";
import { CartContext } from "@/context/cartContext";
import styles from "./Menu.module.css";

const Menu = () => {
  const { user, setUser } = useContext(UserContext);
  const { cart, setCart } = useContext(CartContext);
  const router = useRouter();

  const handleLogout = () => {
    setUser(null);
    setCart([]);
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    router.push("/");
  };

  return (
    <nav className="flex items-center justify-between">
      <ul className="flex space-x-4 text-gray-very-light text-2xl">
        <li>
          <Link href="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/products" className={styles.link}>
            Products
          </Link>
        </li>

        {user ? (
          <>
            <li>
              <Link href="/dashboard" className={styles.link}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/cart" className={styles.link}>
                {`Cart ${cart.length > 0 ? "(" + cart.length + ")" : " "}`}
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className={styles.link}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/login" className={styles.link}>
                Login
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
