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
  grid-template-columns: 150px 1fr;
  gap: 20px;
  padding: 20px;

  :before{
    content: '';
    position: absolute;
    width: 0px;
    height: 100%;
    background-color: coral;
    transition: 0.2s width;
  }

  :hover:before{
    width: 5px;
  }

`

export const Photo = styled.img`
  grid-area: photo;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  justify-self: center;
  align-self: center;
  
`

export const Info = styled.div`
  grid-area: info;

  > h3 {
    color: coral;
    text-align: center;
  }

  > ul {
    justify-self: start;
    align-self: center;
    text-decoration: none;
    list-style-type: none;
    padding: 0;
  }

  ul > li {
    width: 100%;
    display: grid;
    grid-template-areas: 'info value';
    grid-template-columns: 30% 70%;
    justify-self: start;
    align-self: center;
  }
  ul > li:not(:last-child) {
    margin-bottom: 10px;
  }
  
`

export const InfoLabel = styled.div`
  color: white;
  align-self: start;
  justify-self: start;
  grid-area: info;
  font-weight: bold;
  word-wrap: break-word;
  white-space: pre-wrap;
`

export const ValueLabel = styled.div`
  color: #DFDFDF;
  align-self: start;
  justify-self: start;
  width: 100%;
  grid-area: value;
  font-weight: bold;
`