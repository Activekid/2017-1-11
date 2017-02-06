<?php
	include 'DBHelper1.php';
    $page = $_POST["page"];
     $pageNum = ($page-1)*20;
     $sql = ("SELECT * FROM  tb4 limit $pageNum,20");
     query($sql);
?>