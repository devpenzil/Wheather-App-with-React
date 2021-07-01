import React from 'react'
import './Banner.css'
function Banner() {
    return (
        <div>
            <div className="container text-center Banner">
                <h3>Welcome</h3>
               <h1 className="display-1">Wheather App</h1>
               <h4>Made with <a href="https://reactjs.org/">React</a></h4>
               <h4>Inspiration from <a href="https://rawfour.github.io/weather-app-react/">here</a> </h4>
               <h4>If you like this <a href="https://github.com/ajoalex012/Wheather-App-with-React">Star</a> on GitHub</h4>
            </div>
        </div>
    )
}

export default Banner
