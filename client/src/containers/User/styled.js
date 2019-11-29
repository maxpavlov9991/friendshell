import styled from 'styled-components'

export const UserInfoWrapper = styled.div`
  width: 100%;
  background-image: ${props => props.backgroundImage};
  background-blend-mode: luminosity; /* */
  background-size: cover;
  background-color: #424242;
  padding: 80px 0 50px 0;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
`

export const UserInfo = styled.div`
  max-width: 768px;
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
    'name'
    'info'
    'sub'
    'follow-btn';

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
  }

  > ul > li {
      list-style-type: none;
      width: 100%;

      display: grid;
      grid-template-areas: 
      'label value'
    }

`

export const Sub = styled.div`
  display: grid;
  grid-template-areas:
    'subscribers subscriptions';

`

export const Subscribers = styled.div`
  grid-area: subscribers;
  color: white;
  font-size: 15px;
  font-weight: bold;
  align-self: start;
  justify-self: center;
  padding-bottom: 20px;


  > p {
    margin: 0;
    text-align: center
  }

`
export const Subscriptions = styled.div`
  grid-area: subscriptions;
  color: white;
  font-size: 15px;
  font-weight: bold;
  align-self: start;
  justify-self: center;
  padding-bottom: 20px;

  > p {
    margin: 0;
    text-align: center
  }

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
  outline: none;

  align-self: center;
  justify-self: center;
  transition: 0.3s background-color;
  font-size: 24px;

  :hover {
    background-color: #7ded81;
  }
`

export const InfoLabel = styled.div`
  grid-area: label;
  width: 100px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #EFEFEF;
  align-self: start;
  justify-self: start;
`

export const InfoValue = styled.div`
  width: 300px;
  padding-left: 20px;
  grid-area: value;
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;
  align-self: center;
  justify-self: end;
`

