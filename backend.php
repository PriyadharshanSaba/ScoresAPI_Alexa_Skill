<?php
 //$dbhost = "remotemysql.com";
 $dbuser = "";
 $dbpass = "";
 //$db = "Vv9aDRGNlY";


$conn = new PDO(
    'mysql:host=host;dbname=dbname',
    $dbuser, 
    $dbpass, 
    array(
        PDO::ATTR_PERSISTENT => true,
        PDO::ATTR_TIMEOUT => 1000, // in seconds
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        ));

$stmt = $conn->prepare("INSERT INTO <table> (id, name, pts) VALUES (?, ?, ?)");
$flag = 0;

if($_POST['regis'])
{
    $flag = 1;
    $names = json_decode($_POST['regis']);
    for($id=0;$id<count($names);$id++) {
        $data = array($id,$names[$id]->pname,$names[$id]->pts);
        //echo $id,"\t",$pnm,"\t",$pts,"<br><br>";
        $stmt->execute($data);
}
}

if($_POST['pointUpdate'] || $flag=0)
{   
    $flag = 0;
    $sql = 'SELECT id, name, pts FROM points';
        foreach ($conn->query($sql) as $row){
            print $row['name'].'\n';
        }
    $points = json_decode($_POST['pointUpdate']);
}



//$conn -> close();


   
?>
