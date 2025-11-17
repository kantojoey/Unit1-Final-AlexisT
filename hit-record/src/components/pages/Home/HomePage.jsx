import { Link } from "react-router";
import AlbumShelf from "../../common/AlbumShelf";
import Card from "../../common/Card";
import VinylRecord from "../../images/VinylRecord.png"

const HomePage = ({albumReviews}) => {
    return (
        <main>
            <h1><strong>My Favorites at a glance</strong></h1>
            <AlbumShelf className="favorites-display">
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
            <Link to="/listening-log" style={{color:"white"}}>
            <h1>Recently Listened →</h1>
            </Link>
            <AlbumShelf>
                {albumReviews && albumReviews.length > 0 ? (albumReviews.map((album) => {
                        return(
                            <Card className="album-card">
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
