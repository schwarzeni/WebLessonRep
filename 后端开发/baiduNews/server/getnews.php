<?php
header("Content-type: application/json; charset=utf-8");
include "changeInput.php";

//    $arr = array(
//                    'newstype' => '百家',
//                    'newsimg' => 'img/2.jpg',
//                    'newstime' => '2016-02-28',
//                    'newssrc' => '搜狐网',
//                    'newstitle' => '测试动态获取的新闻标题'
//                );
//
//    $link = mysqli_connect('localhost','root','','baidunews');
//    if(!$link){
//        //执行成功
//
//    }else{
//    }

$servername = "localhost";
$username = 'root';
$password = '';
$tablename = 'baidunews';
//create connection
$link = new mysqli($servername, $username, $password, $tablename);
$getnewstype = (isset($_GET['newstype']) ? $_GET['newstype'] : null);
//check connection
if ($link->connect_error) {
    echo json_encode(array('success' => 'none'));
} else {
    if($getnewstype) {
        $link->query('SET NAMES "UTF8"');
        $sql = "SELECT * FROM news WHERE newstype='$getnewstype'";
        $result = $link->query($sql);
        if ($result->num_rows > 0) {
            //output data of each row
            $senddata = array();
            while ($row = $result->fetch_assoc()) {
                array_push($senddata, array(
                        'id' => $row['id'],
                        'newstype' => $row['newstype'],
                        'newstitle' => $row['newstitle'],
                        'newsimg' => $row['newsimg'],
                        'newstime' => $row['newstime'],
                        'newssrc' => $row['newssrc']
                    )
                );

            }
            echo json_encode($senddata);
        }
    }
    else{
            $link->query('SET NAMES "UTF8"');
            $sql = 'SELECT * FROM news';
            $result = $link->query($sql);
            if ($result->num_rows > 0) {
                //output data of each row
                $senddata = array();
                while ($row = $result->fetch_assoc()) {
                    array_push($senddata, array(
                            'id' => $row['id'],
                            'newstype' => $row['newstype'],
                            'newstitle' => $row['newstitle'],
                            'newsimg' => $row['newsimg'],
                            'newstime' => $row['newstime'],
                            'newssrc' => $row['newssrc']
                        )
                    );

                }
                echo json_encode($senddata);
            }
        }


}


?>