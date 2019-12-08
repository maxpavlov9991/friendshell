import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Questions,
  QuestionWrap,
  DeleteButton,
  Question,
  Info,
  AnswerWrap,
  AnswerTextArea,
  AnswerButton,
} from './styled'

class QuestionsList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Questions>

        <li>
          <QuestionWrap>
            <DeleteButton>&#10006;</DeleteButton>
            <Info>21.03.2019</Info>
            <Question>Want to be a member of a reality show? if so, which one?</Question>
            <AnswerWrap>
              <AnswerTextArea placeholder='Your answer...' />
              <AnswerButton>&#10004;</AnswerButton>
            </AnswerWrap>
          </QuestionWrap>
        </li>

        <li>
          <QuestionWrap>
            <DeleteButton>&#10006;</DeleteButton>
            <Info>19.03.2019</Info>
            <Question>Is the house perfect or is there a lot of trash?</Question>
            <AnswerWrap>
              <AnswerTextArea placeholder='Your answer...' />
              <AnswerButton>&#10004;</AnswerButton>
            </AnswerWrap>
          </QuestionWrap>
        </li>
        
        <li>
          <QuestionWrap>
            <DeleteButton>&#10006;</DeleteButton>
            <Info>30.02.2019</Info>
            <Question>What can not be thrown into the trash?</Question>
            <AnswerWrap>
              <AnswerTextArea placeholder='Your answer...' />
              <AnswerButton>&#10004;</AnswerButton>
            </AnswerWrap>
          </QuestionWrap>
        </li>

        <li>
          <QuestionWrap>
            <DeleteButton>&#10006;</DeleteButton>
            <Info>15.02.2019</Info>
            <Question>How old is youth?</Question>
            <AnswerWrap>
              <AnswerTextArea placeholder='Your answer...' />
              <AnswerButton>&#10004;</AnswerButton>
            </AnswerWrap>
          </QuestionWrap>
        </li>

        <li>
          <QuestionWrap>
            <DeleteButton>&#10006;</DeleteButton>
            <Info>03.02.2019</Info>
            <Question>How many concerts have you been to this year?</Question>
            <AnswerWrap>
              <AnswerTextArea placeholder='Your answer...' />
              <AnswerButton>&#10004;</AnswerButton>
            </AnswerWrap>
          </QuestionWrap>
        </li>

        <li>
          <QuestionWrap>
            <DeleteButton>&#10006;</DeleteButton>
            <Info>01.01.2019</Info>
            <Question>Who do you communicate with on Facebook most often?</Question>
            <AnswerWrap>
              <AnswerTextArea placeholder='Your answer...' />
              <AnswerButton>&#10004;</AnswerButton>
            </AnswerWrap>
          </QuestionWrap>
        </li>

      </Questions>
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
  })(QuestionsList)
