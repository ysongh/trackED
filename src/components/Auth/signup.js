import React from 'react';

class Signup extends React.Component{
	submitLogin(){
		
	}
	render() {
		return (
			<div>
				<h4 class="signup__title">Sign Up</h4>
					<form>
						<div className="flexContainer">
							<input id="email-in" type="email" placeholder="School email address"  required/>
							<input id="password-in" type="password" placeholder="Create a password" required/>
							<input id="create-account" type="button" onClick={this.submitLogin} value="Create your account" />
						</div>
						<p className="signup__information">Already have an account?</p>
						<p className="signup__information"><strong>Sign in</strong></p>
					</form>
			</div>
		)
	};
};

export default Signup;

