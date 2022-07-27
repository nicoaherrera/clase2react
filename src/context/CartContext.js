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
    const deleteAll = () => {
        setCart([]);
    };
    const deleteForId = (id) => {
        const productosFiltrados = cart.filter((item) => item.id !== id)
        setCart(productosFiltrados);
    }
    return <CartContext.Provider value={{cart, addToCart, deleteAll, deleteForId}}> {props.children} </CartContext.Provider>;
    
};
export default Provider