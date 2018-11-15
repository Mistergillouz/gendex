
const fs = require('fs')

const newPokedex =  JSON.parse(fs.readFileSync('new-pokedex.json'))
const oldPokedex =  JSON.parse(fs.readFileSync('pokedex.before.json'))


const diffs = {}
Object.keys(oldPokedex.pokemons).forEach(pokemonId => {
   const oldPokemon = oldPokedex.pokemons[pokemonId], newPokemon = newPokedex.pokemons[pokemonId]
   if (oldPokemon.gen < 5) {
      const o = serialize(oldPokemon), n = serialize(newPokemon)
      if (JSON.stringify(o) !== JSON.stringify(n)) {
         diffs[pokemonId] = {
            old: o,
            new: n
         }
      }
   }
})

fs.writeFileSync('diffs.json', JSON.stringify(diffs))

////////////////////////////////////////////////////////////////////////////////

function serialize(pokemon) {
   return {
      cp: pokemon.cpmax,
      atk: pokemon.atk,
      def: pokemon.def,
      sta: pokemon.sta
   }
}
