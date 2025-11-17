import { Link } from "react-router";
import Card from "../../common/Card";
import VinylRecord from "../../images/VinylRecord.png"

const ExpandedDetailsPage = ({expandedAlbum}) => {
    return (
        <main>
            {expandedAlbum ? (
                <>
                
            <Link to="/home" style={{ color: "white" }}>
                <h2 style={{ textDecoration: "underline" }}>←Back to home</h2>
            </Link>
            <div className="expanded-album-details-page">
                <Card className="album-card">
                    <img src={expandedAlbum.image} className="album-artwork" style={{cursor:"auto"}}></img>
                </Card>
                <h2><span className="data-category">Rating:</span> {expandedAlbum.rating}</h2>
            </div>
            <div className="expanded-album-review-content">
                <Card className="key-album-data">
                    <Card className="album-datapoint-card">
                        <h3 className="data-heading"><span className="data-category">Title:</span> {expandedAlbum.albumName}</h3>
                    </Card>
                    <Card className="album-datapoint-card ">
                        <h3 className="data-heading"><span className="data-category">Artist:</span> {expandedAlbum.artistName}</h3>
                    </Card>
                    <Card className="album-datapoint-card ">
                        <h3 className="data-heading"><span className="data-category">Title:</span> {expandedAlbum.year}</h3>
                    </Card>
                    <Card className="album-datapoint-card ">
                        <h3 className="data-heading">{expandedAlbum.tracks} <span className="data-category">tracks</span></h3>
                    </Card>
                </Card>
                <Card className="user-review-card">
                    <h3 className="data-category">My Review:</h3>
                    <p>
                        {expandedAlbum.reviewText}
                    </p>
                </Card>
            </div>
                </>
            ) : (<p>Nothing to see yet...</p>)}
        </main>
    );
};

export default ExpandedDetailsPage;
