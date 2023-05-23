function getAllPokemons(req,res){
res.status(200).send("get all Pokemons!");
}
function getPokemonById(req,res){
    const {id} = req.params;
res.status(200).send(`get the Pokemon by id ${id}`);
}

function getPokemonInfo(req,res){
    const {info} = req.params;
res.status(200).send(`get the pokomon info ${info}`);
}

module.exports = {getAllPokemons,getPokemonById,getPokemonInfo};