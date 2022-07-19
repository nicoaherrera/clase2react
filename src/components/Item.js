import ItemCount from "./ItemCount"
import './item.css'
import { Link } from "react-router-dom"


const Item = ({title,img,id,price,stock}) => {
  return (
    <div className = "card-container">
                <div >
                    <img className="img-container" src={img} alt=""/>
                    <h2 className="cardtitle">{title}</h2>
                    <p className="cardprice">${price}</p>

                
                    <Link to={`/item/${id}`}> <button>Detalle</button> </Link>
                    <ItemCount stock={stock} initial={1} />

                    
                </div>
        
            </div>
  )
}
export default Item