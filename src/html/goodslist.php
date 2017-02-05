<?php
	include 'DBHelper.php';
    $page = (int)$_POST["page"];
     $pageNum = ($page-1)*20;
     $sql = ("SELECT * FROM  tb4 limit $pageNum,20");
     query($sql);
?>