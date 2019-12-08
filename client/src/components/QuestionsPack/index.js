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
      <Label>My Questons:</Label>
      <QuestWrap>
        <QuestionList/>
      </QuestWrap>
    </Content>
  )
}

export default QuestionsPack;
