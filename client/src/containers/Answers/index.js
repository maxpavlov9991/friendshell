import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  AnswersWrap,
  AnswerWrap,
  DeleteButton,
  Question,
  Answer,
  Info
} from './styled'

class Answers extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <AnswersWrap>
        <ul>
          <li>
            <AnswerWrap>
              <DeleteButton>&#10006;</DeleteButton>
              <Question>How much can you be lazy to get tired of this too?)</Question>
              <Answer>One day</Answer>
              <Info>21.01.2019 Sunday, 19:03</Info>
            </AnswerWrap>
          </li>

          <li>
            <AnswerWrap>
              <DeleteButton>&#10006;</DeleteButton>
              <Question>How do you spend your free time?</Question>
              <Answer>Over a cup of tea</Answer>
              <Info>21.01.2019 Sunday, 19:01</Info>
            </AnswerWrap>
          </li>

          <li>
            <AnswerWrap>
              <DeleteButton>&#10006;</DeleteButton>
              <Question>Which artists do you listen to music?</Question>
              <Answer>Pink Floyd.</Answer>
              <Info>21.01.2019 Sunday, 15:05</Info>
            </AnswerWrap>
          </li>

          <li>
            <AnswerWrap>
              <DeleteButton>&#10006;</DeleteButton>
              <Question>Do you have any pets at home?</Question>
              <Answer>I have a cat</Answer>
              <Info>21.01.2019 Sunday, 15:03</Info>
            </AnswerWrap>
          </li>

          <li>
            <AnswerWrap>
              <DeleteButton>&#10006;</DeleteButton>
              <Question>Is it easy to meet you, start chatting?</Question>
              <Answer>Yeah</Answer>
              <Info>21.01.2019 Sunday, 15:03</Info>
            </AnswerWrap>
          </li>

        </ul>
      </AnswersWrap>
    )
  }
}

export default connect(
  (state) => {
    return {
    }
  },
  (dispatch) => {
    return {
    }
  })(Answers)