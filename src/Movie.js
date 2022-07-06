import {useState} from "react";
import {Link} from "react-router-dom";

function Movie({movie, handleEdit}) {
    const [likeCount, setLikeCount] = useState(movie.likes);


    return (
        <div class="card" style={{ width: "20rem", padding: "1px" }}>
            <strong class="card-title">{movie.title}</strong>
            <img src={movie.image_url} alt={movie.name} className="thumbnail" />
            <div class="row">
                <div class="col-sm">
                    <Link to={"/movies/add"} onClick={e => handleEdit(movie)}>Edit</Link>
                </div>
                <div class="col-sm">
                    <Link to={`/movies/${movie.id}`}>Show More</Link>
                </div>
                <div class="col-sm">
                    <button type="button" class="btn btn-light" onClick={e => setLikeCount(movie.likes++)}>Like! {likeCount} </button>
                </div>
            </div>
        </div>
    )
} 

export default Movie;