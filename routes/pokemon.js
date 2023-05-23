const express = require('express');
const router = express.Router();

const{
    getAllPokemons,
    getPokemonById,
    getPokemonInfo} = require('../controllers/pokemon');

router.route('/pokemon').get(getAllPokemons);
router.route('/pokemon/:id').get(getPokemonById);
router.route('/pokemon/:id/:info').get(getPokemonInfo);
module.exports = router;