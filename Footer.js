import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
       <section className="bg-white py-8 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="space-y-2">
        <Link to="/home" className="block text-green-600 hover:underline">
          Home
        </Link>
        <Link to="/about" className="block text-gray-600 hover:underline">
          About
        </Link>
        <div className="relative">
          <Link to="/services"
            className="block text-gray-600 hover:underline"
          >
            Services
          </Link>
          <svg
            className="w-4 h-4 absolute right-0 top-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div className="relative">
          <Link to="/solution"
            className="block text-gray-600 hover:underline"
          >
            Solutions
          </Link>
          <svg
            className="w-4 h-4 absolute right-0 top-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <Link to="/contact" className="block text-gray-600 hover:underline">
          Contact
        </Link>
      </div>
      <div className="space-y-2 text-gray-600">
        <p>Bhopal Road,</p>
        <p>Nasrullaganj, Sehore 466331</p>
        <p>info@geekyness.com</p>
        <p>+91 9755-36755</p>
      </div>
      <div className="space-y-2">
        <a
          href="https://www.linkedin.com/company/geekyness/"
          className="block text-gray-600 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/geekyness?igsh=bmMyYTZqN2oyUno2"
          className="block text-gray-600 hover:underline"
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com/geekyness?_rdr"
          className="block text-gray-600 hover:underline"
        >
          Facebook
        </a>
        <a
          href="https://x.com/Geekyness_x"
          className="block text-gray-600 hover:underline"
        >
          X
        </a>
      </div>
      {/* <div>
        <a href="#" className="block text-gray-600 hover:underline">
          Privacy Policy
        </a> */}
      </div>
    </div>
    <div className="mt-8 pt-8 border-t border-gray-200 text-right text-gray-500">
      © 2024 by GEEKYNESS
    </div>
</section>
    </div>
  )
}

export default Footer

     
