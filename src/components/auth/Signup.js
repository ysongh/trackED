import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TextField from '../common/TextField';
import Button from '../common/Button';

class Signup extends Component{
	state = {
		email: "",
		password: ""
	}

	onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

	onSubmit(){
		console.log(this.state.email, this.state.password);
	}
	render() {
		return (
			<div>
				<h4 className="signup__title">Sign Up</h4>
				<div className="flexContainer">
					<TextField 
						id="email-in"
						name="email"
						type="email"
						value={this.state.email}
						onChange={this.onChange.bind(this)}
						placeholder="School Email Address" />
					<TextField
						id="password-in"
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.onChange.bind(this)}
						placeholder="Password" />
					<Button
						id="create-account"
						type="button"
						onClick={this.onSubmit.bind(this)}
						value="Create your account" />
				</div>
				<Link to="/login">
					<p className="signup__information">Already have an account? <strong>Sign In</strong></p>
				</Link>
			</div>
		)
	};
};

export default Signup;

