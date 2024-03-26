import React from 'react'
import './Store.css'
import Banner from '../../Components/Banner/Banner'

import UserChoice from '../../Components/UserChoice/UserChoice'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar1/Navbar1'


const Store = () => {
  return (
    <>
      <Navbar/>
       <Banner />
     
      <UserChoice />
      <Footer />
    </>
       
  )
}

export default Store
