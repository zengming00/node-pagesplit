var http = require('http');
var url = require('url');
var querystring = require('querystring');

var Page = require('../Page.class');

http.createServer(function (req,res) {
    if(req.url == '/favicon.ico'){
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');

    let u = url.parse(req.url);
    //添加两个express才有的属性
    req.originalUrl = u.pathname;
    req.query = querystring.parse(u.query);


    var totalRows = 51; //模拟从数据库中查询得到的总记录数
    var listRows = 10; //每页显示的数量
    var pg = new Page(req, totalRows, listRows);
    //得到相应的查询参数，实现分页功能
    var sql = "select * from db limit " + pg.firstRow + "," + pg.listRows + ";";
    var data = sql + "<br/>" + pg.show();//前端分页代码
    res.end(data);

}).listen(3000);
console.log('localhost:3000');

