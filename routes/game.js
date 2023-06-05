const express = require('express');
const router = express.Router();

const { saveGame } = require('../controllers/game');

router.route('/game/save').post(saveGame);

module.exports = router;
