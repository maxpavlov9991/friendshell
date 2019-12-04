import React from 'react';

import User from '../../containers/User/index'
import AskForm from '../../containers/AskForm/index'
import Answers from '../../containers/Answers/index'

import {
    Content
} from './styled'

function UserPack() {
  return (
    <Content>
      <User/>
      <Answers/>
      <AskForm/>
    </Content>
  )
}

export default UserPack;
