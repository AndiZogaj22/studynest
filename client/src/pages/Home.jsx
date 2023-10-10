import React from 'react'
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import Partners from '../components/Partners.vue'
import TopSellers from '../components/TopSellers.vue'
import Footer from '../components/Footer.vue'
import Banner from '../components/Banner.vue'
import Faq from '../components/Faq.vue'
import Teachers from '../components/Teachers.vue'
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


