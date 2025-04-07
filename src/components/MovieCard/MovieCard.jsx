import './MovieCard.css'

function MovieCard(props){
    const {id, title, image_URL, year} = props.movie;
    return (
        <>
            <div className="card-container">
                <div className="poster">
                    <img src={image_URL} alt={title} />
                    <button className="movie-like">♥</button>
                </div>
                <div className="movie-info">
                    <div className="movie-title">{title}</div>
                    <div className="movie-year">{year}</div>
                </div>
            </div>
        </>

    );
}

export default MovieCard;