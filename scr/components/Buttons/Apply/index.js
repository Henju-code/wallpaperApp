import React from 'react'
import { Dimensions } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ImagePicker from 'react-native-image-crop-picker'
import { useNavigation } from '@react-navigation/native'

import { Button } from './styles'

const WIDTH = Dimensions.get('window').width 
const HEIGHT = Dimensions.get('window').height 

export default function ApplyButton({ image }) {

    const navigation = useNavigation()

    function cropperWallpaper() {
        ImagePicker.openCropper({
            path: image,
            width: WIDTH,
            height: HEIGHT
        }).then(wallpaper => {
            //setWallpaper( wallpaper.path )
            console.log('Path:   ' + wallpaper.path)
            navigation.navigate('ApplyWallpaperView', {image: wallpaper.path})
        });
    }

    return (
        <Button onPress={() => cropperWallpaper()} >
            <MaterialCommunityIcons name="image-multiple-outline" color='#fff' size={26} />
        </Button>
    );
}