import React from "react"


export default function Header() {
  return (
    <div className="w-full flex justify-between  P-6 h-16">
        <div className="h-full font-mono p-6 text-lg"> 
          IROKO.         
        </div>
        <div className="flex p-6">
            <ul className="flex md:gap-4">
                <li className="hover:text-blue-600 cursor-pointer hover:underline">Features</li>
                <li className="hover:text-blue-600 cursor-pointer hover:underline">Why Iroko</li>
                <li className="hover:text-blue-600 cursor-pointer hover:underline">Portfolio</li>
                <li className="hover:text-blue-600 cursor-pointer hover:underline">Pricing</li>
            </ul>
        </div>
       <div className="flex  p-6 md:gap-4">
        <p className="cursor-pointer bold py-[2px] hover:text-blue-600">Log In</p>
       
       
       <button className='px-6   bg-slate-600 h-8 rounded-lg text-white mx-3 hover:bg-slate-400 text-bold' >Request Demo</button>
       </div>



    </div>
  )
}
