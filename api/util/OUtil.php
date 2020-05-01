<?php

class OUtil
{
    public static function isAjax()
    {
        return (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest');
    }

    public static function responseJson($result)
    {
        header('Content-Type: application/json');
        echo json_encode($result);
        exit();
    }
}