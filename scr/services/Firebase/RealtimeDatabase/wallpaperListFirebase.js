import database from '@react-native-firebase/database'
import { useState, useEffect } from 'react'

export default function getWallpaperList(key) {

    const [wallpaperList, setWallpaperList] = useState([])
    

    useEffect(() => {
        const documentRef = database().ref(`/images/${key}`)
        documentRef.on("value", (datasnapshot) => {
            const docSnapshot = datasnapshot.val();
            const listW = []

            for (let id in docSnapshot) {
                listW.push({ id, ...docSnapshot[id] })
            }
            setWallpaperList(listW)
        })
    }, []);

    const imagesList = []
    let counter = 0

    wallpaperList.map((item) => {
        imagesList[item.index] = item;
        counter++;
    })

    return imagesList;  
}