const express = require('express');
const Article = require('../models/Article');

const router = express.Router();

// 获取所有文章
router.get('/', async (req, res) => {
  try {
    const articles = await Article.find({}, 'id title');
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 获取单个文章
router.get('/:id', async (req, res) => {
  try {
    const article = await Article.findOne({ id: req.params.id });
    if (!article) return res.status(404).json({ message: 'Article not found' });
    res.json(article);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
