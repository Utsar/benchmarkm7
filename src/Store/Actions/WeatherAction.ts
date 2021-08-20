import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import {
  WeatherAction,
  WeatherData,

  GET_WEATHER,

} from "../type";

export const getWeather = (
  city: string
): ThunkAction<void, RootState, null, WeatherAction> => {
  return async dispatch => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      );
     
      const resData: WeatherData = await res.json();
      dispatch({
        type: GET_WEATHER,
        payload: resData,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
