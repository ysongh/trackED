import React, { Component } from 'react';

import TextField from '../common/TextField';

class Signup extends Component{
	state = {
		email: "",
		password: ""
	}

	onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

	submitLogin(){
		
	}
	render() {
		return (
			<div>
				<h4 class="signup__title">Sign Up</h4>
					<form>
						<div className="flexContainer">
							<TextField 
								id="email-in"
								name="email"
								type="email"
								value={this.state.email}
								onChange={this.onChange.bind(this)}
								placeholder="School email address" />
							<TextField
								id="password-in"
								type="password"
								name="password"
								value={this.state.password}
								onChange={this.onChange.bind(this)}
								placeholder="Create a password" />
							<input id="create-account" type="button" onClick={this.submitLogin} value="Create your account" />
						</div>
						<p className="signup__information">Already have an account? <strong>Sign in</strong></p>
					</form>
			</div>
		)
	};
};

export default Signup;

