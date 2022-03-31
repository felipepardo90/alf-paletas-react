import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap'
import { useState } from 'react'

const Counter = (initial) =>{
    
const [count, setCount] = useState (initial)

const incNum = () =>{
    setCount(count + 1)  
}

const decNum = () =>{
    setCount(count - 1)
}

const reset = () =>{
    setCount(0)
}

return{
    count, 
    incNum, 
    decNum, 
    reset
}

}

const ItemCount = ({stock, initial, onAdd}) => {

    let {count, incNum, decNum, reset} = Counter(initial)


    return(
        
        <>
        <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
    <ButtonGroup className="me-2" aria-label="First group">
      <Button variant="secondary" onClick={count>stock?alert("No hay más elementos en stock"):incNum}>+</Button>{' '}
      <p max="5" min="1">Cliqueaste el botón {count} veces</p>
      <Button variant="secondary" onClick={count>0?decNum:null}>-</Button>{' '}
      <Button variant="secondary" onClick={reset}>Agregar al carrito</Button>{' '}
    </ButtonGroup>
    
  </ButtonToolbar>
        </>
    )
}

export default ItemCount



