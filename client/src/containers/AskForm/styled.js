import styled from 'styled-components'

export const AskFormWrap = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 0 auto 20px auto;
`

export const Form = styled.div`
  margin: 0 auto;
  position: relative;
  width: 768px;
  
`

export const AskTitle = styled.input`

  outline: none;
  border: none;
  color: white;
  width: 98%;
  padding-left: 2%;
  height: 25px;
  margin-bottom: 5px;

  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

  background-color: rgba(66, 66, 66, 0.7);

  ::-webkit-input-placeholder       {opacity: 1; transition: opacity 0.3s ease;}
  ::-moz-placeholder                {opacity: 1; transition: opacity 0.3s ease;}
  :-moz-placeholder                 {opacity: 1; transition: opacity 0.3s ease;}
  :-ms-input-placeholder            {opacity: 1; transition: opacity 0.3s ease;}
  :focus::-webkit-input-placeholder {opacity: 0; transition: opacity 0.3s ease;}
  :focus::-moz-placeholder          {opacity: 0; transition: opacity 0.3s ease;}
  :focus:-moz-placeholder           {opacity: 0; transition: opacity 0.3s ease;}
  :focus:-ms-input-placeholder      {opacity: 0; transition: opacity 0.3s ease;}

`

export const AskInput = styled.textarea`
  resize: none;

  margin-bottom: 5px;
  height: 75px;
  width: 83%;
  padding: 5px 0 0 2%;
  background-color: rgba(66, 66, 66, 0.7);
  color: white;
  outline: none;
  border: none;

  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

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

  position: absolute;
  left: 100%;
  transform: translateX(-100%);

  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

  height: 80px;
  width: 15%;
  font-size: 20px;
  background-color: coral;
  border: none;
  outline: none;
  color: white;
  transition: 0.3s color, 0.3s background-color;

  :hover {
    background-color: white;
    color: black;
  }
`