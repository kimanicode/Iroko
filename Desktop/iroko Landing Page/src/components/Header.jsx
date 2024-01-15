import React from "react"


export default function Header() {
  return (
    <div className="w-full flex justify-between  P-6  zinc-200 h-16  top-0 z-10 items-center bg-whitebit/50 ">
        <div className="h-full font-mono text-celadon p-6 text-xl"> 
          IROKO.         
        </div>
        <div className="hidden md:flex p-6">
            <ul className="flex md:gap-4">
                <li className="hover:text-celadon text-lg text-teal cursor-pointer hover:underline">Features</li>
                <li className="hover:text-celadon text-lg  text-teal cursor-pointer hover:underline">Why Iroko</li>
                <li className="hover:text-celadon text-lg  text-teal cursor-pointer hover:underline">Portfolio</li>
                <li className="hover:text-celadon  text-lg  text-teal  cursor-pointer hover:underline">Pricing</li>
            </ul>
        </div>
       <div className="hidden md:flex  p-6 md:gap-4 text-center items-center">
              <div><p className="cursor-pointer bold  hover:text-celadon text-teal text-lg">Log In</p></div>
            
            
            <div> 
              <button className='px-6 py-2  rounded-full text-black bg-transparent border-[2px]  border-celadon  mx-3 hover:bg-celadon hover:text-white ' >Request Demo</button>
              </div>
       </div>
       



    </div>
  )
}
