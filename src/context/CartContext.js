import { createContext, useState } from "react";

export const CartContext = createContext()

const Provider = (props) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            alert("en el carrito");
        } else {
            setCart([...cart,{...item,cantidad}]);
        }
    };
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }
    return <CartContext.Provider value={{cart, addToCart}}> {props.children} </CartContext.Provider>;
    
};
export default Provider