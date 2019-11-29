import styled from 'styled-components'

export const StyledUl = styled.ul`
  text-align: center;
  margin: 0;
  padding: 0;

  li {
  display: inline;
  color: white;
  list-style-type: none;
  }

  li:not(:first-child) {
  margin-left: 40px;
  }

  a {
  color: white;
  text-decoration: none;
  }

  a:hover {
  color: coral;
  transition: 0.5s;
  }
`