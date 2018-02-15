import React from 'react';
import ReactDOM from 'react-dom';

let Pin = ({pinNum, handleBowl})=>{
		return(
			<div className="pin" onClick={()=>handleBowl(pinNum)}>
				{pinNum}
			</div>
			)
}

export default Pin;