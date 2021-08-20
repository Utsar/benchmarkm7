import React from "react";
import { WeatherData } from "../Store/type";
import "../Weather/Weather.css";

interface WeatherProps {
  data: WeatherData;
}
function Weather({ data }: WeatherProps) {
  const fDegrees = (data.main.temp * 1.8 - 459.67).toFixed(1);
  const cDegrees = (data.main.temp - 273.15).toFixed(1);
  
  return (
<section>
      <div >
        <div >
          <h1 >
            {data.name} <span style={{fontSize:"18px"}}>({data.sys.country})</span>
          </h1>
          
          <div >
          <p>
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="icon representing weather condition"
            />
          </p>
          <h3>{data.weather[0].description}</h3>

          </div>
          <div >
            
            <div >
              {fDegrees}
              <sup>&#8457;</sup>{" "}
              <span style={{fontSize:"18px"}}>({cDegrees}
              <sup>&#8451;</sup>)</span>
            </div>
    
          </div>
        </div>
        
        
        <div className="wind-container">
          <h3>wind</h3>
          <p>{data.wind.speed} m/s</p>
        </div>
      </div>
  </section>
  );
}

export default Weather;