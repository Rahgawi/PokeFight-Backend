const express = require('express');
const router = express.Router();

const { saveGame, getAllGames } = require('../controllers/game');

router.route('/game/save').post(saveGame);
router.route('/game/leaderboard').get(getAllGames);

module.exports = router;
