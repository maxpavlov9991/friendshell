import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Head = styled.header`
  @media (min-width: 992px) {
    height: 50px;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    height: 40px;
  }

  min-width: 320px;
  background-color: rgba(2, 15, 29, 0.9);
  box-shadow: 0 0 3px rgba(255, 255, 255, 0.5);
  position: fixed;
  width: 100%;
  z-index: 50;
`

export const StyledMenu = styled.ul`
  text-align: center;
  margin: 0;
  padding: 0;

  li {
    display: inline;
    list-style-type: none;
  }

  @media (min-width: 992px) {
    li:not(:first-child) {
      margin-left: 100px;
    }
  }

  @media (max-width: 991px) and (min-width: 480px) {
    li:not(:first-child) {
      margin-left: 40px;
    }
  }

`

export const StyledLink = styled(Link)`

  @media (min-width: 992px) {
    line-height: 50px;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    line-height: 50px;
  }
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;      

  color: white;
  text-decoration: none;
  transition: 0.3s color;
  position: relative;

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