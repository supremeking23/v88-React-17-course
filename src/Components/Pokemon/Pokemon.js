import React, {useState, useEffect} from 'react';
import api_caller from '../../api/api_caller';

export default function Pokemon() {
    let [pokemons, setPokemons] = useState([]);

    useEffect(()=>{
        fetchPokemon();
    },[]);

    const fetchPokemon = async () => {
        try {
            let response =  await api_caller.get("/pokemon");
            let pokemon_lists = response.data.results.map((pokemon, index) => <li key ={index}>{pokemon.name}</li>);

            setPokemons(pokemon_lists);

        } catch (error) {
            console.log("error", error);
        }
    }

    
    return (
        <div>
            <ul>
                {pokemons}
            </ul>
        </div>
    )
}