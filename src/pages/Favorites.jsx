import { useFavoriteContext } from "../contexts/FavoritesContext";
import MovieCard from "../components/MovieCard/MovieCard";

function Favorites(){
    const {favoriteMovies, setFavoriteMovies, addToFavorites} = useFavoriteContext();
    return(

        <>
            <p>Favorite Movies List</p>
            <div className="movies">
                {favoriteMovies.map((movie) => (
                <MovieCard movie={movie} key={movie.id}  />
            ))}
            </div>
            
        </>
    );
    
    
}

export default Favorites;