import AlbumShelf from "../../common/AlbumShelf";
import Card from "../../common/Card";
import VinylRecord from "../../images/VinylRecord.png"

const HomePage = () => {
    return (
        <main>
            <h1 style={{ textDecoration: "underline" }}><strong>My Favorites at a glance</strong></h1>
            <AlbumShelf>
                <Card>
                    <img src={VinylRecord} className="placeholder"></img>
                </Card>
                <Card>
                    <img src={VinylRecord} className="placeholder"></img>
                </Card>
                <Card>
                    <img src={VinylRecord} className="placeholder"></img>
                </Card>
                <Card>
                    <img src={VinylRecord} className="placeholder"></img>
                </Card>
            </AlbumShelf>
            <h2 style={{ textDecoration: "underline" }}>Recently Listened →</h2>
            <AlbumShelf>
                <Card>
                    <img src={VinylRecord} className="placeholder"></img>
                </Card>
                <Card>
                    <img src={VinylRecord} className="placeholder"></img>
                </Card>
                <Card>
                    <img src={VinylRecord} className="placeholder"></img>
                </Card>
                <Card>
                    <img src={VinylRecord} className="placeholder"></img>
                </Card>
                <Card>
                    <img src={VinylRecord} className="placeholder"></img>
                </Card>
                <Card>
                    <img src={VinylRecord} className="placeholder"></img>
                </Card>
                <Card>
                    <img src={VinylRecord} className="placeholder"></img>
                </Card>
                <Card>
                    <img src={VinylRecord} className="placeholder"></img>
                </Card>
            </AlbumShelf>
        </main>
    );
};

export default HomePage;
