import React from 'react';
import { Route, Redirect } from 'react-router-dom'

import Header from '../../components/Header/index'
import UserPack from '../../components/UserPack/index'
import SubsPack from '../../components/SubsPack/index'
import QuestionsPack from '../../components/QuestionsPack/index'

import {
  Page
} from './styled'

function MainPage() {
  return (
    <Page>
      <Header/>

      <Route exact={true} path="/main" render={() => (
        <Redirect to='/main/user' />
      )} />
      <Route path="/main/user" component={UserPack} />
      <Route path="/main/subs" component={SubsPack} />
      <Route path="/main/questions" component={QuestionsPack} />

    </Page>
  )
}

export default MainPage;
