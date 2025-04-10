import './MovieCard.css'

function MovieCard(props){
    const {id, title,  year,img_URL} = props.movie;
    function onFavoritClicked(movie){
        alert(`clicked on ${title}`)
    }
    return (
        <>
            <div className="container">
                <div className="card-container">
                    <div className="poster">
                        <img src={img_URL} alt={title} />
                        <button className="movie-like" onClick = {()=>onFavoritClicked(title)}>♥</button>
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