// db.js
const { Pool } = require('pg');
require('dotenv').config();

// 設定資料庫連線參數
const pool = new Pool({
  user: 'postgres',       // 使用者名稱
  host: 'localhost',           // 資料庫主機位址
  database: 'dodge',   // 資料庫名稱
  password: process.env.DB_PASSWORD,   // 使用者密碼
  port: 5432,                  // PostgreSQL 預設埠號
});

// 匯出連線池供其他檔案使用
module.exports = pool;
