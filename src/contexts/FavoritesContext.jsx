import { createContext, useContext, useState, useEffect } from "react";

const favoritesContext = createContext();

function  useFavoriteContext(){
    return useContext(favoritesContext);
    }
function FavoriteProvider({children}){
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    useEffect(()=>{
        const storedFavorites = localStorage.getItem('favorites');
        if(storedFavorites){
            setFavoriteMovies(JSON.parse(storedFavorites))
        } 

    },[])

    useEffect(()=>{
        if(favoriteMovies.length !== 0) localStorage.setItem('favorites', JSON.stringify(favoriteMovies))
    },[favoriteMovies]);

    const addToFavorites = (movie) =>{
        const {id, originalTitle ,primaryImage ,startYear} = movie;
        if(favoriteMovies.includes(movie)){
                return null;
            } else {
                setFavoriteMovies( (prev) => [...prev , movie])
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


