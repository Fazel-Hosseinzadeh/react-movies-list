import "./App.css";
import NavBar from "./components/Navbar";
import Favorites from "./pages/Favorites";
import Home from './pages/Home'
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
