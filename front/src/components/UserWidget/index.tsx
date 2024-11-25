"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/userContext";
import { CartContext } from "@/context/cartContext";
import Link from "next/link";

const UserWidget = () => {
  const { user, setUser } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  const router = useRouter();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    router.push("/");
  };

  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4">
      <ul className="flex space-x-4 text-white">
        {/* Links comunes */}
        <li>
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/products" className="hover:text-blue-400">
            Products
          </Link>
        </li>
        <li>
          <Link href="/cart" className="hover:text-blue-400">
            {`Cart ${cart.length > 0 ? "(" + cart.length + ")" : " "}`}
          </Link>
        </li>

        {/* Links condicionales */}
        {user ? (
          <>
            <li>
              <Link
                href="/dashboard"
                className="hover:text-red-400 focus:outline-none"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="hover:text-red-400 focus:outline-none"
              >
                Logout
              </button>
            </li>
            <li className="text-red-400">{user.user.email}</li>
          </>
        ) : (
          <>
            <li>
              <Link
                href="/login"
                className="hover:text-red-400 focus:outline-none"
              >
                Login
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default UserWidget;
