import MovieCard from "../components/MovieCard/MovieCard";
import { useState, useEffect } from "react";
import './Home.css'
import api from '../service/api.js'

//---------It returns the list of Movies as an array------
import Movies from "../service/movies.js";
//--------------------------------------------------------

function Home() {
    const [searchQuery , setSearchQuery] = useState('');
    const [movies , setMovies ] = useState([]);
    const [error , setError] = useState(null);


    useEffect( () => {
      const callAPI = async ()=> {
        try{
          // const data = await api();
          const data = await Movies();
          await setMovies(data);
        }catch (err){
          console.log(err);
          return null;
        }
      }
        callAPI();
     }, []);

  function handleSearch(e) {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  }

  return (
    <>
      <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search movies ..."
                    value={searchQuery}
                    onChange={(e)=>{setSearchQuery(e.target.value)}}
                />
                <button type="submit" className="search-button" >Search</button>
            </form>
            <div className="movies">
                {movies.map((movie) => (
                movie.originalTitle.toLowerCase().includes(searchQuery) && (
                <MovieCard movie={movie} key={movie.id}  /> )
                ))}

            </div>
        
        </div>
    </>
  );
}

export default Home;
