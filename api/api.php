<?php
header('Content-type: application/json');

if (isset($_POST["secret"]) && $_POST["secret"] === "rise2encrichform") {

    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $number = $_POST['phone'];
    $besttimetoreach = $_POST['besttimetoreach'];


    $from = 'From: no-reply@rise2enrich.com' . "\r\n" .
        'Reply-To: no-reply@rise2enrich.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();


    $headers = "From: no-reply@rise2enrich.com \r\n";
    $headers .= "Reply-To: no-reply@rise2enrich.com \r\n";
//    $headers .= "CC: susan@example.com\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";



//    $from = 'Rise 2 Enrich';
//    $to = 'callawayc@lifesourcecharterschool.org';
    //$to = 'jhouston@lifesourcecharterschool.org';
    $to = 'smoothlikejazz@gmail.com';
    $subject = 'Rise2Enrich Contact Form Submission';

    $body = "Form details below:\n
            E-Mail: $email\n
            Phone Number: $number\n
            First Name: $firstName\n
            Last Name: $lastName\n
            Best Time To Reach: $besttimetoreach\n";

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

        $message = '<html><body>';
        $message .= '<img src="http://rise2enrich.org/dist/5dfe9f9e4a7036eb026641124fb75438.png" alt="Website Change Request" />';
        $message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
        $message .= "<tr style='background: #eee;'><td><strong>First Name:</strong> </td><td>" . strip_tags($firstName) . "</td></tr>";
        $message .= "<tr style='background: #eee;'><td><strong>Last Name:</strong> </td><td>" . strip_tags($lastName) . "</td></tr>";
        $message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($email) . "</td></tr>";
        $message .= "<tr><td><strong>Phone:</strong> </td><td>" . strip_tags($number) . "</td></tr>";
        $message .= "<tr><td><strong>Best Time To Reach:</strong> </td><td>" . strip_tags($besttimetoreach) . "</td></tr>";
        $message .= "</table>";
        $message .= "</body></html>";


        if (mail($to, $subject, $message, $headers)) {
            $result = 'Thank You! we will be in touch';
        } else {
            $result = 'Sorry there was an error sending your message. Please try again later';
        }

        echo json_encode(["message" => $result]);
    }
} else {
    echo json_encode(["message" => "an error occured"]);
}