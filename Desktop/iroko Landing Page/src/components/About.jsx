import React from 'react'
import { FcDebt,FcMoneyTransfer,FcLineChart, FcFaq  } from "react-icons/fc";


const About = () => {
  return (
    <div>
        <h2 className='text-center text-3xl py-3 text-lightblue'>What we do?</h2>

        <div className='flex  flex-col md:flex-row justify-center gap-3 py-3 '> 

            <div className =' flex flex-col justify-between shadow-xl hover:shadow-2xl rounded shadow-blue-gray-900/50 items-center text-center p-3 h-auto w-auto bg-whitebit m-3 hover:bg-whitebit/50' >
                <div className='bg-celadon rounded-full p-3'>
                <FcDebt size={25} />

                </div>

                <div className=' py-3'>
                    <p className='text-lightblue text-xl py-2'>Smart Billing</p>
                    <span className='text-dark'>  Automate and schedule billing to <br/> preferred dates and time</span>

                </div>
                
            </div>


            <div className =' flex flex-col justify-between shadow-xl hover:shadow-2xl shadow-blue-gray-900/50 items-center text-center p-3 h-auto w-auto bg-whitebit m-3 hover:bg-whitebit/50' >
                <div className='bg-celadon rounded-full p-3'>
                <FcLineChart size={25} />

                </div>

                <div className=' py-3'>
                    <p className='text-lightblue text-xl py-2'>Smart Billing</p>
                    <span className='text-dark'>  Automate and schedule billing to <br/> preferred dates and time</span>

                </div>
                
            </div>


            <div className =' flex flex-col justify-between shadow-xl hover:shadow-2xl shadow-blue-gray-900/50 items-center text-center p-3 h-auto w-auto bg-whitebit m-3 hover:bg-whitebit/50' >
                <div className='bg-celadon rounded-full p-3'>
                <FcFaq  size={25} />

                </div>

                <div className=' py-3'>
                    <p className='text-lightblue text-xl py-2'>Smart Billing</p>
                    <span className='text-dark'>  Automate and schedule billing to <br/> preferred dates and time</span>

                </div>
                
            </div>


            <div className =' flex flex-col justify-between shadow-xl hover:shadow-2xl shadow-blue-gray-900/50 items-center text-center p-3 h-auto w-auto bg-whitebit m-3 hover:bg-whitebit/50' >
                <div className='bg-celadon rounded-full p-3'>
                <FcMoneyTransfer size={25} />

                </div>

                <div className=' py-3'>
                    <p className='text-lightblue text-xl py-2'>Smart Billing</p>
                    <span className='text-dark'>  Automate and schedule billing to <br/> preferred dates and time</span>

                </div>
                
            </div>

           
            
            
        </div>



    </div>
  )
}

export default About