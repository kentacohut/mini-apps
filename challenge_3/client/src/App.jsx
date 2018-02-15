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
    	player: true,
      winner: null,
      count: 0
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
        console.log(space)
  			board[i][column] = player();
  			if(player() === 1){
        	$(space).addClass('red');
  			}else{
  			  $(space).addClass('black');
  			}
  			
  			this.setState({board: board});
        if(this.checkWin(board)){
          this.setState({winner: player()});
          console.log(this.state.winner)
        }
        this.setState({count: this.state.count +  1});
  			this.setState({player : !this.state.player});
        return
  		}
  	}
  }

  checkWin(board) {
    console.log(board)
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        if (col <= 3 && board[row][col] && 
          board[row][col] === board[row][col+1] &&
          board[row][col] === board[row][col+2] &&
          board[row][col] === board[row][col+3]) {
          return true;
        }
        if (row <= 2 && board[row][col] && 
          board[row][col] === board[row+1][col] &&
          board[row][col] === board[row+2][col] &&
          board[row][col] === board[row+3][col]) {
          return true;
        }
        if (row <= 3 && col <= 3 && board[row][col] && 
          board[row][col] === board[row+1][col+1] &&
          board[row][col] === board[row+2][col+2] &&
          board[row][col] === board[row+3][col+3]) {
          return true;
        }
        if (row >= 3 && col <= 3 && board[row][col] && 
          board[row][col] === board[row-1][col+1] &&
          board[row][col] === board[row-2][col+2] &&
          board[row][col] === board[row-3][col+3]) {
          return true;
        }
      }
    }
  }

  render() {
		return (
		<div id="board">
          <Board handleClick={this.handleClick.bind(this)} board={this.state.board} player={this.state.player}/>
          { this.state.winner ? <Results /> : null }
		</div>
		)
	}
}
export default App;