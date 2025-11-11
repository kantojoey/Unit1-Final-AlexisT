import { useNavigate } from "react-router";
import VinylRecord from "../images/VinylRecord.png"

const LoadingPage = () => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate("/home")
        console.log("Just hold on, we're going home");

    };
    return (
        <main>
            <div className="loading-page-main-div">
                <img src={VinylRecord} className="spin"></img>
                <button onClick={handleClick} className="start-button"><h4>Start</h4></button>
            </div>
        </main>
    );
};

export default LoadingPage;