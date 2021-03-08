import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { removeFavorites } from '../../../services/favoritesListFirebase'
import { Button } from './styles'

export default function RemoveButton({image}) {

    return (
        <Button onPress={() => removeFavorites(image)} >
            <MaterialCommunityIcons name="delete" color='#fff' size={26} />
        </Button>
    );
}