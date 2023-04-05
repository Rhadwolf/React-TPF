import { useContext } from "react"
import { dataContext } from "../Context/DataContext";

import CartItemCounter from "./CartItemCounter"


export const CartElement = () => {
    const { cart, setCart } = useContext(dataContext);

    const deleteproduct = (id) => {
     const foundId = cart.find ((element) => element.id === id);

     const newCart = cart.filter ((element) => {
        return element !== foundId;
     });
     setCart(newCart);
    };

    return cart.map((product) => {
        return (
            <div className="cartContent" key={product.id}>
                <img src={product.img} alt="product-card"></img>
                <h3 className="name">{product.nombre}</h3>
                <CartItemCounter product={product} />
                <h4 className="price">{product.precio * product.quanty}$</h4>
                <h3 className="cart-delete-button" onClick={() => deleteproduct(product.id)}>❌</h3>
            </div>
        );
    });

};

