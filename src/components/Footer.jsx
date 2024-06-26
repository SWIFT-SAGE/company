import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare,FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Button from '../lib/ui/button';

function Footer() {
  return (
    <footer >
    
    <div className='   flex p-10 px-20 z-20  items-end border-b-2 border-black'>
    <div className='  flex w-full  gap-10   '>
       <div className='  text-2xl'>
       <p  className=' font-bold text-2xl mb-4'>Company</p>

       <ul >
         <li ><Link to="/about">About</Link></li>
         <li  ><Link to="/contact">Contact</Link></li>
         <li ><Link to="/help">Help</Link></li>
         <li ><Link to="/privacypolicy">Privacy Policy
         </Link></li>
         <li ><Link to="/termsandconditions">Terms Of Services</Link></li>
      </ul>
       </div>
       <div className=' text-2xl'>
        <p className=' font-bold text-2xl'>Contact with us</p>
      <ul>
        <li ><Link to="https://www.facebook.com/"  className='flex items-center text-nowrap gap-4'>
        <span><FaFacebookSquare/></span> Facebook</Link></li>
        <li><Link to="https://www.instagram.com/" className='flex items-center text-nowrap gap-4'>
        <span><FaInstagramSquare/></span> Instagram</Link></li>
        <li><Link to="https://www.twitter.com/" className='flex items-center text-nowrap gap-4'>
        <span><FaSquareXTwitter/></span> Twitter</Link></li>

      </ul>
       </div>
     </div>
     <div className=' flex  flex-col   '>
      <img src='/logo.png' alt='swift_sage_solutions_logo' className=' w-[200px] mb-10  mx-auto me-0  h-[200px] object-cover rounded-full' />
      <p className=' font-semibold text-lg'>Subscribe To Our Newsletter For The Latest Updates On New Features And Product Releases.</p>
     <div  >
     <input type="text" placeholder=' Enter email to Subscribe' className=' w-[300px] border-2 border-black rounded-full py-5 px-2 m-3 outline-none'/>
     <Button text={'Subscribe'} className={' w-[250px] !py-4'}/>
     </div>
     </div>
    </div>
    <div className=' p-4'>
      <p className='text-center text-lg'>© Copyright 2024 Swift Sage Solutions. All Rights </p>
    </div>
    </footer>
  )
}

export default Footer