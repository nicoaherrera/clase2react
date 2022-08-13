
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useContext } from 'react'
import { CartContext } from "../context/CartContext";
import swal from 'sweetalert';
import './form.css'



const Formulario = () => {
    const {cart, totalCart, deleteAll} = useContext(CartContext)
    let newDate = new Date()
    const createOrder =(e) => {

        e.preventDefault()
        const db = getFirestore()
        const orderCollectionQuery = collection(db,'orders')
        const order = {
            buyer: {nombre: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value
                },
            items: cart.map((product) => ({id: product.id, nombre: product.title, precio: product.price})),
            date: String(newDate.getDate()).padStart(2, '0') + '/' + String(newDate.getMonth() + 1).padStart(2, '0') + '/' + newDate.getFullYear(),
            total: totalCart()
        }
        addDoc(orderCollectionQuery,order).then((res) =>{
          swal({
            title: "Compra realizada!",
            text: `Su numero de compra es ${res.id}`,
            icon: "success",
            button: "Finalizar!",
          })
            ;
            
        }).catch((err) => {
            console.log(err)
        })
        
        return deleteAll();
        
        
        
    }
  return (
    <div className="formContainer">
        <div className="form">
      <div className="title">Concreta tu compra!</div>
      <div className="subtitle">ingresa tus datos</div>
      <div className="input-container ic1">
        <input id="name" className="input" type="text" placeholder="Nombre y apellido" />
      
      </div>
      <div className="input-container ic2">
        <input id="email" class="input" type="text" placeholder="Email" />

      </div>
      <div className="input-container ic2">
        <input id="phone" className="input" type="text" placeholder="Telefono" />
       
      </div>
      <button onClick={createOrder} type="text" className="submit">Comprar</button>
    </div>
    </div>
  )
}
export default Formulario