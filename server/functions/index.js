const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));

const urlCardsRouter = require('../routes/urlCards');
const sidebarItemsRouter = require('../routes/sidebarItems');

app.use('/api/urlCards', urlCardsRouter);
app.use('/api/sidebarItems', sidebarItemsRouter);

module.exports.handler = serverless(app);
