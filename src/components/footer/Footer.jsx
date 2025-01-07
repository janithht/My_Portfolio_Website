import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
function Footer() {
  return (
    <footer>
      <button className="footer__logo" onClick={() => window.scrollTo(0, 0)} aria-label="Back to homepage">
    <img src="/path-to-logo.png" alt="Company Logo" />
</button>


      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'><FaFacebookF /></a>
        <a href='https://instagram.com'><FiInstagram /></a>
        <a href='https://twitter.com'><IoLogoTwitter /></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; All rights reserved</small>
      </div>

    </footer> 
  )
}

export default Footer