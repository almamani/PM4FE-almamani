"use client";
import { useContext } from "react";
import { buyOrder } from "@/services/ordersService";
import { CartContext } from "@/context/cartContext";
import { UserContext } from "@/context/userContext";

const CartComponent = () => {
  const { cart, setCart, cleanCart } = useContext(CartContext);
  const { user, updateOrders } = useContext(UserContext);

  const handleRemoveItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const handleCart = async () => {
    if (user) {
      const res = await buyOrder(cart, user);

      if (res.status === "approved") {
        cleanCart();
        updateOrders({ status: res.status, id: res.id, date: res.date });
        alert("Order Finished!");
      } else {
        alert(res.message);
      }
    } else {
      alert("Error!");
    }
  };
  const initialOder = 0;
  const totalOrder = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    initialOder
  );
  return (
    <div className="wrapper1">
      {!cart || cart.length === 0 ? (
        <h2 className="mt-6 text-pink-basic">Your cart is empty.</h2>
      ) : (
        <div className="flex flex-col gap-8 mt-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between gap-20 items-center p-3 mb-2 border border-gray-light rounded-lg bg-white-basic"
            >
              <p className="text-2xl">{item.name}</p>
              <p className="text-2xl">${item.price}</p>
              <button
                className="text-red-500 text-3xl font-bold hover:text-red-700 transition-colors duration-300"
                onClick={() => handleRemoveItem(item.id)}
              >
                X
              </button>
            </div>
          ))}
          <div className="flex justify-between gap-20 items-center p-3 border border-gray-light rounded-lg bg-white-basic">
            <p className="text-3xl">Total: ${totalOrder}</p>
            <button className="button mt-3 mb-3" onClick={handleCart}>
              Buy Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartComponent;
