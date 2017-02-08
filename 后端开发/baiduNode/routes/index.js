var express = require('express');
var router = express.Router();
var mysql = require('mysql');
/* 在主页获取新闻时的请求 */
router.get('/', function(req, res, next) {
  var newstype = req.query.newstype;
  // var connection = mysql.createConnection({
  //     host:'localhost',
  //     user:'root',
  //     password:'',
  //     database:'baidunews'
  // });
  var connection = require("./db.js").mysqlConnection;
  // connection.connect();
  //第一个参数：sql, 第二个参数：查询内容, 第三个参数：回调函数
    var sql = 'SELECT * FROM `news` WHERE `newstype` = ? LIMIT 0,10';
     connection.query(sql,[newstype],function(err,rows,fie){
      res.json(rows);
  });
});

module.exports = router;
