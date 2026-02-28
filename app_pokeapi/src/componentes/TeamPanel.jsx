import React from "react";

const TeamPanel = ({ team, removePokemon }) => {
  const totalHP = team.reduce((acc, p) => acc + p.stats[0].base_stat, 0);
  const avgAttack =
    team.length > 0
      ? (
          team.reduce((acc, p) => acc + p.stats[1].base_stat, 0) / team.length
        ).toFixed(2)
      : 0;

  return (
    <div className="bg-gray-10 p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-2">Equipo ({team.length}/6)</h2>

      {team.map((pokemon) => (
        <div
          key={pokemon.id}
          className="flex justify-between items-center mb-2"
        >
          <span className="capitalize">{pokemon.name}</span>
          <button
            onClick={() => removePokemon(pokemon.id)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Quitar
          </button>
        </div>
      ))}

      <div className="mt-4">
        <p>Total HP: {totalHP}</p>
        <p>Ataque Promedio: {avgAttack}</p>
      </div>
    </div>
  );
};

export default TeamPanel;