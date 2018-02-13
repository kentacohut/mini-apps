const express = require('express');
const app = express();
const $ = require('jQuery');
const bodyParser = require('body-parser');
const csvify = require('./csvify');

app.use(express.static('client'));
app.post('/', bodyParser.json())

app.post('/', (req, res) => { 
  let data = csvify.csvify(req.body);
  res.send(JSON.stringify(data));
})

app.listen(3000, () => console.log('Listening on port 3000!'));

