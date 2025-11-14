-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 14, 2025 at 08:14 AM
-- Server version: 8.0.30
-- PHP Version: 8.3.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pertaminaebluebook`
--

-- --------------------------------------------------------

--
-- Table structure for table `administrator`
--

CREATE TABLE `administrator` (
  `administratornopeg` char(15) NOT NULL,
  `administratorname` varchar(255) NOT NULL,
  `administratoremail` varchar(255) NOT NULL,
  `administratorpassword` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `approval`
--

CREATE TABLE `approval` (
  `approvalnopeg` char(15) NOT NULL,
  `approvalname` varchar(255) NOT NULL,
  `approvalemail` varchar(255) NOT NULL,
  `approvalpassword` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bluebookdb`
--

CREATE TABLE `bluebookdb` (
  `bluebookdbid` int NOT NULL,
  `material_number` varchar(255) NOT NULL,
  `material_name` varchar(255) NOT NULL,
  `brand` int NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `MSDS` varchar(255) DEFAULT NULL COMMENT 'Path to PDF file stored locally',
  `classification` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `utility` varchar(255) NOT NULL,
  `minimum_stock` varchar(255) NOT NULL,
  `ru` varchar(255) NOT NULL,
  `unit` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `brandlist`
--

CREATE TABLE `brandlist` (
  `brandlistid` int NOT NULL,
  `brand_name` varchar(255) NOT NULL,
  `product` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `MSDS` varchar(255) DEFAULT NULL COMMENT 'Path to PDF file stored locally',
  `information` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `categoryid` int NOT NULL,
  `code` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `classification`
--

CREATE TABLE `classification` (
  `classificationid` int NOT NULL,
  `code` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `creator`
--

CREATE TABLE `creator` (
  `creatornopeg` char(15) NOT NULL,
  `creatorname` varchar(255) NOT NULL,
  `creatoremail` varchar(255) NOT NULL,
  `creatorpassword` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `creator`
--

INSERT INTO `creator` (`creatornopeg`, `creatorname`, `creatoremail`, `creatorpassword`, `createdAt`, `updatedAt`) VALUES
('660392', 'Solana Imani Rowe', 'sesamestreet@gmail.com', '1234password', '2025-11-14 08:08:51', '2025-11-14 08:08:51'),
('661322', 'Steffani Germanotta', 'Joanne@gmail.com', '1234password', '2025-11-14 08:10:08', '2025-11-14 08:10:08'),
('661392', 'Amala Ratna Zandile', 'SCARLET2CLAUDE@gmail.com', '1234password', '2025-11-14 08:09:36', '2025-11-14 08:09:36');

-- --------------------------------------------------------

--
-- Table structure for table `currency`
--

CREATE TABLE `currency` (
  `currencyid` int NOT NULL,
  `code` varchar(255) NOT NULL,
  `currency` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `dashboard`
--

CREATE TABLE `dashboard` (
  `dashboardid` int NOT NULL,
  `link` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `loghistory`
--

CREATE TABLE `loghistory` (
  `loghistoryid` int NOT NULL,
  `user_nopeg` char(15) NOT NULL COMMENT 'Foreign key to creator table',
  `activity` enum('add','edit','delete') NOT NULL COMMENT 'Type of activity: add, edit, or delete',
  `object` int NOT NULL COMMENT 'References bluebookdbid from bluebookdb table',
  `ip_address` varchar(255) NOT NULL,
  `approver_nopeg` char(15) DEFAULT NULL COMMENT 'Foreign key to approval table',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `plant`
--

CREATE TABLE `plant` (
  `plantid` int NOT NULL,
  `plantcode` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `refineryunit`
--

CREATE TABLE `refineryunit` (
  `refineryunitid` int NOT NULL,
  `refineryunitname` varchar(255) NOT NULL,
  `refineryunitlocation` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `administrator`
--
ALTER TABLE `administrator`
  ADD PRIMARY KEY (`administratornopeg`),
  ADD UNIQUE KEY `administratoremail` (`administratoremail`);

--
-- Indexes for table `approval`
--
ALTER TABLE `approval`
  ADD PRIMARY KEY (`approvalnopeg`),
  ADD UNIQUE KEY `approvalemail` (`approvalemail`);

--
-- Indexes for table `bluebookdb`
--
ALTER TABLE `bluebookdb`
  ADD PRIMARY KEY (`bluebookdbid`),
  ADD KEY `brand` (`brand`);

--
-- Indexes for table `brandlist`
--
ALTER TABLE `brandlist`
  ADD PRIMARY KEY (`brandlistid`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`categoryid`);

--
-- Indexes for table `classification`
--
ALTER TABLE `classification`
  ADD PRIMARY KEY (`classificationid`);

--
-- Indexes for table `creator`
--
ALTER TABLE `creator`
  ADD PRIMARY KEY (`creatornopeg`),
  ADD UNIQUE KEY `creatoremail` (`creatoremail`);

--
-- Indexes for table `currency`
--
ALTER TABLE `currency`
  ADD PRIMARY KEY (`currencyid`);

--
-- Indexes for table `dashboard`
--
ALTER TABLE `dashboard`
  ADD PRIMARY KEY (`dashboardid`);

--
-- Indexes for table `loghistory`
--
ALTER TABLE `loghistory`
  ADD PRIMARY KEY (`loghistoryid`),
  ADD KEY `user_nopeg` (`user_nopeg`),
  ADD KEY `object` (`object`),
  ADD KEY `approver_nopeg` (`approver_nopeg`);

--
-- Indexes for table `plant`
--
ALTER TABLE `plant`
  ADD PRIMARY KEY (`plantid`);

--
-- Indexes for table `refineryunit`
--
ALTER TABLE `refineryunit`
  ADD PRIMARY KEY (`refineryunitid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bluebookdb`
--
ALTER TABLE `bluebookdb`
  MODIFY `bluebookdbid` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `brandlist`
--
ALTER TABLE `brandlist`
  MODIFY `brandlistid` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `categoryid` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `classification`
--
ALTER TABLE `classification`
  MODIFY `classificationid` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `currency`
--
ALTER TABLE `currency`
  MODIFY `currencyid` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `dashboard`
--
ALTER TABLE `dashboard`
  MODIFY `dashboardid` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `loghistory`
--
ALTER TABLE `loghistory`
  MODIFY `loghistoryid` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `plant`
--
ALTER TABLE `plant`
  MODIFY `plantid` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `refineryunit`
--
ALTER TABLE `refineryunit`
  MODIFY `refineryunitid` int NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bluebookdb`
--
ALTER TABLE `bluebookdb`
  ADD CONSTRAINT `bluebookdb_ibfk_1` FOREIGN KEY (`brand`) REFERENCES `brandlist` (`brandlistid`) ON UPDATE CASCADE;

--
-- Constraints for table `loghistory`
--
ALTER TABLE `loghistory`
  ADD CONSTRAINT `loghistory_ibfk_1` FOREIGN KEY (`user_nopeg`) REFERENCES `creator` (`creatornopeg`) ON UPDATE CASCADE,
  ADD CONSTRAINT `loghistory_ibfk_2` FOREIGN KEY (`object`) REFERENCES `bluebookdb` (`bluebookdbid`) ON UPDATE CASCADE,
  ADD CONSTRAINT `loghistory_ibfk_3` FOREIGN KEY (`approver_nopeg`) REFERENCES `approval` (`approvalnopeg`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
