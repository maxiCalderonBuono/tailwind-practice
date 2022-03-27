import React from "react";

import {switchColor} from "./controller"
import * as styles from "./styles"

const PokemonList = ({ list }) => {

  return (
    <div className={styles.MAIN_CONTAINER}>
      {list.map((pokemon, index) => (
        <div
          className={`${styles.CARD_CONTAINER} ${switchColor(pokemon.types)}`}
          key={index}
        >
          <img className= {styles.ICON} src={pokemon.icon} alt= {pokemon.types}/>
          <img
            className= {styles.IMAGE}
            src={pokemon.url}
            alt={pokemon.name}
          />
          <p className={styles.CARD_TEXT}>{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
