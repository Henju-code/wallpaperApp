import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { Button } from './styles'

export default function FavoriteButton() {

    function handleOnPress () {
        console.log('Hearts UwU')
    }

    return (
        <Button onPress={handleOnPress} >
            <MaterialCommunityIcons name="heart" color='#fff' size={26} />
        </Button>
    );
}