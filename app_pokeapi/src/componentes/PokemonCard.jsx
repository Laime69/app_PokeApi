import React from "react";

const PokemonCard = ({ pokemon, onDetail, onAdd }) => {
  return (
    <div className="bg-black rounded-xl shadow-md p-4 text-center">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mx-auto w-24 h-24"
      />
      <h2 className=" capitalize font-bold text-lg ">{pokemon.name}</h2>

      <div className="flex justify-center gap-2 mt-3">
        <button
          onClick={() => onDetail(pokemon)}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Ver Detalle
        </button>
        <button
          onClick={() => onAdd(pokemon)}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default PokemonCard; 