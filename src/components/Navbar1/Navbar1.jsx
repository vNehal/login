import React, { useEffect, useState } from 'react'
import './Navbar1.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
   const [menu,SetMenu] = useState("Home");
   
   const [sticky, SetSticky] = useState(false);

   useEffect(() => {
    window.addEventListener('scroll',() =>{
      window.scrollY > 50 ? SetSticky(true) : SetSticky (false)
    })
   },[])
  
    
   return (
     <nav class = {`container ${sticky ? 'dark-nav' :''}`}>
         <img src= { logo }alt="" class="logo" />
         <ul>
             <a href="/" onClick = {() => SetMenu("Home")} class={menu==="Home"?"active" :""}>Home</a>
             <a href="../../Pages/Store/Store"onClick = {() => SetMenu("Store")} class={menu==="Store"?"active" :""}>Store</a>
             <a href="../../Pages/Cart/Cart"onClick = {() => SetMenu("Cart")} class={menu==="Cart"?"active" :""}>Cart</a>
             <Link to ="../../Pages/Cart/Cart"><button class='btn'>Register</button></Link>  
         </ul>
     </nav>
   )
 }
 

export default Navbar
