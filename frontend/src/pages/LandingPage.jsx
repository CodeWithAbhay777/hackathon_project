import React from 'react'
import Hero from '../components/LandingPageComponent/Hero'

const LandingPage = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Hero />

      <section className='z-0 min-h-screen bg-blue-500'/>
    </main>
  )
}

export default LandingPage