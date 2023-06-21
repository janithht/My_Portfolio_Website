import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/x1.png'
import IMG2 from '../../assets/x2.png'
import IMG3 from '../../assets/x3.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>User Login System for Mobile Apps</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/janithht/User-SignUp-SignIn' className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href=''className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Photo Gallery using AWS S3 Services</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/janithht/AWS-S3-Gallery' className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href=''className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>Company Trash Roboto</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/janithht/HardwareProject_TrashRobot' className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href=''className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio