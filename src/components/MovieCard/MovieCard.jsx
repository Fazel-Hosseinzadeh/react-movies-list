import './MovieCard.css'
import { useFavoriteContext } from "../../contexts/FavoritesContext";

function MovieCard(props){
    const movie = props.movie;
    const {id, originalTitle ,primaryImage ,startYear} = movie;
    const { favoriteMovies, setFavoriteMovies, addToFavorites } = useFavoriteContext();
    return (
        <>
            <div className="container">
                <div className="card-container">
                    <div className="poster">
                        <img src={primaryImage} alt={originalTitle} />
                        <button
                        className="movie-like"
                        onClick={() => addToFavorites(movie)}
                        >
                        ♥
                        </button>
                    </div>
                    <div className="movie-info">
                        <div className="title">{originalTitle}</div>
                        <div className="movie-year">{startYear}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieCard;