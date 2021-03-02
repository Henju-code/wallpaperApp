import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { Button } from './styles'

export default function RemoveButton() {

    function handleOnPress () {
        console.log('Shares Ara Ara')
    }

    return (
        <Button onPress={handleOnPress} >
            <MaterialCommunityIcons name="delete" color='#fff' size={26} />
        </Button>
    );
}