import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <div className=" mt-40 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Hero Us</h2>
        
        {/* Hero Form */}
        <div className="max-w-lg mx-auto  rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">Send Message</button>
          </form>
        </div>

        {/* Hero Info */}
        <div className="flex flex-wrap justify-center">
          <div className="flex items-center bg-white rounded-lg shadow-md p-6 mx-4 mb-8">
            <FaPhone className="text-blue-500 text-xl mr-4" />
            <div>
              <h4 className="text-lg font-semibold mb-2">Phone</h4>
              <p className="text-gray-700">+1234567890</p>
            </div>
          </div>
          <div className="flex items-center bg-white rounded-lg shadow-md p-6 mx-4 mb-8">
            <FaEnvelope className="text-blue-500 text-xl mr-4" />
            <div>
              <h4 className="text-lg font-semibold mb-2">Email</h4>
              <p className="text-gray-700">info@example.com</p>
            </div>
          </div>
          <div className="flex items-center bg-white rounded-lg shadow-md p-6 mx-4 mb-8">
            <FaMapMarkerAlt className="text-blue-500 text-xl mr-4" />
            <div>
              <h4 className="text-lg font-semibold mb-2">Address</h4>
              <p className="text-gray-700">123 Street Name, City, Country</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
