import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import AppNavigator from './components/AppNavigator'
import PokemonDetails from './components/PokemonDetails'
import Favourites from './containers/Favourites'
import Pokedex from './containers/Pokedex'
import { store, persistor } from './redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <AppNavigator />
          <Route exact path="/proto-pokedex/" component={Pokedex}></Route>
          <Route exact path="/proto-pokedex/pokemon/:id" component={PokemonDetails}></Route>
          <Route exact path="/proto-pokedex/favourites" component={Favourites}></Route>
        </Router>   
      </PersistGate>
    </Provider>

  )
}
