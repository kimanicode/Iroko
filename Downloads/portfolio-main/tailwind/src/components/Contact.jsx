import React  from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import { useState } from 'react';

const Contact = () => {



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false)
  const [empty, setEmpty] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  
  };
  const handleSubmit = (event) => {
    event.preventDefault(); 
    
    
    setFormData({
      name: "",
      email: "",
      message: "",
    })
    if( formData.message !== '' ){
    setSuccess(true)
    setEmpty(false)
    
    }
    if (formData.message == '' && formData.email == '' && formData.name == '') {
      setEmpty(true)
    }
    
    
  };

  
  console.log(formData)
 


  return (
    <div className='w-full md:px-[100px]   bg-myblue text-center' id='contact'> 
    <p className='text-3xl  text-mywhite font-bold  py-5'>Contact</p>


        <div className='flex md:flex-row flex-col justify-between'>
          <div className='p'>
            <p className='text-mywhite text-2xl '>Drop me a message</p>
            <span className='text-mygray'>
              Please feel free to reach out to me at any time!

            </span>


            <div className='py-7 px-2'>

            <div  className='py-2  flex justify-items-start text-center items-center'>
              <strong className='bg-mygray hover:bg-mygray/50 p-3 rounded' ><LocalPhoneTwoToneIcon/></strong> 
              <span className='text-mywhite px-3'>+254-710-712-393</span>
            </div>

            <div  className='py-2  flex justify-items-start text-center items-center'>
              <strong className='bg-mygray  hover:bg-mygray/50 p-3 rounded' ><EmailTwoToneIcon/></strong> 
              <span className='text-mywhite px-3'>geoffreykimani001@gmail.com</span>
            </div>

            <div  className='py-2  flex justify-items-start text-center items-center'>
              <strong className='bg-mygray hover:bg-mygray/50 p-3 rounded' ><HomeTwoToneIcon/></strong> 
              <span className='text-mywhite px-3'>Nairobi, Kenya</span>
            </div>

            


            </div>
          </div>


          <div className='shadow-xl rounded-2xl flex flex-col shadow-orange  p-2'> 

          <input type="text" name="name" className="mt-1 px-4 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Name " required onChange={handleInputChange} value={formData.name}/>
          
          <input type="email" name="email" className="mt-2 px-4 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Email " required onChange={handleInputChange}   value={formData.email} />

          <textarea id="message" rows="4" className="block p-2.5 mt-2  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..." onChange={handleInputChange} value={formData.message} name='message'></textarea>

          <button className='py-2 px-4 w-1/2 bg-col2 hover:bg-col2/50 text-mywhite  font-bold mt-2 rounded' onClick={handleSubmit}>
            Send
          </button>
          {success && <div className='text-jade font-bold py-2'>Message sent successfully </div>}
          {empty && <div className='text-celadon font-bold py-2'>Message not sent  </div>}
          
          </div>
        
        </div>
        <div className='text-center py-8'>
            <div>
            <p className='text-3xl font-bold text-mywhite   py-5'>Get In Touch</p>
            </div>
             <div className='flex justify-center'>

            
              <div className='px-4'><a href="https://www.facebook.com/kimani.karaba"><FacebookIcon color='primary' /></a></div>

              <div className='px-4'>
                <a href="https://twitter.com/kimaniGeoffre14"><TwitterIcon color='secondary' /></a>
                </div>
              <div className='px-4'>
                <a href="https://www.linkedin.com/in/kimani-geoffrey-ba8039212/"><LinkedInIcon color='primary'/></a>
                </div>
              <div className='px-4'>
                <a href="https://github.com/kimanicode"><GitHubIcon color='secondary'/></a>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Contact