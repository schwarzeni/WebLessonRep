<?php
header("Content-type: application/json; charset=utf-8");
include "changeInput.php";
$servername = "localhost";
$username = 'root';
$password = '';
$tablename = 'baidunews';
//create connection
$link = new mysqli($servername, $username, $password, $tablename);
if ($link) {
    //插入新闻
    $newstitle = change($_POST['newstitle']);
    $newstype = change($_POST['newstype']);
    $newsimg = change($_POST['newsimg']);
    $newstime = change($_POST['newstime']);
    $newssrc = change($_POST['newssrc']);

//    $sql = "INSERT INTO 'news' ('newstitle','newstype','newsimg','newstime','newssrc') VALUES ('{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}')";
    $sql = "INSERT INTO news (newstitle,newstype,newsimg,newstime,newssrc) VALUES ('$newstitle','$newstype','$newsimg','$newstime','$newssrc')";
    $link->query('SET NAMES utf8');
    $result = $link->query($sql);
    echo json_encode(array('success' => 'ok'));
}
    $link->close();
?>