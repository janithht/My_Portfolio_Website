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
              <h4>BSc (Hons) in Information Technology<br />
University of Moratuwa
</h4>        
            </article>

            <article className='about__card'>
              <FaAward className = 'about__icon' />              
              <h4><b>Dean's List Recognition</b></h4>
              <h6>Current Overall GPA : 3.85</h6>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className = 'about__icon' />              
              <h4><b>Work Experience</b></h4>
              <h6>Software Engineer Intern</h6>
              <h6>WSO2 Lanka (Pvt) Ltd</h6>
            </article>
          </div>

          <p>
          As an IT undergraduate, I am eager to transition my robust academic learning into practical software engineering solutions. With a strong foundation in programming languages and software development practices, I am particularly keen on contributing to projects that leverage innovative technologies. I excel in environments that challenge my problem-solving capabilities and foster teamwork. </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>

    </section>
  )
}

export default About