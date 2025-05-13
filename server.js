require('dotenv').config(); // 加载环境变量
const express = require('express');
const helmet = require('helmet'); // 安全防护
const cors = require('cors'); // 跨域支持
const morgan = require('morgan'); // 请求日志

const app = express();
const PORT = process.env.PORT || 3000;

// ======= 中间件 =======
app.use(helmet());
app.use(cors());
app.use(express.json()); // 解析 JSON 请求体
app.use(express.urlencoded({ extended: true })); // 解析 URL-encoded 请求体
app.use(morgan('dev')); // 开发日志格式

// 静态文件服务（例如前端构建产物）
app.use(express.static('public'));

// ======= 路由示例 =======
const router = express.Router();

// 健康检查端点
router.get('/health', (req, res) => {
  res.json({ status: 'UP', timestamp: new Date() });
});

// API 路由示例
router.get('/api/greet/:name', (req, res) => {
  const { name } = req.params;
  res.json({ message: `Hello, ${name}!` });
});

router.post('/api/echo', (req, res) => {
  res.json({ received: req.body });
});

// ======= 注册路由 =======
app.use('/', router);

// ======= 错误处理 =======
// 404 处理
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

// 全局错误处理
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// ======= 启动服务器 =======
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

// 导出 app 用于测试
module.exports = app;