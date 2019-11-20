import React from 'react';
import './style.css'

import ellipse1 from '../../media/svg/ellipse1.svg'
import ellipse2 from '../../media/svg/ellipse2.svg'
import ellipse3 from '../../media/svg/ellipse3.svg'
import logotext from '../../media/svg/logotext.svg'

function IntroLogo() {
  return (
    <div>
      <object className='ellipse1' type="image/svg+xml" data={ellipse1} width="500" height="500" ></object>
      <object className='ellipse2' type="image/svg+xml" data={ellipse2} width="400" height="400" ></object>
      <object className='ellipse3' type="image/svg+xml" data={ellipse3} width="300" height="300" ></object>
      <div className='logotext-wrapper'>
        <object className='logotext' type="image/svg+xml" data={logotext} width="700" height="120" ></object>
      </div>
    </div>
  )
}

export default IntroLogo;
