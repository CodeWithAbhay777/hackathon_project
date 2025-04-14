import React from 'react'
import Hero from '../components/LandingPageComponent/Hero'
import About from '../components/LandingPageComponent/About'
import Navbar3 from '../components/LandingPageComponent/Navbar3'
import Features from '../components/LandingPageComponent/Features'
import Story from '../components/LandingPageComponent/Story'
import Contact from '../components/LandingPageComponent/Contact'
import Footer from '../components/LandingPageComponent/Footer'

const LandingPage = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar3 />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  )
}

export default LandingPage