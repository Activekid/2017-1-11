<?php
	include "DBHelper.php";
	include "format.php";

	//判断当前 email 是否已存在数据表中
	$sql = format("select * from tb1 where phone='{0}' and password='{1}'", $_POST["phone"], $_POST["password"]);
	$result = query($sql);
	//当前 email 不存在，执行插入操作
	if(count($result) < 1){
		echo "{state: false, message: '登录失败！！！'}";
	} else {
		echo "{state: true, message: '登录成功！！！'}";
		/*session_start();
		$_SESSION["login_phone"] = $result[0]->phone;	*/	
	}
?>