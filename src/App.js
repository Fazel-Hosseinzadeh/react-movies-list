import "./App.css";
import Favorites from "./pages/Favorites";
import Home from './pages/Home'
import {Routes , Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
         <Route path="/" Component={Home} />
         <Route path="/favorites" Component={Favorites} />
      </Routes>
    </>
  );
}

export default App;
