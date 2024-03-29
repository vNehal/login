import React,{useContext} from 'react'
import './ItemDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import ProductItem from '../ProductItem/ProductItem'

const ItemDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div class="container">
    <div class="item-display" id='item-display'>
      <h2>Items Available</h2>
       <div class="item-display-list">
         {food_list.map((item,display, index)=>{

            return <ProductItem key={index} id={item._id} name= {item.name} description={item.description} price ={item.price} image={item.image} />
         
         } )}
      </div> 
    </div>
    </div>
  )
}

export default ItemDisplay
