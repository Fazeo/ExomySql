## SHOW DATABASE; pour voir les bases existantes

CREATE DATABASE evaluation;
USE evaluation;

CREATE TABLE students(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    firstname VARCHAR(128),
    lastname VARCHAR(128),
    age INT, 
    class INT, 
    gender VARCHAR(1),
);

CREATE TABLE notes (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    student VARCHAR(128),
    mark VARCHAR(128),
   )
);

