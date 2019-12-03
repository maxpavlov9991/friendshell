import styled from 'styled-components'

export const Questions = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  > li {
    background-color: #020f1d;
  }

  > li:not(:last-child) {
    margin-bottom: 50px;
  }
`

export const QuestionWrap = styled.div`
  display: grid;
  gap: 10px;
  grid-template-areas: 
    'info'
    'question'
    'answer';

  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);

  position: relative;
  :before{
    content: '';
    position: absolute;
    width: 0px;
    height: 100%;
    background-color: coral;
    transition: 0.2s width;
    z-index: 20;
  }
  :focus-within:before{
    width: 5px;
  }
`
export const DeleteButton = styled.button`

  position: absolute;
  width: 20px;
  padding: 0;
  line-height: 20px;
  font-size: 10px;
  outline: none;
  color: white;
  background-color: transparent;
  border: none;
  text-align: center;
  height: 20px;
  top: 0;
  right: 0;
  box-shadow: none;
  transition: 0.2s background-color, 0.2s color;

  :focus, :hover {
    background-color: rgb(141, 0, 0);
    color: #020f1d;
  }

`

export const Info = styled.div`

  grid-area: info;
  align-self: center;
  justify-self: start;
  text-align: center;
  padding: 20px 20px 0 20px;
  font-size: 12px;
  color: white;
  font-weight: bold;
`

export const Question = styled.div`

  grid-area: question;
  color: coral;
  font-weight: bold;
  padding: 0 20px;
  hyphens: auto;
  word-wrap: break-word;
  white-space: pre-wrap;
  overflow: hidden;
`

export const AnswerWrap = styled.div`
  grid-area: answer;
  display: grid;
  grid-template-areas: 'answer-text answer-button';
  grid-template-columns: 90% 10%;


`

export const AnswerTextArea = styled.textarea`
  grid-area: answer-text;
  resize: none;
  height: 50px;
  background-color: #020f1d;
  color: white;
  font-weight: bold;
  border: none;
  outline: none;
  padding: 5px 20px;

  ::-webkit-input-placeholder       {opacity: 1; transition: opacity 0.3s ease;}
  ::-moz-placeholder                {opacity: 1; transition: opacity 0.3s ease;}
  :-moz-placeholder                 {opacity: 1; transition: opacity 0.3s ease;}
  :-ms-input-placeholder            {opacity: 1; transition: opacity 0.3s ease;}
  :focus::-webkit-input-placeholder {opacity: 0; transition: opacity 0.3s ease;}
  :focus::-moz-placeholder          {opacity: 0; transition: opacity 0.3s ease;}
  :focus:-moz-placeholder           {opacity: 0; transition: opacity 0.3s ease;}
  :focus:-ms-input-placeholder      {opacity: 0; transition: opacity 0.3s ease;}

`

export const AnswerButton = styled.button`
  grid-area: answer-button;
  border: none;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: coral;
  outline: none;
  transition: 0.2s color, 0.2s background-color;

  :hover {
    color: black;
    background-color: white;
  }
`