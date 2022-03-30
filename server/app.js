const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');



//Our own Google search quote array

const Google = [
    {
        id: 1,
        search: 'GeoGuesser',
        summary: 'This website is a game where you are dropped into a random place in the world and you need to use clues to identify where you are.',
        Link: 'https://www.geoguessr.com/',
    },
    {
        id: 2,
        search: 'A Soft Murmur',
        summary: 'This webiste allows you to pick a calming background.',
        Link: 'https://asoftmurmur.com/'
    },
    {
        id: 3,
        search: 'Camel Camel Camel',
        summary: 'This website has nothing to do with camels. This website that shows you the progression of an Amazon.com product.',
        Link: 'https://uk.camelcamelcamel.com/'
    },
    {
        id: 4,
        search: 'A Good Movie To Watch',
        summary: 'This website helps you to find a movie to watch.',
        Link: 'https://agoodmovietowatch.com/'
    },
    {
        id: 5,
        search: 'HackerTyper',
        summary: 'This webiste makes you feel like a hacker!',
        Link: 'https://hackertyper.net/'
    },
    {
        id: 6,
        search: 'Music Map',
        summary: 'This website finds artists that are similar to the one you search - great for finding new music!',
        Link: 'https://www.music-map.com/'
    },
    {
        id: 7,
        search: 'Drinking Game Zone',
        summary: 'This website has a comorihensive list of drinking games',
        Link: 'https://drinkinggamezone.com/'
    },
    {
        id: 8,
        search: 'Scribble Map',
        summary: 'You are able to SCRIBBLE over a map. This is perfect for planning a trip with the boys.',
        Link: 'https://www.scribblemaps.com/'
    },
    {
        id: 9,
        search: 'Paper Toilet',
        summary: 'Remember those days where you could waste toilet paper and not care? Relive those glory days with this fun interactive site.',
        Link: 'http://papertoilet.com/'
    },
    {
        id: 10,
        search: 'Staggering Beauty',
        summary: 'Make the virtual worm dance with your mouse when you click on this fun website! Warning: this site does contain flashing images that may trigger some viewers.',
        Link: 'http://www.staggeringbeauty.com/'
    },
]

JSON.stringify(Google);



function getRandomSearch() {
    const randomNum = Math.floor(Math.random() * Google.length)
    return Google[randomNum]; 
  } 

app.use(cors());



const httpStatusCodes = {
    OK: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER: 500
}


app.get('/', (req, res) => {
    res.statusCode = 200;
    res.send('Welcome to our own Google API');
})

// To do: Create a route for retrieving all quotes

app.get('/google-searches', (req, res) => {
    try{
    res.statusCode = 200;
    res.send(Google)
    } catch(error) {
        console.error(error);
    } finally {
        console.log("Could not recive request")
    }
})
// To do: Create a route for retrieving a random quote
app.get('/google-searches/:id', (req, res) => {
    try {
    res.statusCode = 200;
    const GoogleID = req.params.id - 1;
    const selectedGoogle = Google[GoogleID];
    res.send(selectedGoogle);
    } catch(error) {
        console.error(error);
    } finally {
        console.log("Could not recive request")
    }
})
// To do: Refine this route and add handling for out-of-range IDs
app.get('/google-random', (req, res) => {
    try {
    res.statusCode = 200;
    res.send(getRandomSearch());
    } catch(error) {
        console.error(error);
    } finally {
        console.log("Could not recive request")
    }
})
// To do: Get the server running

module.exports = app, httpStatusCodes;
