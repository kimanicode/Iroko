import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import mimi from '../assets/me1.png'


const Hero = () => {
  
  return (
    <div className='w-full   px-8 md:px-[50px] bg-mygray flex md:flex-row flex-col md:py-5 gap-2' id='home'>
        <div className='flex flex-col '>
                <div className='py-5'>
                    <p className ='italic text-col2 '>Hi my name is,</p>
                </div>

                <div className='w-full '>
                    <h1 className=' text-3xl font-semibold text-col2 
                    md:text-6xl'>Kimani Karaba.</h1>

                </div>

                <div className='py-5'>
                    <h1 className='text-4xl md:text-6xl text-orange '>I build things for the <span className='font-semibold'>web</span>.</h1>
                </div>


                <div  className='md:w-[400px] py-5  '>
                    <p className='text-col1 '>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. </p>
                </div>

                <div className='w-full flex flex-col'>
                    <Link to='/#form'><button className='px-5 py-3 bg-myblue text-mywhite rounded-lg font-semibold hover:bg-myblue/50 md:w-[200px]'>Previous Projects </button> </Link>
                </div>
        </div>

        <div className='basis-1/2 border-8 border-orange relative w-full md:h-[500px] h-auto rounded-2xl   '> 
          <img src={mimi} alt="" className='h-full w-full shadow-orange hover:shadow-xl shadow-md  rounded-xl top-6 absolute right-6 bg-col2 ' />
          
        </div>

        


    </div>
  )
}

export default Hero