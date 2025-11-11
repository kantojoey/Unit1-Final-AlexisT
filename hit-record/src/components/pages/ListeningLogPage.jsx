import AlbumShelf from "../common/AlbumShelf";
import Card from "../common/Card";
import VinylRecord from "../images/VinylRecord.png"

const ListeningLogPage = () => {
    return (
        <main>
            <h1><strong>My Listening Log</strong></h1>
            <section id="user-stats-log-section">
                <Card className="listening-stat-card">
                    <h2>[# of logged albums]</h2>
                </Card>
                <Card className="listening-stat-card">
                    <h2>[avg rating]</h2>
                </Card>
            </section>
            <AlbumShelf className="recently-listened-shelf">
                <Card className="album-card">
                    <img src={VinylRecord} className="album-artwork"></img>
                </Card>
                <Card className="album-card">
                    <img src={VinylRecord} className="album-artwork"></img>
                </Card>
                <Card className="album-card">
                    <img src={VinylRecord} className="album-artwork"></img>
                </Card>
                <Card className="album-card">
                    <img src={VinylRecord} className="album-artwork"></img>
                </Card>
                <Card className="album-card">
                    <img src={VinylRecord} className="album-artwork"></img>
                </Card>
                <Card className="album-card">
                    <img src={VinylRecord} className="album-artwork"></img>
                </Card>
                <Card className="album-card">
                    <img src={VinylRecord} className="album-artwork"></img>
                </Card>
            </AlbumShelf>
        </main>
    );
};

export default ListeningLogPage;
