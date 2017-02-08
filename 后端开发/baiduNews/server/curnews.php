<?php
header("Content-type: application/json; charset=utf-8");
include "changeInput.php";
$servername = "localhost";
$username = 'root';
$password = '';
$tablename = 'baidunews';
//create connection
$link = new mysqli($servername, $username, $password, $tablename);

if(!$link->connect_error){
    $newsid = $_GET['newsid'];
    $link->query("SET NAMES utf8");
    $sql = "SELECT * FROM news WHERE  id=$newsid";

    $result = $link->query($sql);

    $senddata = array();
    while ($row = $result->fetch_assoc()) {
        array_push($senddata, array(
                'id' => rechange($row['id']),
                'newstype' => rechange($row['newstype']),
                'newstitle' => rechange($row['newstitle']),
                'newsimg' => rechange($row['newsimg']),
                'newstime' => rechange($row['newstime']),
                'newssrc' => rechange($row['newssrc'])
            )
        );

    }
    echo json_encode($senddata);
    $link->close();
}
?>