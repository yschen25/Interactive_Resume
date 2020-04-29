<?php

$root = dirname(dirname(__FILE__));
require_once($root . '/util/OUtil.php');
require_once($root . '/util/DBUtil.php');

class sendMessage
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
        $name = $_POST['name'];
        $sex = $_POST['sex'];
        $msg = $_POST['msg'];

        if (empty($name)) {
            OUtil::responseJson(
                array(
                    'status' => false,
                    'message' => 'Name is empty'
                )
            );
        }

        if (empty($msg)) {
            OUtil::responseJson(
                array(
                    'status' => false,
                    'message' => 'Message is empty'
                )
            );
        }

        $DBUtil = new DBUtil();
        $result = $DBUtil->sendMessage($name, $sex, $msg);

        if ($result) {
            OUtil::responseJson(
                array(
                    'status' => true,
                    'message' => 'SUCCESS'
                )
            );
        } else {
            OUtil::responseJson(
                array(
                    'status' => false,
                    'message' => 'FAILED'
                )
            );
        }
    }
}