import { Link } from "react-router";
import VinylRecord from "../../images/VinylRecord.png"
import Card from "../../common/Card";

const ReviewPage = () => {
    return (
        <main>
            <Link to="/search">
                <h4 style={{ textDecoration: "underline" }}>←Back to search</h4>
            </Link>
            <div className="page-container">
                <div className="album-review-info">
                    <Card>
                        <img src={VinylRecord} className="placeholder"></img>
                    </Card>
                    <h4>Title</h4>
                    <h4>Artist</h4>
                    <h4>Year</h4>
                </div>
                <div className="album-review-entry">
                    <div className="rating-entry">
                        <h2>Rating</h2>
                        <select id="rating" name="rating" required>
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
                        <input className="review-input" type="text" placeholder="Write review here..." required />
                        <div className="submit-options">
                            <Link to="/search">
                                <input type="submit" value="Submit" />
                            </Link>
                            <Link to="/search">
                                <button>
                                    Cancel
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ReviewPage;
