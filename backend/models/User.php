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

   public function sendBookingMailToCustomer($data){
        $mailer = new Mailer();
        if($mailer->sendBookingMailToCustomer($data)){
            return true;
        }else{
            return false;
        }
    }

    public function sendFragenkatalogMailToCustomer($data){
        $mailer = new Mailer();
        if($mailer->sendFragenkatalogMailToCustomer($data)){
            return true;
        }else{
            return false;
        }
    }

    public function sendBookingMailToAdmin($data){
        $mailer = new Mailer();
        if($mailer->sendBookingMailToAdmin($data)){
            return true;
        }else{
            return false;
        }
    }

    public function sendBookingRequest($data){
        if($this->sendBookingMailToAdmin($data)){
            if($this->sendBookingMailToCustomer($data)){
                $this->setResult("OK");
                return true;
            }
        }
        return false;
    }

    public function sendFragenkatalog($data){
        if($this->sendBookingMailToAdmin($data)){
            if($this->sendFragenkatalogMailToCustomer($data)){
                $this->setResult("OK");
                return true;
            }
        }
        return false;
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
