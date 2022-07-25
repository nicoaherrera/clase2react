//import ItemCount from "./ItemCount"
import './item.css'
import { Link } from "react-router-dom"


const Item = ({title,img,id,price,stock}) => {
  return (
    <div className = "card-container">
                <div >
                    <img className="img-container" src={img} alt=""/>
                    <h2 className="cardtitle">{title}</h2>
                    <p className="cardprice">${price}</p>

                
                    <Link to={`/item/${id}`} className="linkbutton"> <button  className="button">DETALLE</button> </Link>
                    

                    
                </div>
        
            </div>
  )
}
export default Item