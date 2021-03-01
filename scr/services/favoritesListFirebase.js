import React from 'react'
import database from '@react-native-firebase/database'
import { useEffect } from 'react'
import { View } from 'react-native'



export default function CreateFavorites (userId) {

    useEffect (() => {
        const favoritesRef = database().ref('/users')
        console.log(favoritesRef)

        favoritesRef.on("value", (datasnapshot) => {
            const favSnapshot = datasnapshot.val();
            const exists = false

            for (let id in favSnapshot) {
                if (favSnapshot.key === userId) {
                    exists = true
                }
            }

            if (!(exists)) {
                favoritesRef.push({
                    key: userId
                })
        
                favoritesRef = database().ref(`/users/${userId}`)
                console.log(favoritesRef)
                favoritesRef.push({
                    key: favorites
                })
            }
        })
        

    }, []) 
  return <View></View>
}