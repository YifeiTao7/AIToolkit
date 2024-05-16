const express = require('express');
const router = express.Router();
const UrlCard = require('../models/UrlCards'); // 确保路径和模型名称正确

// 获取所有URL卡片
router.get('/', async (req, res) => {
  try {
    console.log('Fetching URL cards...');
    const urlCards = await UrlCard.find();
    console.log('URL cards retrieved successfully:', urlCards);
    res.json(urlCards);
  } catch (err) {
    console.error('Error fetching URL cards:', err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
