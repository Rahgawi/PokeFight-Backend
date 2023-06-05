const Game = require('../models/Game');

const saveGame = async (req, res) => {
  try {
    const { pokemon1, pokemon2, winner } = req.body;
    // console.log(`saveGame: ${pokemon1} ${pokemon2} ${winner}`);

    console.log(req.body);

    const newGame = await Game.create(req.body);
    res.status(200).send(newGame);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

// const saveGame = async (req, res) => {
//   try {
//     const { name, age, hobbies } = req.body; //req.body destrukturieren
//     //req.body.name, req.body.age, req.body.hobbies
//     const newUser = await User.create(req.body);
//     res.status(201).json(newUser);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send(err.message);
//   }
// };

module.exports = { saveGame };
