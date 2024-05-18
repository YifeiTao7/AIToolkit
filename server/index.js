// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middlewares
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log('MongoDB connected successfully.'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Example Route
// app.get('/test', (req, res) => {
//   res.json({ message: "Hello, world!" });
// });

// // Import and use routes
// const urlCardsRouter = require('./routes/urlCards');
// const sidebarItemsRouter = require('./routes/sidebarItems');
// const articlesRouter = require('./routes/articles');

// app.use('/api/urlCards', urlCardsRouter);
// app.use('/api/sidebarItems', sidebarItemsRouter);
// app.use('/api/articles', articlesRouter);

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
