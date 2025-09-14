import { contactData } from "@/app/Data/data";
import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <div>
      {/* phone */}
      <div className="flex items-center space-x-8">
        <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-blue-500 to-blue-900 flex items-center justify-center felex-col">
          <FaPhone className="w-4 h-4 md:w-6 md:h-6 text-white" />
        </div>
        <div className="">
          {/* <h1 className="text-lg sm:text-xl text-white font-bold ">Phone</h1> */}
          <h1 className="text-base text-white opacity-70">
            {contactData.phone}
          </h1>
          <h1 className="text-base  text-white opacity-70 ">
            {contactData.phone2}
          </h1>
        </div>
      </div>
      {/* Email */}
      <div className="flex items-center space-x-8 mt-8 mb-8">
        <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-blue-500 to-blue-900 flex items-center justify-center felex-col">
          <FaEnvelope className="w-4 h-4 md:w-6 md:h-6 text-white" />
        </div>
        <div>
          {/* <h1 className="text-lg sm:text-xl text-white font-bold ">Email</h1> */}
          <h1 className="text-base  text-white opacity-70">
            {contactData.email}
          </h1>
          <h1 className="text-base  text-white opacity-70">
            {contactData.email2}
          </h1>
        </div>
      </div>
      {/* Address */}
      <div className="flex items-center space-x-8">
        <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-blue-500 to-blue-900 flex items-center justify-center felex-col">
          <FaMapLocation className="w-4 h-4 md:w-6 md:h-6 text-white" />
        </div>
        <div>
          {/* <h1 className="text-lg sm:text-xl text-white font-bold ">Address</h1> */}
          <h1 className="text-base  text-white opacity-70">
            {contactData.address}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
