<?php
    error_reporting(E_ALL ^ E_NOTICE ^ E_DEPRECATED ^ E_WARNING);

    $thename='Loan Application'; 
    $page = basename($_SERVER['SCRIPT_NAME']);
    $website_auto_url =(isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
   
    /////////////////////////////////////////////////////////////////

    $website_url='http://localhost/loan-app.com';

?>

