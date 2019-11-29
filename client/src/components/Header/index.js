import React from 'react';
import {
  Head,
  StyledMenu
} from './styled'

function Header() {
  return (
    <Head>
      <StyledMenu>
        <li><a href='#'>Subscriptions</a></li>
        <li><a href='#'>Subscribers</a></li>
        <li><a href='#'>Questions</a></li>
        <li><a href='#'>Profile</a></li>
        <li><a href='#'>Exit</a></li>
      </StyledMenu>
    </Head>
  )
}

export default Header;
