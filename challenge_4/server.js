const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./database.js');


app.post('/', bodyParser.json());

app.post('/', (req, res)=>{
  let result = new db.Score(req.body);
  result.save().then(()=>{console.log('Saved!')})
})

app.get('/score', (req, res)=>{
  db.Score.find({}, (err, data)=>{
    if(err){
      res.send(503, err);
    } else {
      console.log(data)
      res.send(data)
    }
  })
})

app.use(express.static('./client/dist'));
app.listen(3000, ()=>console.log('App listening on port 3000'));

