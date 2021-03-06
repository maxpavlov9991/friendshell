import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  UserInfo,
  Avatar,
  FollowButton,
  UserBio,
  InfoLabel,
  InfoValue,
  Sub,
  Name,
  Subscribers,
  Subscriptions,
  UserInfoWrapper
} from './styled'

class User extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }


  render() {
    return (
      <UserInfoWrapper backgroundImage={`url(` + require("../../media/img/1back.jpg") + `)`}>
        <UserInfo>

          <Avatar src={require("../../media/img/4YnwRWs_S8E.jpg")} alt='name' />

          <UserBio>
            <Name>
              <h2>Max Pavlov</h2>
            </Name>
            <ul>
              <li><InfoLabel>Birthday:</InfoLabel><InfoValue>11.04.2009</InfoValue></li>
              <li><InfoLabel>City:</InfoLabel><InfoValue>Krasnoyarsk</InfoValue></li>
              <li><InfoLabel>University:</InfoLabel><InfoValue>ITMO</InfoValue></li>
            </ul>
            <Sub>
              
              <Subscriptions to='/main/subs/subscriptions'>
                <p>Subscriptions:</p>
                <p>234</p>
              </Subscriptions>
              <Subscribers to='/main/subs/subscribers'>
                <p>Subscribers:</p>
                <p>307</p>
              </Subscribers>
              
            </Sub>

            <FollowButton>Follow</FollowButton>

          </UserBio>

        </UserInfo >

      </UserInfoWrapper>
    )
  }
}

export default connect(
  (state) => {
    return {
    }
  },
  (dispatch) => {
    return {
    }
  })(User)