-- Active: 1746982100328@@localhost@3306@tc_generator
-- Run this in MySQL
CREATE DATABASE IF NOT EXISTS tc_generator;
USE tc_generator;

CREATE TABLE IF NOT EXISTS tc_data (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  usn VARCHAR(20),
  branch VARCHAR(50),
  year_of_join INT,
  year_of_exit INT,
  reason VARCHAR(255),
  class VARCHAR(20),
  semester INT,
  academic_year VARCHAR(20),
  performance VARCHAR(20)
);
