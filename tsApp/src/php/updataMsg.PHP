<?php
 header('Content-Type: text/html;charset=utf-8');
 header('Access-Control-Allow-Origin:*'); // *代表允许任何网址请求
 header('Access-Control-Allow-Methods:POST,GET,OPTIONS,DELETE'); // 允许请求的类型
 header('Access-Control-Allow-Credentials: true'); // 设置是否允许发送 cookies
 header('Access-Control-Allow-Headers: Content-Type,Content-Length,Accept-Encoding,X-Requested-with, Origin');
    $like=$_POST['like'];
    $MsgID=$_POST['MsgID'];
    /**通过前台传来的留言ID搜寻数据库中对于留言，更改点赞量*/
    $con=mysqli_connect('localhost','login','hengxipeng123','login');
    if($con){
        mysqli_query($con,'set names utf8');
        mysqli_query($con,'set character_set_client=utf8');
        mysqli_query($con,'set character_set_results=utf8');
        $sql="UPDATE `TangMsg` SET `Like`=$like WHERE MsgID=$MsgID";
      	$result=$con->query($sql);
       $success=array('msg'=>$sql);
    }       
	//如果找不到数据库连接信息，则返回状态玛1;
	else{
		$success['infoCode']=1;
		//1数据库连接失败;
	}
	echo json_encode($success);
?>