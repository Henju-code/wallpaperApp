import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { AddFavorites } from '../../../services/Firebase/RealtimeDatabase/favoritesListFirebase'
import { Button } from './styles'

export function FavoriteButton({image, imageRef}) {
    return (
        <Button onPress={() => AddFavorites(imageRef, image)} >
            <MaterialCommunityIcons name="heart" color='#fff' size={26} />
        </Button>
    );
}