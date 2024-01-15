import React from 'react'
import Banner from '../assets/pic1.jpg'

export const Hero = () => {
  return (
    <div className=" flex md:flex-row flex-col py-10 w-full bg-whitebit/50 relative h-screen">
       
        <div className=' text-start flex flex-col basis-1/2 px-10 py-3 w-full'>

            <h2 className='text-teal md:text-6xl text-2xl  mb-4'> Grow Your Portfolio <br /> Streamline Your Workflow</h2>
            <p className=' mb-4 text-charcoal '>IROKO property management software effectively <br />automates and scales property management tasks</p>

          <button  className='bg-celadon  hover:px-7 px-6  text-xl text-white md:mt-8  py-3 mt-2 rounded-full md:w-1/2 w-full hover:bg-celadon/80 ' >
              Request a Demo
          </button>
        </div>

        <div className='basis-1/2 p-3 '>
          <img src={Banner} alt="" className='p-3 shadow-xl rounded-2xl shadow-blue-gray-900/50 hover:shadow-2xl' />
        </div>
       
    
   
    </div>
  )
}
