'use client'
import React from 'react'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contacts" className="pt-16 pb-16 bg-linear-to-r from-[#000000] to-[#1b1b1b]">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-[90%] sm:w-[90%] mx-auto items-center gap-10 mt-10">
          {/* Contact Form */}
          <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} 
                    className='flex items-center justify-center'>
            <ContactForm/>
          </motion.div>
          {/* Contact Info */}
          <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.1 }} 
                    className=''>
            <ContactInfo/>
          </motion.div>
        </div>
    </div>
  )
}

export default Contact