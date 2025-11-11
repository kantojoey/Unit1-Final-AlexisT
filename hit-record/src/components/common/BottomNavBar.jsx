import { Link } from "react-router";
import { IoHomeSharp } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";


const BottomNavBar = () => {
    return (
        <div className="bottom-nav">
            <Link to="/home" className="nav-item">
                <IoHomeSharp />
            </Link>
            <Link to="/listening-log" className="nav-item">
                <FaHeadphones />
            </Link>
            <Link to="/about" className="nav-item">
                <IoInformationCircleOutline />
            </Link>
            <Link to="/search" className="nav-item">
                <FaSearchPlus />
            </Link>
            <Link to="/profile" className="nav-item">
                <FaUserCircle />
            </Link>

        </div>
    );
};

export default BottomNavBar;
