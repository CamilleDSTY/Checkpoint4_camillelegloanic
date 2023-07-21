-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (arm64)
--
-- Host: localhost    Database: react_express_game_2023_02
-- ------------------------------------------------------
-- Server version	8.0.31
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;

/*!50503 SET NAMES utf8mb4 */;

/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;

/*!40103 SET TIME_ZONE='+00:00' */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `books`
--
DROP TABLE IF EXISTS `books`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;


CREATE TABLE `books` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `author` varchar(200) NOT NULL,
  `released_date` varchar(10) NOT NULL,
  `genre` ENUM('Fantasy', 'Policier', 'Cosy mystery', 'Young adult', 'Littérature jeunesse', 'Aventure') NOT NULL,
  `publisher`varchar(100) NOT NULL,
  `opinion` TEXT NOT NULL,
  `Summary` TEXT NOT NULL,
  `picture` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--
LOCK TABLES `books` WRITE;

INSERT INTO `books` VALUES (1, "Le camp des Morts", "Craig Johnson", "04/05/2023", "Policier", "Gallmeister", "Un roman haletant, où l'on retrouve une nouvelle fois walt Longmire a la poursuite des démons du passé, cette fois-ci, ce sont ceux de Lucian qui ressurgissent. J'ai été surprise plus d'une fois, je ne m'attendait jamais à ce qui allait suivre ! l'auteur m'a promenée a travers les pages, et c'était passionant.", "Lorsque le corps de Mari Baroja est découvert à la maison de retraite de Durant, le shérif Longmire se trouve embarqué dans une enquête qui le ramène cinquante ans en arrière. Il plonge dans le passé déchirant de cette femme et dans celui de son mentor, le légendaire shérif Connally. Tandis que résonne l'histoire douloureuse de la victime, d'autres meurtres viennent jalonner l'enquête.", "campdesmorts.jpg");

/*!40000 ALTER TABLE `books` ENABLE KEYS */
;

UNLOCK TABLES;

DROP TABLE IF EXISTS `commentary`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;


CREATE TABLE `commentary` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `text` TEXT NOT NULL,
  `author` varchar(200) NOT NULL,
  `email`varchar(100) NOT NULL,
  `book_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commentary`
--
-- LOCK TABLES `commentary` WRITE;



DROP TABLE IF EXISTS `user`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;


CREATE TABLE `user` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `email`varchar(100) NOT NULL,
  `hashedPassword` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--
LOCK TABLES `user` WRITE;

INSERT INTO `user` VALUES (1, "thae.b@laposte.net", "bruissevent");