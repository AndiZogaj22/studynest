import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Partners from '../components/Partners.jsx'
import TopSellers from '../components/TopSellers.jsx'
import Footer from '../components/Footer.jsx'
import Banner from '../components/Banner.jsx'
import Faq from '../components/Faq.jsx'
import Teachers from '../components/Teachers.jsx'
const Home = () => {
  return (
   <>
    <Navbar />
    <Hero />
    <Banner />
    <TopSellers />
    <Teachers />
    <Faq />
    <Partners />
    <Footer />
   </>
  )
}

export default Home


