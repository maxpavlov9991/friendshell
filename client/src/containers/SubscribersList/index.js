import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Subscriptions,
  Person,
  Photo,
  Name
} from './styled'

class SubscribersList extends Component {
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
            <Photo src={require("../../media/img/Sema.jpg")} alt='name' />
            <Name>Semyon Bondarev</Name>
          </Person>
        </li>

        <li>
          <Person to='/main/user'>
            <Photo src={require("../../media/img/Fil.jpg")} alt='name' />
            <Name>Ilya Filippov</Name>
          </Person>
        </li>

        <li>
          <Person to='/main/user'>
            <Photo src={require("../../media/img/Ura.jpg")} alt='name' />
            <Name>Yuriy Tolstikhin</Name>
          </Person>
        </li>

        <li>
          <Person to='/main/user'>
            <Photo src={require("../../media/img/Mark.jpg")} alt='name' />
            <Name>Mark Smirnov</Name>
          </Person>
        </li>

        <li>
          <Person to='/main/user'>
            <Photo src={require("../../media/img/Luk.jpg")} alt='name' />
            <Name>Maxim Luckyanchuk</Name>
          </Person>
        </li>

        <li>
          <Person to='/main/user'>
            <Photo src={require("../../media/img/Hon.jpg")} alt='name' />
            <Name>Alexandr Khon</Name>
          </Person>
        </li>

        <li>
          <Person to='/main/user'>
            <Photo src={require("../../media/img/Danya.jpg")} alt='name' />
            <Name>Danya Malishev</Name>
          </Person>
        </li>

        <li>
          <Person to='/main/user'>
            <Photo src={require("../../media/img/Bash.jpg")} alt='name' />
            <Name>Maxim Bashilov</Name>
          </Person>
        </li>

        <li>
          <Person to='/main/user'>
            <Photo src={require("../../media/img/Vova.jpg")} alt='name' />
            <Name>Vladimir Ovechkin</Name>
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
  })(SubscribersList)
