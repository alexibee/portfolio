import React from 'react'
import './footer.scss'
import LOGO from '../../assets/logo.svg'
import {FiGithub} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {FaLinkedinIn} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'><img src={LOGO}/></a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/alexibee" target='_blank' rel='noreferrer'><FiGithub/></a>
        <a href="https://www.linkedin.com/in/alexi-brehovs/" target='_blank' rel='noreferrer'><FaLinkedinIn/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
