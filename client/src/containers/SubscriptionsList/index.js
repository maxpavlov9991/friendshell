import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Subscriptions,
  Person,
  Photo,
  Info,
  InfoLabel,
  ValueLabel

} from './styled'

class SubscriptionsList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Subscriptions>

        <li>
          <Person to='/main/user'>
            <Photo src={require("../../media/img/Bash.jpg")} alt='name' />
            <Info>
              <h3>Maxim Bashilov</h3>
              <ul>
                <li><InfoLabel>City:</InfoLabel><ValueLabel>Saint-Petersburg</ValueLabel></li>
                <li><InfoLabel>Birthday:</InfoLabel><ValueLabel>1999.01.01</ValueLabel></li>
                <li><InfoLabel>University:</InfoLabel><ValueLabel>ITMO</ValueLabel></li>
              </ul>
            </Info>
          </Person>
        </li>

        <li>
          <Person to='/main/user'>
            <Photo src={require("../../media/img/Vova.jpg")} alt='name' />
            <Info>
              <h3>Vladimir Ovechkin</h3>
              <ul>
                <li><InfoLabel>City:</InfoLabel><ValueLabel>Saint-Petersburg</ValueLabel></li>
                <li><InfoLabel>Birthday:</InfoLabel><ValueLabel>2000.03.11</ValueLabel></li>
                <li><InfoLabel>University:</InfoLabel><ValueLabel>ITMO</ValueLabel></li></ul>
            </Info>
          </Person>
        </li>

        <li>
          <Person to='/main/user'>
            <Photo src={require("../../media/img/Fil.jpg")} alt='name' />
            <Info>
              <h3>Ilya Filippov</h3>
              <ul>
                <li><InfoLabel>City:</InfoLabel><ValueLabel>Krasnoyarsk</ValueLabel></li>
                <li><InfoLabel>Birthday:</InfoLabel><ValueLabel>1999.02.23</ValueLabel></li>
                <li><InfoLabel>University:</InfoLabel><ValueLabel>Siberian Federal University</ValueLabel></li>
              </ul>
            </Info>
          </Person>
        </li>

        <li>
          <Person to='/main/user'>
            <Photo src={require("../../media/img/Danya.jpg")} alt='name' />
            <Info>
              <h3>Danil Malishev</h3>
              <ul>
                <li><InfoLabel>City:</InfoLabel><ValueLabel>Krasnoyarsk</ValueLabel></li>
                <li><InfoLabel>Birthday:</InfoLabel><ValueLabel>1999.03.05</ValueLabel></li>
                <li><InfoLabel>University:</InfoLabel><ValueLabel>Siberian Federal University</ValueLabel></li>
              </ul>
            </Info>
          </Person>
        </li>

        <li>
          <Person to='/main/user'>
            <Photo src={require("../../media/img/Hon.jpg")} alt='name' />
            <Info>
              <h3>Alexander Khon</h3>
              <ul>
                <li><InfoLabel>City:</InfoLabel><ValueLabel>Krasnoyarsk</ValueLabel></li>
                <li><InfoLabel>Birthday:</InfoLabel><ValueLabel>1999.01.01</ValueLabel></li>
                <li><InfoLabel>University:</InfoLabel><ValueLabel>Siberian Federal University</ValueLabel></li>
              </ul>
            </Info>
          </Person>
        </li>

        <li>
          <Person to='/main/user'>
            <Photo src={require("../../media/img/Ura.jpg")} alt='name' />
            <Info>
              <h3>Yury Tolstihin</h3>
              <ul>
                <li><InfoLabel>City:</InfoLabel><ValueLabel>Krasnoyarsk</ValueLabel></li>
                <li><InfoLabel>Birthday:</InfoLabel><ValueLabel>1999.01.01</ValueLabel></li>
                <li><InfoLabel>University:</InfoLabel><ValueLabel>Siberian Federal University</ValueLabel></li>
              </ul>
            </Info>
          </Person>
        </li>

      </Subscriptions>
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
  })(SubscriptionsList)
