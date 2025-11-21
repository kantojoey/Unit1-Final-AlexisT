import { Link, useNavigate } from "react-router";
import AlbumShelf from "../../common/AlbumShelf";
import Card from "../../common/Card";
import VinylRecord from "../../images/VinylRecord.png"

const HomePage = ({ albumReviews, setExpandedAlbum, favorites }) => {

    let navigate = useNavigate();
    const albumDetailExpander = (album) => {
        setExpandedAlbum(album);
        navigate("/home/details");

    }
    return (
        <main>
            <Link to="/profile" style={{ color: "white" }}>
                <h1><strong>My Favorites at a glance</strong></h1>
            </Link>
            <AlbumShelf className="favorites-display">
                {favorites.map((album, index) => {
                    return (
                        <div key={index}>
                            <Card className="album-card">
                                <img src={album ? album.images[0].url : VinylRecord} alt="" className="album-artwork" />
                            </Card>
                        </div>
                    )
                })}
            </AlbumShelf>
            <Link to="/listening-log" style={{ color: "white" }}>
                <h1>Recently Listened →</h1>
            </Link>
            <AlbumShelf>
                {albumReviews && albumReviews.length > 0 ? (albumReviews.slice(0, 8).map((album) => {
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

export default HomePage;
