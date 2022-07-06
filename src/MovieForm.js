import {useHistory} from "react-router-dom";
import {useState} from "react";

function MovieForm({editMovie, handleEditMovie}) {

    const history = useHistory();

    const defaultForm = {
            title: "",
            year: "",
            image_url: "",
            genre: "",
            duration: "",
            rated: ""
    }

    console.log("this is edit Movie:", editMovie)

    const [formData, setFormData] = useState(editMovie? editMovie : defaultForm);

    function handleFormChange(e) {
        const newFormData = {...formData, [e.target.name]: e.target.value}
        setFormData(newFormData)
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (editMovie.title.length>0) {
            fetch(`http://localhost:3001/favoriteMovies/${editMovie.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData)}).then(r => r.json()).then(data => {
            setFormData({
                title: "",
                year: "",
                image_url: "",
                genre: "",
                duration: "",
                rated: ""})
            alert("Thank you! Your movie was updated!")
            history.push("/movies")
            handleEditMovie()
            })
        } else {
            //if (formData.title.length>0) {
            fetch("http://localhost:3001/favoriteMovies", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData)}).then(r => r.json()).then(data => {
            setFormData({
                title: "",
                year: "",
                image_url: "",
                genre: "",
                duration: "",
                rated: ""})
            alert("Thank you! Your movie was submitted!")
            history.push("/movies")
            })
            //} else {alert("Enter Valid Movie Title")}
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="title">Movie Title</label>
                    <input type="text" value={formData.title} name="title" class="form-control" id="title" placeholder="Enter movie title" onChange={handleFormChange}/>
                </div>
                <div class="form-group">
                    <label for="year">Release Year</label>
                    <input type="text" value={formData.year} name="year" class="form-control" id="year" placeholder="Enter release year" onChange={handleFormChange}/>
                </div>
                <div class="form-group">
                    <label for="image_url">Image URL</label>
                    <input type="text" value={formData.image_url} name="image_url" class="form-control" id="image_url" placeholder="Provide image url" onChange={handleFormChange}/>
                </div>
                <div class="form-group">
                    <label for="duration">Duration</label>
                    <input type="text" value={formData.duration} name="duration" class="form-control" id="duration" placeholder="Provide duration in minutes" onChange={handleFormChange}/>
                </div>
                <div class="form-group">
                    <label for="genre">Genre</label>
                    <select name="genre" value={formData.genre} class="form-control" onChange={handleFormChange}>
                        <option value="select">Select Genre</option>
                        <option value="Drama">Drama</option>
                        <option value="Romance">Romance</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Horror">Horror</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Kids">Kids</option>
                    </select>
                </div>
                <div class="form-group">
                <label for="rated">Rated</label>
                    <select name="rated" value={formData.rated} class="form-control" onChange={handleFormChange}>Rating
                        <option value="select">Select Rating</option>
                        <option value="G">G</option>
                        <option value="PG">PG</option>
                        <option value="PG13">PG-13</option>
                        <option value="R">R</option>
                        <option value="NC17">NC-17</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
    
}

export default MovieForm;