// server/functions/index.js
const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const router = express.Router();

// 中间件
app.use(bodyParser.json());
app.use('/.netlify/functions/index', router); // 路径必须指向 lambda

// MongoDB 连接
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));

// 示例路由
router.get('/test', (req, res) => {
  res.json({ message: "Hello, world!" });
});

// 引入并使用路由
const urlCardsRouter = require('../routes/urlCards');
const sidebarItemsRouter = require('../routes/sidebarItems');
const articlesRouter = require('./routes/articles');

router.use('/api/urlCards', urlCardsRouter);
router.use('/api/sidebarItems', sidebarItemsRouter);
app.use('/api/articles', articlesRouter);

module.exports.handler = serverless(app);
