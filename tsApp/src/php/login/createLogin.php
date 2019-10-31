<?php
header('Content-Type:text/html;charset=utf-8');
header('Access-Control-Allow-Origin:*');//接收任何网址请求
header('Access-Control-Allow-Methods:POST,GET,OPTIONS');//允许请求的类型
header('Access-Control-Allow-Credentials:true');//允许发送cookie
header('Access-Control-Allow-Headers: Content-Type,Content-Length,Accept-Encoding,X-Requested-with, Origin');
$UserName=$_POST['UserName'];
$PassWord=$_POST['PassWord'];
$con=mysqli_connect('localhost','login','hengxipeng123','login');
if($con){
    mysqli_query($con,'set names utf8');
	mysqli_query($con,'set character_set_client=utf8');
    mysqli_query($con,'set character_set_results=utf8');
  $sql = "SELECT $UserName FROM `TangLogin`";
  $result=$con->query($sql);	
		if($result->num_rows>0){					
            $success['infoCode']=1;
            /**注册用的账号名在数据库中能查到 */
	}else{
        $sql = "INSERT INTO `TangLogin`(`UserName`, `PassWord`) VALUES ($UserName,$PassWord)";
			$success['infoCode']=2;
    }
    }
else{
        $success['infoCode']=0;
}
echo json_encode($success);
?>