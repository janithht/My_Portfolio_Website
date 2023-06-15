import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './Headersocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>  {/*bim - naming class method*/}
        <h5>Hello I'm</h5>
        <h1>Janith Hathnagoda</h1>
        <h5 className='text-light'>Software Engineering Intern | Full Stack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      
      </div>

    </header>  
  )
}

export default Header