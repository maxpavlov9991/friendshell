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
              <h3>Bashilov Maxim</h3>
              <ul>
                <li><InfoLabel>City:</InfoLabel><ValueLabel>Saint-Petersburg</ValueLabel></li>
                <li><InfoLabel>Birthday:</InfoLabel><ValueLabel>1999.01.01</ValueLabel></li>
                <li><InfoLabel>Status:</InfoLabel><ValueLabel>Hello Guys!!</ValueLabel></li>
              </ul>
            </Info>
          </Person>
        </li>

        <li>
          <Person to='/main/user'>
            <Photo src={require("../../media/img/Vova.jpg")} alt='name' />
            <Info>
              <h3>Ovechkin Vladimir</h3>
              <ul>
                <li><InfoLabel>City:</InfoLabel><ValueLabel>Saint-Petersburg</ValueLabel></li>
                <li><InfoLabel>Birthday:</InfoLabel><ValueLabel>2000.03.11</ValueLabel></li>
                <li><InfoLabel>Status:</InfoLabel><ValueLabel>My name is Vova i am ovechkin live in saintpetersvurg know a lot of use is Vova i am ovechkin live in saintpetersvurg know a lot of use is Vova i am ovechkin live in saintpetersvurg know a lot of use is Vova i am ovechkin live in saintpetersvurg know a lot of use is Vova i am ovechkin live in saintpetersvurg know a lot of useless things and so on.</ValueLabel></li>
              </ul>
            </Info>
          </Person>
        </li>

        <li>
          <Person to='/main/user'>
            <Photo src={require("../../media/img/Luk.jpg")} alt='name' />
            <Info>
              <h3>Lukyanchuk Maxim</h3>
              <ul>
                <li><InfoLabel>City:</InfoLabel><ValueLabel>Saint-Petersburg</ValueLabel></li>
                <li><InfoLabel>Birthday:</InfoLabel><ValueLabel>2001.11.30</ValueLabel></li>
                <li><InfoLabel>Status:</InfoLabel><ValueLabel>PROGRAMMING IS COOL!!!</ValueLabel></li>
              </ul>
            </Info>
          </Person>
        </li>

        <li>
          <Person to='/main/user'>
            <Photo src={require("../../media/img/Mark.jpg")} alt='name' />
            <Info>
              <h3>Smirnov Mark</h3>
              <ul>
                <li><InfoLabel>City:</InfoLabel><ValueLabel>Saint-Petersburg</ValueLabel></li>
                <li><InfoLabel>Birthday:</InfoLabel><ValueLabel>1999.04.21</ValueLabel></li>
                <li><InfoLabel>Status:</InfoLabel><ValueLabel>DODODODODODODO</ValueLabel></li>
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
