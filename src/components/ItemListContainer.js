import { useEffect, useState } from "react";
import { products } from "../mock/products";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
    const [items, setItems] = useState ([])
    useEffect(()=>{
        const traerProductos = new Promise ((res, rej) => {
            setTimeout(() => {
                res(products);
            }, 2000);
        })
        traerProductos.then((data)=> {
            setItems(data);
        })
        .catch((error)=>{
            console.log(error)
        })
    },[]);



/*const ItemListContainer = () => {
    const [items, setItems] = useState ([]);
  
    useEffect(() => {
      getItems();
    }, [])
  
    const getItems = async () => {
      await fetch('../data/data.json')
      .then((response) => {return response.json();
      })
      .then((nuevarespuesta) => setItems(nuevarespuesta))
      .catch((error) => console.log(error));
  };*/
  


    return (
        <div>
           <h1> {props.title} </h1>
           <ItemList items={items}/>
         </div>
    )
    };
    



export default ItemListContainer;
