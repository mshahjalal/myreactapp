import React, { Component } from 'react';

class Contact extends Component {
		constructor(props) {
	    super(props);
	    this.state = {firstname: ''};

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		console.log('Change value is: ' + this.state.firstname);
		this.setState({firstname: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log('A name was submitted: ' + this.state.firstname);
	}

	
	render() {
		return (
			<div className="Contact">
				<form onSubmit={this.handleSubmit}>	
					<label>
						First Name
						<input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} placeholder="Your name.." />
					</label>
    				
    				<input type="submit" value="Submit" />
				</form>
		  	</div>
		);
	}
}

export default Contact;