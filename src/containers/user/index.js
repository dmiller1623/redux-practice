import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInUser, signOutUser } from '../../actions'

class User extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      email: '',
      password: '',
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
    let { name } = this.props.user.userName
    if (!name) {
      alert('No user signed in')
    } 
    this.props.signOutUser()
  }

  render () {
    let user = this.props.user.userName
    if(user) {
      return (
        <div>
          <h1>Welcome {user}</h1>
        </div>
      )
    }
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
          <button onClick={this.handleSignOut}>signout</button>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  signInUser: (user) => dispatch(signInUser(user)),
  signOutUser: () => dispatch(signOutUser())
})

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(User)