import React from 'react'
import './header.scss'
import CTA from './CTA'
import ME from '../../assets/me.jpg'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5> Hey, I am </h5>
        <h1>Alexi Brehovs</h1>
        <h5 className="text-light">Full-Stack Developer</h5>
        <CTA />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
