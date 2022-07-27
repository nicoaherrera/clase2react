import "./ItemDetail.css"
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import {  toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({item}) => {
  const {title, img, description, price, stock} = item
  const [cantidad, setCantidad] = useState(0);
  const { addToCart } = useContext (CartContext);
  const notify = () => toast.success("Producto añadido con exito", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  const onAdd = (count) => {
    setCantidad(cantidad);
    addToCart(item,count);
    notify ();
    
  }

  return (
    <div className="itemDetail">
      <div className="img-detail-cont">
        <img src={img} alt={title} className="img-detail" />
      </div>
      <div className="text-container">
        <div className="titulo-container">
            <h1>{title}</h1>
            
            <h3 style={{color: "black"}}>${price}</h3>
        </div>
        
        <p>
          {description}
        </p>
        
        <ItemCount stock={stock} precio={price} onAdd={onAdd}/>
        <Link to="/Cart"> <button className="button"> IR AL CARRITO</button> </Link>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ItemDetail;