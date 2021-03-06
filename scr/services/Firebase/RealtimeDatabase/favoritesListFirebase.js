import React, { useState, useEffect } from 'react'
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'

// const uid = auth().currentUser.uid

export async function AddFavorites(imageRef, image) {

    const userExists = auth().currentUser
    if (userExists === null) {
        alert('Do login first')
        return
    }

    const uid = auth().currentUser.uid

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

let favorites = []
export async function getFavorites() {

    const uid = auth().currentUser.uid
    let auxList = []
    let counter = 0

    await database().ref(`/users/${uid}/favourites`)
        .on('value', (snapshot) => {
            const imagesList = snapshot.val()
            let foldersList = []

            for (let key in imagesList) {
                foldersList.push({ key, ...imagesList[key] })
            }
 
            // foldersList.map((item) => {
            //     getImages(item.key)
            //     //console.log(item.key.-LgOhn2G0k8jCMxZV6Lx)
            //     //const objItem = []

            //     // for (let key in item) {
            //     //     objItem.push({ key, ...item[key] })  

            //     // }
            //     // console.log('+++++++++++++++++++++++++++++++++++++++++\n')
            //     // objItem.map((element) => {
            //     //     console.log(element.key)
            //     // })
            // })
          setTimeout(() => {favorites = foldersList}, 1200)    
        })

    // const getImages = async (key) => {
    //     await database().ref(`/users/${uid}/favourites/${key}`)
    //         .once('value', (snapshot) => {
    //             const images = snapshot.val()
    //             const imgList = []

    //             for (let key in images) {
    //                 imgList.push({ key, ...images[key] })

    //             }
    //             imgList.map((item) => {
    //                 auxList[counter] = item
    //                 counter++
    //             })
    //             favorites = auxList
    //         })
    // }
    console.log('letBee')

    return favorites
}

export async function removeFavorites(image) {

    const uid = auth().currentUser.uid
    
    async function fecthData() {
        const foldersList = []
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
                        if (item.key === image) {
                            database().ref(`/users/${uid}/favourites/${key}/${image}`).set(null)

                        }
                    })
                })
        }
    }
    fecthData();
}