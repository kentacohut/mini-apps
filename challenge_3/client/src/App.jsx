import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    	board: [
    	[0,0,0,0,0,0,0],
    	[0,0,0,0,0,0,0],
    	[0,0,0,0,0,0,0],
    	[0,0,0,0,0,0,0],
    	[0,0,0,0,0,0,0],
    	[0,0,0,0,0,0,0]
    	],
    	player: true
    }
  }

  handleClick(column){
  	let board = this.state.board;
  	let player = ()=>{
  		if(this.state.player){
  			return 1
  		} return 2
  	}
  	for(let i = 5; i >= 0; i--) {
  		if(!board[i][column]) {
  			let space = ['#',i,'-',column].join('');
  			board[i][column] = player();
  			if(player() === 1){
        		$(space).addClass('red');
  			}else{
  			   $(space).addClass('black');
  			}
  			this.setState({player : !this.state.player});
  			this.setState({board: board});
  			return
  		}
  	}
  }

  checkWin(){

  }

  render() {
		return (
		<div>
          <Board handleClick={this.handleClick.bind(this)}/>
		</div>
		)
	}
}
export default App;