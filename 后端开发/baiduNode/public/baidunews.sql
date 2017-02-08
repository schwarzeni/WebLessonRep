-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-12-19 01:30:05
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` char(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(26, '精选', '"稳中求进”升至治国理政重要原则', 'img/6.jpg', '2016-12-19 00:00:00', '热点'),
(27, '百家', '钱荒2.0：疯狂印钞之后直接进入滞胀时代？', 'img/7.jpg', '2016-12-19 00:00:00', '新浪网'),
(28, '本地', '北京通州考古首次发现战国成人瓮棺葬 规模国内最大', 'img/8.jpg', '2016-12-19 00:00:00', '搜狐网'),
(29, '娱乐', '唐嫣罗晋东方卫视合体跨年 将甜蜜继续', 'img/9.jpg', '2016-12-19 00:00:00', '央视网'),
(30, '社会', '这只神奇的动物像猫又像鼠 还是国家二级保护动物', 'img/10.jpg', '2016-12-19 00:00:00', '新京报'),
(31, '精选', '安倍内阁支持率降至55% 日俄会谈进展有限致减分', 'img/11.jpg', '2016-12-19 00:00:00', '人民日报');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
