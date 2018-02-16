const mongoose = require('mongoose');
let mongoDB = 'mongodb://127.0.0.1/bowling';
mongoose.connect(mongoDB);

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', ()=>{console.log('DB connected yo!')});

let schema = new mongoose.Schema({name: String, score: Number});
const Score = mongoose.model('Score', schema);

module.exports.Score = Score;