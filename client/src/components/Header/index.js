import React from 'react';
import {
  Head,
  StyledMenu,
  StyledLink
} from './styled'

function Header() {
  return (
    <Head>
      <StyledMenu>
        <li><StyledLink to='/main/subs'>Subs</StyledLink></li>
        <li><StyledLink to='/main/user'>Questions</StyledLink></li>
        <li><StyledLink to='/main/user'>Profile</StyledLink></li>
        <li><StyledLink to='/auth/login'>Exit</StyledLink></li>
      </StyledMenu>
    </Head>
  )
}

export default Header;
