import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Subscriptions = styled.ul`
    list-style-type: none;
    padding: 0;
    background-color: rgb(2, 15, 29);
`
export const Person = styled(Link)`
  text-decoration: none;
  position: relative;
  display: grid;
  grid-template-areas: 'photo info';
  grid-template-columns: 75px 1fr;
  gap: 20px;
  padding: 20px;

  :before {
      content: '';
      background-color: rgba(0,0,0,0.2);
      height: 2px;
      position: absolute;
      top: 0;
      width: 100%;
    }

  :after{
    content: '';
    position: absolute;
    width: 0px;
    height: 100%;
    background-color: coral;
    transition: 0.2s width, 0.2s background-color;
  }

  :hover:after {
    width: 5px;
  }
  
  :focus-within:after{
    background-color: yellow;
    width: 5px;
  }
  
  :hover {
    > div {
      color: coral;
    }
  }

  :focus {
    > div {
      color: yellow;
    }
  }

`

export const Photo = styled.img`
  grid-area: photo;
  width: 75px;
  height: 75px;
  object-fit: cover;
  border-radius: 50%;
  justify-self: center;
  align-self: center;
  
`

export const Name = styled.div`
  grid-area: info;
  justify-self: center;
  align-self: center;
  font-weight: bold;
  font-size: 16px;
  color: white;
  text-align: center;
  transition: 0.2s color;
`