import { useNavigate } from "react-router";
import Card from "../../common/Card";
import VinylRecord from "../../images/VinylRecord.png"
import Button from "../../common/Button";
import { useState } from "react";



const SearchPage = ({ accessToken }) => {

    const [searchInput, setSearchInput] = useState(null);

    const [albums, setAlbums] = useState([]);


    let navigate = useNavigate();

    const handleLogAlbum = () => {
        navigate("/search/review");
        console.log("Now under review");
    };

    const searchAlbum = async () => {
        let albumParams = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`
            },
        };

        const albumID = await fetch("https://api.spotify.com/v1/search?q=" + searchInput + "&limit=4" +"&type=album",
            albumParams
        )
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setAlbums(data.albums.items);
            })
    };

console.log(albums)


    return (
        <main>
            <h1>Search for an album:</h1>
            <section className="album-search-section">
                <input type="text" placeholder="Type album name here..." className="album-search-box" onChange={(e) => setSearchInput(e.target.value)} />
                <Button className="search-button" onClick={searchAlbum}>
                    🔍
                </Button>
            </section>
            <h1>Search results...</h1>
            <section className="search-results-section">

                {albums.map((album) => {
                    console.log(album);
                    return (
                        <div key={album.id}>
                            <Card className="album-card">
                                <img src={album.images[0].url} alt={album.name} className="album-artwork"></img>
                                <h3>{album.name}</h3>
                            </Card>
                            <Button className="add-album-button" onClick={handleLogAlbum}> + Log Album
                            </Button>
                        </div>
                    )
                })}
            </section>
        </main>
    );
};

export default SearchPage;
