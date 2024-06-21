import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PokemonCard.css';

const PokemonCard = ({ pokemon }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await axios.get(pokemon.url);
      setDetails(response.data);
    };
    fetchDetails();
  }, [pokemon.url]);

  return (
    <div className="pokemon-card">
      {details && (
        <>
          <img src={details.sprites.front_default} alt={pokemon.name} />
          <h2>{pokemon.name}</h2>
          <p><span>Height:</span> {details.height}</p>
          <p><span>Weight:</span> {details.weight}</p>
          <p><span>Type: </span>{details.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
        </>
      )}
    </div>
  );
};

export default PokemonCard;
