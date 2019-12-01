import styled from 'styled-components'

export const AskFormWrap = styled.div`

  @media (min-width: 992px) {
    margin: 0 auto 5px auto;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    margin: 0 auto 5px auto;
  }

  @media (max-width: 479px) {
    margin: 0 auto 5px auto;
  }
  z-index: 10;
  position: fixed;
  bottom: 0;
  width: 100%;
`

export const Form = styled.div`
  @media (min-width: 992px) {
    width: 900px;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    width: 450px;
  }

  @media (max-width: 479px) {
    width: 300px;
  }
  min-width: 300px;
  margin: 0 auto;
  position: relative;
  
`

export const AskTitle = styled.input`
  @media (min-width: 992px) {
    height: 30px;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    height: 25px;
  }

  @media (max-width: 479px) {
    height: 20px;
  }

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
  outline: none;
  border: none;
  color: white;
  width: 98%;
  padding-left: 2%;
  height: 25px;
  margin-bottom: 5px;

  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
  background-color: rgba(50, 49, 66, 0.9);

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

  @media (min-width: 992px) {
    height: 75px;
    width: 80%;
    padding: 5px 0 0 2%;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    height: 45px;
    width: 80%;
    padding: 5px 0 0 2%;
  }

  @media (max-width: 479px) {
    height: 50px;
    width: 98%;
    padding: 5px 0 0 2%;
  }

  font-weight: bold;
  resize: none;
  margin-bottom: 5px;
  background-color: rgba(50, 49, 66, 0.9);
  color: white;
  outline: none;
  border: none;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


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

  @media (min-width: 992px) {
    height: 80px;
    width: 18%;
    position: absolute;
    left: 100%;
    transform: translateX(-100%);
    font-size: 20px;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    height: 50px;
    width: 18%;
    position: absolute;
    left: 100%;
    transform: translateX(-100%);
    font-size: 18px;
  }

  @media (max-width: 479px) {
    height: 40px;
    position: relative;
    width: 100%;
    font-size: 15px;
  }

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