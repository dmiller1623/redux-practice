import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInUser } from '../../actions'

class User extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.signInUser(this.state)
  }

  handleSignOut = () => {

  }

  render () {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input
            type='text'
            name='userName'
            onChange={(event) => this.handleChange(event)}
            value={this.state.userName}
          />
          <input
            type='text'
            name='email'
            onChange={(event) => this.handleChange(event)}
            value={this.state.email}
          />
          <input
            type='text'
            name='password'
            onChange={(event) => this.handleChange(event)}
            value={this.state.password}
          />
          <button>Submit</button>
        </form>
          <button>signout</button>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  signInUser: (user) => dispatch(signInUser(user))
})


export default connect(null, mapDispatchToProps)(User)