import React from 'react';
import { Route, Redirect } from 'react-router-dom'

import SubscribersList from '../../containers/SubscribersList/index'
import SubscriptionList from '../../containers/SubscriptionsList/index'

import {
  Content,
  SwitchSub,
  SubList,
  SubscriberLink,
  SubscriptionLink
} from './styled'

function SubsPack() {
  return (
    <Content>

      <SwitchSub>
        <SubscriptionLink selected={true} to='/main/subs/subscriptions'>Subscriptions</SubscriptionLink>
        <SubscriberLink to='/main/subs/subscribers'>Subscribers</SubscriberLink>
      </SwitchSub>

      <SubList>
        <Route exact={true} path="/main/subs" render={() => (
            <Redirect to='/main/subs/subscriptions' />
          )} />
        <Route path="/main/subs/subscribers" component={SubscribersList}/>
        <Route path="/main/subs/subscriptions" component={SubscriptionList}/>
      </SubList>

    </Content>
  )
}

export default SubsPack;