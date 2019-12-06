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
  outline: none;

  @media (min-width: 992px) {
    grid-template-areas: 'photo info';
    grid-template-columns: 150px 1fr;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    grid-template-areas: 'photo info';
    grid-template-columns: 100px 1fr;
  }

  @media (max-width: 479px) {
    grid-template-areas:
      'photo'
      'info';
    grid-template-columns: 100%;

    :before {
      content: '';
      background-color: rgba(0,0,0,0.2);
      height: 5px;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  gap: 20px;
  padding: 20px;

  :after {
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

  :focus {
    > div > h3 {
      color: yellow;
    }
  }

`

export const Photo = styled.img`


  @media (min-width: 992px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 479px) {
    width: 150px;
    height: 150px;
  }

  grid-area: photo;
  object-fit: cover;
  border-radius: 50%;
  justify-self: center;
  align-self: center;
  
`

export const Info = styled.div`
  grid-area: info;

  > h3 {
    color: coral;
    transition: 0.2s color;
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

    @media (min-width: 992px) {
      
      grid-template-columns: 20% 80%;
    }

    @media (max-width: 991px) and (min-width: 480px) {
      
      grid-template-columns: 20% 80%;
    }

    @media (max-width: 479px) {
      
      grid-template-columns: 30% 70%;
    }

    width: 100%;
    display: grid;
    gap: 10px;
    grid-template-areas: 'info value';
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
  
  overflow: hidden;
  word-wrap: break-word;
  white-space: pre-wrap;

  @media (min-width: 992px) {
    font-size: 13px
  }

  @media (max-width: 991px) and (min-width: 480px) {
    font-size: 13px;
  }

  @media (max-width: 479px) {
    font-size: 11px
  }
`

export const ValueLabel = styled.div`
  color: #DFDFDF;
  align-self: start;
  justify-self: start;
  width: 100%;

  overflow: hidden;
  word-wrap: break-word;
  white-space: pre-wrap;

  grid-area: value;
  font-weight: bold;
  @media (min-width: 992px) {
    font-size: 13px
  }

  @media (max-width: 991px) and (min-width: 480px) {
    font-size: 13px;
  }

  @media (max-width: 479px) {
    font-size: 11px
  }
`