SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

CREATE TABLE IF NOT EXISTS `interactive_resume_message` (
  `no` int(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `sex` char(2),
  `msg` varchar(255) NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `interactive_resume_message` (`no`, `name`, `sex`, `msg`, `time`) VALUES
(1, 'Joe', '2', 'What a awesome website! Wish I can meet the author, she is s my god now.', '2020-01-25 15:51:17'),
(2, 'Dino', '1', 'The author is the greatest person I have ever met. She is enthusiastic for coding, enhance the developing environment proactively.', '2018-02-23 16:10:12'),
(3, 'Leo', '3', 'Very creative! Can''t wait for next portfolio.', '2020-04-27 16:44:14')