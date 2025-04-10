import MovieCard from "../components/MovieCard/MovieCard";
import { useState } from "react";
import './Home.css'

function Home() {
    const [searchQuery , setSearchQuery] = useState('');

  let movies = [
    {
      id: 1,
      title: "Transporter 1",
      year: 2000,
      img_URL: "https://m.media-amazon.com/images/I/91r-Dlg5-VL._SY445_.jpg",
    },

    {
      id: 2,
      title: "Terminator",
      year: 1995,
      img_URL: "#",
    },

    {
      id: 3,
      title: "Freinds",
      year: 1995,
      img_URL: "#",
    },
  ];

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
                movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id}  /> )
                ))}

            </div>
        
        </div>
    </>
  );
}

export default Home;
