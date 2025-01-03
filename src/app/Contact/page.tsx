import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col items-center px-4 py-12 bg-[#f2f2df] min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Contact Us</h1>
      <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl">
        We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to get in touch. Our team is here to help.
      </p>

      <div className="w-full max-w-3xl bg-gray-200 rounded-lg shadow-2xl p-8">
        <form className="grid grid-cols-1 gap-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Write your message here..."
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-40 bg-blue-600 text-white font-medium rounded-lg py-3 hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Additional Contact Info */}
      <div className="mt-12 text-center">
        <p className="text-gray-600">
          <strong>Email:</strong> support@urbanspice.com
        </p>
        <p className="text-gray-600">
          <strong>Phone:</strong> +92 123 456 7890
        </p>
        <p className="text-gray-600">
          <strong>Address:</strong> 123 Urban Street, Karachi, Pakistan
        </p>
      </div>
    </div>
  );
}
