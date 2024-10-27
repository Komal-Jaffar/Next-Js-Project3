import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
<div>
    <div className='p-5 bg-purple-400 container grid lg:grid-cols-2 min-h-full  min-w-full'>
    <Image 
      src={require('../../public/images/abk dp.jpg')}
      alt="Hijabs"
      width={200}
      height={200}
      loading="lazy"
      className="w-[300] h-[300] ml-10  rounded-full "/>
      
       <div className='font-extrabold text-[60px] leading-tight'>
           <p>WELCOME TO</p>
            <p>ABK </p>
            <p>COLLECTION</p>
            
       
        
       </div> 
    </div>
</div>
  )
}

export default Hero
