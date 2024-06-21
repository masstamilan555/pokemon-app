import React, { useState, useEffect } from 'react';
import { getPokemon } from './services/pokemonService';
import PokemonCard from './components/PokemonCard';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon();
      setPokemon(data);
    };
    fetchData();
  }, []);

  const filteredPokemon = pokemon.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Pokemon App</h1>
      <input
        type="text"
        placeholder="Search Pokémon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="pokemon-list">
        {filteredPokemon.map(p => (
          <PokemonCard key={p.name} pokemon={p} />
        ))}
      </div>
    </div>
  );
}

export default App;
