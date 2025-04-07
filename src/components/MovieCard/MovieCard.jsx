import './MovieCard.css'

function MovieCard(props){
    const {id, title,  year,img_URL} = props.movie;
    return (
        <>
            <div className="container">
                <div className="card-container">
                    <div className="poster">
                        <img src={img_URL} alt={title} />
                        <button className="movie-like">♥</button>
                    </div>
                    <div className="movie-info">
                        <div className="movie-title">{title}</div>
                        <div className="movie-year">{year}</div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default MovieCard;