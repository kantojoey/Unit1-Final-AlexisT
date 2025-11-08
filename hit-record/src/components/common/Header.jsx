import VinylRecord from "./images/VinylRecord.png"
const Header = () => {
    return (
        <>
            <header>
                <div className="header-content">
                    <h1 className = "header-text">Hit Record</h1>
                    <img src={VinylRecord} className="header-image"></img>
                </div>
            </header>

        </>
    );
};

export default Header;
