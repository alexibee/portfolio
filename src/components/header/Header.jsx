import React from 'react'
import './header.scss'
import CTA from './CTA'
import LOGO from '../../assets/logo.svg'

const Header = () => {
  return (
    <header id='header'>
      <div className='container header__container'>
        <div>
          <h5> Hey, I am </h5>
          <h1>Alexi Brehovs</h1>
          <h5 className="text-light">Full-Stack Developer</h5>
          <CTA />
        </div>
        <div className="me">
          <div className="me__inner">
            <div className="me__inner-logo">
              <img src={LOGO} alt="logo" />
            </div>
            <div className="me__inner-link">
              <a href="#about">
                <svg className="arrows">
                    <path className="a1" d="M0 0 L30 32 L60 0"></path>
                    <path className="a2" d="M0 20 L30 52 L60 20"></path>
                    <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
