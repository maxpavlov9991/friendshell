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
    padding: 40px 0 10px 0;
  }

  @media (max-width: 479px) {
    padding: 20px 0 10px 0;
  }
`

export const SwitchSub = styled.div`
  display: grid;
  grid-template-areas: 'subscriptions subscribers';
  margin: 0 auto;
  width: 400px;
  
  text-align: center;
  grid-template-columns: 200px 200px;
  float: center;

`

export const SubList = styled.div`
  margin: 0 auto;
  width: 600px;
  padding: 0;

`
export const SubscriberLink = styled(Link)`

  color: white;
  text-decoration: none;
  justify-self: center;
  align-self: center;
  grid-area: subscribers;
  text-align: center;
  width: 200px;
  height: 30px;
  line-height: 30px;
  background-color: ${props => (props.selected ? 'coral' : '#020f1d')};

`

export const SubscriptionLink = styled(Link)`
  color: white;
  text-decoration: none;
  justify-self: center;
  align-self: center;
  grid-area: subscriptions;
  line-height: 30px;
  width: 200px;
  height: 30px;
  background-color: ${props => (props.selected ? 'coral' : '#020f1d')};

`