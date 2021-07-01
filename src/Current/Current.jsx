import React, { useState , useEffect } from 'react'
import axios from 'axios'
import './Current.css'
function Current() {

    const [current, setCurrent] = useState('')
    const [location, setLocation] = useState('')

   useEffect(() => {

    axios.get(`http://api.weatherapi.com/v1/current.json?key= 4efb7f4325a54450b3694453213006&q=${localStorage.getItem("location")}&aqi=no`).then((Response)=>{
        setCurrent(Response.data.current)
        setLocation(Response.data.location)
        
        
    }).catch((error)=>{
        alert(error.message)
    })
     
   }, [])
   
    return (
        <div className="Current">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ">
                        <div className="left">
                        <h1 className="display-3">{location ? location.name : ""}, IN</h1> <br /> <br />
                        <div className="left-outer">
                            <div className="innr text-center">
                                <img src={current ? current.condition.icon : ""} alt="image" width="100px" />
                                <h4> {current ? current.condition.text : ""}</h4>
                            </div>
                            <div className="innr text-center">
                               <div> <h1 className="display-1">{current ? current.temp_c : ""} </h1></div>
                              
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="right">
                            <div className="outer">
                                <div className="inner">
                                 {current ? current.humidity : ""} <br />
                                 Humidity
                                </div>
                                <div className="inner">
                                {current ? current.wind_mph : ""} mph<br />
                                 Wind
                                </div>
                                <div className="inner">
                                {current ? current.cloud : ""} <br />
                                 Cloud
                                </div>
                            </div> 
                            <div className="outer">
                                <div className="inner">
                                {current ? current.uv : ""} <br />
                                 UV
                                </div>
                                <div className="inner">
                                {current ? current.pressure_mb : ""} <br />
                                 Pressure
                                </div>
                                <div className="inner">
                                {current ? current.wind_dir : ""} <br />
                                 Wind <br />
                                 Direction
                                </div>
                            </div>       
                        </div>
                    </div>
                </div>
            </div>



            
        </div>
    )
}

export default Current
