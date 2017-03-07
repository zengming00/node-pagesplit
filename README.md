# node-pagesplit
a page spliter, like ThinkPHP Page.class
# demo  (express)
/demo/test.js
```javascript
router.get('/page', function (req, res) {
    var totalRows = 51; //模拟从数据库中查询得到的总记录数
    var listRows = 10; //每页显示的数量
    var pg = new Page(req, totalRows, listRows);
    //得到相应的查询参数，实现分页功能
    var sql = "select * from db limit " + pg.firstRow + "," + pg.listRows + ";";
    var data = sql + "<br/>" + pg.show();//前端分页代码
    res.send(data);
});
```
# demo (http)
```javascript
var http = require('http');
var url = require('url');
var querystring = require('querystring');

var Page = require('pagesplit');

http.createServer(function (req,res) {
    if(req.url == '/favicon.ico'){
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');

    //添加两个express才有的属性
    let u = url.parse(req.url);
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
```
# 转为bootstrap风格
```html
   <div class="" id="page" style="display: none">
        <!-- 分页代码 -->
        <%- page %>
   </div>
   <script>
      //将后台产生的分页代码转成bootstrap风格显示
      var page = $('.page');
      page.addClass('btn-group pull-right');
      page.children('a').addClass('btn btn-default btn-sm');
      page.find('.current').addClass('btn btn-primary btn-sm');
      $('#page').show(); // 等添加完属性转为bootstrap风格后再显示
   </script>
```
