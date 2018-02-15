import React from 'react';
import ReactDOM from 'react-dom';
import Row from './Row.jsx'

let Board = ({handleClick, board, player}) => {
	return (
	<div>
	{board.map((ele, index) => 
		<Row 
		class="row" 
		row={board[index]} 
		rowid={index} 
		key={index}
		handleClick={handleClick}
		player={player}
		/>)}
	</div>
	)
}

export default Board;