import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const UserInfoWrapper = styled.div`
  @media (min-width: 992px) {
    padding: 80px 0 10px 0;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    padding: 40px 0 10px 0;
  }

  @media (max-width: 479px) {
    padding: 20px 0 10px 0;
  }

  width: 100%;

  min-width: 320px;
  background-image: ${props => props.backgroundImage};
  background-blend-mode: overlay;
  background-attachment: fixed;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
`


export const UserInfo = styled.div`

  @media (min-width: 992px) {
    width: 800px;
    grid-template-areas: 'user-header user-bio';
  }

  @media (max-width: 991px) and (min-width: 480px) {
    width: 450px;
    grid-template-areas: 
      'user-header'
      'user-bio';
  }

  @media (max-width: 479px) {
    width: 300px;
    grid-template-areas: 
      'user-header'
      'user-bio';
  }

  min-width: 300px;
  margin: 0 auto;
  display: grid;
  gap: 10px;
`


export const Avatar = styled.img`

  @media (min-width: 992px) {
    width: 300px;
    height: 300px;
    padding: 25px 0 25px 0;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    width: 250px;
    height: 250px;
    padding: 25px 0 25px 0;
  }

  @media (max-width: 479px) {
    width: 200px;
    height: 200px;
    padding: 10px 0 10px 0;
  }

  grid-area: user-header;
  align-self: center;
  justify-self: center;
  object-fit: cover;
  border-radius: 50%;
  transition: 0.3s transform;

  :hover {
    transform: scale(1.05);
  }
`

export const UserBio = styled.div`

  @media (min-width: 992px) {
    > ul {
      width: 400px;
    }
  }

  @media (max-width: 991px) and (min-width: 480px) {
    > ul {
      width: 450px;
    }
  }

  @media (max-width: 479px) {
    > ul {
      width: 300px;
    }
  }

  min-width: 300px;
  grid-area: user-bio;
  margin: 0;
  gap: 10px;
  display: grid;
  align-self: center;
  justify-self: center;

  grid-template-areas:
    'name'
    'info'
    'sub'
    'follow-btn';

  > h2 {
    grid-area: name;
    align-self: center;
    justify-self: center;
    color: white;
  }

  > ul {
    padding: 0;
    grid-area: info;
    color: white;
    align-self: center;
    justify-self: center;
  }

  > ul > li {
      list-style-type: none;
      width: 100%;
      display: grid;
      grid-template-areas:
      'label value';
  }

  > ul > li:not(:first-child) {
      margin-top: 10px;
  }
`

export const Name = styled.div`
  color: white;
  background-color: rgba(3, 27, 53, 0.7);
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
  text-align: center;
`

export const Sub = styled.div`
  display: grid;
  grid-template-areas:
    'subscriptions subscribers';
  
  background-color: rgba(3, 27, 53, 0.7);
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);

`
export const Subscriptions = styled(Link)`

  @media (min-width: 992px) {
    padding: 15px 0 15px 0;
    font-size: 20px;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    padding: 10px 0 10px 0;
    font-size: 18px;
  }

  @media (max-width: 479px) {
    padding: 10px 0 10px 0;
    font-size: 15px;
  }

  text-decoration: none;
  grid-area: subscriptions;
  color: white;
  font-weight: bold;
  align-self: center;
  justify-self: center;
  transition: 0.2s color;
  :hover{
    color: coral;
  }

  > p {
    margin: 0;
    text-align: center;
  }

`

export const Subscribers = styled(Link)`

@media (min-width: 992px) {
    padding: 15px 0 15px 0;
    font-size: 20px;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    padding: 10px 0 10px 0;
    font-size: 18px;
  }

  @media (max-width: 479px) {
    padding: 10px 0 10px 0;
    font-size: 15px;
  }
  
  transition: 0.2s color;
  :hover{
    color: coral;
  }

  text-decoration: none;
  grid-area: subscribers;
  color: white;
  font-weight: bold;
  align-self: center;
  justify-self: center;

  > p {
    margin: 0;
    text-align: center;
  }

`


export const FollowButton = styled.button`

  @media (min-width: 992px) {
    width: 300px;
    height: 50px;
    margin: 15px 0 15px 0;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    width: 250px;
    height: 50px;
    margin: 15px 0 15px 0;
  }

  @media (max-width: 479px) {
    width: 200px;
    height: 40px;
    margin: 10px 0 10px 0;
  }

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  grid-area: follow-btn;
  border: none;
  background-color: #a7e4a9;
  color: black;
  outline: none;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
  align-self: center;
  justify-self: center;
  transition: 0.3s background-color;
  font-size: 24px;

  :hover {
    background-color: white;
  }
`

export const InfoLabel = styled.div`

  @media (min-width: 992px) {
    width: 100px;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    width: 200px;
  }

  @media (max-width: 479px) {
    width: 100px;
  }

  grid-area: label;
  font-weight: bold;
  word-wrap: break-word;
  white-space: pre-wrap;
  color: white;
  align-self: start;
  justify-self: start;
`

export const InfoValue = styled.div`

  @media (min-width: 992px) {
    width: 300px;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    width: 250px;
  }

  @media (max-width: 479px) {
    width: 200px;
  }

  grid-area: value;
  word-wrap: break-word;
  white-space: pre-wrap;
  color: #DFDFDF;
  align-self: center;
  justify-self: end;
`

