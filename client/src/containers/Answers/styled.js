import styled from 'styled-components'

export const AnswersWrap = styled.div`

  > ul {
    padding: 0;
    grid-area: info;
    color: white;
  }

  > ul > li {
      list-style-type: none;
      width: 100%;
      
  }

  > ul > li:not(:first-child) {
    @media (min-width: 992px) {
      margin-top: 30px;
    }

    @media (max-width: 991px) and (min-width: 480px) {
      margin-top: 20px;
    }

    @media (max-width: 479px) {
      margin-top: 15px;
    }
  }
  
  width: 100%;
` 
export const AnswerWrap = styled.div`

  @media (min-width: 992px) {    
    width: 800px;
    grid-template-columns: 800px;
    gap: 15px;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    width: 80%;
    grid-template-columns: 100%;
    gap: 10px;
  }

  @media (max-width: 479px) {
    width: 90%;
    grid-template-columns: 100%;
    gap: 5px;
  }

  display: grid;
  margin: 0 auto;
  position: relative;
  grid-template-areas:
    'question'
    'answer'
    'info';
  background-color: #020f1d;
  box-shadow: 2px 2px 0 rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  transition: 0.2s box-shadow;
  :hover {
    box-shadow: 2px 2px 0 rgba(255, 127, 80, 0.5);
  }
`

export const DeleteButton = styled.button`
  border-radius: 50%;
  position: absolute;
  width: 20px;
  padding: 0;
  line-height: 15px;
  font-size: 10px;
  outline: none;
  color: white;
  background-color: transparent;
  border: none;
  text-align: center;
  height: 20px;
  top: 5px;
  right: 5px;
  box-shadow: none;
  transition: 0.2s background-color, 0.2s color;

  :focus, :hover {
    background-color: rgb(141, 0, 0);
    color: #020f1d;
  }

`

export const Question = styled.div`
  @media (min-width: 992px) {
    padding: 15px 25px 0 25px;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    padding: 15px 10px 0 10px;
  }

  @media (max-width: 479px) {
    padding: 10px 10px 0 10px;
  }

  align-self: center;
  font-size: 16px;
  grid-area: question;
  color: coral;
  font-weight: bold;
  word-wrap: break-word;
  white-space: pre-wrap;
  

`

export const Answer = styled.div`
  @media (min-width: 992px) {
    padding: 0 25px 0 25px;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    padding: 0 10px 0 10px;
  }

  @media (max-width: 479px) {
    padding: 0 10px 0 10px;
  }


  align-self: center;
  grid-area: answer;
  color: white;
  font-weight: bold;
  font-size: 14px;
  word-wrap: break-word;
  white-space: pre-wrap;

`

export const Info = styled.div`
  @media (min-width: 992px) {
    font-size: 14px;
    line-height: 20px;
    height: 20px;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    font-size: 14px;
    line-height: 20px;
    height: 20px;
  }

  @media (max-width: 479px) {
    font-size: 11px;
    line-height: 14px;
    height: 14px;
  }
  grid-area: info;  
  color: coral;
  align-self: center;
  justify-self: center;
  text-align: center;
`