import { Link } from "react-router";
import VinylRecord from "../../images/VinylRecord.png"
import Card from "../../common/Card";
import Button from "../../common/Button";

const ReviewPage = () => {
    return (
        <main>
            <Link to="/search" style={{ color: "white" }}>
                <h2 style={{ textDecoration: "underline" }}>←Back to home</h2>
            </Link>
            <div className="review-page-container">
                <div className="selected-album-review-data">
                    <Card className="album-card">
                        <img src={VinylRecord} className="album-artwork"></img>
                    </Card>
                    <h3>Title</h3>
                    <h3>Artist</h3>
                    <h3>Year</h3>
                </div>
                <div className="album-review-entry">
                    <div className="rating-entry">
                        <h2>Rating</h2>
                        <select id="album-rating-selector" name="rating" required>
                            <option value="" selected disabled>Select a rating</option>
                            <option value="★">★</option>
                            <option value="★★">★★</option>
                            <option value="★★★">★★★</option>
                            <option value="★★★★">★★★★</option>
                            <option value="★★★★★">★★★★★</option>
                        </select>
                    </div>
                    <div className="review-entry">
                        <h2>Review:</h2>
                        <textarea
                            className="album-review-input-content"
                            placeholder="Write review here..."
                            required
                        />
                        <div className="submit-options">
                            <Link to="/search">
                                <input type="submit" value="Submit" />
                            </Link>
                            <Link to="/search">
                                <Button>
                                    Cancel
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ReviewPage;
