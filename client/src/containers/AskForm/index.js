import React from 'react';

import {
    AskFormWrap,
    Form,
    AskTitle,
    AskInput,
    AskButton
} from './styled'

function AskForm() {
  return (
    <AskFormWrap>
        <Form>
          <AskInput placeholder='Your question?'></AskInput>
          <AskButton>Send</AskButton>
        </Form>
    </AskFormWrap>
  )
}

export default AskForm;
