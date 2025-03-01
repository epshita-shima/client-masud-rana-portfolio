import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import StickySocialMedia from '../pages/Common/StickySocialMedia'

const Main = () => {
  return (
    <div className='bg-white'>
      <StickySocialMedia></StickySocialMedia>
       <Header></Header>
        <Outlet></Outlet>
       
        
        <Footer></Footer>
    </div>
  )
}

export default Main