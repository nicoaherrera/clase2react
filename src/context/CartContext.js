import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const Provider = (props) => {
    const [cart, setCart] = useState([]);

   


    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            setCart(cart.map( producto => {
                return producto.id === item.id ? {...producto, cantidad: producto.cantidad + cantidad } : producto }));
                
            }

             else {
            setCart([...cart,{...item,cantidad}]);
        }
    };
    const isInCart = (id) => 
        cart.find(item => item.id === id) ? true : false;
    
    const deleteAll = () => {
        setCart([]);
    };

    const totalCart = () => {
        return cart.reduce((prev, act) => prev + act.cantidad * act.price, 0);
    }


    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0);

    const deleteForId = (id) => {
        const productosFiltrados = cart.filter((item) => item.id !== id)
        setCart(productosFiltrados);
    }
    return <CartContext.Provider value={{cart, addToCart, deleteAll, deleteForId, totalCart}}> {props.children} </CartContext.Provider>;
    
};
export default Provider