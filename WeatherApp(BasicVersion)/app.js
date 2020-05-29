var http = require('http');
var name = process.argv[2];
var url = "http://api.apixu.com/v1/current.json?key=a7eca97bcf724adda23223949193008&q="+name;
var server = http.createServer(function(req,res){
    //Logical Code
    var request = require('request');
    request(url,function(err,response,body){
        var data = JSON.parse(body);
        res.write('<h1>' + 'City-Name : '+ data.location['name']+'<br>'+'</h1>');
        res.write('<h2>' + 'Temperature :'+ data.current['temp_c']+'<br>'+'</h2>');
        res.end();
    });
}).listen(3000);