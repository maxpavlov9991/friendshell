import React from 'react';

import {
  UserInfo,
  Avatar,
  FollowButton,
  UserBio,
  InfoLabel,
  InfoValue,
  Sub,
  Subscribers,
  Subscriptions,
  UserInfoWrapper
} from './styled'

function User() {
  return (
    <UserInfoWrapper backgroundImage={`url(` + require("../../media/img/back.jpg") + `)`}>
    <UserInfo>

      <Avatar src={require("../../media/img/4YnwRWs_S8E.jpg")} alt='name' />

      <UserBio>
        <h2>Max Pavlov</h2>
        <ul>
          <li><InfoLabel>Birthday:</InfoLabel><InfoValue>11.04.2009</InfoValue></li>
          <li><InfoLabel>City:</InfoLabel><InfoValue>Krasnoyarsk</InfoValue></li>
          <li><InfoLabel>University:</InfoLabel><InfoValue>ITMO</InfoValue></li>
          <li><InfoLabel>Website:</InfoLabel><InfoValue>https://github.com/maxpavlov9991https://github.com/maxpavlov9991https://github.com/maxpavlov9991</InfoValue></li>
        
          <li><InfoLabel>Age:</InfoLabel><InfoValue>ITMOasdasdasdasdasd</InfoValue></li>
          <li><InfoLabel>Indicator:</InfoLabel><InfoValue>ITMOasdasdasdasd</InfoValue></li>
          <li><InfoLabel>Work:</InfoLabel><InfoValue>ITMO</InfoValue></li>
          <li><InfoLabel>ASDASD:</InfoLabel><InfoValue>sdasd</InfoValue></li>
        </ul>

        <Sub>
          <Subscribers>
            <p>Subscribers:</p>
            <p>12312</p>
          </Subscribers>
          <Subscriptions>
            <p>Subscriptions:</p>
            <p>12312</p>
          </Subscriptions>
        </Sub>

        <FollowButton>Follow</FollowButton>
        
      </UserBio>
      
      </UserInfo >

    </UserInfoWrapper>
  )
}

export default User;
