import React from 'react'
import Carousel from '../../components/home/Carousel'
import Vision from '../../components/home/Vision'


const Home = () => {
  return (
    <div>
      <div className='carousel'>
      <Carousel/>
      </div>
      <div className='vision-conatiner'>
      <Vision/>
      </div>
    </div>
  )
}

export default Home
