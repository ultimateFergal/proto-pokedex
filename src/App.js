import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppNavigator from './components/AppNavigator'
import PokemonDetails from './components/PokemonDetails'
import Pokedex from './containers/Pokedex'

export default function App() {
  return (
    <Router>
      <AppNavigator />
      <Route exact path="/" component={Pokedex}></Route>
      <Route exact path="/pokemon/:id" component={PokemonDetails}></Route>
    </Router>
  )
}
