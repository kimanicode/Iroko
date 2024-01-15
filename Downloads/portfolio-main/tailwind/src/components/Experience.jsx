import React from 'react'
import tailwind from '../assets/download.png'
import react from '../assets/react.jpg'
import fire from '../assets/firebase.png'
import git  from '../assets/git.png'
import js  from '../assets/js.png'
import mongo  from '../assets/mongo.png'
import node  from '../assets/node.png'


const Experience = () => {
  return (
    <div  className='w-full  px-8 md:px-[50px] bg-mygray py-8 '>
        <h1 className='text-center text-myblue font-bold text-2xl py-3'>Technologies</h1>
        <div className=' py-6  flex gap-5  justify-center flex-wrap'>
            <div className='flex flex-col rounded-lg text-center w-28 shadow-xl  shadow-myblue hover:shadow-2xl'>
                <img src={tailwind} alt=""  className=' basis-3/4 w-full rounded-t-lg'/>
                <p className='py-2 font-semibold text-col1  '>Tailwind</p>
            </div>
            
            <div className='flex flex-col rounded-lg text-center w-28 shadow-xl  shadow-myblue hover:shadow-2xl'>
                <img src={react} alt=""  className='w-full rounded-t-lg basis-3/4'/>
                <p className='py-2 font-semibold text-col1  '>React Js</p>
            </div>

            <div className='flex flex-col rounded-lg text-center w-28 shadow-xl  shadow-myblue hover:shadow-2xl'>
                <img src={fire} alt=""  className='w-full rounded-t-lg basis-3/4'/>
                <p className='py-2 font-semibold text-col1  '>Firebase</p>
            </div>

            <div className='flex flex-col rounded-lg text-center w-28 shadow-xl  shadow-myblue hover:shadow-2xl'>
                <img src={mongo} alt=""  className='w-full rounded-t-lg basis-3/4'/>
                <p className='py-2 font-semibold text-col1  '>Mongo</p>
            </div>

            <div className='flex flex-col rounded-lg text-center w-28 shadow-xl  shadow-myblue hover:shadow-2xl'>
                <img src={node} alt=""  className='w-full rounded-t-lg basis-3/4'/>
                <p className='py-2 font-semibold text-col1  '>Node Js</p>
            </div>

            <div className='flex flex-col rounded-lg text-center w-28 shadow-xl  shadow-myblue hover:shadow-2xl'>
                <img src={js} alt=""  className='w-full rounded-t-lg basis-3/4'/>
                <p className='py-2 font-semibold text-col1  '>JavaScript</p>
            </div>

            <div className='flex flex-col rounded-lg text-center w-28 shadow-xl  shadow-myblue hover:shadow-2xl'>
                <img src={git} alt=""  className='w-full rounded-t-lg basis-3/4'/>
                <p className='py-2 font-semibold text-col1  '>Git</p>
            </div>
            <div className='flex flex-col rounded-lg text-center w-28 shadow-xl  shadow-myblue hover:shadow-2xl'>
                <img src={git} alt=""  className='w-full rounded-t-lg basis-3/4'/>
                <p className='py-2 font-semibold text-col1  '>Express JS</p>
            </div>

            


            
        </div>
    
    </div>
  )
}

export default Experience