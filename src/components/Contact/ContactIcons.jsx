import React from 'react';
import { FaPhoneAlt, FaSnapchat } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const ContactIcons = () => {
  return (
    <div className="bg-white opacity-20 rounded-full p-2 fixed right-4 top-1/2 transform -translate-y-1/2 space-y-4">
      <a href="tel:+123456789" className="flex items-center justify-center h-10 w-10 bg-black bg-opacity-70 rounded-full text-white hover:bg-opacity-90 transition duration-300">
        <FaPhoneAlt className="h-6 w-6" />
      </a>
      <a href="mailto:info@example.com" className="flex items-center justify-center h-10 w-10 bg-black bg-opacity-70 rounded-full text-white hover:bg-opacity-90 transition duration-300">
        <FaPhoneAlt className="h-6 w-6" />
      </a>
      <a href="mailto:info@example.com" className="flex items-center justify-center h-10 w-10 bg-black bg-opacity-70 rounded-full text-white hover:bg-opacity-90 transition duration-300">
        <IoIosMail className="h-6 w-6" />
      </a>
      <a href="sms:+123456789" className="flex items-center justify-center h-10 w-10 bg-black bg-opacity-70 rounded-full text-white hover:bg-opacity-90 transition duration-300">
        <FaSnapchat className="h-6 w-6" />
      </a>
    </div>
  );
};

export default ContactIcons;