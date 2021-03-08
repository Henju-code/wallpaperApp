import React, { useState, useEffect } from 'react'
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'

const uid = auth().currentUser.uid
// const imagesList = []
//const getFavoritesPath = () => database().ref(`/users/${uid}/favourites`) 

export async function AddFavorites(imageRef, image) {

    const userExists = auth().currentUser
    if (userExists === null) {
        alert('Do login first')
        return
    }

    async function CreateFavorites(uid) {

        const newReference = await database()
            .ref(`/users/${uid}`)
            .once('value', (snapshot) => {
                const exists = snapshot.exists()
                if (!(exists)) {
                    database().ref(`/users/${uid}`).set({})
                    database().ref(`/users/${uid}/favourites`).set({})
                }
            })
    }

    const newReference = await database()
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

export function getFavorites() {

    let counter = 0
    const auxList = []

    const foldersList = []
    const [imagesList, setImagesList] = useState([])

    useEffect(() => {
        async function fecthData() {
            await database().ref(`/users/${uid}/favourites`)
                .on('value', (snapshot) => {
                    const favorites = snapshot.val()

                    for (let key in favorites) {
                        foldersList.push({ key, ...favorites[key] })

                    }
                    foldersList.map((item) => {
                        getImages(item.key)
                    })
                })

            const getImages = async (key) => {
                await database().ref(`/users/${uid}/favourites/${key}`)
                    .once('value', (snapshot) => {
                        const images = snapshot.val()
                        const imgList = []

                        for (let key in images) {
                            imgList.push({ key, ...images[key] })

                        }
                        imgList.map((item) => {
                            auxList[counter] = item
                            counter++
                        })
                        setImagesList(auxList)
                    })
            }
            counter = 0;
        }
        fecthData();
    }, [])

    return imagesList
}

// let imgFolders= [];

export async function removeFavorites(image) {



    // const foldersList = [];
    // const newReference = await database().ref(`/users/${uid}/favourites`)
    //     .on('value', (snapshot) => {
    //         const favorites = snapshot.val()

    //         for (let key in favorites) {
    //             foldersList.push({ key, ...favorites[key] })

    //         }
    //         imgFolders = foldersList
    //     })


    // imgFolders.map((item) => {
    //     getImages(item.key)
    // })

    // async function getImages(key) {
    //     const newReference = await database().ref(`/users/${uid}/favourites/${key}`)
    //         .once('value', (snapshot) => {
    //             const images = snapshot.val()
    //             const imgList = []

    //             for (let key in images) {
    //                 imgList.push({ key, ...images[key] })

    //             }
    //             console.log('pru')
    //             imgList.map((item) => {
    //                 if (item.key === image) {
    //                     console.log(item.key)
    //                     console.log(image)
    //                     database().ref(`/users/${uid}/favourites/${item.key}/${image}`).set(null)

    //                 }
    //             })
    //         })
    // }
}