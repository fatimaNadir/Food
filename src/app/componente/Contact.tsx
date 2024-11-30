import Image from 'next/image';
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-gray-700 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Get In Touch
        </h1>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="text-lg font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="text-lg font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
              rows={6}
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://github.com/fatimaNadir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600"
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/512/733/733553.png" // Replace with your GitHub icon URL
              alt="GitHub"
              className="w-8 h-8"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/fatimanadir80/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600"
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/512/145/145807.png" // Replace with your LinkedIn icon URL
              alt="LinkedIn"
              className="w-8 h-8"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
