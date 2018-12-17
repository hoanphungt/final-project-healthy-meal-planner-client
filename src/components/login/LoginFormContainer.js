import React from 'react'
import { LoginForm } from './LoginForm'
import { connect } from 'react-redux'
import { login } from '../../actions/auth'
import { Redirect } from 'react-router-dom'
import './Login.css'

class LoginFormContainer extends React.Component {
  state = { email: '', password: '' }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state.email, this.state.password)
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    if (this.props.currentUser) return <Redirect to='/planner' />

    return (<div className='login'>
      <LoginForm onSubmit={this.onSubmit} onChange={this.onChange} values={this.state} />
      <p style={{color:"red"}}>{this.props.error}</p>
    </div>)
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  error: state.login.error
})

export default connect(mapStateToProps, { login })(LoginFormContainer)