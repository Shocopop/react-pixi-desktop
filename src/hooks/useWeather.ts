import React, { useState, useEffect } from 'react';
import useFetch from 'use-http';

interface weatherType {
  weather: Array<{
    id: string;
    main: string;
    description: string;
    icon: string;
  }>;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  clouds: { all: number };
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
  };
  name: string;
}

const useWeather = function() {
  const [weather, setWeather] = useState<weatherType>();
  const { get, post, response, loading, error } = useFetch('https://api.openweathermap.org/data/2.5');

  useEffect(() => {
    async function getWeatherAtPosition(coords: Coordinates): Promise<weatherType> {
      return await get(`/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${'a5dbe43d49ec7bfd96b992f2c030571a'}&units=metric`);
    }
    navigator.geolocation.getCurrentPosition(async function(pos) {
      console.log('Latitude is :', pos.coords.latitude);
      console.log('Longitude is :', pos.coords.longitude);
      const msg = await getWeatherAtPosition(pos.coords);
      setWeather(msg);
      console.log(msg);
    });
  }, [get, response]);

  return weather;
};
export default useWeather;
