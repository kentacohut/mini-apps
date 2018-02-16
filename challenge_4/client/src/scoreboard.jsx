import React from 'react';
import ReactDOM from 'react-dom';
import Frame from './frame.jsx';


let ScoreBoard = ({scoreboard, total, recallBoard})=> {
		return(
			<div id="scoreboard">
			{scoreboard.map((frame,index)=><Frame 
				key={index}
				round={index+1}
				score={scoreboard[index]}
				re
				/>)}
			<div id="total">
			<h1>Total</h1>
			{total}
			</div>
			</div>
			)
}

export default ScoreBoard;