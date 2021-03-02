import React, { useState, useEffect } from 'react'
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth';
import Login from '../pages/Login/index'

export function AddFavorites(imageRef, image) {

    const userExists = auth().currentUser
    if ( userExists === null){
        alert('Do login first')
        return
    }

    const uid = auth().currentUser.uid;

    function CreateFavorites(uid) {

        const newReference = database()
            .ref(`/users/${uid}`)
            .once('value', (snapshot) => {
                const exists = snapshot.exists()
                if (!(exists)) {
                    database().ref(`/users/${uid}`).set({})
                    database().ref(`/users/${uid}/favourites`).set({})
                }
            })
    }

    const newReference = database()
        .ref(`/users/${uid}/favourites/${imageRef}`)
        .once('value', (snapshot) => {
            const exists = snapshot.exists()
            if (!(exists)) {
                CreateFavorites(uid);
                database().ref(`/users/${uid}/favourites/${imageRef}`).set({})
            }

            database().ref(`/users/${uid}/favourites/${imageRef}/${image.key}`)
                .set({
                    desc: image.desc,
                    title: image.title,
                    url: image._thumbnail,
                    urlSource: image.url
                })
        })
}
const imagesList = []

export function getFavorites() {

    const [folders, setFolders] = useState([]);
    const uid = auth().currentUser.uid

    useEffect(() => {
        const newReference = database().ref(`/users/${uid}/favourites`)
        .on('value', (snapshot) => {
            const favorites = snapshot.val()
            const foldersList = []

            for (let key in favorites) {
                foldersList.push({ key, ...favorites[key] })

            }
            setFolders(foldersList)
        })
    } , [])

    let counter = 0

    folders.map((item) => {
        getImages(item.key)
    })
        
    function getImages (key) {
        const newReference = database().ref(`/users/${uid}/favourites/${key}`)
        .once('value', (snapshot) => {
            const images = snapshot.val()
            const imgList = []

            for (let key in images) {
                imgList.push({ key, ...images[key] })

            }
            imgList.map((item) =>{
                imagesList[counter] = item
                counter++
            })
        })
    }

    return imagesList
}