import { useNavigate } from "react-router";
import AlbumShelf from "../common/AlbumShelf";
import Card from "../common/Card";

const ListeningLogPage = ({ albumReviews, setExpandedAlbum }) => {

    const calculateAvg = (reviews) => {
        let sum = reviews.reduce((accumulator, reviews) => accumulator + reviews.rating.length, 0);

        let avg = (sum / reviews.length).toFixed(1);
        return avg;
    }

    let navigate = useNavigate();
    const albumDetailExpander = (album) => {
        setExpandedAlbum(album);
        navigate("/home/details");

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
            <AlbumShelf>
                {albumReviews && albumReviews.length > 0 ? (albumReviews.map((album) => {
                    return (
                        <Card className="album-card" onClick={() => albumDetailExpander(album)}>
                            <img src={album.image} className="album-artwork"></img>
                        </Card>
                    )
                })) :
                    (<p>Nothing to show here yet...</p>)
                }
            </AlbumShelf>
        </main>
    );
};

export default ListeningLogPage;
