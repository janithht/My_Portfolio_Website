import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/x1.png'
import IMG2 from '../../assets/x2.png'
import IMG3 from '../../assets/x3.png'
import IMG4 from '../../assets/x4.png'
import IMG5 from '../../assets/x5.png'
import IMG6 from '../../assets/x6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>Automated GitHub PR Commenting BOT</h3>
          <h4>BotBeam</h4>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/janithht/BotBeam' className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href=''className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt="" />
          </div>
          <h3>TCP|UDP Load Balancer</h3>
          <h4>GoStreamBalancer</h4>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/janithht/GoStreamBalancer' className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href=''className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt="" />
          </div>
          <h3>Serenity BDD Cucumber Testing</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/janithht/SerenityBDD_Cucumber' className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href=''className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
      </div>

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