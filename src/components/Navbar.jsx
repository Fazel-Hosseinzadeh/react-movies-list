import { Link  } from "react-router-dom";

function NavBar(){
    return (
        <>
            <div className="logo">
                <Link to = '/'>Movie Lists App</Link>
            </div>
            <div className="nav-links">
                <Link to = '/'>Home</Link>
                <Link to = '/favorites'>Favorites</Link>
            </div>
        </>
    );
}

export default NavBar;