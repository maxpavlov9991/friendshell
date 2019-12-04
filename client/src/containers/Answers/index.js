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

  render() {
    return (
      <AnswersWrap>
        <ul>
          <li>
            <AnswerWrap>
              <DeleteButton>&#10006;</DeleteButton>
              <Question>How old are yuo?????</Question>
              <Answer>I am 18 years old!!!!! ASDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDASDASDASDS</Answer>
              <Info>21.01.2019 Sunday, 19:03</Info>
            </AnswerWrap>
          </li>

          <li>
            <AnswerWrap>
              <DeleteButton>&#10006;</DeleteButton>
              <Question>NO????</Question>
              <Answer>No.</Answer>
              <Info>21.01.2019 Sunday, 19:01</Info>
            </AnswerWrap>
          </li>

          <li>
            <AnswerWrap>
              <DeleteButton>&#10006;</DeleteButton>
              <Question>Know Dmitriy??</Question>
              <Answer>What? It's a first time i hear about Dmitriy...</Answer>
              <Info>21.01.2019 Sunday, 15:05</Info>
            </AnswerWrap>
          </li>

          <li>
            <AnswerWrap>
              <DeleteButton>&#10006;</DeleteButton>
              <Question>Do you have a pet???????</Question>
              <Answer>Yeah, its a frozen CAT!!! Ahahahah :) </Answer>
              <Info>21.01.2019 Sunday, 15:03</Info>
            </AnswerWrap>
          </li>

          <li>
            <AnswerWrap>
              <DeleteButton>&#10006;</DeleteButton>
              <Question>Do you have a pet???????</Question>
              <Answer>eah, its a frozeASDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
                n CAT!!! Ahahahah :)
                sanss &U+000D
                sans
                a7e4a9
            </Answer>
              <Info>21.01.2019 Sunday, 15:03</Info>
            </AnswerWrap>
          </li>

          <li>
            <AnswerWrap>
              <DeleteButton>&#10006;</DeleteButton>
              <Question>Do you have a pet???????</Question>
              <Answer>eah, its a frozeASDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
                n CAT!!! Ahahahah :)
                sanss &U+000D
                sans
                a7e4a9
            </Answer>
              <Info>21.01.2019 Sunday, 15:03</Info>
            </AnswerWrap>
          </li>

          <li>
            <AnswerWrap>
              <DeleteButton>&#10006;</DeleteButton>
              <Question>Do you have a pet???????</Question>
              <Answer>eah, its a frozeASDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
                n CAT!!! Ahahahah :)
                sanss &U+000D
                sans
                a7e4a9
            </Answer>
              <Info>21.01.2019 Sunday, 15:03</Info>
            </AnswerWrap>
          </li>

          <li>
            <AnswerWrap>
              <DeleteButton>&#10006;</DeleteButton>
              <Question>Do you have a pet???????</Question>
              <Answer>eah, its a frozeASDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
                n CAT!!! Ahahahah :)
                sanss &U+000D
                sans
                a7e4a9
            </Answer>
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