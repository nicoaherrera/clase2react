import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { products } from '../mock/products'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
  const [item, setItem] = useState ({});
  const { id } = useParams();

  const traerProductoxId = () => {
    return new Promise ((res)=> {
      setTimeout(()=> {
        res(products.find(obj => obj.id === id))
  }, 1000)
})
}

  useEffect (() => {
   traerProductoxId().then(res => {
     setItem(res);
   }
   );
  },[id]);
  return (
     <ItemDetail item={item}/>
   )
  };

export default ItemDetailContainer
