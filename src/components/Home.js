import React from 'react'
import { Link } from 'react-router-dom'
import image from './png.jpg'

const Home = () => {
    return (
        <div className="container">
            <div className='d-flex'>
                <div style={{ marginTop: "140px" }} className="col-md-6">
                    <h2 style={{ color: "dodgerblue", marginBottom: "40px" }}>Know the Live Weather Now</h2>
                    <Link to="/weather" className='btn btn-primary'>Search Now</Link>
                </div>
                <div className="col-md-6">
                    <img src={image} alt="loading" style={{ height: "600px" }} />
                </div>
            </div>
        </div>
    )
}

export default Home