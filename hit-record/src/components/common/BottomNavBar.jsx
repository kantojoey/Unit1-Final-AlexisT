import { Link } from "react-router";


const BottomNavBar = () => {
    return (
        <div className="bottom-nav">
            <Link to="/home" className="nav-item">
                <span>icon</span>
                <span>Home</span>
            </Link>
            <Link to="/listening-log" className="nav-item">
                <span>icon</span>
                <span>Listening Log</span>
            </Link>
            <Link to="/about" className="nav-item">
                <span>icon</span>
                <span>About</span>
            </Link>
            <Link to="/search" className="nav-item">
                <span>icon</span>
                <span>Search</span>
            </Link>
            <Link to="/profile" className="nav-item">
                <span>icon</span>
                <span>Profile</span>
            </Link>

        </div>
    );
};

export default BottomNavBar;
