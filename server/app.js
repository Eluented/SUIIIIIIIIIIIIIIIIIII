const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');



//Our own Google search quote array

const Google = [
  {id:1, name:''},
  {id:2, name: ''},
  {id:3, name: ''},
  {id:4, name:''},
  {id:5, name:''},
  {id:6, name:''},
  {id:7, name:''},
  {id:8, name:''},
  {id:9, name:''},
  {id:10, name:''},
  {id:11, name:''},
  {id:12, name:''},
  {id:13, name:''},
  {id:14, name:''},
  {id:15, name:''}
]


//cors - this is the structure or the API Url and what data you willl recieve

app.use(cors());


app.get('/', (req,res)=>{
  res.statusCode = 200;
  res.send('Welcome to our own Google API');
})

// To do: Create a route for retrieving all quotes
app.get('/google-searches', (req, res) =>{
  res.statusCode = 200;
  res.send(quotes)
})
// To do: Create a route for retrieving a random quote
app.get('/google-searches/:id', (req, res) =>{
  res.statusCode = 200;
  const GoogleID = req.params.id - 1;
  const selectedGoogle = Google[GoogleID];
  res.send(selectedGoogle);
})
// To do: Refine this route and add handling for out-of-range IDs

// To do: Get the server running

module.exports = app;
