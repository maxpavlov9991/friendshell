import styled from 'styled-components'

export const Head = styled.header`
  height: 50px;
  background-color: rgba(47, 49, 54, 0.7);
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

  li:not(:first-child) {
    margin-left: 50px;
  }

  a {
    color: white;
    line-height: 50px;
    text-decoration: none;
  }

  a:hover {
    color: coral;
    transition: 0.2s;
  }

`