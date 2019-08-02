-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2019-08-02 15:27:00
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `audi`
--

-- --------------------------------------------------------

--
-- 表的结构 `car_family`
--

CREATE TABLE `car_family` (
  `fid` int(11) NOT NULL,
  `fname` varchar(20) NOT NULL,
  `fpower` varchar(20) NOT NULL,
  `price` decimal(11,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `car_family`
--

INSERT INTO `car_family` (`fid`, `fname`, `fpower`, `price`) VALUES
(1, 'A3', '汽油', '188000'),
(2, 'A3 新能源', '新能源', '200100'),
(3, 'A4', '汽油', '256800'),
(4, 'A4L', '汽油', '286800'),
(5, 'A5', '汽油', '375000'),
(6, 'A6', '汽油', '408800'),
(7, 'A6L', '汽油', '420000'),
(8, 'A6L新能源', '新能源', '440099'),
(9, 'A7', '汽油', '798000'),
(10, 'A8', '汽油', '829900'),
(11, 'Q3', '汽油', '278000'),
(12, 'Q5', '汽油', '380000'),
(13, 'Q7', '汽油', '680000'),
(14, 'Q7新能源', '新能源', '758000'),
(15, 'TT', '汽油', '450000'),
(16, 'R8', '汽油', '1850000'),
(17, 'RS5', '汽油', '869000'),
(18, 'RS6', '汽油', '1355000'),
(19, 'RS7', '汽油', '1535000'),
(20, 'e-tron', '汽油', '455000'),
(21, 'A4 allroad quattro', '汽油', '390000'),
(22, 'S4 Limousine', '汽油', '455000'),
(23, 'RS 4 Avant', '汽油', '820000'),
(24, 'A5 Sportback', '汽油', '370000'),
(25, 'S5 Sportback', '汽油', '620000'),
(26, 'RS 5 Coupé', '汽油', '830000'),
(27, 'S6', '汽油', '900000');

-- --------------------------------------------------------

--
-- 表的结构 `car_top`
--

CREATE TABLE `car_top` (
  `tid` int(11) NOT NULL,
  `tname` varchar(20) NOT NULL,
  `ttitle` varchar(100) NOT NULL,
  `tprice` decimal(11,2) NOT NULL,
  `tpic` varchar(255) NOT NULL,
  `tdetails` varchar(2000) NOT NULL,
  `tcount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `car_top`
--

INSERT INTO `car_top` (`tid`, `tname`, `ttitle`, `tprice`, `tpic`, `tdetails`, `tcount`) VALUES
(0, 'e-tron', '"英雄远征，未来由此而来"', '689099.00', '"images/banner_pic.jpg"', 'Audi e-tron是奥迪首款纯电动SUV\r\n采用前瞻性的电动化设计语言、富含科技感的豪华内饰，展现出奥迪与生俱来的耀眼锋芒\r\nAudi e-tron充沛的动力让您无论是日常外出还是挑战野外航行，都能一路伴您前进\r\nAudi e-tron采用了奥迪家族新的设计理念，大尺寸的六边形进气格栅搭配两侧尖锐、狭长的大灯组，真皮多功能方向盘和换挡拨片的组合充分体现出车辆的运动感。\r\n内饰上新车配备了全液晶仪表盘，且搭载了双触控屏，分别控制着多媒体娱乐系统和空调系统，同时标配的奥迪智能手机接口，让您在车内体验熟悉的智能手机世界。全景影像为您泊车提供更加全面和安全的引导。\r\nAudi e-tron采用双电机四驱的驱动形式，最大功率300KW，0-100km/h加速的时间仅需5.7秒，初创性能可与跑车相媲美。电动全轮驱动，新一代quattro驱动器提供优质牵引力和动力。\r\n因此，Audi e-tron不仅适合日常使用，同时也可体验敏捷、灵活的越野行驶。\r\nAudi e-tron电池组采用铝制综合缓冲结构，外部配备电池框架，内部使用格子形电池外壳包覆电池模块，同时采用实心铝板保护车身\r\n超长电池质保：进口车Audi e-tron：8年/16万\r\n500+授权经销商/服务：覆盖全国网络，提供优质的销售和售后服务\r\nNEV客户绿色服务通道：预约的NEV客户将享受专属NEV接待顾问和NEV维修工位\r\n替换车服务：车辆维修保养过程中，不耽误出行\r\n电池回收网点：全网授权经销商提供服务，环保安全', 200),
(1, 'e-tron', '"英雄远征，未来由此而来"', '689099.00', '"images/banner_pic.jpg"', 'Audi e-tron是奥迪首款纯电动SUV\r\n采用前瞻性的电动化设计语言、富含科技感的豪华内饰，展现出奥迪与生俱来的耀眼锋芒\r\nAudi e-tron充沛的动力让您无论是日常外出还是挑战野外航行，都能一路伴您前进\r\nAudi e-tron采用了奥迪家族新的设计理念，大尺寸的六边形进气格栅搭配两侧尖锐、狭长的大灯组，真皮多功能方向盘和换挡拨片的组合充分体现出车辆的运动感。', 200);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `car_family`
--
ALTER TABLE `car_family`
  ADD PRIMARY KEY (`fid`);

--
-- Indexes for table `car_top`
--
ALTER TABLE `car_top`
  ADD PRIMARY KEY (`tid`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
