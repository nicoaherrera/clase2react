import { useEffect, useState } from "react";
import { products } from "../mock/products";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
    const [items, setItems] = useState ([]);
    const { category } = useParams();

    const traerProductos = () => {
        return new Promise((data) =>{
            setTimeout(()=>{
                data(category ? products.filter(obj => obj.category === category) : products);
            }, 500);
        });


    };
    useEffect(()=>{ 
        
        traerProductos().then((data)=> {
            setItems(data);
        })
        .catch((error)=>{
            console.log(error)
        })
    },[category]);


  


    return (
        <div>
           
           <ItemList items={items}/>
         </div>
    )
    };
    



export default ItemListContainer;
