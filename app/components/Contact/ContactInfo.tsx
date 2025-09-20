import { contactData } from "@/app/Data/data";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {/* PHONE */}
        <div className="bg-transparent rounded-2xl border border-gray-400 w-full p-5">
          <div className="text-white bg-gradient-to-r from-[#f8737c] to-[#F76D74]  rounded-2xl w-fit p-4">
            <BsTelephone size={20} />
          </div>
          <h2 className="text-white text-xl font-semibold mt-5 mb-5">Phone</h2>
          <p className="text-gray-400 ">{contactData.phone}</p>
          <p className="text-gray-400 ">{contactData.phone2}</p>
        </div>
        {/* Email */}
        <div className="bg-transparent rounded-2xl border border-gray-400 w-full p-5">
          <div className="text-white bg-gradient-to-r from-[#F9C115] to-[#F97916] rounded-2xl w-fit p-4">
            <GoMail size={20} />
          </div>
          <h2 className="text-white text-xl font-semibold mt-5 mb-5">Email</h2>
          <p className="text-gray-400 ">{contactData.email}</p>
          <p className="text-gray-400 ">{contactData.email2}</p>
        </div>
        {/* LINKEDIN */}
        <div className=" overflow-hidden bg-transparent rounded-2xl border border-gray-400 w-full p-5">
          <div className="text-white bg-gradient-to-r from-[#27C4EF] to-[#388DF5] rounded-2xl w-fit p-4">
            <FaLinkedinIn size={20} />
          </div>
          <h2 className="text-white text-xl font-semibold mt-5 mb-5">
            Linkedin
          </h2>
          <p className="text-gray-400 ">{contactData.linkedin}</p>
        </div>
        {/* Email */}
        <div className="bg-transparent  rounded-2xl border border-gray-400 w-full p-5">
          <div className="text-white bg-gradient-to-r from-[#3DD690] to-[#12BDC4] rounded-2xl w-fit p-4">
            <MdLocationOn size={20} />
          </div>
          <h2 className="text-white text-xl font-semibold mt-5 mb-5">
            Address
          </h2>
          <p className="text-gray-400 ">{contactData.address}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
