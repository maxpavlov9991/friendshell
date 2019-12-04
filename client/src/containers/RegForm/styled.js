import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Form = styled.div`
  margin: auto;

  > * {
    display: block;
  }

  > :not(:last-child) {
    margin-bottom: 25px;
  }

  @media (min-width: 992px) {
    width: 360px;
    padding-bottom: 50px;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    width: 300px;
    padding-bottom: 35px;
  }

  @media (max-width: 479px) {
    width: 240px;
    padding-bottom: 25px;
  }
`


export const StyledButton = styled.button`

  @media (min-width: 992px) {
    width: 320px;
    height: 60px;
    line-height: 60px;
    font-size: 30px;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    width: 280px;
    height: 45px;
    line-height: 45px;
    font-size: 23px;
  }

  @media (max-width: 479px) {
    width: 220px;
    height: 30px;
    line-height: 30px;
    font-size: 17px;
  }

  padding: 0;
  margin: 0 auto;

  float: center;
  display: block;
  color: black;
  outline: none;
  cursor: pointer;
  border: none; 
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: ${props => (props.green ? '#a7e4a9' :
    (props.orange) ? '#ecac81' : 'white')};

  :hover {
    transition: 0.5s background-color;
    background-color: ${props => (props.green ? '#7ded81' :
    (props.orange) ? '#ef8e4d' : 'white')};
  }
`

export const StyledLink = styled(Link)`

  @media (min-width: 992px) {
    width: 320px;
    height: 60px;
    line-height: 60px;
    font-size: 30px;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    width: 280px;
    height: 45px;
    line-height: 45px;
    font-size: 23px;
  }

  @media (max-width: 479px) {
    width: 220px;
    height: 30px;
    line-height: 30px;
    font-size: 17px;
  }

  float: center;
  display: block;
  color: black;
  text-align: center;
  text-decoration: none;
  padding: 0;
  margin: 0 auto;
  outline: none;
  border: none; 
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #ecac81;
  transition: 0.5s background-color;

  :hover {
    transition: 0.5s background-color;
    color: black;
    background-color: ${props => (props.green ? '#7ded81' :
    (props.orange) ? '#ef8e4d' : 'white')};
  }
`

export const ImportantText = styled.span`
  color: ${props => props.styledColor};
`
export const StyledInput = styled.input`

  @media (min-width: 992px) {
    width: 320px;
    height: 60px;
    line-height: 60px;
    font-size: 30px;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    width: 280px;
    height: 45px;
    line-height: 45px;
    font-size: 23px;
  }

  @media (max-width: 479px) {
    width: 220px;
    height: 30px;
    line-height: 30px;
    font-size: 17px;
  }

  float: center;
  padding: 0;
  margin: 0 auto;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  outline: none;
  border: none;
  text-align: center;
  line-height: 100%;

  ::-webkit-input-placeholder       {opacity: 1; transition: opacity 0.3s ease;}
  ::-moz-placeholder                {opacity: 1; transition: opacity 0.3s ease;}
  :-moz-placeholder                 {opacity: 1; transition: opacity 0.3s ease;}
  :-ms-input-placeholder            {opacity: 1; transition: opacity 0.3s ease;}
  :focus::-webkit-input-placeholder {opacity: 0; transition: opacity 0.3s ease;}
  :focus::-moz-placeholder          {opacity: 0; transition: opacity 0.3s ease;}
  :focus:-moz-placeholder           {opacity: 0; transition: opacity 0.3s ease;}
  :focus:-ms-input-placeholder      {opacity: 0; transition: opacity 0.3s ease;}
`