var express = require('express');
var app = express();

var motd = "no message specified, post one.";

app.get('/', function(req,res){
    res.send(motd);
});

app.post('/', function(req,res){
    var query = require('url').parse(req.url,true).query;
    motd = query.msg;
    console.log('motd set to: ' + motd);
    res.send(motd);
});

app.listen(80, function(){
    console.log('motd service started');
});