"use client"

import Link from "next/link";

import { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function Footer() {

  useEffect(() => {
    const handleScroll = () => {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;      
      var btnWhatsappPulse = document.querySelector('.btn-whatsapp-pulse');

      if (scrollTop > 100) {      
        if (btnWhatsappPulse) btnWhatsappPulse.classList.add('btn-whatsapp-pulse-Scroll');
      } else {        
        if (btnWhatsappPulse) btnWhatsappPulse.classList.remove('btn-whatsapp-pulse-Scroll');
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts


  return (
    <footer className="relative bg-black text-gray-400 py-12">
      {/* Transparent section at the top */}
      <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-transparent to-black h-8"></div>

      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, // Replace 'your-image-url' with the URL of your background image
          opacity: '0.1', // Adjust the opacity of the overlay
        }}
      ></div>

      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/courses"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Aurangabad, Maharashtra</p>
          <p>Aurangabad 431001 </p>
          <p>Email: msalmand1@gmail.com</p>
          <p>Phone: +91 9527617811</p>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-xs pt-8 relative z-10">
        © 2024 Music School. All rights reserved.
      </p>

      <Link href="https://wa.me/+919527617811?text=Hi there!" className="btn-whatsapp-pulse btn-whatsapp-pulse-border btn-whatsapp-pulse-Scroll">        
      <FontAwesomeIcon icon={faWhatsapp} />
      </Link>      
    </footer>
  );
}

export default Footer;
