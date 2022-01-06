import React, { useEffect, useState } from 'react'
import { Text, ImageBackground } from 'react-native'
import api from '../../../services/api'
import { PokeData } from '../../types'
import { CardContainer, Image } from './styles'

export const Card = ({item}: PokeData) => {

    const [pokemon, setPokemon] = useState({sprites: {front_default: ''}})

    const [pokemonImage, setPokemonImage] = useState('')
    const [pokemonId, setPokemonId] = useState('')


    useEffect(() => {
        api.get(item.pokemon.url).then((response) => {
            // setPokemonImage(response.data.sprites.front_default)
            // setPokemonId(response.data.id)
            setPokemon(response.data)
        })
    }, [])

    console.log(pokemon)





    return (
        <CardContainer>
                <Image source={{uri: pokemon.sprites.front_default || "https://images.unsplash.com/photo-1641437123627-837979a33c39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"}}/>
                <Text style={{color: "white"}}>{item.pokemon.name}</Text>
                <Text style={{color: "white"}}>{pokemonId}</Text>
        </CardContainer>
    )
}