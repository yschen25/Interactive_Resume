<?php

require_once('OUtil.php');

class DBUtil
{
    const _user = 'i6333129_pi1';
    const _password = 'iv66net19891125';

    const _DB_type = 'mysql';
    const _DB_host = 'localhost';
    const _DB_name = 'i6333129_pi1';
    const _DB_port = '3306';

    public static $DB = null;

    /**
     * Send message
     *
     * @param $userName
     * @param $sex
     * @param $msg
     * @return bool
     */
    public function sendMessage($userName, $sex, $msg)
    {
        date_default_timezone_set("Asia/Taipei");

        $sql = "INSERT INTO `interactive_resume_message` (`name`, `sex`, `msg`, `time`) VALUES (:userName, :sex, :msg, :time)";
        $sql = self::$DB->prepare($sql);
        $sql->bindValue(':userName', $userName);
        $sql->bindValue(':sex', $sex);
        $sql->bindValue(':msg', $msg);
        $sql->bindValue(':time', date('Y-m-d H:i:s'));
        $result = $sql->execute();
        return $result;
    }

    public function __construct()
    {
        $_DSN = self::_DB_type . ':host=' . self::_DB_host . ';dbname=' . self::_DB_name . ';severPort=' . self::_DB_port;
        try {
            self::$DB = new PDO(
                $_DSN, self::_user, self::_password,
                array(
                    PDO::ATTR_PERSISTENT => true
                )
            );
            self::$DB->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, true);
            self::$DB->setAttribute(PDO::ATTR_EMULATE_PREPARES, true);
            self::$DB->exec("SET NAMES 'utf8'");
        } catch (PDOException $PDOException) {
            die ('Connect Error :' . $PDOException->getMessage());
        }
    }

    /**
     * Get message
     *
     * @return array
     */
    public function queryMessage()
    {
        $sql = "SELECT * FROM interactive_resume_message ORDER BY time DESC";
        $sql = self::$DB->prepare($sql);
        $sql->execute();
        return $sql->fetchAll();
    }
}