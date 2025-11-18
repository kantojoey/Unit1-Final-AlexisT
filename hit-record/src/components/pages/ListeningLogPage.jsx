import AlbumShelf from "../common/AlbumShelf";
import Card from "../common/Card";
import VinylRecord from "../images/VinylRecord.png"

const ListeningLogPage = ({ albumReviews }) => {

    const calculateAvg = (reviews) => {
        let sum = reviews.reduce((accumulator, reviews) => accumulator + reviews.rating.length, 0);

        let avg = (sum / reviews.length).toFixed(1);
        return avg;
    }


    return (
        <main>
            <h1><strong>My Listening Log</strong></h1>
            <section id="user-stats-log-section">
                <Card className="listening-stat-card">
                    <h2>{albumReviews.length === 1 ? (`${albumReviews.length} review`) : (`${albumReviews.length} reviews`)}</h2>
                </Card>
                <Card className="listening-stat-card">
                    <h2>{albumReviews.length === 0 ? ("No average to display yet") : (`${calculateAvg(albumReviews)} average rating`)}
                    </h2>
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
