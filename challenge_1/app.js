var board = ['00','01','02','10','11','12','20','21','22'];

var test = ()=>{
  console.log('Clicked!');
};
var x = document.createTextNode('X');
var append = (id)=>{
  var node = document.getElementById(id.target.id);
  node.appendChild(x);
};

document.getElementById('00').addEventListener('click', append);
document.getElementById('01').addEventListener('click', append);
document.getElementById('02').addEventListener('click', append);
document.getElementById('10').addEventListener('click', append);
document.getElementById('11').addEventListener('click', append);
document.getElementById('12').addEventListener('click', append);
document.getElementById('20').addEventListener('click', append);
document.getElementById('21').addEventListener('click', append);
document.getElementById('22').addEventListener('click', append);