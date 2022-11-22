const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const mysqlPr = require('mysql2/promise');

const inquirer = require ("inquirer");
// implement FIGfont spec in Javascript
const figlet = require('figlet');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: process.env.DB_PASSWORD,
    database: 'employeeTracker_db'
  },
);