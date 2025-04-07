import MovieCard from '../components/MovieCard/MovieCard'


function Home(){
    let movies = [
        {
        id : 1,
        title : 'Transporter 1',
        year: 2000,
        img_URL : 'https://m.media-amazon.com/images/I/91r-Dlg5-VL._SY445_.jpg'
        },

        {
            id : 2,
            title : 'Terminator',
            year: 1995,
            img_URL : '#'
            },
            
            {
            id : 3,
            title : 'Freinds',
            year: 1995,
            img_URL : '#'
            },
        
    ]

    return(
<>
        {movies.map((movie)=> (
            < MovieCard movie = {movie} key = {movie.id} />
            ))}
</>

    );
}


export default Home;