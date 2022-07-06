import {useParams} from "react-router-dom";

function MovieDetail({movies}) {
const params= useParams();
const movieId = params.id;
const selectedMovie = movies.find(movie => movie.id==movieId)

    return (
        <div class="selected-movie" style={{position: "fixed", borderColor: "black", padding: "20px"}}>
            <div class="card" style={{position: "relative", width: "25rem", padding: "10px", backgroundColor: "silver"}}>
                <h4 class="card-title">{selectedMovie.title}</h4>
                <img src={selectedMovie.image_url} alt={selectedMovie.name} className="thumbnail"/>
                <div class="row">
                    <div class="col-sm"><strong>Released:</strong> {selectedMovie.year}</div>
                    <div class="col-sm"><strong>Rated:</strong> {selectedMovie.rated}</div>
                </div>       
                <div class="row">
                    <div class="col-sm"><strong>Genre:</strong> {selectedMovie.genre}</div>
                    <div class="col-sm"><strong>Duration:</strong> {selectedMovie.duration}</div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;