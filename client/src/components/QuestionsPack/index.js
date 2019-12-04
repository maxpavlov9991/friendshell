import React from 'react';
import QuestionList from '../../containers/QuestionsList/index'

import {
  Content,
  Label,
  QuestWrap
} from './styled'

function QuestionsPack() {
  return (
    <Content>
      <Label><h1>My Questons:</h1></Label>
      <QuestWrap>
        <QuestionList/>
      </QuestWrap>
    </Content>
  )
}

export default QuestionsPack;
