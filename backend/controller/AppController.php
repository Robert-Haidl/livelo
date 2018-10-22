<?php

class AppController{
    
    private $jsonView;
    private $installation;
    private $mailer;
    
    //Wir bereiten im Konstruktor die Eigenschaften des Objekts vor
    public function __construct() {
        $this->jsonView = new JsonView();
        $this->installation = null;
        $this->mailer = new Mailer();
    }

    //Diese Methode entscheidet welche Eingabe Parameter zu welchen Aktionen führen werden
    public function route(){
    
        $jsonInput = filter_input(INPUT_POST, "data");
        $action = filter_input(INPUT_GET, 'action', FILTER_SANITIZE_SPECIAL_CHARS);
        $data = json_decode($jsonInput);

        if($data == null){
            $this->displayErrorMessage();
            return;
        }
        
        $creationSucessfull = $this->createInstallation("user");
        if($creationSucessfull){
            switch ($action) {
                case "create":
                    if($this->installation->create($data)){
                    }else{
                        $this->displayErrorMessage();
                        return;
                    }
                    break;
                case "sendActivationMail":
                    if($this->mailer->sendActivationMail($data)){
                        $tempArray = array();
                        $tempArray["status"] = "OK";
                        $this->displayMessage($tempArray);
                        return;
                    }else{
                        $this->displayErrorMessage();
                        return;
                    }
                    break;
                default:
                    $this->displayErrorMessage();
                    break;
            }
             $result = $this->installation->getResult();
             $this->jsonView->streamOutput($result);
         } else {
             $this->displayErrorMessage();
         }
    }
    
    private function createInstallation($type){
        switch ( strtolower( $type ) ){
            case 'user':
                $this->installation = new User();
                break;         
            case false: default:     
                return false;
        }  
        return true;
    }

    private function displayErrorMessage(){
        $errorData = array(
            "status" => "NOT OK"
        );
        $this->jsonView->streamOutput($errorData);
    }
    
    private function displayMessage($message){
        $this->jsonView->streamOutput($message);
    }
}