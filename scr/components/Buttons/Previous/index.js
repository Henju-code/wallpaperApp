import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

import { Button } from './styles'

export default function PreviousButton () {
    const navigation = useNavigation()

    return (
        <Button onPress={() => navigation.goBack()} >
            <MaterialCommunityIcons name='arrow-left' color='#fff' size={26} />
        </Button>
    );
}