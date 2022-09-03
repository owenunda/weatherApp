import { useState, useEffect, Suspense, lazy } from 'react'
import './App.css'
import Loader from './assets/components/Loader'
const WeatherApp = lazy(() => import("./assets/components/WeatherApp"))
function App() {


	return (
	<div className="App">
		
		<Suspense fallback={<Loader/>}>
		<WeatherApp/>
		</Suspense>
	</div>
	)
}

export default App
