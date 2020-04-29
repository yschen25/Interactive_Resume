<?php

class OUtil
{
    public static function isAjax()
    {
        return (isset($_SERVER['X-Requested-With']) && (strtolower(getenv('X_REQUESTED_WITH')) === 'XMLHttpRequest'));
    }

    public static function responseJson($result)
    {
        header('Content-Type: application/json');
        echo json_encode($result);
        exit();
    }
}