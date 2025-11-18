import AlbumShelf from "../common/AlbumShelf";
import Button from "../common/Button";
import Card from "../common/Card";
import ProfilePic from "../images/ProfilePic.jpg"
import VinylRecord from "../images/VinylRecord.png"

const ProfilePage = ({albumReviews}) => {
    return (
        <main>
            <div className="user-profile-info">
                <h2 style={{ textAlign: "center" }}><strong>My Profile</strong></h2>
                <div className="profile-pic-div">
                    <img className="profile-pic" src={ProfilePic} />
                    <Card className="profile-stat">
                        <h2>{albumReviews.length === 1 ? (`${albumReviews.length} review`) : (`${albumReviews.length} reviews`)}</h2>
                    </Card>
                </div>
            </div>
            <div className="favorite-section">
                <h2><strong>My Favorites:</strong></h2>
                <AlbumShelf className="favorites-display">
                    <Card className="album-card">
                        <img src={VinylRecord} className="album-artwork"></img>
                        <Button className="overlay-button">Remove</Button>
                    </Card>
                    <Card className="album-card">
                        <img src={VinylRecord} className="album-artwork"></img>
                        <Button className="overlay-button">Remove</Button>
                    </Card>
                    <Card className="album-card">
                        <img src={VinylRecord} className="album-artwork"></img>
                        <Button className="overlay-button">Remove</Button>
                    </Card>
                    <Card className="album-card">
                        <img src={VinylRecord} className="album-artwork"></img>
                        <Button className="overlay-button">Remove</Button>
                    </Card>
                </AlbumShelf>
            </div>
        </main>
    );
};

export default ProfilePage;
