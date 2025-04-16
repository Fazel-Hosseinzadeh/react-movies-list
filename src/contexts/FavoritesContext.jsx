import { createContext, useContext, useState } from "react";

const favoritesContext = createContext();

function  useFavoriteContext(){
    return useContext(favoritesContext);
    }

function FavoriteProvider({children}){
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    const value = {favoriteMovies, setFavoriteMovies, addToFavorites}
    return (
        <favoritesContext.Provider value = {value} >
            {children}
        </favoritesContext.Provider>
    )
}

export default FavoriteProvider ;
export {useFavoriteContext};


