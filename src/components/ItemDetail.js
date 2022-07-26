import "./ItemDetail.css"
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({item}) => {
  const {title, img, description, price, stock} = item
  const [cantidad, setCantidad] = useState(0);
  const { addToCart } = useContext (CartContext);
  const onAdd = (count) => {
    setCantidad(cantidad);
    addToCart(item,count);
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
      </div>
    </div>
  );
};

export default ItemDetail;