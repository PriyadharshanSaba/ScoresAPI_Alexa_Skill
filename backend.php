<?php
 $dbhost = "remotemysql.com";
 $dbuser = "Vv9aDRGNlY";
 $dbpass = "EBVkDSejUg";
 $db = "Vv9aDRGNlY";
 $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
 
$q = "SELECT * FROM points";
$result = mysqli_query($conn,$q);

while ($row = $result->fetch_assoc()) {
    echo $row['name']."<br>";
}

$conn -> close();
   
?>