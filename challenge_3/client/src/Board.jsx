import React from 'react';
import ReactDOM from 'react-dom';

let Board = ({handleClick}) => {
	return (
	<div>
	<table id="board">
	  <tbody>
	  <tr>
	    <th id="0" onClick={()=>{handleClick('0')}}>V</th>
	    <th id="1" onClick={()=>{handleClick('1')}}>V</th> 
	    <th id="2" onClick={()=>{handleClick('2')}}>V</th>
	    <th id="3" onClick={()=>{handleClick('3')}}>V</th>
	    <th id="4" onClick={()=>{handleClick('4')}}>V</th> 
	    <th id="5" onClick={()=>{handleClick('5')}}>V</th>
	    <th id="6" onClick={()=>{handleClick('6')}}>V</th>
	  </tr>
	  <tr>
	    <td id="0-0"></td>
	    <td id="0-1"></td> 
	    <td id="0-2"></td>
	    <td id="0-3"></td>
	    <td id="0-4"></td>
	    <td id="0-5"></td>
	    <td id="0-6"></td>
	  </tr>
	  <tr>
	    <td id="1-0"></td>
	    <td id="1-1"></td> 
	    <td id="1-2"></td>
	    <td id="1-3"></td>
	    <td id="1-4"></td>
	    <td id="1-5"></td>
	    <td id="1-6"></td>
	  </tr>
	  <tr>
	    <td id="2-0"></td>
	    <td id="2-1"></td> 
	    <td id="2-2"></td>
	    <td id="2-3"></td>
	    <td id="2-4"></td>
	    <td id="2-5"></td>
	    <td id="2-6"></td>
	  </tr>
	  <tr>
	    <td id="3-0"></td>
	    <td id="3-1"></td> 
	    <td id="3-2"></td>
	    <td id="3-3"></td>
	    <td id="3-4"></td>
	    <td id="3-5"></td>
	    <td id="3-6"></td>
	  </tr>
	  <tr>
	    <td id="4-0"></td>
	    <td id="4-1"></td> 
	    <td id="4-2"></td>
	    <td id="4-3"></td>
	    <td id="4-4"></td>
	    <td id="4-5"></td>
	    <td id="4-6"></td>
	  </tr>
	  <tr>
	    <td id="5-0"></td>
	    <td id="5-1"></td> 
	    <td id="5-2"></td>
	    <td id="5-3"></td>
	    <td id="5-4"></td>
	    <td id="5-5"></td>
	    <td id="5-6"></td>
	  </tr>
	  </tbody>
	</table>
	</div>
	)
}

export default Board;