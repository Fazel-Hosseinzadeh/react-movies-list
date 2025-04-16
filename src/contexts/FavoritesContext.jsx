import { createContext, useContext, useState } from "react";

const favoritesContext = createContext();

function  useFavoriteContext(){
    return useContext(favoritesContext);
    }

function FavoriteProvider({children}){
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    const addToFavorites = (movie) =>{
        const {id, originalTitle ,primaryImage ,startYear} = movie;
        if(id in favoriteMovies) return null;
        else {
            setFavoriteMovies( prev => [...prev , movie]);
        } 
    }

    const value = {favoriteMovies, setFavoriteMovies, addToFavorites}
    return (
        <favoritesContext.Provider value = {value} >
            {children}
        </favoritesContext.Provider>
    )
}

export default FavoriteProvider ;
export {useFavoriteContext};


