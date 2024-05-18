// models/Article.js
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  content: { type: String, required: true }
}, { collection: 'articles' });

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
