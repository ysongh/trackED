import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TextField from '../common/TextField';
import Button from '../common/Button';
import logo from '../../img/logo.png';

class Login extends Component{
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
			<div className="mt-48">
				<img className="mx-auto" src={logo} alt="This is the logo of the app"/>
				<h4 className="text-center text-4xl leading-loose text-gray-700 font-family-rubik">Log In</h4>
				<div className="flex flex-col items-center">
					<TextField 
						className="w-64 h-10 m-2 pl-1 bg-white border border-solid border-gray-500 rounded"
						name="email"
						type="email"
						value={this.state.email}
						onChange={this.onChange.bind(this)}
						placeholder="School Email Address" />
					<TextField
						className="w-64 h-10 m-2 pl-1 bg-white border border-solid border-gray-500 rounded"
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.onChange.bind(this)}
						placeholder="Password" />
					<Button
						className="w-64 h-12 bg-teal-500 rounded-lg text-white mt-4 cursor-pointer"
						type="button"
						onClick={this.onSubmit.bind(this)}
						value="Login" />
				</div>
				<Link to="/">
					<p className="text-center font-family-rubik text-lg leading-relaxed	text-gray-600 hover:text-gray-500 mt-4">
						Don't have an account? <strong>Sign Up</strong>
					</p>
				</Link>
			</div>
		);
	};
};

export default Login;

