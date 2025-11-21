import AlbumShelf from "./AlbumShelf";
import Button from "./Button";
import Card from "./Card";
import VinylRecord from "../images/VinylRecord.png";
import { useState } from "react";

const FavoritesDisplay = ({ favorites, setFavorites, accessToken }) => {

    let [searchInput, setSearchInput] = useState("");
    const [albums, setAlbums] = useState([]);
    const [error, setError] = useState("");

    let emptyIndex = favorites.findIndex((index) => index === null);

    const handleAddFavorite = (favorite) => {

        if(favorites.includes(favorite)){
            setError("This album already exists in your favorites!");
            return;
        }

        if(emptyIndex===-1){
            setError("Your favorites shelf is full! Please remove an album before adding a new selection.");
            return;
        }
        setError("");
        let newFavorites = [...favorites];
        newFavorites[emptyIndex] = favorite;
        setFavorites(newFavorites);

    };

    const handleRemoveFavorite = (favorite) => {
        console.log("Attempting to delete", favorite);
        let newFavorites = [...favorites];
        console.log(newFavorites);
        newFavorites[favorite] = null;
        setFavorites(newFavorites);
        console.log(newFavorites);

    };

    const searchAlbum = async () => {
        let albumParams = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`
            },
        };

        await fetch("https://api.spotify.com/v1/search?q=" + searchInput + "&limit=8" + "&type=album",
            albumParams
        )
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setAlbums(data.albums.items);
            })
    };

    return (
        <>
            <AlbumShelf className="favorites-display">
                {favorites.map((album, index) => {
                    return (
                        <div key={index}>
                            <Card className="album-card">
                                <img src={album ? album.images[0].url : VinylRecord} alt="" className="album-artwork" />
                            </Card>
                            {album ? (
                                <Button onClick={()=>handleRemoveFavorite(index)}>Remove</Button>
                            ) : <></>}
                        </div>
                    )
                })}
            </AlbumShelf>
            <h1>Search for an album:</h1>
            <section className="album-search-section">
                <input type="text" placeholder="Type album name here..." className="album-search-box" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                <Button className="search-button" onClick={searchAlbum}>
                    🔍
                </Button>
            </section>
            {albums.length > 0 &&
                <h1>Search results...</h1>
            }
            {error && <h2>{error}</h2>}
            <section className="search-results-section">

                {albums.map((album) => {
                    return (
                        <div key={album.id}>
                            <Card className="album-card">
                                <img src={album.images[0].url} alt={album.name} className="album-artwork"></img>
                                <h3>{album.name}</h3>
                            </Card>
                            <Button className="add-album-button" onClick={() => handleAddFavorite(album)}> + Add Favorite
                            </Button>
                        </div>
                    )
                })}
            </section>
        </>
    );
};

export default FavoritesDisplay;
