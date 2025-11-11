import { useNavigate } from "react-router";
import Card from "../../common/Card";
import VinylRecord from "../../images/VinylRecord.png"

const SearchPage = () => {

    let navigate = useNavigate();
    const handleLogAlbum = () => {
        navigate("/search/review");
        console.log("Now under review");
    };
    return (
        <main>
            <h1>Search for an album:</h1>
            <section className="album-search-section">
                <input type="text" placeholder="Type album name here..." className="album-search-box" />
                <button className="search-button">
                    🔍
                </button>
            </section>
            <h1>Search results...</h1>
            <section className="search-results-section">
                <Card className="album-card">
                    <img src={VinylRecord} className="album-artwork"></img>
                </Card>
                <button className="add-album-button" onClick={handleLogAlbum}> + Log Album
                </button>
            </section>
        </main>
    );
};

export default SearchPage;
