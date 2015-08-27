var express = require('express');
var format = require('date-format');
var app = express();

var motd = "no message specified, post one.";
var lastUpdated = format.asString('hh:mm:ss.SSS', new Date());

app.get('/', function(req,res){
    res.send( lastUpdated + ': ' + motd);
});

app.post('/', function(req,res){
    var query = require('url').parse(req.url,true).query;
    motd = query.msg;
    console.log('motd set to: ' + motd);
    lastUpdated = format.asString('hh:mm:ss.SSS', new Date());
    res.send(motd);
});

app.listen(80, function(){
    console.log('motd service started');
});