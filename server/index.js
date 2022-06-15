// dependencies
const express  = require('express');
// const path     = require('path');
const mongoose = require('mongoose');

// env 
require('dotenv').config();

// init port
const PORT = process.env.PORT || 3001;

// init express
const app = express();

// route files
const testRouter = require('./routes/test');

// app.use(express.static(path.resolve(__dirname, 'public')));

// routes usage
app.use('/test', testRouter);

// database connection and listening
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then((res) => app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  }))
  .catch((err) => console.log(err));
