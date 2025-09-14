import React from 'react'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

const Contact = () => {
  return (
    <div id="contacts" className="pt-16 pb-16 bg-linear-to-r from-[#000000] to-[#1b1b1b]">
        <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] sm:w-[90%] mx-auto items-center gap-10 mt-10">
          {/* Contact Form */}
          <div className='flex items-center justify-center'>
            <ContactForm/>
          </div>
          {/* Contact Info */}
          <div className='mx-auto'>
            <ContactInfo/>
          </div>
        </div>
    </div>
  )
}

export default Contact