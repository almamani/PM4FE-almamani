"use client";
import { useContext } from "react";
import { buyOrder } from "@/services/ordersService";
import { CartContext } from "@/context/cartContext";
import { UserContext } from "@/context/userContext";

const CartComponent = () => {
  const { cart, cleanCart } = useContext(CartContext);
  const { user, updateOrders } = useContext(UserContext);

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
    <div className="mx-auto">
      {!cart || cart.length === 0 ? (
        <h2 className="mt-6 text-pink-basic">Your cart is emty.</h2>
      ) : (
        <div className="flex flex-col gap-8 mt-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between gap-20 items-center p-4 border border-gray-300 rounded-lg bg-gray-50"
            >
              <h3>{item.id}</h3>
              <h3>{item.name}</h3>
              <h3>${item.price}</h3>
            </div>
          ))}
          <div className="flex justify-between gap-20 items-center p-4 border border-gray-300 rounded-lg bg-gray-50">
            <button className="button mt-3 mb-3" onClick={handleCart}>
              Buy Order
            </button>
            <h2>Total: ${totalOrder}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartComponent;
