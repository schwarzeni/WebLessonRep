<?php
header("Content-type: application/json; charset=utf-8");
$servername = "localhost";
$username = 'root';
$password = '';
$tablename = 'baidunews';
//create connection
$link = new mysqli($servername, $username, $password, $tablename);
if($link->connect_error){
    echo json_encode(array('删除状态' => '失败'));
}

else{
    $link->query('SET NAMES utf8');
    $newsid = $_POST['newsid'];
    $num  =1;
    $sql = "DELETE FROM news WHERE id=$newsid";
    $link->query($sql);
    echo json_encode(array('删除状态' => '成功'));
}

$link->close();
?>