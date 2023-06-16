import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
function Services() {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Mobile Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Programming</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
          </ul>
        </article>


      </div>
    </section>
  )
}

export default Services