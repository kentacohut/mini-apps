import React from 'react';
import ReactDOM from 'react-dom';

class Frame extends React.Component{
  constructor(props){
  	super(props);
  }
  render(){
  	return(
  		<div className="frame" id={this.props.round}>
  		<div className="first">
  			{this.props.score[0]}
  		</div>
  		<div className="strike">
  		</div>
  		<div className="total">
  			{this.props.score[0] + (this.props.score[1] || 0)}
  		</div>
  		</div>
  		)
  }
}

export default Frame;