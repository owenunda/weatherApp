import React from 'react';
import useDataWeather from '../../hooks/useDataWeather';

const WeatherApp = () => {


    const {data: weather, useEffect, convert, isunit } = useDataWeather()

    useEffect


    return (
        <div className='card'>
		<h1	className='tittle'>Wheather app</h1>
			<div className='content'>
			
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
			<button className='btn' onClick={convert} > <i className="fa-solid fa-screwdriver-wrench"></i> convet temp to {isunit ? "°F" : "°C"} </button>
			</div>
		</div>
    );
};

export default WeatherApp;