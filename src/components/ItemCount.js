import React, {useState} from 'react'
import styled from 'styled-components';


const ItemCount = ({ stock, initial, onAdd}) => {
  const [count, setCount] = useState(initial);

  const restar = () => {
    if (count > initial) {
        setCount(count -1);
    }
  };

  const sumar = () => {
    if (count < stock) {
        setCount(count + 1);
    }
    
    
};
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
justify-content: space-between;

`
  return (
    <CounterDiv>
        <CounterBtn>
            <button onClick={restar}>-</button>
            <p>{count}</p>
            <button onClick={sumar}>+</button>
        </CounterBtn>

        
            <button className="add-btn" onClick={onAdd}> Agregar al carrito</button>
        
    </CounterDiv>
  );
};


export default ItemCount;
