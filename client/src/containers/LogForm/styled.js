import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Form = styled.div`
  width: 360px;
  margin: auto;
  padding-bottom: 50px;

  > * {
    display: block;
  }

  > :not(:last-child) {
    margin-bottom: 25px;
  }
`

export const StyledButton = styled.button`
  display: block;
  width: 320px;
  color: black;
  height: 60px;
  line-height: 60px;
  font-size: 30px;
  margin: auto;
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
  display: block;
  color: black;
  text-align: center;
  text-decoration: none;
  width: 320px;
  height: 60px;
  line-height: 60px;
  font-size: 30px;
  margin: auto;
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

  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  width: 360px;
  height: 60px;
  outline: none;
  border: none;
  text-align: center;
  font-size: 30px;
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