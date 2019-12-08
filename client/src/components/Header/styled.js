import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Head = styled.header`

  @media (max-width: 479px){
    .displayMenu {
      left: 0%;
      opacity: 1;
    }
  }

`

export const MenuButton = styled.button`
  outline: none;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  display: none;
  width: 50px;
  padding: 0;
  height: 50px;
  position: fixed;
  right: 10px;
  top: 10px;
  border-radius: 50%;
  border: none;
  outline: none;
  color: white;
  border: 2px solid white;
  background-color: rgba(2, 15, 29, 0.8);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
  z-index: 60;

  @media(max-width: 479px) {
    display: block;
  }
`

export const StyledMenu = styled.ul`
  text-align: center;
  margin: 0;
  padding: 0;
  background-color: rgba(2, 15, 29, 1);
  box-shadow: 0 0 3px rgba(255, 255, 255, 0.5);
  position: fixed;
  z-index: 50;

  li {
    display: inline;
    list-style-type: none;
  }

  @media (min-width: 992px) {
    height: 50px;
    width: 100%;
    li {
      display: inline;
    }
    li:not(:first-child) {
      margin-left: 100px;
    }
  }

  @media (max-width: 991px) and (min-width: 480px) {
    height: 40px;
    width: 100%;
    li {
      display: inline;
    }
    li:not(:first-child) {
      margin-left: 40px;
    }
  }

  @media (max-width: 479px) {
    display: block;
    opacity: 0;
    left: -100%;
    height: 100%;
    width: 100%;
    padding-top: 100px;
    li {
      display: block;
      text-align: center;
      font-size: 30px;
    }
    li:not(:last-child) {
      margin-bottom: 20px;
    }
    transition: 0.8s left, 0.8s opacity;
  }

`

export const StyledLink = styled(Link)`

  @media (min-width: 992px) {
    line-height: 50px;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    line-height: 40px;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    line-height: 40px;
  }

  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  outline: none;
  color: white;
  text-decoration: none;
  transition: 0.3s color;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;

  :hover {
    color: coral;
  }

  :before {
    content: '';
    position: absolute;
    height: 2px;
    background-color: coral;
    width: 0%;
    transition: 0.2s width;
    top: 0%;
  }

  :hover:before{
    width: 100%
  }

  :after {
    content: '';
    position: absolute;
    height: 2px;
    background-color: coral;
    width: 0%;
    transition: 0.2s width;
    top: 100%;
    left: 0;
  }

  :hover:after{
    width: 100%
  }

`