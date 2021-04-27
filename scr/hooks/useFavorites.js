import React, { createContext, useContext, useState, useEffect, useReducer } from 'react'
import { getFavorites } from '../services/Firebase/RealtimeDatabase/favoritesListFirebase'

const favoritesContext = createContext()

export default function FavoritesProvider ({ children }) {
    const [favorites, setFavorites] = useState([])
    const [allFavorites, setAllFavorites] = useState([]) 
    

    // const favoritesReducer = ( state, action ) => {
    //   switch (action) {
    //     case 'getImages':
          
    //       return;

    //     case 'getKeys':

    //     favorites.map((item) => {
    //       const objItem = []

    //       for (let key in item) {
    //           objItem.push({ key, ...item[key] })       
    //       }
    //       console.log('+++++++++++++++++++++++++++++++++++++++++\n')
    //       objItem.map((element) => {
    //           console.log(element.key)
    //       })
    //     })
          
    //       return;
      
    //     default:
    //       break;
    //   }
    // } 

    useEffect(() => {
        async function fetchData() {
          const data = await getFavorites()
          setFavorites(data)
        }
    
        if (favorites.length === 0 || favorites === undefined) {
           fetchData()
        }

        if (favorites.length !== 0) {
          const favoritesList = []
          favorites.map((item) => {
            for (let key in item) {
              if (key.key !== 'key') {
                favorites.push({ key, ...item[key] })  
              }
          }
          })
          setAllFavorites(favoritesList)
        }
    
      }, [favorites])

    return <favoritesContext.Provider value={{
        favorites, 
        setFavorites,
        allFavorites
    }}>{children}</favoritesContext.Provider>
}

export function useFavorites () {
    const context = useContext(favoritesContext)
    const { favorites, setFavorites, allFavorites } = context
    return { favorites, setFavorites, allFavorites }
}