import React from 'react'
import code from '../assets/code.svg'

const About = () => {
  return (
    <div className='w-full bg-mygray md:px-[50px] px-8' id='about'>
        <h1 className='text-center text-myblue font-bold text-2xl py-3'>About Me</h1>
        <div className='flex md:flex-row flex-col-reverse justify-between'>

        <div className='basis-1/2  w-full  h-auto  drop-shadow-xl rounded-2xl shadow-myblue  '>
          <img src={code} className='h-full  rounded-lg w-full' alt="" />
        </div>
        <div className='basis-1/2 text-col1 p-3 '>
            <p className=' md:py-10'>Hello! <br />
             My name is <span className='font-bold text-orange'> Kimani</span>  and I enjoy creating web applications. My interest in web development started back in 2018 when I joined <span className='font-bold text-orange'> KCA University </span > to pursue  <span className='font-bold text-orange'>Bachelor of Science in Software Development</span> ,i had never heard of it before and was therefore deeply intrigued — turns out curiosity  taught me a lot about HTML & CSS! <br/>
            <br />
            
            <div className='h-[2px] bg-orange my-2 rounded'></div>

            <br/>

            Fast-forward to today, and I’ve had the privilege of attending various tech events and learning various technologies. My main focus these days is building accessible, inclusive products and digital experiences. Am also fascinated by start-ups.
            <br/><br/>

           </p>
           
        </div>
        

        </div>
    </div>
  )
}

export default About