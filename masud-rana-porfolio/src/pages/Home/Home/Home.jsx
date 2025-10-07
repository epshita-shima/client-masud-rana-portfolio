import React from 'react'
import Header from '../../../components/Header'
import Hero from '../../../components/Hero'
import Client from '../../../components/Client'
import Footer from '../../../components/Footer'
import Contact from '../../../components/Contact'
import Experience from '../../../components/Experience'
import Gallary from '../../../components/Gallary'
import WorkGalary from '../../../components/WorkGalary'
import './Home.css'
const Home = () => {

  return (
    <div className='bg-offwhite-orange-shimmer'>
        <Hero></Hero>
        <Experience></Experience>
        {/* <Gallary></Gallary> */}
        <WorkGalary></WorkGalary>
        <Client></Client>
       <Contact></Contact>
    </div>
  )
}

export default Home