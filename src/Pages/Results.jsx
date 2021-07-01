import React from 'react'
import Current from '../Current/Current'
import '../Banner/Banner.css'
import {useHistory} from 'react-router-dom'
function Results() {
    const history = useHistory()
    const clicked =()=>{
        history.push("/")
    }
    return (
        <div>
            <Current />
            <div className="container back" onClick={clicked}>
                <h4>Check Another</h4>
            </div>
        </div>
    )
}

export default Results
