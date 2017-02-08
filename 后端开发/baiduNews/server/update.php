<?php

include "changeInput.php";
header("Content-type: application/json; charset=utf-8");
$servername = "localhost";
$username = 'root';
$password = '';
$tablename = 'baidunews';
//create connection
$link = new mysqli($servername, $username, $password, $tablename);
if ($link) {
    //插入新闻
    $newstitle = change($_POST['unewstitle']);
    $newstype = change($_POST['unewstype']);
    $newsimg = change($_POST['unewsimg']);
    $newstime = change($_POST['unewstime']);
    $newssrc = change($_POST['unewssrc']);
    $newsid = change($_POST['uid']);

    $sql = " UPDATE news SET id='$newsid', newstype='$newstype', newstitle='$newstitle', newsimg='$newsimg', newstime='$newstime', newssrc='$newssrc'  WHERE id=$newsid";
    $link->query('SET NAMES utf8');
    $result = $link->query($sql);
    echo json_encode(array('success' => 'ok'));
}
$link->close();
?>