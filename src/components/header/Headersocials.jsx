import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsMedium} from 'react-icons/bs'

const Headersocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/janith-hathnagoda-790626230/' target='_blank' rel='noopener noreferrer'><BsLinkedin/></a>
        <a href='https://github.com/janithht' target='_blank' rel='noopener noreferrer'><FaGithub/></a>
        <a href='https://medium.com/@jhathnagoda' target='_blank' rel='noopener noreferrer'><BsMedium/></a>
    </div>
  )
}

export default Headersocials