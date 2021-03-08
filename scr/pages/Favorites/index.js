import * as React from 'react';
import auth from '@react-native-firebase/auth'

import Login from '../Login/index'
import { Carousel } from '../../components/Carousel/index'
import { getFavorites } from '../../services/favoritesListFirebase';

function Favorites() {

  const uid = auth().currentUser

  if (uid === null) {
    return <Login />
  }
  
  return <Carousel data={getFavorites()} />
}

export default Favorites