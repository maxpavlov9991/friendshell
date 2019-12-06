import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;

  @media (min-width: 992px) {
    padding: 80px 0 10px 0;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    padding: 60px 0 10px 0;
  }

  @media (max-width: 479px) {
    padding: 20px 0 10px 0;
  }
`

export const SwitchSub = styled.div`
  @media (min-width: 992px) {
    width: 400px;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    width: 400px;
  }

  @media (max-width: 479px) {
    width: 90%;
  }

  display: grid;
  grid-template-areas: 'subscriptions subscribers';
  grid-template-columns: 50% 50%;
  margin: 0 auto;
  
  text-align: center;
  float: center;

`

export const SubList = styled.div`


  @media (min-width: 992px) {
    width: 600px;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    width: 90%;
  }

  @media (max-width: 479px) {
    width: 90%;
  }
  margin: 0 auto;
  padding: 0;

`
export const SubscriberLink = styled(Link)`

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
  outline: none;
  color: white;
  text-decoration: none;
  justify-self: center;
  align-self: center;
  grid-area: subscribers;
  text-align: center;
  width: 100%;
  height: 30px;
  line-height: 30px;
  background-color: ${props => (props.selected ? 'coral' : '#020f1d')};

`

export const SubscriptionLink = styled(Link)`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
  color: white;
  text-decoration: none;
  outline: none;
  justify-self: center;
  align-self: center;
  grid-area: subscriptions;
  line-height: 30px;
  width: 100%;
  height: 30px;
  background-color: ${props => (props.selected ? 'coral' : '#020f1d')};

`