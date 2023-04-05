import { useContext } from "react"
import { dataContext } from "../Context/DataContext";
import { CartElement } from "./CartElement"
import CartTotal from "./CartTotal";
import "./CartContent.css";
import { Navbar } from "../Navbar/Navbar";

 const CartContent = () => {
  const { cart } = useContext(dataContext);

  return (
    <>
      <Navbar />
      {cart.length > 0 ? (
        <>
          <CartElement />
          <CartTotal />
        </>
      ) : (
        <h2 className='cart-message-center'>Tu carrito esta vacio</h2>
      )}
    </>
  );
};

export default CartContent;
