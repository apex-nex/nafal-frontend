import React from 'react'
import Carousel from '../../components/home/Carousel'
import AboutSection from '../../components/home/AboutSection'
import Vision from '../../components/home/Vision'


const Home = () => {
  return (
    <React.Fragment>
      <div className='carousel'>
      <Carousel/>
      </div>
      <div className='about-section'>
      <AboutSection/>
      </div>
      <div className='vision-container mb-5'>
      <Vision/>
      </div>
    </React.Fragment>
  )
}

export default Home
