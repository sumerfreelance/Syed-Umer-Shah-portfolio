<?php

$username = "SQL_2504P07WML4XGO9FW59LDKX6VW";
$password = "8VS908S6FIK61WO0R3GsH9YF7$SRS9";
$connectionString = "//db.freesql.com:2484/23ai_mb9q7";

$conn = oci_connect($username, $password, $connectionString);

if (!$conn) {
    $e = oci_error();
    die("Connection Failed: " . $e['message']);
}
?>