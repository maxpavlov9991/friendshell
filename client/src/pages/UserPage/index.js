import React from 'react';
import './style.css'

function UserPage() {
  return (
    <div className='user-page'>
      <header>
        <img className='logo' alt='asd'></img>
        <ul>
          <li><a href='#'>Subscriptions</a></li>
          <li><a href='#'>Subscribers</a></li>
          <li><a href='#'>Questions</a></li>
          <li><a href='#'>Profile</a></li>
          <li><a href='#'>Exit</a></li>
        </ul>
      </header>
      <div>
        <div className='user'>
          <div className='user-header'>
            <img className='avatar' src={require("../../media/svg/4YnwRWs_S8E.jpg")} alt='Max Pavlov'></img>
            <button className='follow-btn'>Follow</button>
          </div>
          <div className='user-info'>
            <h2 className='user-name'>Name</h2>
            <ul className='user-bio'>
              <li>11.04.2009</li>
              <li>Link to vk/insta/twitter</li>
              <li>Subscribers: 123</li>
              <li>Subscriptions: 321</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPage;
