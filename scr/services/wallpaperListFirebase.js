import database from '@react-native-firebase/database'
import { useState, useEffect } from 'react'

export default function getWallpaperList(key) {

    const [wallpaperList, setWallpaperList] = useState([])

    useEffect(() => {
        const documentRef = database().ref(`/images/${key}`)
        documentRef.on("value", (datasnapshot) => {
            const docSnapshot = datasnapshot.val();
            const listW = [];

            for (let id in docSnapshot) {
                listW.push({ id, ...docSnapshot[id] });
            }
            setWallpaperList(listW)
        })
    }, []);

    const thumbsList = [];
    let counter = 0;

    wallpaperList.map((item) => {
        thumbsList[counter] = item._thumbnail;
        counter++;
    })
    return thumbsList;
}

