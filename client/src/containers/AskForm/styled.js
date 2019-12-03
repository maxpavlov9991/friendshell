import styled from 'styled-components'

export const AskFormWrap = styled.div`
  margin-bottom: 10px;
  z-index: 10;
  position: fixed;
  bottom: 0;
  width: 100%;

`

export const Form = styled.div`
  display: grid;
  grid-template-areas: 'input button';
  grid-template-columns: 1fr 10%;

  width: 80%;


  min-width: 300px;
  margin: 0 auto;
  position: relative;
`

export const AskInput = styled.textarea`

  font-weight: bold;
  resize: none;
  height: 30px;
  font-size: 18px;
  padding: 10px 20px;
  background-color: rgba(50, 49, 66, 0.9);
  color: white;
  outline: none;
  border: none;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  transition: 0.2s height;

  :focus{
    height: 100px;
  }

  ::-webkit-input-placeholder       {opacity: 1; transition: opacity 0.3s ease;}
  ::-moz-placeholder                {opacity: 1; transition: opacity 0.3s ease;}
  :-moz-placeholder                 {opacity: 1; transition: opacity 0.3s ease;}
  :-ms-input-placeholder            {opacity: 1; transition: opacity 0.3s ease;}
  :focus::-webkit-input-placeholder {opacity: 0; transition: opacity 0.3s ease;}
  :focus::-moz-placeholder          {opacity: 0; transition: opacity 0.3s ease;}
  :focus:-moz-placeholder           {opacity: 0; transition: opacity 0.3s ease;}
  :focus:-ms-input-placeholder      {opacity: 0; transition: opacity 0.3s ease;}

`

export const AskButton = styled.button`
  min-width: 100px;
  height: 100%;
  font-size: 40px;
  padding: 0;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
  background-color: ${(props) => (props.disabled) ? 'gray' : 'coral'};
  border: none;
  outline: none;
  color: ${(props) => (props.disabled) ? 'black' : 'white'};
  transition: 0.3s color, 0.3s background-color;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  :hover {
    background-color: white;
    color: black;
  }

`