import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div className='bg-purple-700'>
    
        <br></br>
        <div className='flex justify-between items-center'>
        <div className='text-xl mx-20 bg-purple-300 p-1'><b> AL-HIJAB BY KOMAL </b></div><br></br>
       <ul className='gap-15 lg:gap-8 hidden md:flex'>
           <li className='menuLink'><Link href="/"target="-blank"><b>Home</b></Link></li>
           <li className='menuLink'><Link href="/about"target="-blank"><b>About</b></Link></li>
           <li className='menuLink'><Link href="/abayas"target="-blank"><b>Abayas</b></Link></li>
           <li className='menuLink'><Link href="/contact"target="-blank"><b>Contact</b></Link></li>
       </ul>
       <br></br>
       <br></br>
       
        </div>
      
    </div>
  )
}

export default Header
