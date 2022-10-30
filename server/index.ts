// dependencies
const express  = require('express');
const mongoose = require('mongoose');
const bp = require('body-parser')

// env 
require('dotenv').config();

// init port
const PORT = process.env.PORT || 3001;

// init express
const app = express();

// body parser
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

// route files
const testRouter = require('./routes/test');
const resultRouter = require('./routes/result');
const techRouter = require('./routes/tech');

// app.use(express.static(path.resolve(__dirname, 'public')));

// routes usage
app.use('/test', testRouter);
app.use('/result', resultRouter);
app.use('/tech', techRouter);

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
