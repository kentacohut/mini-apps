var board = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
];

var turn = 1;
var turnCount = 0;

var winCount ={
  'X': 0,
  'O': 0
}

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

  var nonHorizontal = nonHorizontalWins();

  var winner = (line)=>{
    if(JSON.stringify(line) === '[1,1,1]' || JSON.stringify(line) === '[2,2,2]') {
      document.getElementById('winner').innerHTML = 'Player ' + player() + ' Wins!';
      winCount[player()]++;
      document.getElementById('leader').innerHTML = 'X - ' + winCount['X'] + ' vs O - ' + winCount['O'];
      reset();
    }
  }
  
  for (var i = 0; i < board.length; i++) {
    winner(board[i]);
  }

  for(var i = 0; i < nonHorizontal.length; i++) {
    winner(nonHorizontal[i]);
  }
  
  if (turnCount === 9) {
    document.getElementById('winner').innerHTML = 'It\'s A Tie!';
    reset();
  }
};

var append = (event)=>{
  var coordinates = event.target.id.split('-');
  var row = coordinates[0];
  var col = coordinates[1];
  if (board[row][col]) {
    alert('Square is taken!');
    return;
  }
  if (turn) {
    board[row][col] = 1;
    document.getElementById(event.target.id).innerHTML = 'X';
    turn = !turn;
  } else if (!turn) {
    board[row][col] = 2;
    document.getElementById(event.target.id).innerHTML = 'O';
    turn = !turn;
  }
  turnCount++;
  winCheck(board);
};

var reset = ()=>{
  turn = 1;
  turnCount = 0;
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

var spaces = document.getElementsByClassName('square');
for (var i = 0; i < spaces.length; i++) {
  var space = spaces[i];
  space.addEventListener('click', append)
};
document.getElementById('reset').addEventListener('click', reset);