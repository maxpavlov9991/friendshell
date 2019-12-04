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
        <li><StyledLink to='/main/subs'>My Subs</StyledLink></li>
        <li><StyledLink to='/main/questions'>My Questions</StyledLink></li>
        <li><StyledLink to='/main/user'>My Profile</StyledLink></li>
        <li><StyledLink to='/auth/login'>Exit</StyledLink></li>
      </StyledMenu>
    </Head>
  )
}

export default Header;
