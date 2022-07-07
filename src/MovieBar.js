import {Route, useRouteMatch} from "react-router-dom";
import {useEffect, useState} from "react";
import Search from "./Search"
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";

function MovieBar({helpEditMovie}) {
    const match = useRouteMatch();

    const [movies, setMovies] = useState([]);
    const [searchVal, setSearchVal] = useState("")

    useEffect(() => {
        fetch("http://localhost:3001/favoriteMovies").then(r=>r.json()).then(data=>setMovies(data))
    },[])

    function handleSearchValue(searchVal) {
        setSearchVal(searchVal)
    }

    return (
        <div>
            <br />
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <Search handleSearchValue={handleSearchValue}/>
                    <button onClick={handleSort}> Sort AZ</button>
                    <div class="col-md-6">
                        <br />
                        <MovieList movies={movies} searchVal={searchVal} editMovie={helpEditMovie}/>
                    </div>
                    <br />
                    <div class="col-md-6">
                        <Route path={`${match.url}/:id`}><MovieDetail movies={movies} /></Route>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieBar;