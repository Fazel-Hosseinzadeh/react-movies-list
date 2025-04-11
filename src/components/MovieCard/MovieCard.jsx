import './MovieCard.css'

function MovieCard(props){
    const {id, originalTitle ,primaryImage ,startYear} = props.movie;
    function onFavoritClicked(movie){
        alert(`clicked on ${originalTitle}`)
    }
    return (
        <>
            <div className="container">
                <div className="card-container">
                    <div className="poster">
                        <img src={primaryImage} alt={originalTitle} />
                        <button className="movie-like" onClick = {()=>onFavoritClicked(originalTitle)}>♥</button>
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