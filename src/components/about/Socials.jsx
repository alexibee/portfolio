import React from 'react'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'

const Socials = () => {
  return (
    <div className='about__socials'>
      <a href='https://github.com/alexibee' target='_blank' rel='noreferrer'><AiOutlineGithub/></a>
      <a href='https://www.linkedin.com/in/alexi-brehovs/' target='_blank' rel='noreferrer'><AiOutlineLinkedin/></a>
    </div>
  )
}

export default Socials
