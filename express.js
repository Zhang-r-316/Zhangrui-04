// 导入 express 模块
const express = require('express');
const app = express();
const port = 3000;

// 中间件：解析 JSON 请求体
app.use(express.json());

// 示例路由 - GET 请求
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 示例路由 - POST 请求
app.post('/api/users', (req, res) => {
  const user = req.body;
  console.log('Received user data:', user);
  res.status(201).json({ message: 'User created', user });
});

// 带参数的路由
app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ message: `Fetching user with ID ${userId}` });
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
