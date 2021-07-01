import React, { useState } from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import './Search.css'
function Search() {
   const [location, setLocation] = useState("")
   const history = useHistory()
   const clicked =()=>{
      localStorage.setItem("location",location)
      console.log(localStorage)
      axios.get(`http://api.weatherapi.com/v1/current.json?key= 4efb7f4325a54450b3694453213006&q=${localStorage.getItem("location")}&aqi=no`).then((Response)=>{
               
        history.push("/Result")
    }).catch((error)=>{
        alert(error.message)
    })
   }
    return (
        <div className="Search">
            <div className="SearchBox">
                <input type="text" className="search" onChange={(e)=>setLocation(e.target.value)} name="search" id="Search" placeholder="Search by your city name ......" />
                <h2><i class="fas fa-search-location" onClick={clicked}></i></h2>
            </div>
        </div>
    )
}

export default Search
