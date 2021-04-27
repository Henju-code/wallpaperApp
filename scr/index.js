import React from 'react';
import Routes from './routes'
import FavoritesProvider from '../scr/hooks/useFavorites'

export default function App () {
  return (
  <FavoritesProvider>
    <Routes />
  </FavoritesProvider>
  )
}