var board = [
[0,0,0],
[0,0,0],
[0,0,0]
];

var turn = 1;

var nonHorizontalWins = () => {
  return [
    [board[0][0] , board[1][0] , board[2][0]],
    [board[0][1] , board[1][1] , board[2][1]],
    [board[0][2] , board[1][2] , board[2][2]],
    [board[0][0] , board[1][1] , board[2][2]],
    [board[0][2] , board[1][1] , board[2][0]]
  ]
};

var player = () => {
  if (!turn) {
  return 'X';
  } return 'O';
};

var winCheck = (board)=>{

  console.log(JSON.stringify(board))
  
  for (var i = 0; i < board.length; i++) {
    if(JSON.stringify(board[i]) === '[1,1,1]' || JSON.stringify(board[i]) === '[2,2,2]') {
      document.getElementById('winner').innerHTML = 'Player ' + player() + ' Wins!';
      reset();
    }
  }

  var nonHorizontal = nonHorizontalWins();

  for(var i = 0; i < nonHorizontal.length; i++) {
    if(JSON.stringify(nonHorizontal[i]) === '[1,1,1]' || JSON.stringify(board[i]) === '[2,2,2]') {
      document.getElementById('winner').innerHTML = 'Player ' + player() + ' Wins!';
      reset();
    }
  }
  
};

var append = (id)=>{
  var coordinates = id.target.id.split('-');
  var row = coordinates[0];
  var col = coordinates[1];
  if (board[row][col]) {
    alert('Square is taken!');
    return;
  }
  if (turn) {
    board[row][col] = 1;
    document.getElementById(id.target.id).innerHTML = 'X';
    turn = !turn;
  } else if (!turn) {
    board[row][col] = 2;
    document.getElementById(id.target.id).innerHTML = 'O';
    turn = !turn;
  }
  winCheck(board);
};

var reset = ()=>{
  turn = 1;
  board = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
    ];
  var squares = document.getElementsByClassName('square');
  for (var i = 0; i < squares.length; i++) {
    var square = squares[i];
    square.innerHTML = '';
  }
};

document.getElementById('0-0').addEventListener('click', append);
document.getElementById('0-1').addEventListener('click', append);
document.getElementById('0-2').addEventListener('click', append);
document.getElementById('1-0').addEventListener('click', append);
document.getElementById('1-1').addEventListener('click', append);
document.getElementById('1-2').addEventListener('click', append);
document.getElementById('2-0').addEventListener('click', append);
document.getElementById('2-1').addEventListener('click', append);
document.getElementById('2-2').addEventListener('click', append);
document.getElementById('reset').addEventListener('click', reset);