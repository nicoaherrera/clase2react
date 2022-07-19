import ItemCount from "./ItemCount"
import '../styles.css'
import { Link } from "react-router-dom"


const Item = ({item}) => {
  return (
    <div className = "itemcard">
                <div className ="cardbody">
                    <img className="cardimg" src={item.img} alt=""/>
                    <h2 className="cardtitle">{item.title}</h2>
                    <p className="cardprice">${item.price}</p>

                
                    <Link to={`/item/${item.id}`}> <button>Detalle</button> </Link>
                    <ItemCount stock={item.stock} initial={1} />

                    
                </div>
        
            </div>
  )
}
export default Item