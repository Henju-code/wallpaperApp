import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native'
import auth from '@react-native-firebase/auth';

import Login from '../pages/Login/index'
import { logoff } from './authMethods'
import {CreateFavorites} from './favoritesListFirebase'

import database from '@react-native-firebase/database'


export default function AuthVerification() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount

  }, []);

  if (initializing) return null;

  if (!user) {
    return <Login />
  }
  
  return (
    <View>
      <Text style={{ color: '#00AAFF', fontSize: 30 }}>Welcome {user.uid}</Text>
      <Button title='LogOut' onPress={logoff}></Button>
      <Button title='favorites' onPress={() => CreateFavorites(user.uid)}></Button>
    </View>
  );
}