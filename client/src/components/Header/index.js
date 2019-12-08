import React from 'react';
import {
  Head,
  StyledMenu,
  StyledLink,
  MenuButton
} from './styled'

function Header() {

  const displayMenu = (e) => {
    document.getElementById('menu').classList.toggle('displayMenu')
  }

  const removeMenu = (e) => {
    document.getElementById('menu').classList.remove('displayMenu')
  }


  return (
    <Head>
      <StyledMenu id='menu'>
        <li><StyledLink onClick={removeMenu} to='/main/subs'>My Subs</StyledLink></li>
        <li><StyledLink onClick={removeMenu} to='/main/questions'>My Questions</StyledLink></li>
        <li><StyledLink onClick={removeMenu} to='/main/user'>My Profile</StyledLink></li>
        <li><StyledLink onClick={removeMenu} to='/auth/login'>Exit</StyledLink></li>
      </StyledMenu>
      <MenuButton onClick={displayMenu}>&#9776;</MenuButton>
    </Head>
  )
}

export default Header;
