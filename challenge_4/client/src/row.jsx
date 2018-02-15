import React from 'react';
import ReactDOM from 'react-dom';
import Pin from './pin.jsx';

const Row = ({pins, rowId})=>{
  return(
  	<div className="row">
  	{pins.map((pin, index)=><Pin rowId={rowId} pinId={index} key={index}/>)}
  	</div>
  	)
}

export default Row;