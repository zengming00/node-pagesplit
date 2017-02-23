var http = require('http');
var Page = require('../Page.class');

http.createServer(function (req,res) {
    if(req.url == '/favicon.ico'){
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');

    console.log(req.originalUrl);
    console.log(req);
return;
    var totalRows = 51; //总行数
    var listRows = 10; //每页显示条数
    var pg = new Page(req, totalRows, listRows);


    var data = "select * from db limit " + pg.firstRow + "," + pg.listRows + ";"
        + "<br/>"
        + pg.show();

    res.end(data);

}).listen(3000);
console.log('localhost:3000');

