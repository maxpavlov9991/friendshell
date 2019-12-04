import React from 'react';

import ellipse1 from '../../media/svg/ellipse1.svg'
import ellipse2 from '../../media/svg/ellipse2.svg'
import ellipse3 from '../../media/svg/ellipse3.svg'
import logotext from '../../media/svg/logotext.svg'

import {
  Logo,
  LogoText
} from './styled'

function IntroLogo() {
  return (
    <Logo>
      <object className='ellipse1' type="image/svg+xml" data={ellipse1} ></object>
      <object className='ellipse2' type="image/svg+xml" data={ellipse2} ></object>
      <object className='ellipse3' type="image/svg+xml" data={ellipse3} ></object>
      <LogoText>
        <object className='logotext' type="image/svg+xml" data={logotext} ></object>
      </LogoText>
    </Logo>
  )
}

export default IntroLogo;
