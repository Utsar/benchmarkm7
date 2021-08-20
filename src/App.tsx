import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./Store";
import Search from "./Components/Search";
import Weather from "./Components/Weather";
import {getWeather} from "./Store/Actions/WeatherAction"

function App() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  
  useEffect(() =>{
dispatch(getWeather("London"))
  },[])
  
  return (
  <div className="App">
<Search title = "City"/>


<Weather data={weatherData}/>

  </div>
  );
}

export default App;