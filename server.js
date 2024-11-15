// server.js
const express = require('express');
const app = express();
const userRoutes = require('./routes'); // 引入路由

app.use(express.json()); // 支援 JSON 格式的 request body
app.use('/api', userRoutes); // 使用 `/api` 作為 API 路徑的前綴

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});