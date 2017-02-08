<?php
    function change($data){
        return addslashes(htmlspecialchars($data));
    }
    function rechange($data){
        return addslashes(htmlspecialchars_decode($data));
    }
?>