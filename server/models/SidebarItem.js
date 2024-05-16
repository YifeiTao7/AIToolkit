// server/models/SidebarItem.js
const mongoose = require('mongoose');

const SidebarItemSchema = new mongoose.Schema({
  icon: String,
  text: String,
  category: String,
  subItems: [
    {
      text: String,
      category: String,
    },
  ],
});

const SidebarItem = mongoose.model('SidebarItem', SidebarItemSchema);

module.exports = SidebarItem;
