const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));

// 引入并使用路由
const urlCardsRouter = require('./routes/urlCards');
const sidebarItemsRouter = require('./routes/sidebarItems');


app.use('/api/urlCards', urlCardsRouter);
app.use('/api/sidebarItems', sidebarItemsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
