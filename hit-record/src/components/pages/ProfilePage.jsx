import AlbumShelf from "../common/AlbumShelf";
import Card from "../common/Card";
import ProfilePic from "../images/ProfilePic.jpg"
import VinylRecord from "../images/VinylRecord.png"

const ProfilePage = () => {
    return (
        <main>
            <div className="user-profile-info">
                <h2 style={{ textAlign: "center" }}><strong>My Profile</strong></h2>
                <div className="profile-pic-div">
                    <img className="profile-pic" src={ProfilePic} />
                    <Card className="profile-stat">
                        <h2>[# of reviews]</h2>
                    </Card>
                </div>
            </div>
            <div className="favorite-section">
                <h2><strong>My Favorites:</strong></h2>
                <AlbumShelf>
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
            </div>
        </main>
    );
};

export default ProfilePage;
