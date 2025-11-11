import { Link } from "react-router";
import Card from "../../common/Card";
import VinylRecord from "../../images/VinylRecord.png"

const ExpandedDetailsPage = () => {
    return (
        <main>
            <Link to="/home" style={{ color: "white" }}>
                <h2 style={{ textDecoration: "underline" }}>←Back to home</h2>
            </Link>
            <div className="expanded-album-details-page">
                <Card className="album-card">
                    <img src={VinylRecord} className="album-artwork"></img>
                </Card>
                <h2>Title</h2>
                <h2>Artist</h2>
                <h2>
                    ★★★★★
                </h2>
            </div>
            <div className="expanded-album-review-content">
                <Card className="key-album-data">
                    <Card className="album-datapoint-card">
                        <h3>[YEAR]</h3>
                    </Card>
                    <Card className="album-datapoint-card ">
                        <h3>[GENRE]</h3>
                    </Card>
                    <Card className="album-datapoint-card ">
                        <h3>[RUNTIME]</h3>
                    </Card>
                    <Card className="album-datapoint-card ">
                        <h3>[# OF TRACKS]</h3>
                    </Card>
                </Card>
                <Card className="user-review-card">
                    <h3>My Review:</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                    </p>
                </Card>
            </div>
        </main>
    );
};

export default ExpandedDetailsPage;
