import React from 'react'
import './Banner.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Banner = () => {
  return (
    <div class="banner container" id ="bannerlink">
        <div class="banner-text">
            <h1>Sowing Innovation, Reaping Efficiency</h1>
            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                natoque penatibus et magnis dis parturient montes, nascetur 
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
                pretium quis, sem. Nulla consequat massa quis enim.</p>
            <br />
            <button class="btn">Explore More <img src= {dark_arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Banner
