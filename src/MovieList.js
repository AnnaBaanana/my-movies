import {useEffect, useState} from "react";
import Movie from "./Movie"

function MovieList({movies, searchVal, editMovie}) {

    const movieList = movies.filter( movie => movie.title.toLowerCase().includes(searchVal.toLowerCase())).map( movie => 
    <Movie key={movie.id} movie={movie} handleEdit={editMovie} />)

    return (
        <div>
            {movieList}
        </div>
    )

}

export default MovieList;