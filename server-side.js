// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');


// Start up an instance of app
const app = express();

/* Middleware*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('client-side'));

// Setup Server
const port = 8000;
const server = app.listen(port, listening);
function listening(){
    console.log ('server')
    console.log(`running on localhost: ${port}`);
};

// GET route
app.get('/all', sendData);
function sendData (req, res) {
  res.send(projectData);
};

// POST route
app.post('/add', callBack);
function callBack(req, res){
  res.send('POST received');
};

// POST newData
const data = [];
app.post('/client-side', addnewData);

function addnewData (req, res){
    data.push(req.body);
}

