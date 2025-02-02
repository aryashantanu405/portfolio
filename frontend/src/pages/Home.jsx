import React from 'react'
import pic from '../assets/my_main_pic.jpg'
import gmail from '../assets/gmail.svg'
import insta from '../assets/insta.svg'
import linked from '../assets/linkedin.svg'
import github from '../assets/github.svg'

const  Home = () => {
  return (
<div className='mt-10 mb-14 flex justify-between bg-white h-full items-center flex-col lg:flex-row'>
  <div className='p-4 flex flex-col align items-center'>
    <h1 className='text-8xl md:text-9xl sm:text-5xl'>Full Stack<br/><span className='text-red-500 sm:text-blue-500'>Developer</span> </h1>
    <p className='mt-5 text-xl md:text-3xl 
    sm:text-2xl font-serif lg:text-2xl'>"As a full stack developer, I craft innovative and scalable web applications, seamlessly blending user experience with robust back-end solutions to create impactful digital journeys."</p>
  </div>
  <div className='flex flex-col'>
    <img className='max-w-96 max-h-96 rounded-3xl' src={pic} alt="" />
    <div className='flex flex-row justify-between mt-4'>
      <a href="mailto:aryas.ug23.ec@nitp.ac.in">
      <img className='w-12 h-12 border rounded-lg' src={gmail} alt=""/>
      </a>
      <a href="https://www.instagram.com/aryashantanu_"><img className='w-12 h-12' src={insta} alt="" />
      </a>
      <a href="https://www.linkedin.com/in/arya-shantanu-a2b8102b2">
      <img className='w-12 h-12 ' src={linked} alt="" /></a>
      <a href="https://www.github.com/aryashantanu405"><img className='w-12 h-12 border rounded-lg' src={github} alt="" /></a>
      
    </div>
  </div>
</div>

  )
}

export default  Home