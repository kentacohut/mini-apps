import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Row from './row.jsx';
import ScoreBoard from './scoreboard.jsx';
import LeaderBoard from './leaderboard.jsx';

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
			total: 0,
			playerdata: []
		}
	}

	handleBowl(score){
		let scores = this.state.scoreboard;
		if(scores[9][1]){
			alert('Game Over!')
			return;
		}
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
		
		this.setState({bowl: !this.state.bowl});
	}

	sendScore(score){
		let name = prompt('Who dis?') || 'Anonymous';
		let postData ={name: name, score: score, board: this.state.scoreboard};
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
  		this.reset();
	}

	reset(){
		this.setState({scoreboard: [
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
			total: 0,
			bowl: 0})
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

	recallBoard(data){
		this.setState({
			scoreboard: data.board,
			frame: 10,
			bowl: 0,
			total: data.score
		})
	}

	renderScore(){
		this.getScore((data)=>{this.setState({playerdata: data})})
	}

	componentDidMount(){
		this.renderScore();
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
			<button type="button" onClick={this.renderScore.bind(this)}>Get Scores</button>
			<h1>Leader Board</h1>
			{this.state.playerdata.map((entry, index)=><LeaderBoard 
				key={index} 
				recallboard={this.recallBoard.bind(this)}
				data={this.state.playerdata[index]}/>)}
			</div>
			)
	}
}

export default App;