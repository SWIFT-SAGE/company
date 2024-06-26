import React from 'react'
import { MdEmail ,MdOutlinePhoneInTalk,MdLocationOn } from "react-icons/md";
import { Link } from 'react-router-dom';
import Form from '../components/Form';

function Contact() {
  return (
    <section className=' mt-48'>
      <div className=' text-center mb-10 '>
      <p className=' text-2xl mb-5'>We Typically Respond To Emails Within 24 Hours.</p>
      <h3 className=' text-8xl font-semibold mb-5'>Contact Us</h3>
      <p className=' text-2xl '>Get In Touch With Us For Any Inquiries Or Project Collaborations.</p>
      </div>
      <div className=' flex  justify-around mb-20'>
        <div className=' flex items-center  flex-col' >
          <MdEmail size={50} className=' mb-5'/>
          <div className=' text-center'>
            <h4 className=' font-bold text-3xl mb-3'>Email</h4>
            <p className=' text-2xl mb-4'>Feel Free To Give Us A Call During Business Hours.</p>
            <p className=' text-xl'><Link to='mailto:info.swift.sage.service@gmail.com' onClick={(e) => {
                window.location = 'mailto:info.swift.sage.service@gmail.com';
                e.preventDefault();
            }}>info.swift.sage.service@gmail.com</Link></p>

          </div>
        </div>
        <div className=' flex items-center  flex-col' >
          <MdOutlinePhoneInTalk size={50} className=' mb-5'/>
          <div className=' text-center'>
            <h4 className=' font-bold text-3xl mb-3'>Phone</h4>
            <p className=' text-2xl mb-4'>Visit Our Office During Working Hours For A Face-To-Face Discussion..</p>
            <p className=' text-xl'><Link to='tel:+917827665474' onClick={(e) => {
                window.location = 'tel:+917827665474';
                e.preventDefault();
            }}>+917827665474</Link></p>

          </div>
        </div>
        <div className=' flex items-center  flex-col' >
          <MdLocationOn size={50} className=' mb-5'/>
          <div className=' text-center'>
            <h4 className=' font-bold text-3xl mb-3'>Office</h4>
            <p className=' text-2xl mb-4'>Follow Us On Social Media For Updates And Insights.</p>
            <address className=' text-xl'>B-954 Shastri Nagar, New Delhi, India</address>

          </div>
        </div>
      

      </div>
      <div className=' min-h-[50vh]'>
          <Form/>
        </div>
      </section>

    
  )
}

export default Contact