//Environment Variables
const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
var request = require("request");

var options = 
{ method: 'POST',
  url: 'https://api.meaningcloud.com/sentiment-2.1',
  headers: 
    { 
     'content-type': 'multipart/form-data' 
    },
  formData: 
   { key: process.env.key,
     url: 'https://remote.works-hub.com/jobs/',
     of: 'json',
     lang: 'en' 
    } 
};


const app = express()

app.use(express.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


app.post('/read', function(req,res){
    console.log(req.body);
    options.formData.url = req.body.url
    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        res.send(body);
      });
      


})