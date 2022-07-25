import "./ItemDetail.css"
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({item}) => {
  const {title, img, description, price, stock} = item

  const onAdd = (cantidad) => {
    console.log("seleccionaste ", cantidad, " items")
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