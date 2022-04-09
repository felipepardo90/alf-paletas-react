import React, {useState, useEffect} from "react"
import { Container } from 'react-bootstrap'
import ItemList from './ItemList'
import customFetch from "../utils/customFetch"
import products from '../utils/products.json'
import s from './ItemListContainer.module.css'

export default function ItemListContainer() {

    const [items, setItems] = useState([])

    useEffect(()=>{
      customFetch (2000, products)
      .then(resultado => setItems(resultado))
      .catch(error => console.log(error))
      
    }, [])



    return(

<Container className={s.mainContainer}>

  <ItemList products={items} />
  
</Container>

    )
}

