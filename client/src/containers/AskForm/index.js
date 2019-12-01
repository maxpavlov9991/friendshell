import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  AskFormWrap,
  Form,
  AskTitle,
  AskInput,
  AskButton
} from './styled'

class AskForm extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <AskFormWrap>
        <Form>
          <AskInput placeholder='Your question?'></AskInput>
          <AskButton disabled={false}>Send</AskButton>
        </Form>
      </AskFormWrap>
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
  })(AskForm)
