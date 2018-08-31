var express = require('express');
var fs = require('fs');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/main.html');
});

app.get('/query', function(req, res){
  const { exec } = require('child_process');
  exec('./node_modules/.bin/slimerjs --headless index.js ' + req.query.url, (err, stdout, stderr) => {
    if (err) {
      res.send("Something wrong happened");
      return;
    }
    var sabri = fs.readFileSync("count.txt");
    res.send(sabri);
  });
});

console.log("listening to 3000");
app.listen(3000);
