<?php

class User{

    private $resultArray;
    #private $database;

    public function __construct() {
        $this->resultArray = array();
        #$this->database = new Database(DBHost, DBName, DBUser, DBPass);
    }

    public function random_string($len=8) {
        $hex = md5("yourSaltHere" . uniqid("", true));
        $pack = pack('H*', $hex);
        $tmp =  base64_encode($pack);
        $uid = preg_replace("#(*UTF8)[^A-Za-z0-9]#", "", $tmp);
        $len = max(4, min(128, $len));
        while (strlen($uid) < $len)
            $uid .= gen_uuid(22);
        return substr($uid, 0, $len);
    }

   public function sendMail(){
        $mailer = new Mailer();
        if($mailer->sendActivationMail($data)){
            $this->setResult("OK");
            return true;
        }else{
            return false;
        }
    }

    public function setResult($message){
        $tempArray = array();
        $tempArray["status"] = $message;
        $this->resultArray = $tempArray;
        return true; 
    }

    public function getResult(){
        return $this->resultArray;
    }
    
}
