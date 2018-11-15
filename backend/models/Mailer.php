<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'res/phpmailer/Exception.php';
require 'res/phpmailer/PHPMailer.php';
require 'res/phpmailer/SMTP.php';


class Mailer{

    public function __construct() {
        #$this->database = new Database(DBHost, DBName, DBUser, DBPass);
    }

    public function sendMail($data){
        if(isset($data->firstname)){$firstname = $data->firstname;}else{return false;}
        if(isset($data->lastname)){$lastname = $data->lastname;}else{return false;}
        if(isset($data->email)){$email = $data->email;}else{return false;}
        if(isset($data->custom_field1)){$custom_field1 = $data->custom_field1;}else{return false;}
        if(isset($data->custom_field2)){$custom_field2 = $data->custom_field2;}else{return false;}
        if(isset($data->wish)){$wish = $data->wish;}else{return false;}

        $mail = new PHPMailer(true);                              // Passing `true` enables exceptions
        try {
            //Server settings
            $mail->SMTPDebug = 0;                                 // Enable verbose debug output
            $mail->isSMTP();                                      // Set mailer to use SMTP
            $mail->Host = 'vweb17.nitrado.net';  // Specify main and backup SMTP servers
            $mail->SMTPAuth = true;                               // Enable SMTP authentication
            $mail->Username = 'contact@livelo.at';                 // SMTP username
            $mail->Password = 'dfdb4432';                           // SMTP password
            $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
            $mail->Port = 587;                                    // TCP port to connect to
            $mail->CharSet = "UTF-8";
            //Recipients
            $mail->setFrom('contact@livelo.at', 'Livelo');
            $mail->addAddress($email, $firstname.' '.$lastname);     // Add a recipient
            $mail->addReplyTo('contact@livelo.at', 'Livelo');

            $mail->isHTML(true);                                   // Set email format to HTML
            $mail->Subject = 'Danke für Ihre Anfrage!';
            $mail->Body    = '<center style="background-color: lightgray; padding: 50px;">'
            .'<div style="max-width: 400px; background-color: white; padding: 35px;">'
            .'<img src="https://shopwg.at/images/logo.png" style="max-width: 300px; width: 100%;">'
            .'<br>'
            .'<h3>Danke, '.$firstname.' '.$lastname.', dass du an uns interessiert bist!</h3>'
            .'<br>'
            .'<br>'
            .'<a href="https://shopwg.at/activate.php?hash='.$hash.'&email='.$email.'">'
            .'https://shopwg.at/activate.php?hash='.$hash.'&email='.$email.''
            .'</a>'
            .'<h3 style="font-weight: normal">Bei Fragen oder Unklarheiten kannst du uns gerne per Mail (<a href="mailto:'.$this->owner_email.'">'.$this->owner_email.'</a>) kontaktieren.</h3>'
            .'<br>'
            .'<h3 style="font-weight: normal">Mit freundlichen Grüßen</h3>'
            .'<h3 style="font-weight: normal">Administration - ShopWG</h3>'
            .'<br>'
            .'<hr>'
            .'<p>'.$this->owner_company.'</p>'
            .'<p>'.$this->owner_street.'</p>'
            .'<p>A-'.$this->owner_zip.' '.$this->owner_city.'</p>'
            .'<a href="'.$this->owner_website.'"><p>'.$this->owner_website.'</p></a>'
            .'</div>'
            .'</center>'
            ;
            #$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

            if($mail->send()){
                return true;
            }
            return false;

        } catch (Exception $e) {
            #echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
            return false;
        }
        return false;
    }
}
