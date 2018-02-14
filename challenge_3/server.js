const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('./client/dist'));
app.listen(8080, ()=> console.log('Listening on port 8080'));

