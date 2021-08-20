import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {getWeather} from "../Store/Actions/WeatherAction"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCloudSun} from "@fortawesome/free-solid-svg-icons"

interface SearchProps {
  title: string;
}
function Search({ title }: SearchProps) {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getWeather(city));
    setCity("");
  };
  return (
<div >
<div >
<form onSubmit={handleSubmit}>
      <div >
        <input
              type="text"
              placeholder="name of city"
              value={city}
              onChange={handleChange}
              style={{fontSize: "20px"}}
            />       
        <p >
          <button >
          <FontAwesomeIcon icon={faCloudSun}  style={{marginRight:"8px", color:"grey"}}/> Get Weather
          </button>
        </p>
        </div>
        </form>
      </div>
</div>
  );
}

export default Search;