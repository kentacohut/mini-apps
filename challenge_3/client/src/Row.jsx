import React from 'react';
import ReactDOM from 'react-dom';
import Cell from './Cell.jsx';

let Row = ({handleClick, row, rowid, player})=>{
	return(
		<div className="row">
		{row.map((ele, index) => 
			<Cell 
			key={index} 
			colid={index} 
			rowid={rowid} 
			handleClick={handleClick}
			player={player}
			/>)}
		</div>
	)
}

export default Row;