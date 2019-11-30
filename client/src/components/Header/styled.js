import styled from 'styled-components'

export const Head = styled.header`
  @media (min-width: 992px) {
    height: 50px;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    height: 40px;
  }

  min-width: 320px;
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

  @media (min-width: 992px) {
    > li > a {
      line-height: 50px
    }
    li:not(:first-child) {
      margin-left: 50px;
    }
  }

  @media (max-width: 991px) and (min-width: 480px) {
    > li > a {
      line-height: 40px
    }
    li:not(:first-child) {
      margin-left: 40px;
    }
  }

  > li > a {
    color: white;
    text-decoration: none;
    transition: 0.3s color;
  }

  > li > a:hover {
    color: coral;
  }

`