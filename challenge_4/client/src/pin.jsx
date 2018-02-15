import React from 'react';
import ReactDOM from 'react-dom';

class Pin extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			up: true,
		}
	}
	render(){
		return(
			<div className="pin">
			</div>
			)
	}
}

export default Pin;