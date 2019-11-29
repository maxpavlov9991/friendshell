import styled from 'styled-components'

export const UserInfo = styled.div`
  max-width: 768px;
  padding-top: 75px;
  margin: 0 auto;
  display: grid;
  grid-template-areas: 'user-header user-bio';
  gap: 10px;
  
`


export const Avatar = styled.img`

  grid-area: user-header;
  align-self: center;
  justify-self: center;
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  padding: 25px 0 25px 0;
  transition: 0.3s transform;

  :hover {
    transform: scale(1.05);
  }
`

export const UserBio = styled.div`
  grid-area: user-bio;

  gap: 10px;

  display: grid;

  grid-template-areas:
    'name name'
    'info info'
    'subscribers subscriptions'
    'follow-btn follow-btn';

  margin: 0 auto;
  padding: 0;
  align-self: center;
  justify-self: center;

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
    max-width: 400px;
    text-overflow: ellipsis;
  }

  > ul > li {
    list-style-type: none;
  }

`

export const Subscribers = styled.div`
  grid-area: subscribers;

  color: greenyellow;
  font-size: 30px;
  font-weight: bold;
  align-self: center;
  justify-self: center;
`
export const Subscriptions = styled.div`
  grid-area: subscriptions;
  color: greenyellow;
  font-size: 30px;
  font-weight: bold;
  align-self: center;
  justify-self: center;

`


export const FollowButton = styled.button`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  grid-area: follow-btn;
  width: 300px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: #a7e4a9;
  color: black;

  align-self: center;
  justify-self: center;
  transition: 0.3s background-color;
  font-size: 24px;

  :hover {
    background-color: #7ded81;
  }

`

export const InfoLabel = styled.span`
  font-weight: bold;
  text-align: left;
`

export const InfoValue = styled.span`
  float: right;
  margin-left: 50px;

`

