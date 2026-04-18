<?
    $connect=mysqli_connect( "localhost", "willy", "1234", "willy_db") or  
        die( "SQL server에 연결할 수 없습니다.");

        mysqli_select_db($connect , "willy_db");
?>