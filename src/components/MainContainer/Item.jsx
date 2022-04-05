import React from 'react'
import { Card } from "react-bootstrap"
import ItemCount from "./ItemCount"

export default function Item({id, product_name, price, description, stock, image}) {

  return (

         <Card style={{ width: '18rem' }} key={id}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{product_name}</Card.Title>
    <Card.Text>
        {price},{stock} elementos en stock <br/>
        {description}
    </Card.Text>
    <ItemCount initial={0} stock={stock}/>
  </Card.Body>
</Card>

  )
}