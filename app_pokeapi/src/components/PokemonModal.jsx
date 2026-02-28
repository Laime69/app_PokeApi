import React from "react";

const PokemonModal = ({ pokemon, onClose }) => {
  if (!pokemon) return null;

  return (
    <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center">
      <div className="bg-black p-6 rounded-xl w-96 relative border">
        <button
          className="absolute top-2 right-3 text-red-500 font-bold"
          onClick={onClose}
        >
          X
        </button>

        <h2 className="text-2xl capitalize font-bold text-center">
          {pokemon.name}
        </h2>

        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="mx-auto border"
        />

        <div className="bg-black mt-4 space-y-2 ">
          <p >❤️ HP: {pokemon.stats[0].base_stat}</p>
          <p>⚔️ Ataque: {pokemon.stats[1].base_stat}</p>
          <p>🛡️ Defensa: {pokemon.stats[2].base_stat}</p>
          <p>💨 Velocidad: {pokemon.stats[5].base_stat}</p>
          <p>📏 Altura: {pokemon.height}</p>
          <p>⚖️ Peso: {pokemon.weight}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonModal;