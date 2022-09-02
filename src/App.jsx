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
					<p> { weather.name }, {weather.sys?.country} </p>
					<h1> {isunit ? weather.main?.temp : Math.floor((weather.main?.temp * 9/5) + 32)} <sup>{isunit ? "°C" : "°F"}</sup> </h1>
				</div>
				<div className='description'>
					<p>  "{weather.weather?.[0].description}" </p>
					<img  src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}.png`} alt="" />
				</div>
				<div className='cardDetails'>
					<div className='details'>
						<p>{weather.wind?.speed} m/s</p>
						<p>  wind speed  </p>
					</div>
					<div className='details'>
						<p>{weather.main?.humidity} %</p>
						<p>  humidity </p>
					</div>
					<div className='details'>
						<p>{weather.clouds?.all} % </p>
						<p> clouds </p>
					</div>
				</div>
			<button className='btn' onClick={convert} > <i class="fa-solid fa-screwdriver-wrench"></i> convet temp to {isunit ? "°F" : "°C"} </button>
		</div>
	</div>
	)
}

export default App
