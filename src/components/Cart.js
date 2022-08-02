import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

 const Cart = () => {
  const {cart, deleteAll, deleteForId, totalCart} = useContext (CartContext);
  if (cart.length === 0) {
    return (
      <h2>Carrito vacio, ir al <Link to= "/">Home</Link></h2>
    )
  }
  return (
    <div>
      {cart.map((prod)=>(
        <div key={prod.id} style={{border: '1px solid black', borderRadius:'5px', margin: '10px', display: 'flex',}}>
          <img src={prod.img} alt={"descripcion imagen"} width="70px" />
          <div >
            <h2>{prod.title}</h2>
            <h2>${prod.price}.-</h2>
            <h2>Cantidad: {prod.cantidad}</h2>
            

          </div >
          <button style={{background: 'red', height: '30px',margin:'25px'}} onClick={()=> deleteForId(prod.id)}>Eliminar</button>
        </div>
      ))
      }
      <h3>Total: $ {totalCart()}  <button >Finalizar compra</button> </h3> 
      <button onClick={deleteAll}>Vaciar carrito</button>
    </div>
  )
}

export default Cart
