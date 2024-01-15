import React  , {useState} from 'react'
import {MenuIcon ,XIcon } from '@heroicons/react/solid'
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {

  const [nav ,setNav] = useState(false)

  function handleClick(){
    setNav(!nav)
  }
  


  return (
    
    <div className=' w-full bg-mygray h-20  top-0 z-10 sticky px-8 md:px-[50px]' >
        <div className=' flex justify-between items-center w-full h-full'>
            <div className='flex items-center '> 
                
                    <h1 className='font-bold mr-4 text-3xl sm:text-4xl text-orange ' > <Link to ='/#home'>KIMANI.</Link></h1>
                    

                   
            

            </div>
            <ul className='hidden md:flex px-20 gap-3'>
                        <li className='font-semibold hover:text-col2 text-myblue'> <Link to ='/#home'>Home</Link></li>
                        <li className='font-semibold hover:text-col2 text-myblue'> <Link to='/#about'>About</Link></li>
                        <li className='font-semibold hover:text-col2 text-myblue'> <Link to='/#contact'>Contact</Link></li>
                        <li className='font-semibold hover:text-col2 text-myblue'> <Link to='/#contact'>Experience</Link></li>
                        
                        

            </ul>
            <div className='hidden md:flex pr-4'>
                     
                      <button className='px-8 py-3 bg-myblue text-mywhite hover:bg-myblue/50 rounded-lg font-bold'>Download Resume</button>
            </div>
            <div  className='md:hidden' onClick={handleClick}>
               {!nav ? <MenuIcon className='w-7 text-orange'/>: <XIcon className='w-7 text-orange'/>} 
           </div>

        </div>

        {nav &&   <div className='relative'>
        
              <ul className='absolute flex flex-col gap-4 bg-mygray  w-full '>
                        <li className='font-semibold hover:text-col2 text-myblue' onClick={handleClick}> <Link to ='/#home'>Home</Link></li>
                        <li className='font-semibold hover:text-col2 text-myblue' onClick={handleClick}> <Link to='/#about'>About</Link></li>
                        <li className='font-semibold hover:text-col2 text-myblue' onClick={handleClick}> <Link to='/#contact'>Contact</Link></li>
                        <li className='font-semibold hover:text-col2 text-myblue' onClick={handleClick}> <Link to='/#contact'>Experience</Link></li>

                      <div className='py-5' >
                      
                        <button className='px-8 py-3 rounded text-mywhite bg-myblue'>Download Resume</button>

                      </div>


              </ul>

        </div>
        
       
        
        }

       
        
       
        
    </div>


    
  )
}

export default Navbar