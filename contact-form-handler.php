<?php

    if (isset($_POST['submit'])){
    $name = $_POST ['name']
    $mailFrom = $_POST['email']
    $message = $_POST['message']

    $mailTo = "safwanmiles@gmail.com";
    $headers = "From: ".$mailFrom
    $txt = "You have recieved an e-mail from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("location: index.html?mailsend");

    }
