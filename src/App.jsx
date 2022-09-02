import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {

			const [weather, setWeather] = useState({})



         useEffect(() =>{
				navigator.geolocation.getCurrentPosition(success);

				function success(pos) {
					const crd = pos.coords;
					axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&units=metric&appid=4ae3af738b464c61461860d6642ebfb3`)
					.then(res => setWeather(res.data))
				}	
         }, [])

			const [isunit, setIsUnit] = useState(true)
			const convert = () =>{
				setIsUnit(!isunit)
			}

console.log(weather)


	return (
   	<div className="App">
			<div className='card'>
				<h1	className='tittle'>Wheather app</h1>
				<div className='card-imgInfo'>
				<div className='temp'>
					<h1> {isunit ? weather.main?.temp : Math.floor((weather.main?.temp * 9/5) + 32)} </h1>
					<span > {isunit ? "°C" : "°F"} </span>
				</div>
					<img className='img-weather' src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}.png`} alt="" />
				</div>
					<h2> { weather.name }, {weather.sys?.country} </h2>
					<hr />
					<p>  "{weather.weather?.[0].description}" </p>
					<img  src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}.png`} alt="" />
					<p> <i class="fa-sharp fa-solid fa-wind"></i> wind speed: {weather.wind?.speed} m/s </p>
					<p> <i class="fa-solid fa-temperature-three-quarters"></i> humidity: {weather.main?.humidity} % </p>
					<p> <i class="fa-solid fa-cloud"></i> clouds: {weather.clouds?.all} % </p>
			</div>
			<button className='btn' onClick={convert} > <i class="fa-solid fa-screwdriver-wrench"></i> convet temp to {isunit ? "°F" : "°C"} </button>
   	</div>
	)
}

export default App
