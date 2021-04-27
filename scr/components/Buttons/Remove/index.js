import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { removeFavorites } from '../../../services/Firebase/RealtimeDatabase/favoritesListFirebase'
import { Button } from './styles'

export function RemoveButton({image}) {
    return (
        <Button onPress={() => removeFavorites(image)} >
            <MaterialCommunityIcons name="heart-off-outline" color='#fff' size={26} />
        </Button>
    );
}