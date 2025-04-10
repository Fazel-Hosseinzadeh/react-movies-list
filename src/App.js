import "./App.css";
import NavBar from "./components/Navbar";
import Favorites from "./pages/Favorites";
import Home from './pages/Home'
import {Routes , Route} from 'react-router-dom'

function App() {
  return (
    <>
    <div className="nav-bar">
      <NavBar/>
    </div>
    
      <Routes>
         <Route path="/" Component={Home} />
         <Route path="/favorites" Component={Favorites} />
      </Routes>
    </>
  );
}

export default App;
