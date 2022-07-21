import React, {useState} from 'react'
import styled from 'styled-components';


const CounterDiv = styled.div `
display: flex;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;
flex-direction: column;
justify-content: center;
object-fit: cover;

`;
const CounterBtn = styled.div `
display: flex;
font-size: 1.3em;
margin: 1em;
padding: 0.50em 1em;
border-radius: 3px;
flex-direction: row;
border: 1px solid;
justify-content: space-between;

`
const Button = styled.button `
    
    border: 1px solid;
    border-radius: 2px;
    padding:3;
    &:hover {background: "#efefef";color:white}

`
   
      
    




const ItemCount = ({ stock, initial = 1, price, onAdd}) => {
  const [count, setCount] = useState(initial);

  const restar = () => {
    if (count > initial) {
        setCount(count - 1);
    }
  };

  const sumar = () => {
    if (count < stock) {
        setCount(count + 1);
    }
    
    
};

  return (
    <CounterDiv>
        <CounterBtn>
            <Button onClick={restar}>   -   </Button>
            <p>{count}</p>
            <Button onClick={sumar}>   +   </Button>
        </CounterBtn>

        
        
    <Button  onClick={()=>onAdd(count)}>AGREGAR AL CARRITO</Button>
        
    </CounterDiv>
  );
};


export default ItemCount;
