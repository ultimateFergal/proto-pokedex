import { Box, CircularProgress, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IMAGE_API_URL, POKEMON_API_URL } from '../config'
import PokemonCard from '../components/PokemonCard'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    pokedexContainer: {
        textAlign: 'center',
        padding: "70px 10px 0px 10px",
        backgroundColor: 'rgb(68, 68, 68)'
    }
}))

export default function Pokedex() {
    const classes = useStyles()

    const [pokemonData, setPokemonData] = useState(null)
    useEffect(() => {
        axios.get(POKEMON_API_URL + "?limit=800" )
         .then((response) => {
             console.log(response.data)
             if (response.status >= 200 && response.status < 300) {
                const { results } = response.data
                let newPokemonData = []
                results.forEach((pokemon, index) => {
                    index++
                    let pokemonObject = {
                        id: index,
                        url: IMAGE_API_URL + index + ".png",
                        name: pokemon.name
                    }
                    newPokemonData.push(pokemonObject)
                })
                setPokemonData(newPokemonData)
            }
        })
    }, [])

    return (
        <Box>
            {pokemonData ? 
            (<Grid className={classes.pokedexContainer} container spacing={2}>
                {pokemonData.map(pokemon => {
                    return <PokemonCard pokemon={pokemon} image={pokemon.url}  key={pokemon.id}/> //<h1 style={{ marginLeft: 10 }}>{pokemon.name}</h1>
                })} 
            </Grid>) : <CircularProgress style={{ marginTop: 100 }}/>}
        </Box>
    )
}
