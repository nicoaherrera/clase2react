import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
    const [items, setItems] = useState ([]);
    const { category } = useParams();

 


    useEffect(()=>{ 
        const querydb = getFirestore();
        const queryCollection = collection(querydb,'items');
        if (category) {
            const queryFilter = query(queryCollection, where('category','==', category))
            getDocs(queryFilter)
            .then(res => setItems(res.docs.map(item => ({id: item.id,...item.data() }))))
         } else {getDocs(queryCollection)
             .then(res => setItems(res.docs.map(item => ({id: item.id,...item.data() }))))}




    },[category])


  


    return (
        <div>
           
           <ItemList items={items}/>
         </div>
    )
    };
    



export default ItemListContainer;
