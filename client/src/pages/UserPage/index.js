import React from 'react';

import Header from '../../components/Header/index'
import User from '../../containers/User/index'



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
        <div>AskForm</div>
      </Content>
    </Page>
  )
}

export default UserPage;
