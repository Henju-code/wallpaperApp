import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import RNFetchBlob from 'rn-fetch-blob'
import Share from 'react-native-share'
import { Button } from './styles'

export function ShareButton({ imageUrl }) {

    async function handleOnPress() {
        let imagePath = null;
        RNFetchBlob.config({
            fileCache: true
        })
            .fetch("GET", imageUrl)
            // the image is now dowloaded to device's storage
            .then(resp => {
                // the image path you can use it directly with Image component
                imagePath = resp.path();
                return resp.readFile("base64");
            })
            .then(async base64Data => {
                var base64Data = `data:image/JPEG;base64,` + base64Data;
                // here's base64 encoded image
                await Share.open({ message: 'App filmes e series wallpaper! \n' ,url: base64Data });
                // remove the file from storage
                return fs.unlink(imagePath);
            });
    }

    return (
        <Button onPress={handleOnPress} >
            <MaterialCommunityIcons name="share-variant" color='#fff' size={26} />
        </Button>
    );
}