import React from 'react';
import { Route, Redirect } from 'react-router-dom'

import IntroLogo from '../../components/IntroLogo/index'
import ContactInfo from '../../components/ContactInfo/index'
import AuthForm from '../../containers/AuthForm/index'
import RegForm from '../../containers/RegForm/index'

import { Page,
  LogoWrapper,
  Content,
  HugeText,
  ImportantText,
  Info } from './styled'

function AuthPage() {
  return (
    <Page>
      <LogoWrapper>
        <IntroLogo/>
      </LogoWrapper>
      <Content>
          <HugeText>
            <h1>Welcome to <ImportantText styledColor='#ef8e4d'>FriendShell</ImportantText>!</h1>
          </HugeText>
          <Route exact={true} path="/" render={() => (
            <Redirect to='/auth' />
          )} />
          <Route path="/auth" component={AuthForm} />
          <Route path="/register" component={RegForm} />
          <Info>
            <h1>About the developer</h1>
            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </Info>
        <ContactInfo />
      </Content>
    </Page>
  )
}

export default AuthPage;
