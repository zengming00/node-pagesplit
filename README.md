# node-pagesplit
a page spliter, like ThinkPHP Page.class
# demo  (express)
/demo/test.js
```js
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
