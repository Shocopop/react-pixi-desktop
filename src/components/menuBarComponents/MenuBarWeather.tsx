import React, { useState, useEffect } from 'react';
import useWeather from '../../hooks/useWeather';
import { StyledMenuBarWidget, VerticallyCenteredSpan, DropDown } from '../../styled/StyledComponents';

export default function MenuBarWeather() {
  const weather = useWeather();
  if (weather)
    return (
      <StyledMenuBarWidget>
        <DropDown.Main style={{ height: '100%' }}>
          <VerticallyCenteredSpan style={{ height: '100%' }}>
            <img
              style={{ height: '100%' }}
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            ></img>
            {`${Math.round(weather.main.temp)} C°`}
          </VerticallyCenteredSpan>
          <DropDown.Content>
            <div>
              <div>
                {weather.name}, {weather.sys.country}
              </div>
              <img
                style={{ maxHeight: '100%' }}
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              ></img>
              <div>{`${Math.round(weather.main.temp)} C°, ${weather.weather[0].main}`}</div>
            </div>
            <div style={{ marginTop: '15px' }}>
              <table>
                <tbody>
                  <tr>
                    <td>Feels like</td>
                    <td className="align-right"> {Math.round(weather.main.feels_like)}C°</td>
                  </tr>
                  <tr>
                    <td>Pressure</td>
                    <td className="align-right">{weather.main.pressure}</td>
                  </tr>
                  <tr>
                    <td>Humidity</td>
                    <td className="align-right">{weather.main.humidity}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DropDown.Content>
        </DropDown.Main>
      </StyledMenuBarWidget>
    );
  return (
    <StyledMenuBarWidget className="dropdown">
      <VerticallyCenteredSpan style={{ height: '100%' }}>Turn on GeoLocation</VerticallyCenteredSpan>
    </StyledMenuBarWidget>
  );
}
