const mongoose = require('mongoose');
const { Schema } = mongoose;

const Game = new Schema({
  pokemon1: {
    id: { type: Number, required: [true, 'id is required'] },
    name: { type: String, required: [true, 'name is required'] },
  },
  pokemon2: {
    id: { type: Number, required: [true, 'id is required'] },
    name: { type: String, required: [true, 'name is required'] },
  },
  winner: {
    id: { type: Number, required: [true, 'id is required'] },
    name: { type: String, required: [true, 'name is required'] },
  },
  rounds: { type: Number, required: [true, 'rounds is required'] },
});

module.exports = mongoose.model('Game', Game);
