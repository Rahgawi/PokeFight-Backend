require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors');
const db = require('./db/db');
const pokemonRouter = require('./routes/pokemon');

db();

app.use(cors());
app.use('/', pokemonRouter);
//app.get('/',routes);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
