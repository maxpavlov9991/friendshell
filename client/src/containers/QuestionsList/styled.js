import styled from 'styled-components'

export const Questions = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;

  > li {
    background-color: #020f1d;
    border-radius: 30px;
  }

  > li:not(:last-child) {
    margin-bottom: 20px;
  }
`

export const QuestionWrap = styled.div`

  display: grid;
  gap: 10px;
  grid-template-areas: 
    'info'
    'question'
    'answer';

  position: relative;
  transition: 0.2s background-color;
  :before{
    content: '';
    position: absolute;
    width: 0;
    top: 25%;
    height: 50%;
    background-color: coral;
    transition: 0.2s height, 0.2s background-color;
  }

  
  :focus-within:before{
    background-color: yellow;
    width: 2px;
  }

`
export const DeleteButton = styled.button`

  position: absolute;
  width: 20px;
  border-radius: 50%;
  padding: 0;
  line-height: 20px;
  font-size: 10px;
  outline: none;
  color: white;
  background-color: transparent;
  border: none;
  text-align: center;
  height: 20px;
  top: 10px;
  right: 10px;
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
  @media (min-width: 992px) {
    grid-template-areas: 'answer-text answer-button';
    grid-template-columns: 1fr 60px;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    grid-template-areas: 'answer-text answer-button';
    grid-template-columns: 1fr 45px;
  }

  @media (max-width: 479px) {
    grid-template-areas: 'answer-text answer-button';
    grid-template-columns: 1fr 40px;
  }

  grid-area: answer;
  display: grid;

`

export const AnswerTextArea = styled.textarea`

  @media (min-width: 992px) {
    height: 50px;
    font-size: 17px;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    height: 35px;
    font-size: 14px;
  }

  @media (max-width: 479px) {
    height: 30px;
    font-size: 12px;
  }
  
  grid-area: answer-text;
  resize: none;
  height: 50px;
  background-color: transparent;
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
  border-radius: 50%;
  border: none;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: coral;
  outline: none;
  transition: 0.2s color, 0.2s background-color;
  font-size: 30px;
  text-align: center;
  padding: 0;

  :hover {
    color: black;
    background-color: white;
  }
`