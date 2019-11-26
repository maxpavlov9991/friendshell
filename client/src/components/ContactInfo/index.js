import React from 'react';
import {
  StyledUl
} from './styled'

function ContactInfo() {
  return (
    <StyledUl>
      <li><a href='mailto:maxpavlov9991@gmail.com'>maxpavlov9991@gmail.com</a></li>
      <li><a href='tel:+79045133706'>+7 (904) 513-37-06</a></li>
      <li><a href='https://github.com/maxpavlov9991' target='_blank' rel='noopener noreferrer'>GitHub</a></li>
    </StyledUl>
  )
}

export default ContactInfo;
