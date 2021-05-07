import React from 'react'
import HeroText from './HeroText'
import HeroImage from './HeroImage'

const Hero = () => {
  return (
    <>
      <div className="container mx-auto  flex px-5  md:flex-row flex-col-reverse items-center mt-8 md:mt-24   ">
        <HeroText />

        <HeroImage />
      </div>
    </>
  )
}

export default Hero
