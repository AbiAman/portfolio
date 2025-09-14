"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
const ContactForm = () => {
  const [state, handleSubmit] = useForm("xgvlqzla");
  if (state.succeeded) {
    return (
      <p className="text-green-400">Thanks! Your message has been sent.</p>
    );
  }
  return (
    <div className="  w-[80%]  bg-linear-to-b from-[#060707] to-[#181818] rounded-lg p-4 sm:p-5 shadow shadow-gray-200">
      <h1 className="text-bg text-xl lg:text-[2.5rem] font-bold">
        Let's work together!
      </h1>
      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        Let’s turn ideas into reality—reach out and let’s create something
        remarkable together.
      </p>
      {/* Input fields */}
      <form
        onSubmit={handleSubmit}
        className="mt-4 block w-full overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Full name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-4 py-2 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email address"
            className="flex-1 bg-black text-white placeholder:text-gray-600  px-4 py-2 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="Phone Number"
            className="flex-1 bg-black text-white placeholder:text-gray-600  px-4 py-2 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <ValidationError prefix="phone" field="phone" errors={state.errors} />
        </div>

        <textarea
          id="message"
          name="message"
          placeholder="Message"
          rows={5}
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <div className="mt-6">
          <button
            type="submit"
            disabled={state.submitting}
            className="md:px-6 md:py-1 px-6 py-1  text-[#246ef7] font-semibold text-sm md:text-lg hover:bg-black hover:text-white border transition-all duration-200  cursor-pointer  rounded-full mt-8 bg-white flex items-center space-x-1"
          >
            <span> Send Message</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
