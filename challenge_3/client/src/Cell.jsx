import React from 'react';
import ReactDOM from 'react-dom';

let Cell = ({handleClick, colid, rowid}) => {
	return(
		<div>
		<div className="cell" id={rowid + '-' + colid} onClick={()=>{handleClick(colid)}}>
		</div>
		</div>
		)
}

export default Cell;