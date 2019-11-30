import React from 'react';

import Header from '../../components/Header/index'
import User from '../../containers/User/index'
import AskForm from '../../containers/AskForm/index'
import Answers from '../../containers/Answers/index'

import {
  Page,
  Content
} from './styled'

function UserPage() {
  return (
    <Page>
      <Header/>
      <Content>
        <User/>
        <Answers/>
        <AskForm/>
      </Content>
    </Page>
  )
}

export default UserPage;
