import React from 'react';
import ReactDOM from 'react-dom';
import Pin from './pin.jsx';

const pinNumbers = 1;

const Row = ({pins, rowId, handleBowl})=>{
  return(
  	<div className="row">
  	{pins.map((pin, index)=><Pin 
  		rowId={rowId} 
  		pinId={index} 
  		pinNum={pins[index]}
  		handleBowl={handleBowl}
  		key={index}/>)}
  	</div>
  	)
}

export default Row;