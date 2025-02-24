// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001;

app.use(cors()); // 允许跨域请求
app.use(express.json()); // 解析 JSON 请求体

// 模拟的用户名和密码（实际中应使用数据库）
const validUser = {
  username: 'admin',
  password: '123456',
};

// 登录 API
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // 简单的用户名和密码验证
  if (username === validUser.username && password === validUser.password) {
    return res.json({ success: true });
  } else {
    return res.json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
