<?php

    // header('content-type: application/json');
    // echo json_encode(['time' => time(), 'date' => date('d.m.Y'), 'tech' => 'Vercel']);

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['title'];
    $message = $_POST['message'];

    $formContent = "From: $name \n\nService: $email  \n\nContact: $message";

    $recipient = "hadeer.cis@gmail.com";
    $mailHeader = "From: $email \r\n";
    mail($recipient, $subject, $formContent, $mailHeader) or die("Error!");
    header('Location: index.html');

?>