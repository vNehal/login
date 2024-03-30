import React from 'react'
import './Store.css'
import Banner from '../../components/Banner/Banner'

import UserChoice from '../../components/UserChoice/UserChoice'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'


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
