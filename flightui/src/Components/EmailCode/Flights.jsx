import React from 'react'
import './Flights.css'

 const Flights = (props) => {
  return (
    <>
    <div className="outer-flight-div">
        <div className="flight-section" style={{backgroundColor:props.bgc}}>
            <h1>FLIGHTS AVAILABLE</h1>
            <p>Your first flight from <span>QHNQO7</span> to <span>AY1416</span> departs from <span>Delhi</span> at <span>19:25</span></p>
            <div className="flight-time">
                <div className="from">
                    <p>From</p>
                    <h5 className="date">19:25</h5>
                    <h5 className="time">10/08/2022</h5>
                </div>
                <div className="to">
                    <p>To</p>
                    <h5 className="date">20:45</h5>
                    <h5 className="time">10/08/2022</h5>

                </div>
            </div>
            <div className="flight-footer-section">
                <p>Flight Duration:1h 45min</p>
                <p>Travel Category: Economy</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Flights;