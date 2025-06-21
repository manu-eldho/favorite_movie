import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorite() {
    const { favorites } = useMovieContext();
    if (favourites) {
        return (
        <div className="favovorites">
            <h2>Your Favorites</h2>        
            <div className="favorites-list">
                {favorites.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>;
        </div>
        )
    }

    return <div className="favourites-empty">
        <h2>No favorite movies Yet</h2>
        <p>Start adding to ypur favorite and they will appear here</p>
    </div>
}

export default Favorite;