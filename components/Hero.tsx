"use client"
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
  const handleButton = () => {
    alert("ok bro")
  }

  return (
    <div className='hero'>
        <div className='flex-1 p-36 padding-x '>
            <h1 className='hero__title'>
            Get Moving Fast: Find, Book, and Rent Your Car with Ease!
            </h1>
            <p className='hero__subtitle'>
            Quick Car Rentals Made Easy:  Your Simple Solution for Instant Mobility and Hassle-Free Travel 
            </p>
            <CustomButton title={"Explore Cars"} handleClick={handleButton} containerStyle={'bg-primary-blue rounded-full mt-10 text-white '}  />
        </div>


      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>


    </div>

  )
}

export default Hero