import React from 'react'
import './footer.scss'
import {FiGithub} from 'react-icons/fi'
import {FaLinkedinIn} from 'react-icons/fa'
import {SiCodewars} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer__logo'><img src='https://res.cloudinary.com/dhoecmw9w/image/upload/v1650382490/production/logo_ab_tyzadd.svg' alt='logo'/></a>

      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/alexibee" target='_blank' rel='noreferrer'><FiGithub/></a>
        <a href="https://www.linkedin.com/in/alexi-brehovs/" target='_blank' rel='noreferrer'><FaLinkedinIn/></a>
        <a href="https://www.codewars.com/users/alexibee"><SiCodewars/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
