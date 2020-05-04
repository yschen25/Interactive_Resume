<?php

$root = dirname(dirname(__FILE__));
require_once($root . '/util/OUtil.php');
require_once($root . '/util/DBUtil.php');

class queryMessage
{
    public function run()
    {
        if (OUtil::isAjax()) {
            $this->onAjax();
            exit();
        }
    }
    
    public function onAjax()
    {
        $DBUtil = new DBUtil();
        $result = $DBUtil->queryMessage();
        
        if (count($result) > 0) {
            OUtil::responseJson(
                array(
                    'status' => true,
                    'result' => $result
                )
            );
        } else {
            OUtil::responseJson(
                array(
                    'status' => false
                )
            );
        }
    }
}