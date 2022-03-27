import React from "react";

const PokemonList = ({ list }) => {
  const switchColor = (type) => {
    switch (type) {
      case "agua":
        return "bg-sky-500";
      case "planta":
        return "bg-green-500";
      case "fuego":
        return "bg-orange-500";
      default:
        return "bg-black";
    }
  };

  return (
    <div className="flex flex-col flex-wrap justify-center mx-auto md:flex-row md:w-6/12">
      {list.map((pokemon, index) => (
        <div
          className={`flex md:flex-col items-center justify-center md:w-40 h-40 m-2 relative cursor-pointer hover:scale-110 transition-all text-white rounded-lg ${switchColor(pokemon.types)}`}
          key={index}
        >
          <img className="absolute w-10 h-10 md:h-6 md:w-6 top-2 right-2" src={pokemon.icon} alt= {pokemon.types}/>
          <img
            className="object-contain w-36 h-36 md:w-24 md:h-24"
            src={pokemon.url}
            alt={pokemon.name}
          />
          <p className="text-3xl font-bold text-center capitalize md:text-base">{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
