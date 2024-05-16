const express = require('express');
const router = express.Router();
const UrlCard = require('../models/UrlCards'); // 确保路径和模型名称正确

// 获取所有URL卡片
router.get('/', async (req, res) => {
  try {
    const urlCards = await UrlCard.find();
    res.json(urlCards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
