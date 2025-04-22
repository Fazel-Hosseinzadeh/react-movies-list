import { Link  } from "react-router-dom";
import './Navbar.css'
function NavBar(){
    return (
        <main className="nav-bar-container">
            <div className="logo">
                <Link to = '/' className="nav-link">Movie Lists App</Link>
            </div>
            <div className="nav-bar-links">
                <Link to = '/' className="nav-link">Home</Link>
                <Link to = '/favorites' className="nav-link">Favorites</Link>
            </div>
        </main>
    );
}

export default NavBar;