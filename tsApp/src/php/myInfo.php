<?php
header('Content-Type:text/html;charset=utf-8');
header('Access-Control-Allow-Origin:*');//接收任何网址请求
header('Access-Control-Allow-Methods:POST,GET,OPTIONS');//允许请求的类型
header('Access-Control-Allow-Credentials:true');//允许发送cookie
header('Access-Control-Allow-Headers: Content-Type,Content-Length,Accept-Encoding,X-Requested-with, Origin');
$success=array('msg'=>'ok');
$con=mysqli_connect('localhost','login','hengxipeng123','login');
if($con){
    mysqli_query($con,'set names utf8');
	mysqli_query($con,'set character_set_client=utf8');
    mysqli_query($con,'set character_set_results=utf8');
  $sql = "SELECT * FROM `TangMsg`";
  $result=$con->query($sql);	
		if($result->num_rows>0){			
			$info=[];
		 /*$result->fetch_assoc()每次只取出一条数据*/
			for($i=0;$row=$result->fetch_assoc();$i++){
				$info[$i]=$row;
			}
			$success['message']=$info;
	}
    }
else{
        $success['infoCode']=1;
}
echo json_encode($success);
?>