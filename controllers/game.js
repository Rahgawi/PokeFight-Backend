const Game = require('../models/Game');

const saveGame = async (req, res) => {
  try {
    // console.log(req.body);
    const newGame = await Game.create(req.body);
    res.status(200).send(newGame);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const getAllGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

module.exports = { saveGame, getAllGames };
