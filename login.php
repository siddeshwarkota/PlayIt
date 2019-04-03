<?php
    $servername="localhost";
    $username="root";
    $password="";
    $dbname="playit";
    $cookie_name = "user";
    $email_login=filter_input(INPUT_POST , 'email');
    $pwd_login=filter_input(INPUT_POST , 'password');
    $conn=new mysqli($servername , $username , $password , $dbname);
    if ($conn->connect_error){
        die("Connection failed: " . $conn->connect_error);
    }
    $sql="SELECT Email FROM signupdata WHERE Email = '$email_login' AND Password = '$pwd_login'";
	$result = mysqli_query($conn,$sql);
	if(mysqli_num_rows($result)==1){
		 setcookie($cookie_name, $email_login, time() + (86400 * 30), "/");
        session_start();
        if( isset( $_SESSION['counter'] ) ) {
         $_SESSION['counter'] += 1;
       }else {
         $_SESSION['counter'] = 1;
        }
        if(isset($_COOKIE[$cookie_name]))
        {
        header( "refresh:5;url=cakeform.html" );
        echo "Cookie '" . $cookie_name . "' is set!<br>";
        echo "Value is: " . $_COOKIE[$cookie_name];
        echo "<br>You have visited this page ".  $_SESSION['counter'];
        echo "<br>in this session.";
        }
     }
    else{
        echo "Invalid email/password";
    }
    $conn->close();
?>
