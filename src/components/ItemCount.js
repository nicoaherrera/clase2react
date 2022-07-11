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
const Counter = styled.div `
display: flex;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;

flex-direction: row;

`;
  return (
    <Counter>
        <div className="counter-btn">
            <button onClick={restar}>-</button>
            <p>{count}</p>
            <button onClick={sumar}>+</button>
        </div>

        <div>
            <button className="add-btn" onClick={onAdd}> Agregar al carrito</button>
        </div>
    </Counter>
  );
};


export default ItemCount;
