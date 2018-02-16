import React from 'react';
import ReactDOM from 'react-dom';

let LeaderBoard = ({data, recallboard})=>{
	return (
		<div onClick={()=>recallboard(data)}>
		Player: {data.name} Score: {data.score}
		</div>
		)
}

export default LeaderBoard;