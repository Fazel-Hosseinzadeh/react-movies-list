import "./App.css";
import NavBar from "./components/Navbar/Navbar.jsx";
import Favorites from "./pages/Favorites/Favorites.jsx";
import Home from './pages/Home/Home.jsx'
import {Routes , Route} from 'react-router-dom'
import FavoriteProvider from "./contexts/FavoritesContext";

function App() {
  return (
    <FavoriteProvider>
    <div className="nav-bar">
      <NavBar/>
    </div>
    
      <Routes>
         <Route path="/" Component={Home} />
         <Route path="/favorites" Component={Favorites} />
      </Routes>
    </FavoriteProvider>
  );
}

export default App;
