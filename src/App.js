import "./App.css";
import MovieCard from './components/MovieCard/MovieCard'

function App() {
  const movie = {
    id: 1,
    title: "Transporter 1",
    image_URL: "https://www.google.com",
    year: "1999",
  }

  return (
    <>
      < MovieCard movie = {movie} />
    </>
  );
}

export default App;
