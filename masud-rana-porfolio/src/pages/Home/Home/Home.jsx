import React from 'react'
import Header from '../../../components/Header'
import Hero from '../../../components/Hero'
import Client from '../../../components/Client'
import Footer from '../../../components/Footer'
import Contact from '../../../components/Contact'
import Experience from '../../../components/Experience'
import Gallary from '../../../components/Gallary'

const Home = () => {
  return (
    <div>
        <Hero></Hero>
        <Experience></Experience>
        <Gallary></Gallary>
        <Client></Client>
       <Contact></Contact>
    </div>
  )
}

export default Home