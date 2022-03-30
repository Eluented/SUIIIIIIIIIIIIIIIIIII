const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');



//Our own Google search quote array

const Google = [
  {
    id:1,
    search:'',
    summary: '',
    Link: ''
},
{
    id:2,
    search:'',
    summary: '',
    Link: ''
},
{
    id:3,
    search:'',
    summary: '',
    Link: ''
},
{
    id:4,
    search:'',
    summary: '',
    Link: ''
},
{
    id:5,
    search:'',
    summary: '',
    Link: ''
},
{
    id:6,
    search:'',
    summary: '',
    Link: ''
},
{
    id:7,
    search:'',
    summary: '',
    Link: ''
},
{
    id:8,
    search:'',
    summary: '',
    Link: ''
},
{
    id:9,
    search:'',
    summary: '',
    Link: ''
},
{
    id:10,
    search:'',
    summary: '',
    Link: ''
},
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
