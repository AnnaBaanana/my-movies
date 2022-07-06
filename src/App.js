import {useState} from "react";
import {Route, Switch} from "react-router-dom";
import './App.css';
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import MovieBar from "./MovieBar"
import MovieForm from "./MovieForm";
import React from "react";



function App() {
  const [editMovie, setEditMovie] = useState({})

  function helpEditMovie(movie) {
    console.log("from app edit", movie)
    setEditMovie(movie)
  }

  function handleEditMovie() {
    setEditMovie({})
  }

  console.log("from app", editMovie)

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/movies/add"><MovieForm editMovie={editMovie} handleEditMovie={handleEditMovie}/></Route>
        <Route path="/movies"><MovieBar helpEditMovie={helpEditMovie}/></Route>
        <Route exact path="/"><HomePage /></Route>
      </Switch>
    </div>
  );
}

export default App;
