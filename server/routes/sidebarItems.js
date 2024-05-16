// server/routes/sidebarItems.js
const express = require('express');
const router = express.Router();
const SidebarItem = require('../models/SidebarItem');

// 获取所有侧栏菜单项
router.get('/', async (req, res) => {
  try {
    const sidebarItems = await SidebarItem.find();
    res.json(sidebarItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
