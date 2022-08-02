import { getFirestore, doc, getDoc } from 'firebase/firestore'
import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
  const [item, setItem] = useState ({});
  const { id } = useParams();



  useEffect (() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb,'items',id);
    getDoc(queryDoc)
    .then(res => setItem({id: res.id,...res.data()}))
  },[setItem])



  return (
     <ItemDetail item={item}/>
   )
  };

export default ItemDetailContainer
