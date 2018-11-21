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

    

    public function sendBookingMailToCustomer($data){
        if(isset($data->firstname)){$firstname = $data->firstname;}else{return false;}
        if(isset($data->lastname)){$lastname = $data->lastname;}else{return false;}
        if(isset($data->email)){$email = $data->email;}else{return false;}
        if(isset($data->telephone)){$telephone = $data->telephone;}else{return false;}
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
            $mail->Port = 25;                                    // TCP port to connect to
            $mail->CharSet = "UTF-8";
            //Recipients
            $mail->setFrom('contact@livelo.at', 'Livelo');
            $mail->addAddress($email, $firstname.' '.$lastname);     // Add a recipient
            $mail->addReplyTo('contact@livelo.at', 'Livelo');

            $mail->isHTML(true);                                   // Set email format to HTML
            $mail->Subject = 'Danke für Ihre Anfrage!';
            $mail->Body    = '<center style="background-color: lightgray; padding: 50px;">'
            .'<div style="max-width: 400px; background-color: white; padding: 35px;">'
            .'<img src="https://livelo.at/res/images/logo.png" style="max-width: 300px; width: 100%;">'
            .'<br>'
            .'<h3>Danke, '.$firstname.' '.$lastname.', dass Sie Interesse an unserem Service haben!</h3>'
            .'<br>'
            .'<h3>Wir legen sehr viel Wert auf individuelle Betreuung und Beratung unserer Kunden!'
            .'<br>'
            .'Wir werden Ihre Anfrage so schnell wie möglich bearbeiten und melden uns bei Ihnen in Kürze.'
            .'</h3>'
            .'<br>'
            .'<h3 style="font-weight: normal">Sie können uns auch gerne <a href="tel:+436601567422">telefonisch</a>  (<a href="tel:+436601567422">0660 1567422</a>)kontaktieren.</h3>'
            .'<br>'
            .'<h3 style="font-weight: normal">Viele Grüße</h3>'
            .'<h3 style="font-weight: normal">Livelo Support Center</h3>'
            .'<br>'
            .'<hr style="color: orangerod; height: 3px;">'
            .'<p>Livelo</p>'
            .'<p></p>'
            .'<p>📞 <a href="tel:+436601567422">0660 1567422</a></p>'
            .'<br>'
            .'<p>📧 <a href="mailto:contact@livelo.at">contact@livelo.at</a></p>'
            .'<br>'
            .'<p>🌐 <a href="https://livelo.at">www.livelo.at</a></p>'
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

    public function sendBookingMailToAdmin($data){
        if(isset($data->firstname)){$firstname = $data->firstname;}else{return false;}
        if(isset($data->lastname)){$lastname = $data->lastname;}else{return false;}
        if(isset($data->email)){$email = $data->email;}else{return false;}
        if(isset($data->telephone)){$telephone = $data->telephone;}else{return false;}
        if(isset($data->wish)){$wish = $data->wish;}else{return false;}

        $mail = new PHPMailer(true);                              // Passing `true` enables exceptions
        try {
            //Server settings
            $mail->SMTPDebug = 0;                                 // Enable verbose debug output
            $mail->isSMTP();                                      // Set mailer to use SMTP
            $mail->Host = 'vweb17.nitrado.net';  // Specify main and backup SMTP servers
            $mail->SMTPAuth = true;                               // Enable SMTP authentication
            $mail->Username = 'contact@livelo.at';                 // SMTP username
            $mail->Password = 'password';                           // SMTP password
            $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
            $mail->Port = 25;                                    // TCP port to connect to
            $mail->CharSet = "UTF-8";
            //Recipients
            $mail->setFrom('contact@livelo.at', 'Livelo');
            $mail->addAddress('contact@livelo.at', 'Livelo');     // Add a recipient
            $mail->addReplyTo('contact@livelo.at', 'Livelo');

            $mail->isHTML(true);                                   // Set email format to HTML
            $mail->Subject = 'Anfrage ('.$firstname.' '.$lastname.')';
            $mail->Body    = '<center style="background-color: lightgray; padding: 50px;">'
            .'<div style="max-width: 400px; background-color: white; padding: 35px;">'
            .'<img src="https://livelo.at/res/images/logo.png" style="max-width: 300px; width: 100%;">'
            .'<br>'
            .'<h3>Neue Kontaktanfrage!</h3>'
            .'<br>'
            .'<h3>Vorname:</h3> <p>'.$firstname.'</p>'
            .'<br>'
            .'<h3>Nachname:</h3> <p>'.$lastname.'</p>'
            .'<br>'
            .'<h3>Email:</h3> <p>'.$email.'</p>'
            .'<br>'
            .'<h3>Telefonnummer:</h3> <p>'.$telephone.'</p>'
            .'<br>'
            .'<h3>Wunsch:</h3> <p>'.$wish.'</p>'
            .'<br>'
            .'<h3 style="font-weight: normal">Viele Grüße</h3>'
            .'<h3 style="font-weight: normal">Livelo Support Center</h3>'
            .'<br>'
            .'<hr style="color: orangerod; height: 3px;">'
            .'<p>Livelo</p>'
            .'<p></p>'
            .'<p>📞 <a href="tel:+436601567422">0660 1567422</a></p>'
            .'<br>'
            .'<p>📧 <a href="mailto:contact@livelo.at">contact@livelo.at</a></p>'
            .'<br>'
            .'<p>🌐 <a href="https://livelo.at">www.livelo.at</a></p>'
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
