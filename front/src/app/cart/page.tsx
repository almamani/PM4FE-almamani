import CartComponent from "@/components/CartComponent";

const Cart = () => {
  return (
    <main>
      <div className="container">
        <h1>Cart</h1>
        <hr />

        {<CartComponent />}
      </div>
    </main>
  );
};

export default Cart;
