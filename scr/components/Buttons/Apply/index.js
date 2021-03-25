import React from 'react'
import ManageWallpaper, { TYPE } from 'react-native-manage-wallpaper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { Button } from './styles'


export default function ApplyButton({ image }) {

    function callback() {
        alert('Aplicado com sucesso!');
    };

    async function setWallpaper() {
        try {
            await ManageWallpaper.setWallpaper(
                {
                    uri: image,
                },
                callback(),
                TYPE.BOTH,
            );
        } catch (error) {
            console.log('Error => ', error)
        }
    };

    return (
        <Button onPress={setWallpaper} >
            <MaterialCommunityIcons name="image-multiple-outline" color='#fff' size={26} />
        </Button>
    );

}