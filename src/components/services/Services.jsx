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
              <p>Proficient in developing cross-platform mobile applications using Flutter, a popular framework powered by Dart.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Capable of creating native-like user interfaces and implementing platform-specific functionalities for both iOS and Android.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Proficient in integrating mobile applications with RESTful APIs to fetch data from back-end systems and deliver real-time updates to users.</p>
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
              <p>Skilled in developing interactive and dynamic web applications using the React.js library, utilizing component-based architecture and virtual DOM for efficient UI updates.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Proficient in server-side development using Node.js, building scalable and high-performance web applications with event-driven, non-blocking I/O model.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experienced in working with databases like MongoDB and MSSQL, handling data storage, retrieval, and implementing efficient query mechanisms.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Well-versed in HTML, CSS, and JavaScript, along with modern frameworks and libraries, to create responsive and visually appealing web interfaces.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Capable of designing and implementing RESTful APIs for seamless communication between front-end and back-end systems, ensuring efficient data exchange and integration.</p>
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
              <p>Proficient in Java programming language, applying object-oriented principles to develop robust and scalable applications, as well as utilizing various Java frameworks for accelerated development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Skilled in C/C++ programming for low-level system programming, algorithm development, and memory management, as well as performance-critical applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Solid understanding of OOP concepts, such as encapsulation, inheritance, and polymorphism, enabling the creation of modular and maintainable code.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Strong analytical and problem-solving skills, honed through coding challenges and algorithmic problem-solving, enabling effective solutions for complex programming tasks.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experienced in Python programming, leveraging its simplicity and versatility for rapid prototyping, scripting, web development, and data analysis tasks.</p>
            </li>
          </ul>
        </article>


      </div>
    </section>
  )
}

export default Services