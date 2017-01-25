<?php
	include 'DBHelper.php';
	include 'format.php';

	//判断当前 email 是否已存在数据表中
	$emailCheck = format("select * from tb2 where phone='{0}'", $_POST["phone"]);
	$result = query($emailCheck);

	//当前 email 不存在，执行插入操作
	if(count($result) < 1){
		$sql = format("insert into tb2(password, phone) values('{0}', '{1}')", $_POST["password"], $_POST["phone"]);
		// echo $sql;
		$excute = excute($sql);
		if($excute){
			echo "{state: true}";
		} else {
			echo "{state: false, message: '插入失败！！！'}";
		}
	} else {
		echo "{state: false, message: '号码 已被注册！！！'}";
	}
?>