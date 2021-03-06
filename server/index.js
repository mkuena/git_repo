const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || "5000";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extends:false}));
app.use(bodyParser.json());
app.use('/api/tracer', require('./api/tracer'));

app.listen(PORT, () => {
    console.log(`Listening to requests on http://localhost:${PORT}`);
  });


  module.exports = app;



