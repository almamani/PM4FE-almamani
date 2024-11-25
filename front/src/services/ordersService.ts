import { API_URL } from "../../envs";
import { IProduct } from "@/interfaces/IProduct";
import { IUser } from "@/interfaces/IUser";

export const buyOrder = async (cart: IProduct[], user: IUser) => {
  const data = {
    userId: user.user.id,
    products: cart.map((product) => product.id),
  };

  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Authorization: user.token },
  });

  return await res.json();
};
