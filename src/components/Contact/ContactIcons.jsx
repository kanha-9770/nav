import React from 'react';
import { FaPhoneAlt, FaSnapchat } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsMessenger } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
const ContactIcons = () => {
  return (
    <div className="bg-white opacity-30 rounded-full p-2 fixed right-4 top-1/2 transform -translate-y-1/2 space-y-4">
      <a href="sms:+123456789" className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300">
        <FaPhoneAlt className="h-6 w-6" />
      </a>
      <a href="mailto:info@example.com" className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300">
        <BsMessenger className="h-8 w-8 font-extrabold" />
      </a>
      <a href="mailto:info@example.com" className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300">
        <BsMessenger className="h-8 w-8 font-extrabold" />
      </a>

      <a href="mailto:info@example.com" className="flex items-center justify-center h-8 w-10  text-black hover:bg-opacity-90 transition duration-300">
        <IoIosMail className="h-8 w-8 font-extrabold" />
      </a>
    </div>
  );
};

export default ContactIcons;