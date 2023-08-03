import React from 'react'
import Navbar from '../Navbar/Navbar'
import Slidebar from '../Slidebar/Slidebar'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'
function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <Slidebar/>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default Home