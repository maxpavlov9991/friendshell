import React from 'react';
import {
  Head,
  StyledMenu
} from './styled'

function Header() {
  return (
    <Head>
      <StyledMenu>
        <li><a href='#'>Subs</a></li>
        <li><a href='#'>Questions</a></li>
        <li><a href='#'>Profile</a></li>
        <li><a href='#'>Exit</a></li>
      </StyledMenu>
    </Head>
  )
}

export default Header;
