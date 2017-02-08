<?php
header("Content-type: application/json; charset=utf-8");
$servername = "localhost";
$username = 'root';
$password = '';
$tablename = 'baidunews';
//create connection
$link = new mysqli($servername, $username, $password, $tablename);
?>