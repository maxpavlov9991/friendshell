import styled from 'styled-components'

export const StyledUl = styled.ul`
  text-align: center;
  margin: 0;
  padding: 0;

  @media (min-width: 992px) {
    li {
      display: inline;
    }

    li:not(:first-child) {
      margin-left: 40px;
    }
  }

  @media (max-width: 991px) and (min-width: 480px) {
    li {
      display: inline;
    }

    li:not(:first-child) {
      margin-left: 20px;
    }
  }

  @media (max-width: 479px) {
    li {
      display: block;
      text-align: center;
    }

    li:not(:last-child) {
      margin-bottom: 10px;
    }
    
  }

  li {
    color: white;
    list-style-type: none;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    color: coral;
    transition: 0.3s;
  }
`