import React from 'react';
import ReactDOM from 'react-dom';
import Row from './row.jsx';
import ScoreBoard from './scoreboard.jsx';
import $ from 'jquery';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pins: [
			[7,8,9,10],
			[4,5,6],
			[2,3],
			[1]
			],
			scoreboard: [
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0]
			],
			frame: 0,
			bowl: 0,
			total: 0
		}
	}

	handleBowl(score){
		let scores = this.state.scoreboard;

		if(!this.state.bowl){
			scores[this.state.frame][0] = score;
		} else {
			if (scores[this.state.frame][0] + score > 10){
				scores[this.state.frame][1] = 10 - scores[this.state.frame][0];
			} else {
				scores[this.state.frame][1] = score;
			}
		}
		
		if(this.state.bowl){
		this.setState({frame: this.state.frame + 1})
		this.setState({total: this.state.total + scores[this.state.frame][0] + scores[this.state.frame][1]})
		}
		
		this.setState({bowl: !this.state.bowl})
	}

	sendScore(score){
		let name = prompt('Who dis?');
		let postData ={name: name, score: score};
		$.ajax({
		    type: "POST",
		    url: 'http://127.0.0.1:3000',
		    data: JSON.stringify(postData),
		    contentType: 'application/json',
		    success: (data)=>{
		      console.log('Success!');
		      console.log(data);
		    },
		    error: (error)=>{
		      console.log('Failed!')
		      console.log(error);
			}
  		});
	}

	getScore(callback){
		$.ajax({
		    type: "GET",
		    url: 'http://127.0.0.1:3000/score',
		    success: (data)=>{
		      console.log('Success!');
		      callback(data);
		    },
		    error: (error)=>{
		      console.log('Failed!')
		      console.log(error);
			}
  		});
	}

	render() {
		return (
			<div>
			<div id="lane">
			{this.state.pins.map((row, index)=><Row 
				key={index} 
				rowId={index} 
				pins={this.state.pins[index]}
				handleBowl={this.handleBowl.bind(this)}
				/>)}
			</div>
			<ScoreBoard 
			scoreboard={this.state.scoreboard}
			total={this.state.total}
			/>
			<button type="button" onClick={()=>{this.sendScore(this.state.total)}}>Send Score</button>
			<button type="button" onClick={()=>{}}>Get Scores</button>
			</div>
			)
	}
}

export default App;