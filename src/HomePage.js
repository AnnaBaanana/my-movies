import {useHistory} from "react-router-dom";

function HomePage() {
    const history = useHistory();

    function handleHomeClick() {
        history.push("/movies")
    }

        return (<div className="welcome" onClick={handleHomeClick}>
        <div className="title">
          <br />
          <br /><br /><br /><br />
          <strong><h2 style={{backgroundColor: "white"}}>Welcome to the MovieBar</h2></strong>
          <strong style={{backgroundColor: "white"}}>Browse great movie suggestions and add your own<br /></strong>
          <strong style={{backgroundColor: "white"}}>Click to Start!<br /><br /></strong><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br />
          <br />
        </div>
      </div>)    
    
    }

export default HomePage;