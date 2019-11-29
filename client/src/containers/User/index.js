import React from 'react';

import {
  UserInfo,
  Avatar,
  FollowButton,
  UserBio,
  InfoLabel,
  InfoValue,
  Subscribers,
  Subscriptions
} from './styled'

function User() {
  return (
    <UserInfo>

      <Avatar src={require("../../media/svg/4YnwRWs_S8E.jpg")} alt='name' />

      <UserBio>
        <h2>Max Pavlov</h2>
        <ul>
          <li><InfoLabel>Birthday:</InfoLabel><InfoValue>11.04.2009</InfoValue></li>
          <li><InfoLabel>City:</InfoLabel><InfoValue>Krasnoyarsk</InfoValue></li>
          <li><InfoLabel>University:</InfoLabel><InfoValue>Krasnoyarsk</InfoValue></li>
          <li><InfoLabel>Website:</InfoLabel><InfoValue>https://github.com/maxpavlov9991</InfoValue></li>
        </ul>
        <Subscribers>3661</Subscribers>
        <Subscriptions>1231</Subscriptions>
        <FollowButton>Follow</FollowButton>
      </UserBio>
      
    </UserInfo >
  )
}

export default User;
