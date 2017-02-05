<?php
	include 'DBHelper.php';
     $page = (int)$_POST["page"];
     $pageSize = 20;
     $rowCount = 0;
     $pageNum = ($page-1)* $pageSize;
     $pageCount = 0;
     $sql1 = "select count(id) from tb4";
	 $res1 = mysql_query($sql1);
	   
	 if($row1=mysql_fetch_row($res1)){
	   $rowCount = $row1[0];
	 }
	   
	 //计算共有多少页，ceil取进1
	 $pageCount = ceil(($rowCount/$pageSize));

     $sql = ("SELECT * FROM  tb4 limit $pageNum, $pageSize");
     query($sql);
?>