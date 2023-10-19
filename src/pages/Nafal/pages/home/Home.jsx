import React from 'react'
import Carousel from '../../components/home/Carousel'
import AboutSection from '../../components/home/AboutSection'
import Vision from '../../components/home/Vision'
import ClientSection from '../../components/home/ClientSection'


const Home = () => {
  return (
    <React.Fragment>
      <div className='carousel'>
      <Carousel/>
      </div>
      <div className='about-section'>
      <AboutSection/>
      </div>
      <div className='vision-container'>
      <Vision/>
      </div>
      <div className='clients-section'>
          <ClientSection/>
      </div>
    </React.Fragment>
  )
}

export default Home
