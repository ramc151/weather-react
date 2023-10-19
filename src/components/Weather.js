import React, { useEffect, useState } from 'react'
import './style.css'

const Weather = () => {
    document.title = "Weather App"
    const [main, setMain] = useState([])
    var mood = "";
    const [other, setOther] = useState([])
    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("Indore")
    let tempMood = main.main;
    mood = tempMood;
    useEffect(() => {
        const updateweb = async () => {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=47016780d8bf05e337b59391696a8242`;
            let data = await fetch(url);
            let parsedata = await data.json();
            setCity(parsedata.main)
            setOther(parsedata)
            setMain(parsedata.weather[0])
        }
        updateweb();
    }, [search])

    if (tempMood == "Clear") {
        mood =
            <i className='fas fa-sun' style={{ color: "#eccc68" }}></i>
    } else if (tempMood == "Clouds") {
        mood =
            <i className='fas fa-cloud' style={{ color: "#f1f2f6" }}></i>
    } else if (tempMood == "Rain") {
        mood =
            <i className='fas fa-cloud-rain' style={{ color: "#a4b0be" }}></i>
    } else {
        mood =
            <i className='fas fa-sun' style={{ color: "#eccc68" }}></i>
    }
    return (
        <div className="container">
            <h3 style={{ textAlign: "center", margin: "50px" }}>Live Weather App</h3>
            <div className="box">
                <div className='input'>
                    <input type="search" className='inputField' onChange={(event) => { setSearch(event.target.value) }} value={search} />
                </div>
                {
                    !city ? (
                        <h3 style={{ textAlign: "center" }}>No city found</h3>
                    ) :
                        (
                            <div style={{ textAlign: "center", marginTop: "60px" }}>
                                <h3>
                                    {other.name} {other.sys.country}
                                </h3>
                                <h4>{city.temp} °C</h4>
                                <p>{city.temp_max} max | {city.temp_min} min</p>
                                <h4 style={{ fontSize: "80px" }}>{mood}</h4>
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export default Weather