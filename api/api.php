<?php
header('Content-type: application/json');

if (isset($_POST["secret"]) && $_POST["secret"] === "rise2encrichform") {

    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $number = $_POST['phone'];


    $from = 'From: no-reply@rise2enrich.com' . "\r\n" .
        'Reply-To: no-reply@rise2enrich.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();


//    $from = 'Rise 2 Enrich';
//    $to = 'callawayc@lifesourcecharterschool.org';
    $to = 'jhouston@lifesourcecharterschool.org';
    $subject = 'Rise2Enrich Contact Form Submission';

    $body = "Form details below:\n
E-Mail: $email\n
Phone Number: $number\n
First Name: $firstName\n
Last Name: $lastName\n";

// Check if name has been entered
    if (!$_POST['firstName']) {
        $errName = 'Please enter your name';
        echo json_encode(["message" => $errName]);
    }

// Check if email has been entered and is valid
    if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $errEmail = 'Please enter a valid email address';
        echo json_encode(["message" => $errEmail]);
    }

    if (!$_POST['phone']) {
        $errMessage = 'Please enter your number';
        echo json_encode(["message" => $errMessage]);
    }
//Check if simple anti-bot test is correct
//    if ($human !== 5) {
//        $errHuman = 'Your anti-spam is incorrect';
//        echo json_encode(["message" => $errHuman]);
//    }

// If there are no errors, send the email
    if ( !isset($errName) && !isset($errEmail) && !isset($errMessage) ) {

        if (mail($to, $subject, $body, $from)) {
            $result = 'Thank You! we will be in touch';
        } else {
            $result = 'Sorry there was an error sending your message. Please try again later';
        }

        echo json_encode(["message" => $result]);
    }
} else {
    echo json_encode(["message" => "an error occured"]);
}