require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors');
const db = require('./db/db');
const pokemonRouter = require('./routes/pokemon');
const gameRouter = require('./routes/game');

db();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use('/', pokemonRouter, gameRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
