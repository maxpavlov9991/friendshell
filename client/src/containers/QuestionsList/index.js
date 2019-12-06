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
            <Question>How are you?</Question>
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
            <Question>What is your favorite color?</Question>
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
            <Question>Do you ever have seX????</Question>
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
            <Question>Happy birthday! How old are you?</Question>
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
            <Question>Heh, where you hide you money?? )))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))</Question>
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
            <Question>Do you fap?</Question>
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
