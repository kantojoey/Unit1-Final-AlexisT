import { useNavigate } from "react-router";
import VinylRecord from "../images/VinylRecord.png"
import Button from "../common/Button";

const LoadingPage = () => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate("/home")

    };
    return (
        <main>
            <div className="loading-page-main-div">
                <img src={VinylRecord} className="spin"></img>
                <Button onClick={handleClick} className="start-button">Start</Button>
            </div>
        </main>
    );
};

export default LoadingPage;