const mongoose = require('mongoose');

const urlCardSchema = new mongoose.Schema({
  href: { type: String, required: true },
  src: { type: String, required: true },
  alt: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: false },
  category: { type: String, required: false },
  popular: { type: Boolean, required: false }
}, { collection: 'urlCards' }); // 确保集合名称是 'urlCards'

const UrlCard = mongoose.model('UrlCard', urlCardSchema);

module.exports = UrlCard;
