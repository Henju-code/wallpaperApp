import React from 'react'
import ManageWallpaper, { TYPE } from 'react-native-manage-wallpaper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { Button } from './styles'


export default function ApplyButton({image}) {

    function handleOnPress () {
        console.log('puff')
    }

    function callback() {
        alert('Aplicado com sucesso!');
    };

    async function setWallpaper () {
        await ManageWallpaper.setWallpaper(
            {
                uri: image,
            },
            callback(),
            TYPE.HOME,
        );
    };

    return (
        <Button onPress={setWallpaper} >
            <MaterialCommunityIcons name="download" color='#fff' size={26} />
        </Button>
    );

}