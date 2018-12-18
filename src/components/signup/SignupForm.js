import React, { PureComponent } from 'react'
import './SignupForm.css'

export default class SignupForm extends PureComponent {
    state = {
        adultsNumber: 0,
        childrenNumber: 0
    }

    onClick1 = () => {
        this.setState({
            adultsNumber: this.state.adultsNumber + 1
        })
    }

    onClick2 = () => {
        if (this.state.adultsNumber < 1) return 0
        this.setState({
            adultsNumber: this.state.adultsNumber - 1
        })
    }

    onClick3 = () => {
        this.setState({
            childrenNumber: this.state.childrenNumber + 1
        })
    }

    onClick4 = () => {
        if (this.state.childrenNumber < 1) return 0
        this.setState({
            childrenNumber: this.state.childrenNumber - 1
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    handleClick = (e) => {
        e.preventDefault()
    }

    render() {
        return (            
            <div>
                <b className='title'>Welcome to planet friendly meal planner!</b>
                <div className="intro">
                    <p>We’re excited to design a menu that fits your lifestyle and preferences and that helps our planet!</p>
                    <p>When you’re finished taking the quiz below, we’ll plan you incredible meals that will be personalized!</p>
                    <p>You can change this information any time.</p>
                    <p>Let's start?</p>
                </div>

                    <form onClick={this.handleClick} >
                        <b className="question">How many people do you cook for?</b>
                        <hr className="hr1"/> 
                        <div className="buttons">
                            <span className='adult-button'> Adult <button onClick={this.onClick2} style={{marginLeft: '20px'}}> - </button> {this.state.adultsNumber}  <button onClick={this.onClick1}> + </button> </span>
                            <span className='child-button'> Children <button onClick={this.onClick4} style={{marginLeft: '20px'}}> - </button> {this.state.childrenNumber} <button onClick={this.onClick3}> + </button></span> 
                        </div>
                    </form>
                    <b className="details" >PERSONAL DETAILS</b>
                    <hr className="hr2"/> 
                    <div className="form">
                    <form onSubmit={this.handleSubmit}>                    
                        <label>First name:<input type="text" name="firstName" value={this.state.firstName || ''} onChange={this.handleChange} /> </label>
                        <label>Last name:<input type="text" name="lastName" value={this.state.lastName || ''} onChange={this.handleChange} /></label><br />
                        <label>Email:<input type="email" name="email" value={this.state.email || ''} onChange={this.handleChange} /></label><br />
                        <label>Password:<input type="password" name="password" value={this.state.password || ''} onChange={this.handleChange} /></label><br />
                        <label>Confirm password:<input type="password" name="confirmPassword" value={this.state.confirmPassword || ''} onChange={this.handleChange} /></label><br />
                        {
                            this.state.password &&
                            this.state.confirmPassword &&
                            this.state.password !== this.state.confirmPassword &&
                            <p style={{ color: 'red' }}>The passwords do not match!</p>
                        }
                        <button type="submit" style={{marginTop: '40px'}}>CREATE MY ACCOUNT</button>                    
                    </form>
                </div>
                
            </div>
        )
    }
}