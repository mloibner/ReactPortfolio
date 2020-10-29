import React from "react"


function MainPortfolio(){

    return (
              
        <div className="row">
    <div>

      <div className="col-sm-4 assignment1">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">JavaScript Quiz</h5>
            <img src="./assets/images/portfolio-pics/jsQuiz.png" className="image-portfolio"></img>
            <p className="card-text">Here you will find a Java Script Quiz with a timer, multiple choice questions, and a section to save your high scores. Test your knowledge!</p>
            <a target="_blank" href="https://mloibner.github.io/JS-Quiz/index.html" className="btn btn-primary">Take a look</a>
          </div>
        </div>
      </div>

      <div className="col-sm-4 game">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Here is my first scratch game</h5>
            <img src="./assets/images/portfolio-pics/scratchGame.png" className="image-portfolio"></img>
            <p className="card-text">This is a game of mouse shooter, where the cat needs to prevent the mouse touching the floor. It is a work in progress but I'm alsmost finished.</p>
            <a target="_blank" href="https://scratch.mit.edu/projects/391616825" className="btn btn-primary">Play my game</a>
          </div>
        </div>
      </div>

      <div className="col-sm-4 placeholder1">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Pack-My-Bags</h5>
            <img src="./assets/images/portfolio-pics/packMyBags.png" className="image-portfolio"></img>
            <p className="card-text">My first group project. Here we created an application which packs your bags for you before your holiday based on the weather forecast. Take a look!</p>
            <a target="_blank" href="https://mloibner.github.io/Pack-My-Bags/" className="btn btn-primary">Pack-My-Bags!</a>
        </div>
      </div>

    </div>
    </div>
    <br></br>
    <br></br>
    <div className="row">

      <div className="col-sm-4 assignment1">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Day Planner</h5>
            <img src="./assets/images/portfolio-pics/dayPlanner.png" className="image-portfolio"></img>
            <p className="card-text">Do you need a daily planner, something that is visual and saves your comments to your local storage? Have a look!</p>
            <a target="_blank" href="https://mloibner.github.io/Day-Planner/index.html" className="btn btn-primary">Plan your day</a>
          </div>
        </div>
      </div>

      <div className="col-sm-4 game">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Weather Dashboard</h5>
            <img src="./assets/images/portfolio-pics/weatherDashboard.png" className="image-portfolio"></img>
            <p className="card-text">This one is an application that can provide you the current weather, five day forecast, and UV index for anywhere in the world.</p>
            <a target="_blank" href="https://mloibner.github.io/Weather-Dashboard/" className="btn btn-primary">Check it out</a>
          </div>
        </div>
      </div>

      <div className="col-sm-4 placeholder1">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Final Project</h5>
            <img src="./assets/images/portfolio-pics/nailsOnTime.png" className="image-portfolio"></img>
            <p className="card-text">NailsOnTime is my final project, showcasing a full stack MERN application where you can book your nail appointment online and be notified when your appointment time is live.</p>
            <a target="_blank" href="https://nails-on-time.herokuapp.com" className="btn btn-primary">NailsOnTime!</a>
        </div>
      </div>

    </div>
    </div>
    </div>
    )
}

export default MainPortfolio;
