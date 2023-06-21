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
              <p>Proficient in cross-platform mobile app development with Flutter and Dart.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creates native-like interfaces and platform-specific features for iOS and Android.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Integrates mobile apps with RESTful APIs for data retrieval and real-time updates.</p>
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
              <p>Skilled in interactive web apps with React.js and virtual DOM.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Proficient in scalable web development using Node.js and non-blocking I/O.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experienced with MongoDB and MSSQL for efficient data handling.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Well-versed in HTML, CSS, and JavaScript for responsive web interfaces.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Capable of designing RESTful APIs for seamless front-end/back-end communication.</p>
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
              <p>Proficient in Java for robust and scalable applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Skilled in C for low-level programming and performance-critical applications. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Strong analytical and problem-solving skills for complex tasks.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Solid understanding of OOP concepts for modular code development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experienced in Python for rapid prototyping, scripting, web development, and data analysis.</p>
            </li>
          </ul>
        </article>


      </div>
    </section>
  )
}

export default Services