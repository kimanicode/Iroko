import React from 'react'
import tees from '../assets/sweatshirt.png'
import iroko from '../assets/pic1.jpg'
import events from '../assets/pic1.jpg'
import agri from '../assets/irewolede-PvwdlXqo85k-unsplash.ccda840bac7197873c94.jpg'

const Projects = () => {
  return (
    <div className='w-full  bg-mygray pb-8  drop-shadow-lg px-8 md:px-[50px]'>
        <p className='text-center text-myblue font-bold text-2xl py-3 '>My Projects</p>
          <div className='flex flex-wrap gap-8'>
            
            <div className='flex justify-center  md:flex-row flex-col  py-8  rounded-2xl'>
              <div className=' basis-1/4  rounded-2xl md:border-8  border-2 border-celadon relative cursor-pointer hover:drop-shadow-2xl'>
                <img src={tees} alt="matishoo" className='md:top-5 top-2 md:left-5 absolute rounded-2xl h-full w-full '/>
              </div>
              <div className='basis-1/2 p-6'>
                <p className='text-3xl text-col2 font-semibold'>Scripted Swag</p>
                <p className='text-col1 py-2'>Scripted Swag is an e-commerce platform dedicated to offering high-quality apparel and
                  accessories designed for developers and tech enthusiasts. Our mission is to provide stylish and
                  comfortable clothing that showcases the coding and tech culture. With a focus on unique
                  designs and top-notch customer service, we aim to become the go-to destination for developer
                  swag
                </p>
                <span className='cursor-pointer text-myblue py-2 font-bold hover:text-myblue/80'>Read more</span>
              </div>

            </div>

            <div className='flex justify-end md:flex-row flex-col  py-8 rounded-2xl'>
              <div className=' basis-1/4 rounded-2xl border-8  border-col2 relative cursor-pointer hover:drop-shadow-2xl'>
                <img src={tees} alt="matishoo" className='rounded-2xl h-full w-full  absolute top-5 left-5'/>
              </div>
              <div className='basis-1/2 p-6'>
                <p className='text-3xl text-col2 font-semibold'>Scripted Swag</p>
                <p className='text-col1 py-2'>Scripted Swag is an e-commerce platform dedicated to offering high-quality apparel and
                  accessories designed for developers and tech enthusiasts. Our mission is to provide stylish and
                  comfortable clothing that showcases the coding and tech culture. With a focus on unique
                  designs and top-notch customer service, we aim to become the go-to destination for developer
                  swag
                </p>
                <span className='cursor-pointer text-myblue py-2 font-bold hover:text-myblue/80'>Read more</span>
              </div>

            </div>

            <div className='flex justify-center md:flex-row flex-col  py-8  rounded-2xl '>
              <div className=' basis-1/4 rounded-2xl border-8  border-celadon relative '>
                <img src={agri} alt="matishoo" className='absolute rounded-2xl top-5 left-5 h-full w-full hover:bg-mygray/50 cursor-pointer hover:drop-shadow-2xl '/>
              </div>
              <div className='basis-1/2 p-6'>
                <p className='text-3xl text-col2 font-semibold'>Script Swag</p>
                <p className='text-col1 py-2'>Scripted Swag is an e-commerce platform dedicated to offering high-quality apparel and
                  accessories designed for developers and tech enthusiasts. Our mission is to provide stylish and
                  comfortable clothing that showcases the coding and tech culture. With a focus on unique
                  designs and top-notch customer service, we aim to become the go-to destination for developer
                  swag
                </p>
                <span className='cursor-pointer text-myblue py-2 font-bold hover:text-myblue/80'>Read more</span>
              </div>

            </div>

            <div className='flex justify-end md:flex-row flex-col  py-8  rounded-2xl '>
              <div className=' basis-1/4 rounded-2xl border-8  border-col2 relative cursor-pointer hover:drop-shadow-2xl'>
                <img src={iroko} alt="matishoo" className='rounded-2xl absolute top-5 left-5 h-full w-full '/>
              </div>
              <div className='basis-1/2 p-6'>
                <p className='text-3xl text-col2 font-semibold'>Iroko</p>
                <p className='text-col1 py-2'>IROKO os a comprehensive property management system designed to address the challeges faced by property managers (agents) and tenants. <br />

                Iroko offers a user friendly dashboard that provides real time updates to agents regarding rent collections, utility payments and tenants complaints.
                </p>
                <span className='cursor-pointer text-myblue py-2 font-bold hover:text-myblue/80'>Read more</span>
              </div>

            </div>



          </div>
        <div className='flex justify-center '>
            <button className='py-3 px-8 bg-myblue hover:bg-myblue/50 rounded-full  text-mywhite font-semibold'>View All</button>
        </div>
    </div>
  )
}

export default Projects