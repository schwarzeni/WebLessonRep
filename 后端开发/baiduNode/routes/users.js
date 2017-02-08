var express = require('express');
var router = express.Router();
var mysql = require('mysql');
//链接池
// var connection = mysql.createPool({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'baidunews'
// });

var connection = require("./db.js").mysqlConnection;
//后台路由页面
router.get('/getnews', function(req, res, next) {
    connection.query('SELECT * FROM `news`', function(err,rows){
        res.json(rows);
    });
});

//确认更新
router.post('/update', function(req,res){
  var newsid = req.body.uid,
      newstype = req.body.unewstype,
      newstitle = req.body.unewstitle,
      newsimg = req.body.unewsimg,
      newstime = req.body.unewstime,
      newssrc = req.body.unewssrc;
  console.log(newsid);
var sql = "UPDATE news SET id=?, newstype=?, newstitle=?, newsimg=?, newstime=?, newssrc=? WHERE id=?";
var sql2 = "UPDATE `news` SET `newstype` = ?, `newstitle`=?, `newsimg`=?, `newstime`=?, `newssrc`=? WHERE `id`=?";

    connection.query(sql2,[newstype,newstitle,newsimg,newstime,newssrc,newsid],function(err, rows){
        res.json("array('success' => 'ok')");
  });
});

//模态框取值
router.get('/curnews',function(req,res){
    var newsid = req.query.newsid;
    connection.query('SELECT * FROM `news` WHERE id=?',[newsid],function(err,rows){
        res.json(rows);
    })
});
//删除
router.post('/delete',function(req,res){
    var newsid = req.body.newsid;
    connection.query('DELETE FROM `news` WHERE `news`.`id` = ?',[newsid],function(err,result){
        res.json("array('success' => 'ok')");
    });
});
//插入
router.post('/insert',function(req,res){
    var newstype = req.body.newstype,
        newstitle = req.body.newstitle,
        newsimg = req.body.newsimg,
        newstime = req.body.newstime,
        newssrc = req.body.newssrc;
    connection.query('INSERT INTO `news` (`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) VALUES (?,?,?,?,?)', [newstitle,newstype,newsimg,newstime,newssrc],function(err,result){
        if(!err){
            res.json("array('success' => 'ok')");
        }
    })

});

module.exports = router;
