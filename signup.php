<!DOCTYPE html>
<html>
<head>
	<title>SignUp</title>
</head>
<body>
<?php
$connection = mysqli_connect("localhost","root","","playit");
$name = $_POST['name'];
$email= $_POST['email'];
$phone = $_POST['phone'];
$password=$_POST['password'];
//mysqli_query($connection,"TRUNCATE table signupdata");
$signupdataquery= "insert into signupdata(Name,Email,Phone,Password) values ('$name','$email','$phone','$password')";
$signupdatasubmit = mysqli_query($connection,$signupdataquery);
echo "User Account Created";
header("refresh:2;url=login.html");
?>
</body>
</html>
