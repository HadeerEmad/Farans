<?php

    header('content-type: application/json');
    echo json_encode(['time' => time(), 'date' => date('d.m.Y'), 'tech' => 'Vercel']);

    $name = $_POST['name'];
    $service = $_POST['service'];
    $subject = $_POST['title'];
    $message = $_POST['message'];

    $formContent = "From: $name \n\nRequsted Service: $service  \n\nProject Idea: $subject  \n\nConnect Way: $message";

    $recipient = "support@farans.io";
    $mailHeader = "From: $name \r\n";
    mail($recipient, $subject, $formContent, $mailHeader) or die("Error!");
    header('Location: index.html');

?>