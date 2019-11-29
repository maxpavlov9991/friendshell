import React from 'react';

import Header from '../../components/Header/index'
import User from '../../containers/User/index'
import AskForm from '../../containers/AskForm/index'

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
        <div>Questions</div>
        <AskForm/>
      </Content>
    </Page>
  )
}

export default UserPage;
