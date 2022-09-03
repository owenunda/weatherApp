import React, {useEffect, useState} from 'react';
import axios from 'axios';
const useDataWeather = () => {

    const [data, setData] = useState({})



    useEffect(() =>{
            navigator.geolocation.getCurrentPosition(success);

            function success(pos) {
                const crd = pos.coords;
                axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&units=metric&appid=4ae3af738b464c61461860d6642ebfb3`)
                .then(res => setData(res.data))
            }	
    }, [])

        const [isunit, setIsUnit] = useState(true)

        // la funcion conver me va a converti a negativo o
        // positivo la vareable isunit
        const convert = () =>{
            setIsUnit(!isunit)
        }





    return {data, useEffect, convert, isunit }
};

export default useDataWeather;