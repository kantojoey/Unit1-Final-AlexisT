import AlbumShelf from "../common/AlbumShelf";
import Card from "../common/Card";
import VinylRecord from "../images/VinylRecord.png"

const ListeningLogPage = () => {
    return (
        <main>
            <h1><strong>My Listening Log</strong></h1>
            <section id="user-stats">
                <Card className="listening-stat">
                    <h2>[# of logged albums]</h2>
                </Card>
                <Card className="listening-stat">
                    <h2>[avg rating]</h2>
                </Card>
            </section>
            <AlbumShelf className="recently-listened">
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

export default ListeningLogPage;
