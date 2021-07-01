<?php
    
    $to = "sahityapandey.sp123@gmail.com";
    $name = $_POST["username"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $msg = $_POST["message"];
    $headers = "From: ".$name." <".$email.">".PHP_EOL.
               "Reply-to: ".$email;
               
    mail($to, $subject, $msg, $headers);
    
    $replyheaders = "From: Support.HindustanDevelopers <".$to.">";
    $replymsg = nl2br("Thanks for visiting us. We have recieved your message you sent through our website. This is a system generated mail, we will be contacting you back shortly. Thank you, have a great day.");
                
    mail($email, "Message Recieved", $replymsg, $replyheaders);

?>

<!DOCTYPE html>
<html>
    <head>
        <title>Message Sent!</title>

        <script src="../js/fontawesome/fontawesome.js"></script>
    </head>
    <style>
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        body{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            height: 100vh;
            text-align: center;
        }
    </style>
    <body>
        <h1><i class="far fa-check-circle" style="color: #00ff80; font-size: 80px;"></i></h1>
        <h1>We have recieved your message request.<br>We will contact you shortly.</h1>
        <h3><a href="../index.html">Click here</a> to go back.</h3>
    </body>
</html>