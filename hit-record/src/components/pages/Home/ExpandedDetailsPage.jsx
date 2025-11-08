import { Link } from "react-router";
import Card from "../../common/Card";
import VinylRecord from "../../images/VinylRecord.png"

const ExpandedDetailsPage = () => {
    return (
        <main>
            <Link to="/home">
            <h4 style={{textDecoration:"underline"}}>←Back to home</h4>
            </Link>
            <div className="expanded-album-content">
                <Card>
                    <img src={VinylRecord} className="placeholder"></img>
                </Card>
                <h4>Title</h4>
                <h4>Artist</h4>
                <Card className="rating-box">
                    <span>★★★★★</span>
                </Card>
            </div>
            <div className="review-content">
                <div className="album-details-expanded">
                    <Card className="content-box">
                        <h4>[YEAR]</h4>
                    </Card>
                    <Card className="content-box">
                        <h4>[GENRE]</h4>
                    </Card>
                    <Card className="content-box">
                        <h4>[RUNTIME]</h4>
                    </Card>
                    <Card className="content-box">
                        <h4>[# OF TRACKS]</h4>
                    </Card>
                </div>
                <Card className="user-review">
                    <h4>My Review:</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                    </p>
                </Card>
            </div>
        </main>
    );
};

export default ExpandedDetailsPage;
