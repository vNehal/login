import React from 'react'
import './ProductItem.css'
const ProductItem = ({id,name,price,description,image}) => {

    //state variable
   //const[ itemCount,SetItemCount] = useState(0)

  return (
    <div class="product-item">
      <div class="prod-item-img-cont">
        <img class ="prod-item-img"src={image} alt="" />
       {/* {
         !itemCount 
          ?<img class='add' onClick ={() => SetItemCount (prev => prev+1)} src={assets.add_icon_green} alt="" />
          :<div class='prod-item-counter'>

          </div>
      } */}
        
      </div>
      <div class="prod-info">
        <div class="prod-name">
            <p>{name}</p>
            
        </div>
        <p class="prod-item-desc">{description}</p>
        <p class="prod-item-price">${price}</p>
      </div>
    </div>
  )
}

export default ProductItem
