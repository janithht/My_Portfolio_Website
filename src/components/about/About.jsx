import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {HiAcademicCap} from 'react-icons/hi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='Me image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <HiAcademicCap className = 'about__icon' />              
              <h5>BSc (Hons) in<br />Information Technology<br />
University of Moratuwa
</h5>        
            </article>

            <article className='about__card'>
              <FaAward className = 'about__icon' />              
              <h5>Dean's List Recognition</h5>
              <small>Current Overall GPA : 3.85</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className = 'about__icon' />              
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>

          <p>
          As an IT undergraduate, I am passionate about software engineering and dedicated to expanding my knowledge and skills in the field. With a strong foundation in programming languages and problem-solving, I am eager to contribute to innovative projects and gain real-world experience through a software engineering internship.          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>

    </section>
  )
}

export default About